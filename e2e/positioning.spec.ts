import AxeBuilder from "@axe-core/playwright"
import { expect, test } from "./fixtures"

test("Hero, Selected Work and the closing prompt are the Homepage's only three beats", async ({
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
    "closing",
  )
  await expect(
    page.locator("#closing").locator("xpath=following-sibling::*"),
  ).toHaveCount(0)
})

test("Expertise and Home Profile no longer render on the Homepage", async ({
  page,
}) => {
  await page.goto("/")

  await expect(page.locator("#expertise")).toHaveCount(0)
  await expect(page.locator("#home-profile")).toHaveCount(0)
})

for (const width of [375, 768, 1440]) {
  test(`Homepage stays compact and overflow-free at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 900 })
    await page.goto("/")

    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true)
  })
}

test("Hero CTAs are keyboard reachable with visible focus, in order", async ({
  page,
}) => {
  await page.goto("/")

  const primary = page.getByRole("link", { name: "View my work" })
  const secondary = page
    .locator("#hero")
    .getByRole("link", { name: "Let's talk" })

  await primary.focus()
  await expect(primary).toBeFocused()
  expect(
    await primary.evaluate((element) => getComputedStyle(element).outlineWidth),
  ).not.toBe("0px")

  await page.keyboard.press("Tab")
  await expect(secondary).toBeFocused()
  expect(
    await secondary.evaluate(
      (element) => getComputedStyle(element).outlineWidth,
    ),
  ).not.toBe("0px")
})

test("Hero has no detectable WCAG A/AA violations", async ({ page }) => {
  await page.goto("/")
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible()

  const results = await new AxeBuilder({ page })
    .include("#hero")
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
    .analyze()

  expect(
    results.violations,
    JSON.stringify(results.violations, null, 2),
  ).toEqual([])
})

test("Hero survives 200% zoom without horizontal overflow or hidden CTAs", async ({
  page,
}) => {
  await page.setViewportSize({ width: 720, height: 450 })
  await page.goto("/")

  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth + 1,
    ),
  ).toBe(true)
  await expect(page.getByRole("link", { name: "View my work" })).toBeVisible()
  await expect(
    page.locator("#hero").getByRole("link", { name: "Let's talk" }),
  ).toBeVisible()
})

test("Selected Work is already perceptible below the Hero at 1440px, without scrolling", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto("/")

  const heroHeight = await page
    .locator("#hero")
    .evaluate((element) => element.getBoundingClientRect().height)
  expect(heroHeight).toBeLessThan(900)

  const workTop = await page
    .locator("#work")
    .evaluate((element) => element.getBoundingClientRect().top)
  expect(workTop).toBeLessThan(900)
})
