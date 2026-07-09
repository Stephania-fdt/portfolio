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
}
