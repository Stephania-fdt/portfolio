import { expect, test } from "./fixtures"

test("Positioning follows the Hero and precedes Selected Work", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto("/")

  await expect(page.locator("#hero")).toHaveJSProperty(
    "nextElementSibling.id",
    "positioning",
  )
  await expect(page.locator("#positioning")).toHaveJSProperty(
    "nextElementSibling.id",
    "work",
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
