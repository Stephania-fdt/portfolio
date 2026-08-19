import AxeBuilder from "@axe-core/playwright"

import { expect, test } from "./fixtures"

const WCAG_TAGS = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"]

test("experience route has its own title, active navigation and a single H1", async ({
  page,
}) => {
  await page.goto("/experience")

  await expect(page).toHaveTitle(
    "Product Design Experience | Stéphania Fordant",
  )
  await expect(
    page.getByRole("heading", {
      level: 1,
      name: "Six years of Product Design, taking on more systems, more accessibility and more responsibility.",
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

test("Experience is five compact beats — no philosophy quote, no beyond aside, no trailing Contact section", async ({
  page,
}) => {
  await page.goto("/experience")
  const article = page.locator("article")

  await expect(article.getByText("Professional Experience")).toBeVisible()
  await expect(article.getByText("Education & Certifications")).toBeVisible()
  await expect(
    article.getByRole("heading", { level: 2, name: "Skills" }),
  ).toBeVisible()
  await expect(article.getByText("Want the complete version?")).toBeVisible()

  await expect(
    article.getByText("Design is rarely a solo discipline"),
  ).toHaveCount(0)
  await expect(article.getByText("Beyond project delivery")).toHaveCount(0)
  await expect(article.locator("#contact")).toHaveCount(0)
  await expect(
    article.getByRole("link", { name: /connect on linkedin/i }),
  ).toHaveCount(0)
})

test("Experience merges the SPF role into one continuous entry, matching the CV", async ({
  page,
}) => {
  await page.goto("/experience")
  const article = page.locator("article")

  await expect(
    article.getByRole("heading", { level: 3, name: "IT Product Designer" }),
  ).toHaveCount(1)
  await expect(article.getByText("April 2023 — Present")).toBeVisible()
  await expect(
    article.getByText(
      "Continuous engagement — staffed via Cream Consulting, then eGov Select",
    ),
  ).toBeVisible()
  await expect(
    article.getByText("Workshop participation grew 20% within six months."),
  ).toBeVisible()
  await expect(article.getByText(/co-founded UX Tribe/)).toBeVisible()
})

test("Experience uses the real CV job titles for WellPack and Femmes d’Influence", async ({
  page,
}) => {
  await page.goto("/experience")
  const article = page.locator("article")

  await expect(
    article.getByRole("heading", {
      level: 3,
      name: "UX Designer / Marketing Project Manager",
    }),
  ).toBeVisible()
  await expect(
    article.getByText(
      "The standardised UI Kit cut production time from four days to two.",
    ),
  ).toBeVisible()

  await expect(
    article.getByRole("heading", {
      level: 3,
      name: "UI Designer / Social Media Manager",
    }),
  ).toBeVisible()
  await expect(
    article.getByText(
      "Contributed to acquiring 330,000 new followers and a 13% increase in loyal users.",
    ),
  ).toBeVisible()
})

test("École 42 appears once, under Certifications, not duplicated in Education", async ({
  page,
}) => {
  await page.goto("/experience")
  const article = page.locator("article")

  await expect(article.getByText("École 42")).toHaveCount(1)
  const education = article
    .locator("section", { hasText: "Education & Certifications" })
    .first()
  await expect(education.getByText("Master")).toBeVisible()
  await expect(education.getByText("Bachelor")).toBeVisible()
})

test("Skills stay condensed — four groups, no standalone tools list", async ({
  page,
}) => {
  await page.goto("/experience")
  const article = page.locator("article")

  for (const group of [
    "Product Design",
    "Research",
    "Systems & accessibility",
    "Collaboration",
  ]) {
    await expect(
      article.getByRole("heading", { level: 3, name: group, exact: true }),
    ).toBeVisible()
  }
  await expect(article.getByText(/^Tools:/)).toHaveCount(0)
  await expect(article.getByText("Adobe XD")).toHaveCount(0)
  await expect(article.getByText("Balsamiq")).toHaveCount(0)
})
