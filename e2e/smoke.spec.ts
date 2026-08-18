import { expect, test } from "./fixtures"

test("home page loads and renders the hero + nav", async ({ page }) => {
  await page.goto("/")

  await expect(page).toHaveTitle(/Stéphania/)
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible()
  await expect(page.getByRole("navigation", { name: "Primary" })).toBeVisible()

  await expect(page.locator("#work")).toBeVisible()
  await expect(page.locator("#expertise")).toBeVisible()
  await expect(page.locator("#home-profile")).toBeVisible()
  await expect(page.locator("#contact")).toBeVisible()
  await expect(
    page.locator("#positioning, #principles, #process, #thoughts"),
  ).toHaveCount(0)
})
