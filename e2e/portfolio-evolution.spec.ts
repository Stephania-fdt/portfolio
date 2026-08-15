import AxeBuilder from "@axe-core/playwright"

import { expect, test } from "./fixtures"

const EXISTING_CHAPTERS = [
  "Objectives",
  "Process",
  "Information Architecture",
  "Design System",
  "Accessibility",
  "Responsive Design",
  "Testing & Validation",
  "Iteration",
]

test("Portfolio keeps its existing chapters and presents the product evolution", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto("/work/portfolio")

  await expect(
    page.getByRole("heading", { level: 1, name: "Stéphania — Portfolio" }),
  ).toBeVisible()

  for (const chapter of EXISTING_CHAPTERS) {
    await expect(
      page.getByRole("heading", { level: 2, name: chapter }),
    ).toBeAttached()
  }

  await expect(
    page.getByRole("heading", {
      level: 3,
      name: "From portfolio to personal product",
    }),
  ).toBeAttached()
  await expect(
    page.getByRole("heading", { level: 2, name: "What changed" }),
  ).toBeAttached()
  await expect(
    page.getByRole("heading", {
      level: 3,
      name: /portfolio designed as a coherent system/i,
    }),
  ).toBeAttached()

  await page
    .getByRole("button", { name: "Switch site language to French" })
    .click()
  await expect(
    page.getByRole("heading", {
      level: 3,
      name: "Du portfolio au produit personnel",
    }),
  ).toBeAttached()
  await expect(
    page.getByRole("heading", { level: 2, name: "Ce qui a évolué" }),
  ).toBeAttached()
  await expect(
    page.getByRole("heading", {
      level: 3,
      name: "L’IA comme partenaire de design et de développement",
    }),
  ).toBeAttached()
})

for (const width of [375, 768, 1440]) {
  test(`Portfolio evolution does not overflow at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 900 })
    await page.goto("/work/portfolio")
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true)
  })
}

test("Portfolio evolution has no detectable WCAG A/AA violations", async ({
  page,
}) => {
  await page.goto("/work/portfolio")
  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
    .analyze()
  expect(
    results.violations,
    JSON.stringify(results.violations, null, 2),
  ).toEqual([])
})
