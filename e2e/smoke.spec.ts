import { expect, test } from "@playwright/test"

test("home page loads and renders the hero + nav", async ({ page }) => {
  await page.goto("/")

  await expect(page).toHaveTitle(/Portfolio/)
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible()
  await expect(page.getByRole("navigation", { name: "Primary" })).toBeVisible()

  await expect(page).toHaveScreenshot("home.png", { fullPage: true })
})
