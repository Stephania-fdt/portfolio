import harmonyMockup from "@/assets/case-studies/harmony/mockup.png"

export type WorkProject = {
  title: string
  category: string
  year: string
  sentence: string
  technologies: string[]
  /**
   * Subset of `technologies` that most directly proves this project's
   * hiring signal — rendered with more weight than the rest. Optional and
   * per-project on purpose: what's "signal" for a Design System project
   * (WCAG, Design Tokens) isn't what would matter for an e-commerce one.
   */
  signalTechnologies?: string[]
  href: string
  /**
   * A real project artifact, not a mockup or stock image — same rule as
   * `CaseStudyImage` (see `content/case-studies/types.ts`). Optional and
   * deliberately rare: most entries don't have one yet, and the preview
   * card's "plate" placeholder is the honest default until real material
   * exists, not a gap to paper over.
   */
  previewImage?: string
}

export const workProjects: WorkProject[] = [
  {
    title: "Belgian Ministry of Foreign Affairs Design System",
    category: "Design System",
    year: "2023–present",
    sentence:
      "Built a scalable Design System improving consistency, accessibility and collaboration across government digital services.",
    technologies: [
      "Figma",
      "Angular Material",
      "Tokens Studio",
      "Zeroheight",
      "WCAG",
      "Design Tokens",
    ],
    signalTechnologies: ["WCAG", "Design Tokens"],
    href: "/work/spf-design-system",
  },
  {
    title: "Harmony",
    category: "Product Design",
    year: "2022",
    sentence:
      "Part of a four-person team taking a connected bracelet to the French market — from user research through interface design and testing.",
    technologies: [
      "Figma",
      "Miro",
      "UXPin",
      "Design Thinking",
      "UX Research",
      "A/B Testing",
    ],
    signalTechnologies: ["Design Thinking", "UX Research"],
    href: "/work/harmony",
    previewImage: harmonyMockup,
  },
  {
    title: "WellPack",
    category: "Marketing Design",
    year: "2021–2023",
    sentence:
      "Designed a repeatable research methodology turning client requests into evidence-based landing page briefs for B2B marketing campaigns.",
    technologies: [
      "UX Research",
      "Personas",
      "Market Analysis",
      "Design Briefs",
      "User Testing",
    ],
    signalTechnologies: ["UX Research", "Design Briefs"],
    href: "/work/wellpack",
  },
  {
    title: "Femmes d'Influence",
    category: "Product Design",
    year: "2023",
    sentence:
      "Designed a digital platform helping women connect, learn and grow through community-driven experiences.",
    technologies: ["UX Research", "UI Design", "Design System", "Figma"],
    href: "/work/femmes-dinfluence",
  },
  {
    title: "Sunrex",
    category: "E-commerce",
    year: "2024",
    sentence:
      "Redesigned the e-commerce experience to improve trust, usability and customer conversion.",
    technologies: ["Shopify", "UX Research", "UI Design", "SEO", "Figma"],
    href: "/work/sunrex",
  },
]
