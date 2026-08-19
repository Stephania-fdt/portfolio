import AxeBuilder from "@axe-core/playwright"

import { expect, test } from "./fixtures"

const spfUrl = `${process.env.SPF_BASE_URL ?? ""}/work/spf-design-system`

const content = {
  en: {
    title: "Building a Scalable Government Design System",
    documentTitle: "Accessible Public-Sector Design System | Stéphania Fordant",
    sections: [
      "Project Overview",
      "The Challenge",
      "Research & UX",
      "The Design System",
      "Execution",
      "Accessibility",
      "Reflection",
    ],
    assetStatus: "awaiting assets",
    detailsSummaries: [
      "Design system reference",
      "Component library reference",
    ],
    forbidden: [
      "Vue d’ensemble du projet",
      "Le défi",
      "Recherche & UX",
      "Le Design System",
      "Exécution",
      "Accessibilité",
      "Réflexion",
      "visuels en attente",
    ],
  },
  fr: {
    title: "Un Design System public, accessible et évolutif",
    documentTitle: "Design System public accessible | Stéphania Fordant",
    sections: [
      "Vue d’ensemble du projet",
      "Le défi",
      "Recherche & UX",
      "Le Design System",
      "Exécution",
      "Accessibilité",
      "Réflexion",
    ],
    assetStatus: "visuels en attente",
    detailsSummaries: [
      "Référence du Design System",
      "Référence de la bibliothèque de composants",
    ],
    forbidden: [
      "Project Overview",
      "The Challenge",
      "Research & UX",
      "The Design System",
      "Execution",
      "Accessibility",
      "Reflection",
      "awaiting assets",
    ],
  },
} as const

for (const language of ["en", "fr"] as const) {
  for (const width of [1440, 768, 375]) {
    test(`SPF renders only its ${language} copy at ${width}px`, async ({
      page,
    }) => {
      await page.addInitScript((selectedLanguage) => {
        localStorage.setItem("portfolio-language", selectedLanguage)
      }, language)
      await page.setViewportSize({ width, height: 900 })
      await page.goto(spfUrl)

      const copy = content[language]
      const article = page.locator("article")
      await expect(page.locator("html")).toHaveAttribute("lang", language)
      await expect(
        article.getByRole("heading", { level: 1, name: copy.title }),
      ).toBeVisible()
      await expect(page).toHaveTitle(copy.documentTitle)

      for (const section of copy.sections) {
        await expect(
          article.getByRole("heading", { level: 2, name: section }),
        ).toBeVisible()
      }
      await expect(article).toContainText(copy.assetStatus)

      for (const untranslated of copy.forbidden) {
        await expect(
          article.getByText(untranslated, { exact: true }),
        ).toHaveCount(0)
      }

      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= window.innerWidth,
        ),
      ).toBe(true)
    })
  }

  test(`SPF's two disclosures open and stay accessible in ${language}`, async ({
    page,
  }) => {
    await page.addInitScript((selectedLanguage) => {
      localStorage.setItem("portfolio-language", selectedLanguage)
    }, language)
    await page.goto(spfUrl)

    const copy = content[language]
    const article = page.locator("article")
    const summaries = article.locator("details > summary")
    await expect(summaries).toHaveCount(2)

    for (const label of copy.detailsSummaries) {
      const summary = article.getByText(label, { exact: false })
      await summary.scrollIntoViewIfNeeded()
      await summary.click()
    }

    for (const summary of await summaries.all()) {
      const details = summary.locator("xpath=..")
      await expect(details).toHaveJSProperty("open", true)
    }

    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze()
    expect(
      results.violations,
      JSON.stringify(results.violations, null, 2),
    ).toEqual([])
  })

  test(`SPF has no detectable WCAG A/AA violations in ${language}`, async ({
    page,
  }) => {
    await page.addInitScript((selectedLanguage) => {
      localStorage.setItem("portfolio-language", selectedLanguage)
    }, language)
    await page.goto(spfUrl)

    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze()

    expect(
      results.violations,
      JSON.stringify(results.violations, null, 2),
    ).toEqual([])
  })
}

test("SPF supports a direct refresh in both languages", async ({ page }) => {
  for (const language of ["en", "fr"] as const) {
    await page.addInitScript((selectedLanguage) => {
      localStorage.setItem("portfolio-language", selectedLanguage)
    }, language)
    await page.goto(spfUrl)
    await page.reload()
    await expect(
      page.getByRole("heading", { level: 1, name: content[language].title }),
    ).toBeVisible()
  }
})
