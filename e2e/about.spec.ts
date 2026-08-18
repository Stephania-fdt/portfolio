import AxeBuilder from "@axe-core/playwright"

import { expect, test } from "./fixtures"

const aboutUrl = `${process.env.ABOUT_BASE_URL ?? ""}/about`

const content = {
  en: {
    eyebrow: "About",
    heading:
      "I design with the people who use products — and the teams who build them — in mind.",
    introduction:
      "I’m Stéphania, a Product Designer based in Brussels. For more than six years, I’ve designed digital products and services by balancing user needs, business goals and technical constraints.",
    sections: [
      {
        title: "What drives me",
        paragraphs: [
          "What first drew me to Product Design was the opportunity to understand users: what gets in their way, what they genuinely need and what makes an experience useful in their everyday lives.",
          "My curiosity about technology pushes me to look beyond the screen. I like understanding how a product is built, how its components work and what makes a solution feasible so I can collaborate more effectively with developers.",
          "Outside work, dance, photography and basketball feed my creativity, energy and ability to notice both details and team dynamics.",
        ],
      },
      {
        title: "How I work",
        paragraphs: [
          "When facing a complex problem, I start by clarifying the real issue, listening to stakeholders and examining the technical constraints.",
          "When working with developers, I translate business needs, build a shared language and look for a feasible compromise. Solutions often become stronger when they evolve through technical discussion.",
          "While working on the Belgian Foreign Affairs Design System, some solutions were adjusted with developers to preserve the user intent while respecting Angular Material, accessibility requirements and implementation realities.",
          "I prefer building decisions that the team understands and supports rather than arriving with a fully fixed answer.",
        ],
      },
      {
        title: "What I’m looking for",
        paragraphs: [
          "I’m now looking for a Senior Product Designer role within a structured product team, working closely with PMs, business analysts and developers.",
          "My ideal environment provides real access to users, values testing and research, and combines autonomy with clear objectives. I want to contribute from early product framing through implementation while supporting Design Systems and accessibility across teams.",
          "My goal is a role where design contributes to product decisions — not only to interface execution after the important choices have already been made.",
        ],
      },
    ],
    primaryCta: "View my experience & CV",
    secondaryCta: "Contact me",
  },
  fr: {
    eyebrow: "À propos",
    heading:
      "Je conçois avec les personnes qui utilisent les produits — et les équipes qui les construisent.",
    introduction:
      "Je suis Stéphania, Product Designer basée à Bruxelles. Depuis plus de six ans, je conçois des produits et services numériques en conciliant les besoins des utilisateurs, les objectifs métier et les contraintes techniques.",
    sections: [
      {
        title: "Ce qui m’anime",
        paragraphs: [
          "Ce qui m’a attirée vers le Product Design, c’est d’abord la possibilité de comprendre les utilisateurs : ce qui les bloque, ce dont ils ont réellement besoin et ce qui rend une expérience utile dans leur quotidien.",
          "Ma curiosité technologique me pousse à regarder au-delà des écrans. J’aime comprendre comment un produit est construit, comment ses composants fonctionnent et ce qui rend une solution réalisable afin de mieux collaborer avec les développeurs.",
          "En dehors du travail, la danse, la photographie et le basketball nourrissent ma créativité, mon énergie et ma manière d’observer les détails comme les dynamiques collectives.",
        ],
      },
      {
        title: "Ma manière de travailler",
        paragraphs: [
          "Face à un problème complexe, je commence par clarifier le vrai sujet, écouter les parties prenantes et étudier les contraintes techniques.",
          "Avec les développeurs, je traduis les besoins métier, construis un langage commun et recherche un compromis réalisable. Une solution gagne souvent à évoluer au fil des échanges techniques.",
          "Sur le Design System du SPF Affaires étrangères, certaines solutions ont ainsi été ajustées avec les développeurs pour préserver l’intention utilisateur tout en respectant Angular Material, l’accessibilité et la réalité de l’implémentation.",
          "Je préfère construire des décisions comprises et partagées par l’équipe plutôt qu’arriver avec une réponse déjà figée.",
        ],
      },
      {
        title: "Ce que je recherche aujourd’hui",
        paragraphs: [
          "Je souhaite aujourd’hui évoluer comme Senior Product Designer au sein d’une équipe produit structurée, en collaboration étroite avec les PM, BA et développeurs.",
          "Mon environnement idéal donne un accès réel aux utilisateurs, valorise les tests et la recherche, et associe autonomie et objectifs clairs. Je veux intervenir en amont, accompagner le produit jusqu’à sa réalisation et contribuer de manière transverse aux Design Systems et à l’accessibilité.",
          "Je vise un rôle où le design participe aux décisions produit — pas uniquement à l’exécution des interfaces lorsque les choix ont déjà été faits.",
        ],
      },
    ],
    primaryCta: "Voir mon expérience & mon CV",
    secondaryCta: "Me contacter",
  },
} as const

for (const language of ["en", "fr"] as const) {
  for (const width of [1440, 768, 375]) {
    test(`About renders the approved ${language} content at ${width}px`, async ({
      page,
    }) => {
      await page.addInitScript((selectedLanguage) => {
        localStorage.setItem("portfolio-language", selectedLanguage)
      }, language)
      await page.setViewportSize({ width, height: 900 })
      await page.goto(aboutUrl)
      await page.evaluate(() => document.fonts.ready)

      const copy = content[language]
      const article = page.locator("article")
      await expect(page.locator("html")).toHaveAttribute("lang", language)
      await expect(
        article.getByText(copy.eyebrow, { exact: true }),
      ).toBeVisible()
      await expect(article.getByRole("heading", { level: 1 })).toHaveCount(1)
      await expect(
        article.getByRole("heading", { level: 1, name: copy.heading }),
      ).toBeVisible()
      await expect(article.getByText(copy.introduction)).toBeVisible()

      const sections = article.locator("[data-about-sections] > section")
      await expect(sections).toHaveCount(3)
      for (const [index, section] of copy.sections.entries()) {
        await expect(
          sections.nth(index).getByRole("heading", {
            level: 2,
            name: section.title,
          }),
        ).toBeVisible()
        for (const paragraph of section.paragraphs) {
          await expect(sections.nth(index).getByText(paragraph)).toBeVisible()
        }
      }

      const primaryAction = article.locator("[data-about-primary-action]")
      const actions = article.locator("[data-about-actions]")
      const primary = primaryAction.getByRole("link", {
        name: copy.primaryCta,
      })
      const secondary = actions.getByRole("link", { name: copy.secondaryCta })
      await expect(primary).toHaveAttribute("href", "/experience")
      await expect(secondary).toHaveAttribute("href", "/#contact")
      await expect(
        article.getByRole("link", { name: copy.primaryCta }),
      ).toHaveCount(1)
      await expect(actions.getByRole("link")).toHaveCount(1)

      for (const action of [primary, secondary]) {
        const box = await action.boundingBox()
        if (!box) throw new Error("About CTA is not visible")
        expect(box.height).toBeGreaterThanOrEqual(44)
      }

      await primary.focus()
      expect(
        await primary.evaluate(
          (element) => getComputedStyle(element).outlineWidth,
        ),
      ).not.toBe("0px")

      const h1Box = await article
        .getByRole("heading", { level: 1 })
        .boundingBox()
      if (!h1Box) throw new Error("About heading is not visible")

      const navigationBox = await page
        .locator("body > div header")
        .first()
        .boundingBox()
      if (!navigationBox) throw new Error("Navigation header is not visible")
      const headingGap = h1Box.y - (navigationBox.y + navigationBox.height)
      if (width === 768) {
        expect(headingGap).toBeGreaterThanOrEqual(40)
        expect(headingGap).toBeLessThanOrEqual(48)
      } else {
        expect(headingGap).toBeGreaterThanOrEqual(30)
        expect(headingGap).toBeLessThanOrEqual(64)
      }

      const h1Metrics = await article
        .getByRole("heading", { level: 1 })
        .evaluate((element) => {
          const styles = getComputedStyle(element)
          return {
            fontSize: Number.parseFloat(styles.fontSize),
            lineHeight: Number.parseFloat(styles.lineHeight),
          }
        })
      const introduction = article.getByText(copy.introduction)
      const introductionFontSize = await introduction.evaluate((element) =>
        Number.parseFloat(getComputedStyle(element).fontSize),
      )
      const expectedType = {
        1440: { h1: [72, 80], introduction: [24, 28] },
        768: { h1: [52, 64], introduction: [22, 24] },
        375: { h1: [42, 48], introduction: [20, 22] },
      }[width]
      expect(h1Metrics.fontSize).toBeGreaterThanOrEqual(expectedType.h1[0])
      expect(h1Metrics.fontSize).toBeLessThanOrEqual(expectedType.h1[1])
      expect(introductionFontSize).toBeGreaterThanOrEqual(
        expectedType.introduction[0],
      )
      expect(introductionFontSize).toBeLessThanOrEqual(
        expectedType.introduction[1],
      )
      if (width === 1440) {
        expect(h1Box.height).toBeLessThanOrEqual(900 * 0.45)
        const approximateLineCount = Math.round(
          h1Box.height / h1Metrics.lineHeight,
        )
        expect(approximateLineCount).toBeLessThanOrEqual(
          language === "en" ? 3 : 4,
        )
      }

      const introductionBox = await introduction.boundingBox()
      const primaryBox = await primary.boundingBox()
      const firstSectionBox = await sections.first().boundingBox()
      const lastSectionBox = await sections.last().boundingBox()
      const secondaryBox = await secondary.boundingBox()
      if (
        !introductionBox ||
        !primaryBox ||
        !firstSectionBox ||
        !lastSectionBox ||
        !secondaryBox
      ) {
        throw new Error("About content order cannot be measured")
      }
      const primaryGap =
        primaryBox.y - (introductionBox.y + introductionBox.height)
      expect(primaryGap).toBeGreaterThanOrEqual(24)
      expect(primaryGap).toBeLessThanOrEqual(40)
      expect(primaryBox.y).toBeLessThan(firstSectionBox.y)
      expect(secondaryBox.y).toBeGreaterThan(lastSectionBox.y)

      expect(h1Box.x).toBeGreaterThanOrEqual(0)
      expect(h1Box.x + h1Box.width).toBeLessThanOrEqual(width)
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= window.innerWidth,
        ),
      ).toBe(true)
      await expect(
        article.locator(
          "[class*='min-h-'], [class*='h-screen'], [class*='h-dvh']",
        ),
      ).toHaveCount(0)
    })
  }
}

test("About CTAs reach Experience, the existing CV and Contact", async ({
  page,
}) => {
  await page.goto(aboutUrl)
  await page.reload()
  await expect(
    page.getByRole("heading", { level: 1, name: content.en.heading }),
  ).toBeVisible()

  await page.getByRole("link", { name: content.en.primaryCta }).click()
  await expect(page).toHaveURL(/\/experience$/)
  await expect(
    page.getByRole("link", { name: /download.*cv/i }),
  ).toHaveAttribute("href", "/stephania-fordant-product-designer-cv-en.pdf")

  await page.goto(aboutUrl)
  await page.getByRole("link", { name: content.en.secondaryCta }).click()
  await expect(page).toHaveURL(/\/#contact$/)
  await expect(page.locator("#contact")).toBeVisible()
  const headerBottom = await page
    .locator("header")
    .evaluate((element) => element.getBoundingClientRect().bottom)
  const contactHeadingTop = await page
    .locator("#contact")
    .getByRole("heading", { name: "Contact" })
    .evaluate((element) => element.getBoundingClientRect().top)
  expect(contactHeadingTop).toBeGreaterThanOrEqual(headerBottom)
})

for (const language of ["en", "fr"] as const) {
  test(`About has no detectable WCAG A/AA violations in ${language}`, async ({
    page,
  }) => {
    await page.addInitScript((selectedLanguage) => {
      localStorage.setItem("portfolio-language", selectedLanguage)
    }, language)
    await page.goto(aboutUrl)

    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze()

    expect(
      results.violations,
      JSON.stringify(results.violations, null, 2),
    ).toEqual([])
  })
}
