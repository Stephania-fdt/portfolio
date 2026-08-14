import { expect, test } from "./fixtures"

test("Home section headers reuse the Contact section kicker without numbering", async ({
  page,
}) => {
  await page.goto("/")

  const referenceClass = await page
    .locator("#contact")
    .getByRole("heading", { name: "Contact" })
    .getAttribute("class")

  for (const [sectionId, title] of [
    ["positioning", "Positioning"],
    ["work", "Selected Work"],
    ["principles", "Design Systems"],
    ["process", "The Process"],
  ]) {
    const heading = page
      .locator(`#${sectionId}`)
      .getByRole("heading", { name: title })

    await expect(heading).toBeVisible()
    await expect(heading).toHaveAttribute("class", referenceClass ?? "")
    await expect(heading).not.toHaveText(/^(01|04|06)\s*[—-]/)
  }
})
