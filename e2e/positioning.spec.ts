import { expect, test } from "./fixtures"

test("Selected Work and the merged Expertise follow the Hero", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto("/")

  await expect(page.locator("#hero")).toHaveJSProperty(
    "nextElementSibling.id",
    "work",
  )
  await expect(page.locator("#work")).toHaveJSProperty(
    "nextElementSibling.id",
    "expertise",
  )
  await expect(page.locator("#expertise")).toHaveJSProperty(
    "nextElementSibling.id",
    "home-profile",
  )
})

test("Merged expertise remains readable without mobile horizontal overflow", async ({
  page,
}) => {
  await page.setViewportSize({ width: 375, height: 812 })
  await page.goto("/#expertise")

  await expect(
    page.locator("#expertise [data-expertise-grid] > li"),
  ).toHaveCount(3)
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true)
})

for (const { width, columns } of [
  { width: 375, columns: 1 },
  { width: 768, columns: 3 },
  { width: 1024, columns: 3 },
  { width: 1440, columns: 3 },
]) {
  test(`Expertise uses ${columns} column(s) at ${width}px without overflow`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 900 })
    await page.goto("/#expertise")

    const items = page.locator("#expertise [data-expertise-grid] > li")
    await expect(items).toHaveCount(3)
    expect(
      await items.evaluateAll(
        (elements) =>
          new Set(
            elements.map((element) =>
              Math.round(element.getBoundingClientRect().left),
            ),
          ).size,
      ),
    ).toBe(columns)
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true)
  })
}

test("Expertise keeps its translated content outside the Hero", async ({
  page,
}) => {
  await page.goto("/")

  await expect(page.locator("#hero #expertise")).toHaveCount(0)
  await expect(
    page.locator("#expertise").getByRole("heading", {
      name: "Expertise backed by delivered work",
    }),
  ).toBeVisible()

  await page
    .getByRole("group")
    .getByRole("button")
    .filter({ hasText: "FR" })
    .click()
  await expect(
    page.locator("#expertise").getByRole("heading", {
      name: "Des expertises appuyées par des réalisations concrètes",
    }),
  ).toBeVisible()
})
