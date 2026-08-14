import { expect, test } from "./fixtures"

test("Harmony presents a complete evidence-based product design case study", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto("/work/harmony")

  await expect(
    page.getByRole("heading", { level: 1, name: "Harmony" }),
  ).toBeVisible()

  for (const heading of [
    "Overview",
    "The challenge",
    "Research & discovery",
    "Understanding the user",
    "Information architecture",
    "UX design",
    "Testing & validation",
    "My role",
    "The process in brief",
  ]) {
    await expect(
      page.getByRole("heading", { level: 2, name: heading }),
    ).toBeVisible()
  }

  await expect(page.locator("article img")).toHaveCount(6)
  const facts = page.locator("[data-case-study-facts]")
  await expect(facts.getByText("06", { exact: true })).toBeVisible()
  await expect(facts.getByText("04", { exact: true })).toBeVisible()
  await expect(
    page.getByText("Google Forms", { exact: false }).first(),
  ).toBeVisible()
  await expect(
    page.getByText("Google Optimize", { exact: false }).first(),
  ).toBeVisible()
  await expect(page.getByText("Hotjar", { exact: false }).first()).toBeVisible()
  await expect(page.locator("[data-case-study-process] > li")).toHaveCount(5)
  await expect(page.locator("[data-case-study-process]")).toContainText(
    "Discover",
  )
  await expect(page.locator("[data-case-study-process]")).toContainText(
    "Validate",
  )
})

for (const width of [375, 768, 1440]) {
  test(`Harmony does not overflow at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 })
    await page.goto("/work/harmony")

    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true)
  })
}
