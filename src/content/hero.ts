export type CallToAction = {
  label: string
  href: string
}

export type HeroContent = {
  name: string
  title: string
  /**
   * The capability statement set directly beneath the name — its own
   * typographic voice (mono). Two explicit lines, not one wrapped string,
   * so the intended break point is a content property, not a side-effect
   * of container width.
   */
  headline: string
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
   * Compact expertise block, added directly beneath the two Hero CTAs
   * (Sprint "Hero expertise addition"). Deliberately part of `HeroContent`,
   * not its own content file — this is presented as one more beat of the
   * Hero's own composition, not a separate homepage section. Icon choice
   * lives in `HeroExpertise.tsx` (presentation, not content) keyed by
   * `title`.
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
  headline:
    "Senior Product Designer — making complex products clear, accessible and useful.",
  description:
    "With 6+ years of experience, I turn business and technical constraints into clear, consistent and scalable products. I specialize in Design Systems, accessibility and UX Research, with extensive experience in public services.",
  primaryCta: { label: "View my work", href: "#work" },
  secondaryCta: { label: "Contact me", href: "#contact" },
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
        title: "UX Research & collaboration",
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
      "Product Designer senior — des produits complexes rendus clairs, accessibles et utiles.",
    description:
      "Depuis plus de 6 ans, je transforme des contraintes métier et techniques en expériences cohérentes et évolutives. Je suis spécialisée en Design Systems, accessibilité et UX Research, notamment dans les services publics.",
    primaryCta: { label: "Voir mes projets", href: "#work" },
    secondaryCta: { label: "Me contacter", href: "#contact" },
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
          title: "UX Research & collaboration",
          description:
            "Entretiens, tests utilisateurs et ateliers avec les équipes métier et techniques.",
        },
      ],
    },
  }
}

export { getHeroContent }
