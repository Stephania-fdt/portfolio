import AxeBuilder from "@axe-core/playwright"

import { expect, test } from "./fixtures"

test("Harmony presents a complete evidence-based product design case study", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto("/work/harmony")

  await expect(
    page.getByRole("heading", { level: 1, name: "Harmony" }),
  ).toBeVisible()

  for (const heading of ["Overview", "Key Decisions", "Result", "Reflection"]) {
    await expect(
      page.getByRole("heading", { level: 2, name: heading }),
    ).toBeVisible()
  }

  // The three decisions the research directly produced stay visible as
  // labeled sub-blocks inside "Key Decisions," not as their own
  // top-level chapters.
  const decisions = page
    .getByRole("heading", { level: 2, name: "Key Decisions" })
    .locator("xpath=ancestor::section")
  for (const label of [
    "Personalized Onboarding",
    "Dashboard & Progress Tracking",
    "Community & Gamification",
  ]) {
    await expect(decisions.getByText(label, { exact: true })).toBeVisible()
  }

  await expect(page.locator("article img").first()).toBeVisible()
  const facts = page.locator("[data-case-study-facts]")
  // "06" (an unsourced duration unit) was deliberately dropped rather
  // than shown without a confirmed unit — see the project's own bilan.
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

  // Visual-composition pass: the dashboard decision now sits in a
  // ~7/12 asymmetric column instead of the former half-width block —
  // wider than before, but still well short of the full 1280px content
  // width. Both prototype videos were deliberately shrunk further
  // (440 / 320px caps) so a compact preview doesn't force an
  // unnecessarily tall section before anyone presses play.
  await expect
    .poll(() =>
      page
        .getByAltText(/^Harmony app dashboard:/)
        .evaluate((element) => element.getBoundingClientRect().width),
    )
    .toBeLessThanOrEqual(850)
  await expect
    .poll(() =>
      page
        .getByText("Website prototype walkthrough", { exact: false })
        .locator("xpath=ancestor::figure")
        .evaluate((element) => element.getBoundingClientRect().width),
    )
    .toBeLessThanOrEqual(460)
  await expect
    .poll(() =>
      page
        .getByText("App prototype walkthrough", { exact: false })
        .locator("xpath=ancestor::figure")
        .evaluate((element) => element.getBoundingClientRect().width),
    )
    .toBeLessThanOrEqual(340)
})

test("Harmony has no detectable WCAG A/AA violations in either language", async ({
  page,
}) => {
  for (const language of ["en", "fr"] as const) {
    await page.addInitScript((value) => {
      window.localStorage.setItem("portfolio-language", value)
    }, language)
    await page.goto("/work/harmony")

    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze()

    expect(
      results.violations,
      JSON.stringify(results.violations, null, 2),
    ).toEqual([])
  }
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
