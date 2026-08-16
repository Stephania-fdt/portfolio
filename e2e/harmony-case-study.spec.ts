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
    "Project Overview",
    "Context & Challenge",
    "My Role & Team",
    "User Research",
    "Information Architecture",
    "Website Wireframes",
    "Dashboard & Progress Tracking",
    "Community & Gamification",
    "Outcomes, Limitations & Learnings",
  ]) {
    await expect(
      page.getByRole("heading", { level: 2, name: heading }),
    ).toBeVisible()
  }

  await expect(page.locator("article img").first()).toBeVisible()
  const facts = page.locator("[data-case-study-facts]")
  await expect(facts.getByText("06", { exact: true })).toBeVisible()
  await expect(facts.getByText("04", { exact: true })).toBeVisible()
  await expect(
    page.getByText("Google Forms", { exact: false }).first(),
  ).toBeVisible()
  await expect(
    page.getByText("Google Optimize", { exact: false }).first(),
  ).toBeVisible()
  await expect(page.getByText("Hotjar", { exact: false }).first()).toBeVisible()
  await expect(page.getByText("70+", { exact: true }).first()).toBeVisible()
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

  const sectionFor = (heading: string) =>
    page
      .getByRole("heading", { level: 2, name: heading })
      .locator("xpath=ancestor::section")

  await expect
    .poll(() =>
      sectionFor("Dashboard & Progress Tracking")
        .locator("figure")
        .evaluate((element) => element.getBoundingClientRect().width),
    )
    .toBeLessThanOrEqual(720)
  await expect
    .poll(() =>
      sectionFor("Website Prototype")
        .locator("figure")
        .evaluate((element) => element.getBoundingClientRect().width),
    )
    .toBeLessThanOrEqual(880)
  await expect
    .poll(() =>
      sectionFor("Mobile App Prototype")
        .locator("figure")
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
