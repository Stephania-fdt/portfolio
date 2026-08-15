import { expect, test } from "./fixtures"

test("Expertise bridges the Hero and Selected Work while Positioning remains", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto("/")

  await expect(page.locator("#hero")).toHaveJSProperty(
    "nextElementSibling.id",
    "expertise",
  )
  await expect(page.locator("#expertise")).toHaveJSProperty(
    "nextElementSibling.id",
    "work",
  )
  await expect(page.locator("#work")).toHaveJSProperty(
    "nextElementSibling.id",
    "positioning",
  )

  const section = page.locator("#positioning")
  await expect(
    section.getByRole("heading", { name: "Positioning" }),
  ).toBeVisible()
  await expect(
    section.getByText(
      "A product designer who builds the system, not just the screen — and the accessibility standard that keeps it honest.",
    ),
  ).toBeVisible()

  const metrics = section.locator("[data-positioning-metrics] > article")
  await expect(metrics).toHaveCount(4)
  await expect(metrics.nth(0)).toContainText("2023")
  await expect(metrics.nth(1)).toContainText("WCAG")
  await expect(metrics.nth(2)).toContainText("05")
  await expect(metrics.nth(3)).toContainText("AI")

  const columnCount = await metrics.evaluateAll(
    (elements) =>
      new Set(
        elements.map((element) =>
          Math.round(element.getBoundingClientRect().left),
        ),
      ).size,
  )
  expect(columnCount).toBe(2)
})

test("Positioning remains readable without mobile horizontal overflow", async ({
  page,
}) => {
  await page.setViewportSize({ width: 375, height: 812 })
  await page.goto("/#positioning")

  await expect(
    page.locator("#positioning [data-positioning-metrics] > article"),
  ).toHaveCount(4)
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true)
})

for (const { width, columns } of [
  { width: 375, columns: 1 },
  { width: 768, columns: 2 },
  { width: 1024, columns: 4 },
  { width: 1440, columns: 4 },
]) {
  test(`Expertise uses ${columns} column(s) at ${width}px without overflow`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 900 })
    await page.goto("/#expertise")

    const items = page.locator("#expertise [data-expertise-grid] > li")
    await expect(items).toHaveCount(4)
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
      name: "What I bring to digital products",
    }),
  ).toBeVisible()

  await page
    .getByRole("group")
    .getByRole("button")
    .filter({ hasText: "FR" })
    .click()
  await expect(
    page.locator("#expertise").getByRole("heading", {
      name: "Ce que j’apporte aux produits numériques",
    }),
  ).toBeVisible()
})
