import { expect, test } from "./fixtures"

const languages = {
  en: {
    headline:
      "Senior Product Designer — making complex products clear, accessible and useful.",
    description:
      "With 6+ years of experience, I turn business and technical constraints into clear, consistent and scalable products. I specialize in Design Systems, accessibility and UX Research, with extensive experience in public services.",
    work: "View my work",
    contact: "Contact me",
    experience: "View experience & CV",
    workIntro:
      "Three projects showing how I work across complex public services, connected products and research-led design.",
    profileTitle:
      "I’m curious about how products are built — not only how they look.",
    profileParagraphs: [
      "I’m Stéphania, a Product Designer based in Brussels. I work with business teams, developers and users to turn real constraints into clear product decisions.",
      "After 6+ years across public services, research and digital products, I’m looking for a senior role where accessibility, systems thinking and collaboration shape the work from the start.",
    ],
    contactStatement:
      "Want to discuss a role or a project? Email me or connect with me on LinkedIn.",
    harmonyDescription:
      "Harmony’s connected bracelet needed a consistent experience across its website and companion mobile app.",
    wellpackDescription:
      "Landing-page projects started from inconsistent briefs, without a shared understanding of client audiences and markets.",
    accessibility: "Accessibility",
  },
  fr: {
    headline:
      "Product Designer senior — des produits complexes rendus clairs, accessibles et utiles.",
    description:
      "Depuis plus de 6 ans, je transforme des contraintes métier et techniques en expériences cohérentes et évolutives. Je suis spécialisée en Design Systems, accessibilité et UX Research, notamment dans les services publics.",
    work: "Voir mes projets",
    contact: "Me contacter",
    experience: "Voir mon expérience & mon CV",
    workIntro:
      "Trois projets qui montrent ma manière de travailler sur des services publics complexes, des produits connectés et des démarches guidées par la recherche.",
    profileTitle:
      "Je m’intéresse à la manière dont les produits sont construits — pas seulement à leur apparence.",
    profileParagraphs: [
      "Je suis Stéphania, Product Designer basée à Bruxelles. Je travaille avec les équipes métier, les développeurs et les utilisateurs pour transformer des contraintes concrètes en décisions produit claires.",
      "Après plus de 6 ans dans les services publics, la recherche et les produits numériques, je recherche aujourd’hui un rôle senior où l’accessibilité, les systèmes et la collaboration font partie du travail dès le départ.",
    ],
    contactStatement:
      "Vous souhaitez échanger au sujet d’un poste ou d’un projet ? Écrivez-moi ou contactez-moi sur LinkedIn.",
    harmonyDescription:
      "Le bracelet connecté Harmony nécessitait une expérience cohérente entre le site web et l’application mobile.",
    wellpackDescription:
      "Les projets de landing pages partaient de briefs hétérogènes, sans compréhension partagée des audiences et des marchés clients.",
    accessibility: "Accessibilité",
  },
} as const

for (const language of ["en", "fr"] as const) {
  for (const width of [1440, 768, 375]) {
    test(`homepage summary is clear in ${language} at ${width}px`, async ({
      page,
    }) => {
      await page.addInitScript((selectedLanguage) => {
        window.localStorage.setItem("portfolio-language", selectedLanguage)
      }, language)
      await page.setViewportSize({ width, height: 900 })
      await page.goto("/")

      const copy = languages[language]
      await expect(
        page.getByRole("heading", { level: 1, name: copy.headline }),
      ).toBeVisible()
      await expect(page.getByText(copy.description)).toBeVisible()
      await expect(
        page.getByRole("link", { name: copy.work }).first(),
      ).toHaveAttribute("href", "#work")
      await expect(
        page.locator("#hero").getByRole("link", { name: copy.contact }),
      ).toHaveAttribute("href", "#contact")
      await expect(
        page.getByRole("link", { name: copy.experience }),
      ).toHaveAttribute("href", "/experience")
      await expect(page.getByText(copy.workIntro)).toBeVisible()
      await expect(
        page.getByRole("heading", { level: 2, name: copy.profileTitle }),
      ).toBeVisible()
      for (const paragraph of copy.profileParagraphs) {
        await expect(page.getByText(paragraph)).toBeVisible()
      }
      await expect(page.getByText(copy.contactStatement)).toBeVisible()
      await expect(page.locator("#home-profile").getByRole("link")).toHaveCount(
        1,
      )

      const projects = page.locator("#work [data-work-preview] > div")
      await expect(projects).toHaveCount(3)
      await expect(projects.nth(0)).toContainText("SPF")
      await expect(projects.nth(1)).toContainText("Harmony")
      await expect(projects.nth(2)).toContainText("WellPack")
      await expect(projects.nth(1)).toContainText(copy.harmonyDescription)
      await expect(projects.nth(2)).toContainText(copy.wellpackDescription)
      for (const [index, href] of [
        [0, "/work/spf-design-system"],
        [1, "/work/harmony"],
        [2, "/work/wellpack"],
      ] as const) {
        await expect(projects.nth(index).getByRole("link")).toHaveAttribute(
          "href",
          href,
        )
      }
      await expect(projects.nth(2)).toContainText("UX Researcher")
      await expect(projects.nth(2).locator("img")).toHaveAttribute(
        "src",
        /Declinaisaon_siteweb/,
      )
      await expect(
        page.locator("#expertise [data-expertise-grid] > li"),
      ).toHaveCount(3)
      const accessibility = page
        .locator("#expertise [data-expertise-grid] > li")
        .filter({ hasText: copy.accessibility })
      await expect(accessibility.locator("svg")).toHaveCount(1)
      await expect(accessibility.locator("svg")).toHaveAttribute(
        "aria-hidden",
        "true",
      )
      await expect(
        page.locator("#positioning, #principles, #process, #thoughts"),
      ).toHaveCount(0)
      await expect(
        page.locator("#work").getByRole("link", {
          name:
            language === "fr" ? "Voir tous mes projets" : "View all my work",
        }),
      ).toHaveAttribute("href", "/work")
      await expect(page.locator("body")).not.toContainText(
        /\b(?:AI|IA)\b|Claude Code/i,
      )
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= window.innerWidth,
        ),
      ).toBe(true)

      const heroBottom = await page
        .locator("#hero")
        .evaluate((element) => element.getBoundingClientRect().bottom)
      const workTop = await page
        .locator("#work")
        .getByRole("heading", { name: /Selected Work|Projets sélectionnés/ })
        .evaluate((element) => element.getBoundingClientRect().top)
      const heroToWorkGap = Math.round(workTop - heroBottom)
      expect(heroToWorkGap).toBeGreaterThanOrEqual(79)
      expect(heroToWorkGap).toBeLessThanOrEqual(97)

      await page.goto("/#work")
      const headerBottom = await page
        .locator("header")
        .evaluate((element) => element.getBoundingClientRect().bottom)
      const anchoredWorkTop = await page
        .locator("#work")
        .getByRole("heading", { name: /Selected Work|Projets sélectionnés/ })
        .evaluate((element) => element.getBoundingClientRect().top)
      expect(anchoredWorkTop).toBeGreaterThanOrEqual(headerBottom)
    })
  }
}

test("complete work index keeps the requested order and Joga Aura positioning", async ({
  page,
}) => {
  await page.goto("/work")
  const projects = page.locator("[data-work-projects] > div")
  for (const [index, name] of [
    [0, "SPF Foreign Affairs"],
    [1, "Harmony"],
    [2, "WellPack"],
    [3, "Joga Aura"],
    [4, "Stéphania — Portfolio"],
  ] as const) {
    await expect(projects.nth(index)).toContainText(name)
  }
  await expect(projects.nth(3)).toContainText("E-commerce")
  await expect(projects.nth(3)).toContainText("UX/UI")
  await expect(projects.nth(3)).toContainText("Shopify implementation")
})
