import { expect, test } from "./fixtures"

test("Design Systems tabs switch with keyboard controls", async ({ page }) => {
  await page.goto("/#principles")

  const tablist = page.getByRole("tablist", { name: "Specimen view" })
  const tokens = tablist.getByRole("tab", { name: "Tokens" })
  const components = tablist.getByRole("tab", { name: "Components" })
  const grid = tablist.getByRole("tab", { name: "Grid" })

  await expect(tokens).toHaveAttribute("aria-selected", "true")
  await tokens.focus()
  await page.keyboard.press("ArrowRight")

  await expect(components).toHaveAttribute("aria-selected", "true")
  await expect(page.getByRole("tabpanel").getByText(/Buttons/)).toBeVisible()

  await page.keyboard.press("End")
  await expect(grid).toHaveAttribute("aria-selected", "true")
  await expect(page.getByRole("tabpanel").getByText("col 01")).toBeVisible()
})

for (const width of [375, 390, 768, 1280, 1440]) {
  test(`Design Systems does not overflow at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 })
    await page.goto("/#principles")

    for (const name of ["Tokens", "Components", "Grid"]) {
      await page
        .getByRole("tablist", { name: "Specimen view" })
        .getByRole("tab", { name })
        .click()
      const hasNoHorizontalOverflow = await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      )
      expect(hasNoHorizontalOverflow).toBe(true)
    }
  })
}
