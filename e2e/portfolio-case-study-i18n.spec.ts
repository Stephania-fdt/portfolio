import AxeBuilder from "@axe-core/playwright"
import type { Page } from "@playwright/test"

import { expect, test } from "./fixtures"

const portfolioUrl = `${process.env.PORTFOLIO_BASE_URL ?? ""}/work/portfolio`

const chapters = [
  "portfolio-challenge",
  "portfolio-objectives",
  "portfolio-process",
  "portfolio-evolution",
  "portfolio-ia",
  "portfolio-features",
  "portfolio-design-system",
  "portfolio-accessibility",
  "portfolio-ai-workflow",
  "portfolio-frontend",
  "portfolio-responsive",
  "portfolio-testing",
  "portfolio-iteration",
  "portfolio-what-changed",
  "portfolio-outcome",
  "portfolio-learnings",
] as const

const content = {
  en: {
    documentTitle: "React and AI-Assisted Design Portfolio | Stéphania Fordant",
    description:
      "An accessible portfolio designed and developed with React, TypeScript, Tailwind CSS and an AI-assisted Product Design workflow.",
    summary:
      "Designing and building my own product experience from strategy to front-end.",
    alt: "This portfolio's homepage showing its editorial hero, primary navigation and calls to action.",
    headings: [
      "The Challenge",
      "Objectives",
      "Process",
      "The Evolution",
      "Information Architecture",
      "Product capabilities",
      "Design System",
      "Accessibility",
      "Designing with AI",
      "Tools & front-end implementation",
      "Responsive Design",
      "Testing & Validation",
      "Iteration",
      "What changed",
      "Outcome",
      "What I learned",
    ],
    forbidden: [
      "Le défi",
      "Objectifs",
      "Processus",
      "L’évolution",
      "Architecture de l’information",
      "Fonctionnalités du produit",
      "Accessibilité",
      "Concevoir avec l’IA",
      "Outils & implémentation",
      "Design responsive",
      "Tests & validation",
      "Itération",
      "Ce qui a évolué",
      "Résultats",
      "Ce que j’ai appris",
    ],
  },
  fr: {
    documentTitle:
      "Portfolio Product Design avec React et IA | Stéphania Fordant",
    description:
      "Conception et développement d’un portfolio accessible avec React, TypeScript, Tailwind CSS et un workflow Product Design assisté par l’IA.",
    summary:
      "Concevoir et développer ma propre expérience produit, de la stratégie au front-end.",
    alt: "Page d’accueil du portfolio montrant son hero éditorial, la navigation principale et les appels à l’action.",
    headings: [
      "Le défi",
      "Objectifs",
      "Processus",
      "L’évolution",
      "Architecture de l’information",
      "Fonctionnalités du produit",
      "Design System",
      "Accessibilité",
      "Concevoir avec l’IA",
      "Outils & implémentation",
      "Design responsive",
      "Tests & validation",
      "Itération",
      "Ce qui a évolué",
      "Résultats",
      "Ce que j’ai appris",
    ],
    forbidden: [
      "The Challenge",
      "Objectives",
      "Process",
      "The Evolution",
      "Information Architecture",
      "Product capabilities",
      "Accessibility",
      "Designing with AI",
      "Tools & front-end implementation",
      "Responsive Design",
      "Testing & Validation",
      "Iteration",
      "What changed",
      "Outcome",
      "What I learned",
    ],
  },
} as const

async function setLanguage(page: Page, language: "en" | "fr") {
  await page.addInitScript((selectedLanguage) => {
    localStorage.setItem("portfolio-language", selectedLanguage)
  }, language)
}

for (const language of ["en", "fr"] as const) {
  for (const width of [1440, 768, 375]) {
    test(`Portfolio renders every ${language} chapter at ${width}px`, async ({
      page,
    }) => {
      await setLanguage(page, language)
      await page.setViewportSize({ width, height: 900 })
      await page.goto(portfolioUrl)

      const copy = content[language]
      const article = page.locator("article")
      await expect(page.locator("html")).toHaveAttribute("lang", language)
      await expect(
        article.getByRole("heading", {
          level: 1,
          name: "Stéphania — Portfolio",
        }),
      ).toBeVisible()
      await expect(page).toHaveTitle(copy.documentTitle)
      await expect(page.locator('meta[name="description"]')).toHaveAttribute(
        "content",
        copy.description,
      )
      await expect(
        article.getByText(copy.summary, { exact: true }),
      ).toBeVisible()
      await expect(article.locator("img").first()).toHaveAttribute(
        "alt",
        copy.alt,
      )

      for (const heading of copy.headings) {
        await expect(
          article.getByRole("heading", {
            level: 2,
            name: heading,
            exact: true,
          }),
        ).toBeAttached()
      }
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

  test(`Portfolio has no detectable WCAG A/AA violations in ${language}`, async ({
    page,
  }) => {
    await setLanguage(page, language)
    await page.goto(portfolioUrl)

    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze()

    expect(
      results.violations,
      JSON.stringify(results.violations, null, 2),
    ).toEqual([])
  })

  test(`Portfolio supports direct refreshes for every ${language} chapter`, async ({
    page,
  }) => {
    await setLanguage(page, language)

    for (const [index, chapter] of chapters.entries()) {
      await page.goto(`${portfolioUrl}#${chapter}`)
      await page.reload()
      await expect(page.locator("html")).toHaveAttribute("lang", language)
      await expect(page.locator(`#${chapter}`)).toBeAttached()
      await expect(
        page.locator(`#${chapter}`).getByRole("heading", {
          level: 2,
          name: content[language].headings[index],
          exact: true,
        }),
      ).toBeAttached()
      expect(page.url()).toContain(`#${chapter}`)
    }
  })
}
