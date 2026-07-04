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
}
