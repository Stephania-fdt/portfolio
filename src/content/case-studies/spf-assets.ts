export type ExpectedAsset = {
  filename: string
  /**
   * What the image should show — functional/descriptive, not finished
   * caption prose. Doubles as a sensible starting point for real alt
   * text once the file exists, but Sprint 18 owns the actual narrative
   * copy, not this manifest.
   */
  description: string
}

export type SpfAssetSection = {
  /** Matches the folder name under src/assets/case-studies/spf/. */
  folder: string
  /** Human label used on the asset checklist card. */
  label: string
  assets: ExpectedAsset[]
}

/**
 * The single source of truth for "what images does the SPF case study
 * expect, and where." Every README.md under src/assets/case-studies/spf/
 * is a hand-written mirror of this list — if you add or rename an
 * expected asset, update both. Overview and Reflection have no entries
 * here on purpose: both are text-only sections (facts and a closing
 * reflection), matching how every other case study on the site already
 * ends without imagery.
 */
export const spfAssetManifest: SpfAssetSection[] = [
  {
    folder: "hero",
    label: "Hero",
    assets: [
      {
        filename: "cover.webp",
        description:
          "The single frame that represents the whole system — a real screen or system overview, not a mockup.",
      },
    ],
  },
  {
    folder: "challenge",
    label: "The Challenge",
    assets: [
      {
        filename: "ecosystem-before.webp",
        description:
          "The federal applications as they looked before the design system — visibly inconsistent with each other.",
      },
      {
        filename: "applications-overview.webp",
        description:
          "Travel Web, Visa on Web, Visanet and the other applications this system had to unify, shown together.",
      },
    ],
  },
  {
    folder: "ux",
    label: "Research & UX",
    assets: [
      {
        filename: "user-flow.webp",
        description:
          "A real user flow diagram for one of the core SPF service journeys.",
      },
      {
        filename: "information-architecture.webp",
        description:
          "The information architecture map the interface structure had to earn its way into.",
      },
      {
        filename: "wireframes.webp",
        description:
          "Low-fidelity wireframes for core SPF screens, tested before any visual decision.",
      },
    ],
  },
  {
    folder: "foundations",
    label: "Design Foundations",
    assets: [
      {
        filename: "colors.webp",
        description: "The color foundations, before they became tokens.",
      },
      {
        filename: "typography.webp",
        description: "The typography scale and usage rules.",
      },
      {
        filename: "icons.webp",
        description: "The icon set and its usage guidelines.",
      },
      { filename: "spacing.webp", description: "The spacing scale." },
      { filename: "grid.webp", description: "The layout grid." },
      {
        filename: "elevation.webp",
        description: "The elevation levels and their use.",
      },
      {
        filename: "material-theme.webp",
        description: "The Material 3 theme configuration.",
      },
    ],
  },
  {
    folder: "tokens",
    label: "Design Tokens",
    assets: [
      {
        filename: "token-architecture.webp",
        description:
          "The token collections and variable structure, as built in Figma.",
      },
      {
        filename: "semantic-colors.webp",
        description:
          "Semantic color roles mapped from the raw palette to their meaning in the system.",
      },
      { filename: "theme-light.webp", description: "The light theme." },
      { filename: "theme-dark.webp", description: "The dark theme." },
      {
        filename: "theme-high-contrast.webp",
        description: "The high-contrast theme.",
      },
      {
        filename: "theme-medium-contrast.webp",
        description: "The medium-contrast theme.",
      },
    ],
  },
  {
    folder: "components",
    label: "Component Library",
    assets: [
      {
        filename: "overview.webp",
        description:
          "A full sheet showing the component library as one coherent system.",
      },
      {
        filename: "buttons.webp",
        description: "Button components, all states.",
      },
      { filename: "inputs.webp", description: "Input field components." },
      {
        filename: "pickers.webp",
        description: "Date and selection picker components.",
      },
      {
        filename: "notifications.webp",
        description: "Notification and alert components.",
      },
      { filename: "headers.webp", description: "The header component." },
      {
        filename: "sidebars.webp",
        description: "The sidebar navigation component.",
      },
      {
        filename: "breadcrumbs.webp",
        description: "The breadcrumb component.",
      },
      { filename: "tooltips.webp", description: "The tooltip component." },
      { filename: "steppers.webp", description: "The stepper component." },
      {
        filename: "progress.webp",
        description: "Progress indicator components.",
      },
      { filename: "radio.webp", description: "Radio and checkbox components." },
      {
        filename: "language-selector.webp",
        description: "The language selector component.",
      },
      { filename: "footer.webp", description: "The footer component." },
      {
        filename: "navigation.webp",
        description: "The primary navigation component.",
      },
    ],
  },
  {
    folder: "product",
    label: "Product Interfaces",
    assets: [
      {
        filename: "authentication.webp",
        description: "The authentication screen.",
      },
      { filename: "portal.webp", description: "The citizen portal screen." },
      { filename: "faq.webp", description: "The FAQ screen." },
      {
        filename: "articles.webp",
        description: "The articles/content screen.",
      },
      { filename: "dashboard.webp", description: "The dashboard screen." },
      {
        filename: "responsive.webp",
        description: "The same interfaces shown across breakpoints.",
      },
    ],
  },
  {
    folder: "accessibility",
    label: "Accessibility",
    assets: [
      {
        filename: "contrast.webp",
        description: "Contrast checks run across the token system.",
      },
      {
        filename: "keyboard-navigation.webp",
        description: "Keyboard navigation and focus states in use.",
      },
      {
        filename: "component-states.webp",
        description: "Component states — hover, focus, disabled, error.",
      },
    ],
  },
  { folder: "reflection", label: "Reflection", assets: [] },
]
