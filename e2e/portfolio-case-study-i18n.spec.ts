import AxeBuilder from "@axe-core/playwright"
import type { Page } from "@playwright/test"

import { expect, test } from "./fixtures"

const portfolioUrl = `${process.env.PORTFOLIO_BASE_URL ?? ""}/work/portfolio`

const chapters = [
  "portfolio-overview",
  "portfolio-challenge",
  "portfolio-approach",
  "portfolio-decisions",
  "portfolio-building",
  "portfolio-iterations",
  "portfolio-final-experience",
  "portfolio-outcome",
] as const

const content = {
  en: {
    documentTitle:
      "Portfolio — Product Design & Design System | Stéphania Fordant",
    description:
      "A Product Design project overview about designing and building my own portfolio — positioning, a Design System, accessibility and a bilingual front-end, with AI as a supporting tool.",
    summary:
      "Designing and building my own product experience from strategy to front-end.",
    alt: "This portfolio's homepage showing its editorial hero, primary navigation and calls to action.",
    headings: [
      "Overview",
      "The Challenge",
      "Approach",
      "Key Design Decisions",
      "Designing & Building",
      "Iterations",
      "Final Experience",
      "Outcome & Learnings",
    ],
    forbidden: [
      "Vue d’ensemble",
      "Le défi",
      "Approche",
      "Décisions de conception clés",
      "Concevoir et construire",
      "Itérations",
      "L’expérience finale",
      "Résultat & enseignements",
    ],
  },
  fr: {
    documentTitle:
      "Portfolio — Product Design & Design System | Stéphania Fordant",
    description:
      "Présentation du projet Product Design sur la conception et le développement de mon propre portfolio : positionnement, Design System, accessibilité et front-end bilingue, avec l’IA comme outil d’appui.",
    summary:
      "Concevoir et développer ma propre expérience produit, de la stratégie au front-end.",
    alt: "Page d’accueil du portfolio montrant son hero éditorial, la navigation principale et les appels à l’action.",
    headings: [
      "Vue d’ensemble",
      "Le défi",
      "Approche",
      "Décisions de conception clés",
      "Concevoir et construire",
      "Itérations",
      "L’expérience finale",
      "Résultat & enseignements",
    ],
    forbidden: [
      "Overview",
      "The Challenge",
      "Approach",
      "Key Design Decisions",
      "Designing & Building",
      "Iterations",
      "Final Experience",
      "Outcome & Learnings",
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

  test(`Portfolio's disclosures stay reachable and accessible when opened in ${language}`, async ({
    page,
  }) => {
    await setLanguage(page, language)
    await page.goto(portfolioUrl)

    const summaries = page.locator("article details > summary")
    await expect(summaries).toHaveCount(2)

    for (const summary of await summaries.all()) {
      await summary.scrollIntoViewIfNeeded()
      await summary.click()
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
