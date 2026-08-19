import AxeBuilder from "@axe-core/playwright"

import { expect, test } from "./fixtures"

test("Joga Aura presents a complete product-design e-commerce case study", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto("/work/joga-aura", { waitUntil: "domcontentloaded" })

  await expect(
    page.getByRole("heading", { level: 1, name: "Joga Aura" }),
  ).toBeVisible()
  const liveSiteLink = page.getByRole("link", { name: "Visit live website" })
  await expect(liveSiteLink).toHaveAttribute("href", "https://joga-aura.com/")
  await expect(liveSiteLink).toHaveAttribute("target", "_blank")
  await expect(liveSiteLink).toHaveAttribute("rel", "noopener noreferrer")

  for (const heading of [
    "Overview",
    "The challenge",
    "Defining the Brand & Experience",
    "Structuring the Store",
    "Designing the Shopping Experience",
    "Final Experience",
    "Figma → Shopify",
    "Outcome & reflection",
  ]) {
    await expect(
      page.getByRole("heading", { level: 2, name: heading }),
    ).toBeVisible()
  }

  // Overview's Problem/Role/Solution summary
  for (const label of ["The problem", "My role", "The solution"]) {
    await expect(page.getByText(label, { exact: true })).toBeVisible()
  }

  await expect(page.locator("article img")).toHaveCount(13)
  await expect(
    page.getByAltText("Joga Aura e-commerce website sitemap"),
  ).toHaveClass(/object-contain/)
  await expect(page.getByText("Direction 03 · selected")).toBeVisible()
  await expect(page.getByText("Homepage", { exact: true })).toBeVisible()
  await expect(page.getByText("Coming Soon page")).toBeVisible()
  await expect(page.getByText("The product page")).toBeVisible()
  // The three renamed captures must never be called wireframes — they're
  // real, finished pages (confirmed by direct inspection).
  await expect(page.locator("article")).not.toContainText(/wireframe/i)
  await expect(page.getByAltText(/final desktop homepage/i)).toHaveClass(
    /object-contain/,
  )
  await expect(page.getByAltText(/final mobile homepage/i)).toHaveClass(
    /object-contain/,
  )
  await expect(page.getByText("183 × 61 cm", { exact: false })).toBeVisible()
  await expect(page.getByText("6 mm", { exact: false })).toBeVisible()
  await expect(
    page.getByText("high-density TPE", { exact: false }),
  ).toBeVisible()
  await expect(page.locator("[data-case-study-process]")).toHaveCount(2)
})

test("Joga Aura's deep dive stays reachable and accessible when opened", async ({
  page,
}) => {
  await page.goto("/work/joga-aura", { waitUntil: "domcontentloaded" })

  const summary = page.locator("article details > summary")
  await expect(summary).toHaveCount(1)
  await expect(summary).toContainText("Exploration & alternatives")

  await summary.scrollIntoViewIfNeeded()
  await summary.click()
  const details = summary.locator("xpath=..")
  await expect(details).toHaveJSProperty("open", true)

  await expect(page.getByText("Newsletter", { exact: true })).toBeVisible()
  await expect(
    page.getByText("Coming Soon — Other Directions", { exact: true }),
  ).toBeVisible()

  const results = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
    .analyze()
  expect(
    results.violations,
    JSON.stringify(results.violations, null, 2),
  ).toEqual([])
})

for (const width of [375, 768, 1440]) {
  test(`Joga Aura does not overflow at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 })
    await page.goto("/work/joga-aura", { waitUntil: "domcontentloaded" })

    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true)
  })
}
