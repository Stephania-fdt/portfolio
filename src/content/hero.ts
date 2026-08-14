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
  statement: {
    primary: string
    secondary: string
  }
  /** Two-part statement — rendered as two editorial paragraphs, lead emphasized, support muted. */
  valueProposition: {
    lead: string
    support: string
  }
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
  signature: string
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
  statement: {
    primary: "Building scalable products through",
    secondary: "Design Systems, Accessibility & AI",
  },
  valueProposition: {
    lead: "I transform complex problems into simple, accessible and scalable digital products.",
    support:
      "I build the systems that help teams design faster, collaborate better and create lasting impact.",
  },
  primaryCta: { label: "View my work", href: "#work" },
  secondaryCta: { label: "Let's talk", href: "#contact" },
  signature:
    "I believe great products are built when people understand each other before they build together.",
  expertise: {
    eyebrow: "Expertise",
    heading: "What I bring to digital products",
    items: [
      {
        title: "Product Design",
        description:
          "From research to interface design, I create intuitive and purposeful digital experiences.",
      },
      {
        title: "Design Systems",
        description:
          "I build scalable, accessible and consistent systems that help teams design and ship faster.",
      },
      {
        title: "UX Research",
        description:
          "I use research, testing and insights to make product decisions grounded in real user needs.",
      },
      {
        title: "Accessibility",
        description:
          "I design inclusive experiences aligned with WCAG accessibility principles.",
      },
    ],
  },
}

function getHeroContent(language: "en" | "fr"): HeroContent {
  if (language === "en") return heroContent

  return {
    ...heroContent,
    statement: {
      primary: "Créer des produits évolutifs grâce aux",
      secondary: "Design Systems, à l’accessibilité et à l’IA",
    },
    valueProposition: {
      lead: "Je transforme des problématiques complexes en produits numériques simples, accessibles et évolutifs.",
      support:
        "Je conçois les systèmes qui aident les équipes à créer plus vite, mieux collaborer et générer un impact durable.",
    },
    primaryCta: { label: "Voir mes projets", href: "#work" },
    secondaryCta: { label: "Échangeons", href: "#contact" },
    signature:
      "Je crois que les grands produits naissent lorsque les personnes se comprennent avant de construire ensemble.",
    expertise: {
      eyebrow: "Expertise",
      heading: "Ce que j’apporte aux produits numériques",
      items: [
        {
          title: "Product Design",
          description:
            "De la recherche à l’interface, je crée des expériences numériques intuitives et utiles.",
        },
        {
          title: "Design Systems",
          description:
            "Je construis des systèmes accessibles, cohérents et évolutifs qui aident les équipes à concevoir et livrer plus vite.",
        },
        {
          title: "UX Research",
          description:
            "J’utilise la recherche, les tests et les retours terrain pour ancrer les décisions produit dans les besoins réels.",
        },
        {
          title: "Accessibility",
          description:
            "Je conçois des expériences inclusives alignées sur les principes d’accessibilité WCAG.",
        },
      ],
    },
  }
}

export { getHeroContent }
