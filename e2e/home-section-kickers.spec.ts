import { expect, test } from "./fixtures"

const emailHref =
  "mailto:hello@stephania-fdt.com?subject=Product%20Design%20Opportunity%20%E2%80%94%20St%C3%A9phania"

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

for (const width of [375, 768, 1440]) {
  test(`Contact exposes email and LinkedIn actions at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 900 })
    await page.goto("/#contact")

    const contact = page.locator("#contact")
    const email = contact.getByRole("link", { name: "Email me" })
    const linkedin = contact.getByRole("link", {
      name: "Connect on LinkedIn",
    })

    await expect(email).toHaveAttribute("href", emailHref)
    await expect(linkedin).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/stephania-fordant",
    )
    await expect(linkedin).toHaveAttribute("target", "_blank")
    await expect(linkedin).toHaveAttribute("rel", "noopener noreferrer")

    const emailBox = await email.boundingBox()
    const linkedinBox = await linkedin.boundingBox()
    if (!emailBox || !linkedinBox) throw new Error("Contact actions are hidden")

    if (width === 375) {
      expect(Math.round(emailBox.width)).toBe(Math.round(linkedinBox.width))
      expect(linkedinBox.y).toBeGreaterThan(emailBox.y + emailBox.height)
    } else {
      expect(Math.abs(emailBox.y - linkedinBox.y)).toBeLessThanOrEqual(1)
    }
  })
}

test("Contact actions use their French labels", async ({ page }) => {
  await page.addInitScript(() => {
    window.localStorage.setItem("portfolio-language", "fr")
  })
  await page.goto("/#contact")

  await expect(
    page.getByRole("link", { name: "Me contacter par e-mail" }),
  ).toBeVisible()
  await expect(
    page.getByRole("link", { name: "Me contacter sur LinkedIn" }),
  ).toBeVisible()
})
