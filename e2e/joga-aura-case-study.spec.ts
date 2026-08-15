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
    "Art direction",
    "From direction to experience",
    "Information Architecture",
    "Wireframing",
    "Coming Soon exploration",
    "From structure to final UI",
    "Visual identity in the product",
    "E-commerce & product experience",
    "Responsive delivery",
    "Figma → Shopify",
    "Outcome & reflection",
  ]) {
    await expect(
      page.getByRole("heading", { level: 2, name: heading }),
    ).toBeVisible()
  }

  await expect(page.locator("article img")).toHaveCount(15)
  await expect(
    page.getByRole("heading", {
      level: 3,
      name: "Structuring a clear and intuitive shopping experience",
    }),
  ).toBeVisible()
  await expect(
    page.getByAltText("Joga Aura e-commerce website sitemap"),
  ).toHaveClass(/object-contain/)
  const facts = page.locator("[data-case-study-facts]")
  await expect(facts.getByText("03", { exact: true }).first()).toBeVisible()
  await expect(facts.getByText("01", { exact: true }).first()).toBeVisible()
  await expect(page.getByText("Direction 03 · selected")).toBeVisible()
  await expect(page.getByText("Proposal 03 · selected")).toBeVisible()
  await expect(page.getByText("Homepage wireframe")).toBeVisible()
  await expect(page.getByText("Product-page wireframe")).toBeVisible()
  await expect(page.getByText("Newsletter · supporting flow")).toBeVisible()
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
