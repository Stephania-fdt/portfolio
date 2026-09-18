import { expect, test } from "./fixtures"

const languages = {
  en: {
    headline: "I design interfaces and the systems behind them.",
    description:
      "I’m Stéphania, a Product Designer based in Brussels. For over six years, I’ve worked with business and development teams to design digital services, with a focus on Design Systems and accessibility.",
    expertise: "Design Systems · Accessibility · UX Research",
    work: "View my work",
    contact: "Let's talk",
    workIntro:
      "A selection of my work across public services, connected products and marketing.",
    closingPrompt: "Like what you see?",
    closingCta: "Let's talk",
    spfDescription:
      "Several public-service applications lacked a shared UX methodology and consistent interface language.",
    harmonyDescription:
      "Harmony’s connected bracelet needed a consistent experience across its website and companion mobile app.",
    wellpackDescription:
      "Landing-page briefs lacked a shared understanding of client audiences and markets.",
  },
  fr: {
    headline: "Je conçois des interfaces et les systèmes qui les relient.",
    description:
      "Je suis Stéphania, Product Designer à Bruxelles. Depuis plus de six ans, je travaille avec les équipes métier et développement pour concevoir des services numériques, avec une attention particulière aux Design Systems et à l’accessibilité.",
    expertise: "Design Systems · Accessibilité · UX Research",
    work: "Voir mes projets",
    contact: "Me contacter",
    workIntro:
      "Une sélection de mon travail dans les services publics, les produits connectés et le marketing.",
    closingPrompt: "Envie d’en discuter ?",
    closingCta: "Échangeons",
    spfDescription:
      "Plusieurs applications de service public ne partageaient ni méthode UX ni langage d’interface cohérent.",
    harmonyDescription:
      "Le bracelet connecté Harmony nécessitait une expérience cohérente entre le site web et l’application mobile.",
    wellpackDescription:
      "Les briefs de landing pages manquaient d’une compréhension partagée des audiences et des marchés clients.",
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
      ).toHaveAttribute("href", "/contact")
      await expect(
        page.locator("#hero").getByText(copy.expertise),
      ).toBeVisible()
      await expect(page.getByText(copy.workIntro)).toBeVisible()

      // The Homepage's third and only remaining beat: one line, one link
      // to `/contact` — no email, no LinkedIn, no card shown here anymore.
      const closing = page.locator("#closing")
      await expect(closing.getByText(copy.closingPrompt)).toBeVisible()
      await expect(
        closing.getByRole("link", { name: new RegExp(copy.closingCta) }),
      ).toHaveAttribute("href", "/contact")

      const projects = page.locator("#work [data-work-preview] > div")
      await expect(projects).toHaveCount(3)
      for (const [index, name] of [
        [0, "SPF"],
        [1, "Harmony"],
        [2, "WellPack"],
      ] as const) {
        await expect(projects.nth(index)).toContainText(name)
      }
      await expect(projects.nth(0)).toContainText(copy.spfDescription)
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
        /home-preview/,
      )

      // Progressive disclosure: Homepage orients only — no Expertise
      // block, no About/Experience teaser, no full Contact section.
      await expect(
        page.locator(
          "#positioning, #principles, #process, #thoughts, #expertise, #home-profile, #contact",
        ),
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

      // The Hero no longer claims the entire first viewport — Selected
      // Work should already be perceptible without scrolling at 1440px.
      if (width === 1440) {
        const heroHeight = await page
          .locator("#hero")
          .evaluate((element) => element.getBoundingClientRect().height)
        expect(heroHeight).toBeLessThan(900)
        const workVisibleTop = await page
          .locator("#work")
          .evaluate((element) => element.getBoundingClientRect().top)
        expect(workVisibleTop).toBeLessThan(900)
      }

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
