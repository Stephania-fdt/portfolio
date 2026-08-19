import { expect, test } from "./fixtures"

test("Home keeps the standalone Process chapter out of the page flow", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto("/")

  await expect(page.locator("#process")).toHaveCount(0)
  await expect(page.locator("#work")).toHaveJSProperty(
    "nextElementSibling.id",
    "closing",
  )
})

test("Home remains compact without Process on mobile", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 })
  await page.goto("/")

  await expect(page.locator("#process")).toHaveCount(0)

  const noHorizontalOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth <= window.innerWidth,
  )
  expect(noHorizontalOverflow).toBe(true)
})
