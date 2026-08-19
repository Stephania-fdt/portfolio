import { expect, test } from "./fixtures"

test("Harmony presents a complete evidence-based product design case study", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto("/work/harmony")

  await expect(
    page.getByRole("heading", { level: 1, name: "Harmony" }),
  ).toBeVisible()

  for (const heading of [
    "Overview",
    "The Challenge",
    "Understanding the Experience",
    "Paper Prototype & User Testing",
    "Designing the Interaction",
    "Final Experience",
    "Accessibility",
    "Outcomes, Limitations & Learnings",
  ]) {
    await expect(
      page.getByRole("heading", { level: 2, name: heading }),
    ).toBeVisible()
  }

  // The three decisions the research directly produced stay visible as
  // labeled sub-blocks inside "Designing the Interaction," not as their
  // own top-level chapters.
  const interaction = page
    .getByRole("heading", { level: 2, name: "Designing the Interaction" })
    .locator("xpath=ancestor::section")
  for (const label of [
    "Personalized Onboarding",
    "Dashboard & Progress Tracking",
    "Community & Gamification",
  ]) {
    await expect(interaction.getByText(label, { exact: true })).toBeVisible()
  }

  await expect(page.locator("article img").first()).toBeVisible()
  const facts = page.locator("[data-case-study-facts]")
  await expect(facts.getByText("06", { exact: true })).toBeVisible()
  await expect(facts.getByText("04", { exact: true })).toBeVisible()
  await expect(facts.getByText("70+", { exact: true }).first()).toBeVisible()
  await expect(facts.getByText("76%", { exact: true })).toBeVisible()
})

for (const width of [375, 768, 1024, 1440]) {
  test(`Harmony does not overflow at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 })
    await page.goto("/work/harmony")

    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true)
  })
}

test("Harmony keeps its largest previews compact and fully contained", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto("/work/harmony")

  await expect
    .poll(() =>
      page
        .getByAltText(/^Harmony app dashboard:/)
        .evaluate((element) => element.getBoundingClientRect().width),
    )
    .toBeLessThanOrEqual(720)
  await expect
    .poll(() =>
      page
        .getByText("Website prototype walkthrough", { exact: false })
        .locator("xpath=ancestor::figure")
        .evaluate((element) => element.getBoundingClientRect().width),
    )
    .toBeLessThanOrEqual(880)
  await expect
    .poll(() =>
      page
        .getByText("App prototype walkthrough", { exact: false })
        .locator("xpath=ancestor::figure")
        .evaluate((element) => element.getBoundingClientRect().width),
    )
    .toBeLessThanOrEqual(680)
})

test("Harmony removes academic framing in both languages", async ({ page }) => {
  for (const language of ["en", "fr"] as const) {
    await page.addInitScript((value) => {
      window.localStorage.setItem("portfolio-language", value)
    }, language)
    await page.goto("/work/harmony")
    await expect(page.locator("article")).not.toContainText(
      /academic|fictitious|student|académique|fictif|étudiant/i,
    )
  }
})

test("Harmony image lightbox opens and closes from the keyboard", async ({
  page,
}) => {
  await page.goto("/work/harmony")
  const zoomButton = page
    .getByRole("button", { name: /full size|agrandir/i })
    .first()
  await zoomButton.focus()
  await page.keyboard.press("Enter")
  await expect(page.getByRole("dialog")).toBeVisible()
  await page.keyboard.press("Escape")
  await expect(page.getByRole("dialog")).toBeHidden()
  await expect(zoomButton).toBeFocused()
})

test("Harmony's two disclosures open and stay accessible", async ({ page }) => {
  await page.goto("/work/harmony")
  const summaries = page.locator("article details > summary")
  await expect(summaries).toHaveCount(2)

  for (const summary of await summaries.all()) {
    await summary.scrollIntoViewIfNeeded()
    await summary.click()
    const details = summary.locator("xpath=..")
    await expect(details).toHaveJSProperty("open", true)
  }

  await expect(page.getByText("Persona", { exact: true }).first()).toBeVisible()
  await expect(
    page.getByText("Mobile App Wireframes", { exact: true }),
  ).toBeVisible()
})

for (const width of [375, 768, 1024, 1440]) {
  test(`Harmony uses the new contained hero at ${width}px`, async ({
    page,
  }) => {
    const consoleErrors: string[] = []
    page.on("console", (message) => {
      if (
        message.type() === "error" &&
        !message.text().includes("ERR_NETWORK_ACCESS_DENIED")
      ) {
        consoleErrors.push(message.text())
      }
    })

    await page.setViewportSize({ width, height: 900 })
    await page.goto("/work/harmony")
    const hero = page.locator("article > header img")

    await expect(hero).toBeVisible()
    await expect(hero).toHaveAttribute("src", /harmony-hero\.webp/)
    await expect(hero).toHaveAttribute("width", "2560")
    await expect(hero).toHaveAttribute("height", "1364")
    await expect(hero).toHaveAttribute("loading", "eager")
    await expect
      .poll(() =>
        hero.evaluate((image) => ({
          fit: getComputedStyle(image).objectFit,
          naturalWidth: (image as HTMLImageElement).naturalWidth,
          naturalHeight: (image as HTMLImageElement).naturalHeight,
          renderedHeight: Math.round(image.getBoundingClientRect().height),
        })),
      )
      .toEqual({
        fit: "contain",
        naturalWidth: 2560,
        naturalHeight: 1364,
        renderedHeight: Math.round((width * 1364) / 2560) - 2,
      })
    expect(consoleErrors).toEqual([])
  })
}
