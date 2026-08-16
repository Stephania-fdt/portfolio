import { expect, test } from "./fixtures"

test("the Experience CV download follows the selected language", async ({
  page,
}) => {
  await page.goto("/experience")

  const englishDownload = page.getByRole("link", { name: /download.*cv/i })
  await expect(englishDownload).toHaveAttribute(
    "href",
    "/stephania-fordant-product-designer-cv-en.pdf",
  )
  await expect(englishDownload).toHaveAttribute(
    "download",
    "Stephania-Fordant-Product-Designer-CV-EN.pdf",
  )

  await page
    .getByRole("button", { name: "Switch site language to French" })
    .click()

  const frenchDownload = page.getByRole("link", {
    name: /télécharger.*cv/i,
  })
  await expect(frenchDownload).toHaveAttribute(
    "href",
    "/stephania-fordant-product-designer-cv-fr.pdf",
  )
  await expect(frenchDownload).toHaveAttribute(
    "download",
    "Stephania-Fordant-Product-Designer-CV-FR.pdf",
  )
})

for (const width of [375, 1440]) {
  test(`both CV downloads remain correct at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 })
    await page.goto("/experience")
    await expect(
      page.getByRole("link", { name: /download.*cv/i }),
    ).toHaveAttribute("href", "/stephania-fordant-product-designer-cv-en.pdf")
    await page
      .getByRole("button", { name: "Switch site language to French" })
      .click()
    await expect(
      page.getByRole("link", { name: /télécharger.*cv/i }),
    ).toHaveAttribute("href", "/stephania-fordant-product-designer-cv-fr.pdf")
  })
}
