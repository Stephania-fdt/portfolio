export type CallToAction = {
  label: string
  href: string
}

export type HeroContent = {
  name: string
  title: string
  /** The value-proposition claim — one sentence, no more. Answers "what do
   *  you do", not "who are you" (the name/title byline already covers
   *  that) — repeating the title here would just cost height for no new
   *  information. */
  headline: string
  /** The supporting statement beneath `headline` — a short personal
   *  introduction (name, base, what drives her) rather than a pure
   *  capability sentence (Sprint "Hero supporting statement — personal
   *  intro"). Longer than the single-sentence version it replaced, so its
   *  container width/line-height were tuned specifically to absorb that
   *  extra length without growing the Hero's overall height. */
  description: string
  primaryCta: CallToAction
  secondaryCta: CallToAction
  /**
   * The one authored belief (Sprint 11.4, "Architected Light") — not
   * marketing copy, not a quote pulled for decoration. It's the sentence
   * that already closed both the Harmony and SPF case studies, verbatim,
   * independently, before this field existed — that's what earned it this
   * spot. Rendered once, quietly, in the Hero's margin near the
   * SignatureMark. Never repeated verbatim elsewhere — the case studies'
   * own closing reflections echo the same philosophy in their own words.
   */
  /**
   * Three names only — `description` is never rendered here, this is a
   * quiet, unstyled-as-list line ("Design Systems · Accessibility · UX
   * Research"), not the older, heavier `HeroExpertise.tsx` grid (still in
   * the repo but no longer part of any route — kept for its content
   * shape, not reused, since a 3-column card grid is exactly the kind of
   * weight this field must now stay lighter than). Rendered directly in
   * `Hero.tsx`, beneath both CTAs, deliberately quieter than either of
   * them.
   */
  expertise: {
    eyebrow: string
    heading: string
    items: { title: string; description: string }[]
  }
}

export const heroContent: HeroContent = {
  name: "Stéphania",
  title: "Product Designer",
  headline: "I turn complexity into clear, accessible, scalable products.",
  description:
    "I’m Stéphania, a Product Designer based in Brussels, curious by nature and passionate about technology. I like understanding how products are built and the constraints that shape them — it keeps me curious, helps me stay up to date, and allows me to design experiences that are more relevant and realistic.",
  primaryCta: { label: "View my work", href: "#work" },
  secondaryCta: { label: "Let's talk", href: "/contact" },
  expertise: {
    eyebrow: "Expertise",
    heading: "Expertise backed by delivered work",
    items: [
      {
        title: "Design Systems",
        description:
          "Created a scalable Angular Material UI Kit for the Belgian Federal Public Service Foreign Affairs.",
      },
      {
        title: "Accessibility",
        description:
          "Integrated WCAG AA/AA+ requirements into components and design processes.",
      },
      {
        title: "UX Research",
        description:
          "Conducted interviews, user tests and workshops with business and technical teams.",
      },
    ],
  },
}

function getHeroContent(language: "en" | "fr"): HeroContent {
  if (language === "en") return heroContent

  return {
    ...heroContent,
    headline:
      "Je transforme la complexité en produits clairs, accessibles et évolutifs.",
    description:
      "Je suis Stéphania, Product Designer basée à Bruxelles, curieuse et passionnée par la technologie. J’aime comprendre comment les produits sont construits et les contraintes qui les façonnent : cela nourrit ma curiosité, m’aide à rester à jour et à concevoir des expériences plus pertinentes et réalistes.",
    primaryCta: { label: "Voir mes projets", href: "#work" },
    secondaryCta: { label: "Me contacter", href: "/contact" },
    expertise: {
      eyebrow: "Expertise",
      heading: "Des expertises appuyées par des réalisations concrètes",
      items: [
        {
          title: "Design Systems",
          description:
            "Création d’un UI Kit évolutif basé sur Angular Material pour le SPF Affaires étrangères.",
        },
        {
          title: "Accessibilité",
          description:
            "Intégration des exigences WCAG AA/AA+ dans les composants et les processus de conception.",
        },
        {
          title: "UX Research",
          description:
            "Entretiens, tests utilisateurs et ateliers avec les équipes métier et techniques.",
        },
      ],
    },
  }
}

export { getHeroContent }
