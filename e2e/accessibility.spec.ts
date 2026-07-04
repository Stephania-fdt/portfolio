import AxeBuilder from "@axe-core/playwright"
import { expect, test } from "./fixtures"

// Scoped to WCAG A/AA rules only — axe's "best practice" rules (e.g.
// landmark/region coverage) are useful during active development but
// aren't compliance failures, and would make this smoke test flaky
// against work-in-progress sections.
const WCAG_TAGS = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"]

test("home page has no automatically detectable WCAG A/AA violations", async ({
  page,
}) => {
  await page.goto("/")

  const results = await new AxeBuilder({ page }).withTags(WCAG_TAGS).analyze()

  expect(results.violations, JSON.stringify(results.violations, null, 2)).toEqual([])
})
