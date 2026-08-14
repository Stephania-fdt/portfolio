import AxeBuilder from "@axe-core/playwright"

import { expect, test } from "./fixtures"

const WCAG_TAGS = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"]

test("experience route has its own title, active navigation and a single H1", async ({
  page,
}) => {
  await page.goto("/experience")

  await expect(page).toHaveTitle(/Experience — Stéphania Fordant/)
  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "Experience built across products, systems and people.",
    }),
  ).toBeVisible()
  await expect(
    page.getByRole("navigation", { name: "Primary" }).getByText("Experience"),
  ).toHaveAttribute("aria-current", "location")
  await expect(page.locator("h1")).toHaveCount(1)
})

test("experience page has no automatically detectable WCAG A/AA violations", async ({
  page,
}) => {
  await page.goto("/experience")

  const results = await new AxeBuilder({ page }).withTags(WCAG_TAGS).analyze()

  expect(
    results.violations,
    JSON.stringify(results.violations, null, 2),
  ).toEqual([])
})

test("mobile INDEX marks Experience as the current location", async ({
  page,
}) => {
  await page.setViewportSize({ width: 375, height: 812 })
  await page.goto("/experience")
  await page.getByRole("button", { name: "Open navigation" }).click()

  await expect(
    page
      .getByRole("navigation", { name: "Index" })
      .getByRole("link", { name: "EXPERIENCE" }),
  ).toHaveAttribute("aria-current", "location")
})

for (const width of [320, 375, 390, 430, 768, 1024, 1440]) {
  test(`experience does not overflow horizontally at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 900 })
    await page.goto("/experience")

    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth,
    )
    expect(overflow).toBe(false)
  })
}
