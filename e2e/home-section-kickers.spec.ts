import { expect, test } from "./fixtures"

test("Home's one remaining section kicker (Selected Work) isn't numbered", async ({
  page,
}) => {
  await page.goto("/")

  const heading = page
    .locator("#work")
    .getByRole("heading", { name: "Selected Work", exact: true })

  await expect(heading).toBeVisible()
  await expect(heading).not.toHaveText(/^(01|04|06)\s*[—-]/)
})

for (const width of [375, 768, 1440]) {
  test(`Contact page exposes email, LinkedIn, location and CV at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 900 })
    await page.goto("/contact")
    await page.evaluate(() => document.fonts.ready)

    const article = page.locator("article")
    const email = article.getByRole("link", {
      name: "hello@stephania-fdt.com",
    })
    const linkedin = article.getByRole("link", {
      name: /linkedin\.com\/in\/stephania-fordant/,
    })
    const cv = article.getByRole("link", { name: /download.*cv/i })

    await expect(email).toHaveAttribute(
      "href",
      "mailto:hello@stephania-fdt.com?subject=Product%20Design%20Opportunity%20%E2%80%94%20St%C3%A9phania",
    )
    await expect(linkedin).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/stephania-fordant",
    )
    await expect(linkedin).toHaveAttribute("target", "_blank")
    await expect(linkedin).toHaveAttribute("rel", "noopener noreferrer")
    await expect(cv).toHaveAttribute(
      "href",
      "/stephania-fordant-product-designer-cv-en.pdf",
    )
    await expect(article.getByText("Brussels, Belgium")).toBeVisible()
  })
}

test("Contact page actions use their French labels", async ({ page }) => {
  await page.addInitScript(() => {
    window.localStorage.setItem("portfolio-language", "fr")
  })
  await page.goto("/contact")

  const article = page.locator("article")
  await expect(
    article.getByRole("link", { name: "hello@stephania-fdt.com" }),
  ).toBeVisible()
  await expect(article.getByText("Bruxelles, Belgique")).toBeVisible()
  await expect(
    article.getByRole("link", { name: /télécharger.*cv/i }),
  ).toHaveAttribute("href", "/stephania-fordant-product-designer-cv-fr.pdf")
})
