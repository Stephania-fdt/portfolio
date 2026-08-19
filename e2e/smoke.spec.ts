import { expect, test } from "./fixtures"

test("home page loads and renders the hero + nav", async ({ page }) => {
  await page.goto("/")

  await expect(page).toHaveTitle(/Stéphania/)
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible()
  await expect(page.getByRole("navigation", { name: "Primary" })).toBeVisible()

  // Three beats only: Hero, Selected Work, a closing prompt — no
  // Expertise, Home Profile or full Contact section on the Homepage
  // anymore (Contact is its own route, `/contact`).
  await expect(page.locator("#work")).toBeVisible()
  await expect(
    page.locator(
      "#positioning, #principles, #process, #thoughts, #expertise, #home-profile, #contact",
    ),
  ).toHaveCount(0)
})
