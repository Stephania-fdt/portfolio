import AxeBuilder from "@axe-core/playwright"

import { expect, test } from "./fixtures"

const wellPackUrl = `${process.env.WELLPACK_BASE_URL ?? ""}/work/wellpack`

const content = {
  en: {
    documentTitle: "WellPack - Research-Driven Marketing | Stéphania Fordant",
    chapters: [
      "The Challenge",
      "The Method",
      "From Method to Brief",
      "The Brand Itself",
      "Proof Without a Metric",
      "Reflection",
    ],
    heroSummary:
      "For two years, every landing page my team at WellPack shipped had already survived contact with evidence about the client’s actual market — not my best guess, and not the brief I’d been handed.",
    heroAlt:
      "WellPack's completed website, showing the brand identity applied to a real digital product experience.",
    forbidden: [
      "Le défi",
      "La méthode",
      "De la méthode au cahier des charges",
      "La marque elle-même",
      "Une preuve sans métrique",
      "Réflexion",
    ],
  },
  fr: {
    documentTitle:
      "WellPack - UX Research et Design Marketing | Stéphania Fordant",
    chapters: [
      "Le défi",
      "La méthode",
      "De la méthode au cahier des charges",
      "La marque elle-même",
      "Une preuve sans métrique",
      "Réflexion",
    ],
    heroSummary:
      "Pendant deux ans, chaque page de destination livrée par mon équipe chez WellPack avait déjà été confrontée à des données sur le marché réel du client — pas à ma meilleure intuition, ni au cahier des charges que l’on m’avait remis.",
    heroAlt:
      "Site final de WellPack montrant l’identité de marque appliquée à une expérience produit numérique réelle.",
    forbidden: [
      "The Challenge",
      "The Method",
      "From Method to Brief",
      "The Brand Itself",
      "Proof Without a Metric",
      "Reflection",
    ],
  },
} as const

for (const language of ["en", "fr"] as const) {
  for (const width of [1440, 768, 375]) {
    test(`WellPack renders every ${language} chapter at ${width}px`, async ({
      page,
    }) => {
      await page.addInitScript((selectedLanguage) => {
        localStorage.setItem("portfolio-language", selectedLanguage)
      }, language)
      await page.setViewportSize({ width, height: 900 })
      await page.goto(wellPackUrl)

      const copy = content[language]
      const article = page.locator("article")
      await expect(page.locator("html")).toHaveAttribute("lang", language)
      await expect(
        article.getByRole("heading", { level: 1, name: "WellPack" }),
      ).toBeVisible()
      await expect(page).toHaveTitle(copy.documentTitle)
      await expect(
        article.getByText(copy.heroSummary, { exact: true }),
      ).toBeVisible()
      await expect(article.locator("img").first()).toHaveAttribute(
        "alt",
        copy.heroAlt,
      )

      for (const chapter of copy.chapters) {
        await expect(
          article.getByRole("heading", {
            level: 2,
            name: chapter,
            exact: true,
          }),
        ).toBeVisible()
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

  test(`WellPack has no detectable WCAG A/AA violations in ${language}`, async ({
    page,
  }) => {
    await page.addInitScript((selectedLanguage) => {
      localStorage.setItem("portfolio-language", selectedLanguage)
    }, language)
    await page.goto(wellPackUrl)

    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze()

    expect(
      results.violations,
      JSON.stringify(results.violations, null, 2),
    ).toEqual([])
  })
}

test("WellPack supports a direct refresh in both languages", async ({
  page,
}) => {
  for (const language of ["en", "fr"] as const) {
    await page.addInitScript((selectedLanguage) => {
      localStorage.setItem("portfolio-language", selectedLanguage)
    }, language)
    await page.goto(wellPackUrl)
    await page.reload()
    await expect(
      page.getByRole("heading", { level: 1, name: "WellPack" }),
    ).toBeVisible()
    await expect(page).toHaveTitle(content[language].documentTitle)
  }
})
