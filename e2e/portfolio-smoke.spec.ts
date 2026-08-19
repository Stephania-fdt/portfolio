import AxeBuilder from "@axe-core/playwright"

import { expect, test } from "./fixtures"

const EXISTING_CHAPTERS = [
  "Overview",
  "The Challenge",
  "Approach",
  "Key Design Decisions",
  "Designing & Building",
  "Iterations",
  "Final Experience",
  "Outcome & Learnings",
]

test("Portfolio keeps its eight chapters and switches language via the header button", async ({
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
      name: "From decision to production code.",
    }),
  ).toBeAttached()

  await page
    .getByRole("button", { name: "Switch site language to French" })
    .click()
  await expect(
    page.getByRole("heading", { level: 2, name: "Résultat & enseignements" }),
  ).toBeAttached()
  await expect(
    page.getByRole("heading", {
      level: 3,
      name: "De la décision au code de production.",
    }),
  ).toBeAttached()
})

for (const width of [375, 768, 1440]) {
  test(`Portfolio does not overflow at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 })
    await page.goto("/work/portfolio")
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true)
  })
}

test("Portfolio has no detectable WCAG A/AA violations", async ({ page }) => {
  await page.goto("/work/portfolio")
  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
    .analyze()
  expect(
    results.violations,
    JSON.stringify(results.violations, null, 2),
  ).toEqual([])
})
