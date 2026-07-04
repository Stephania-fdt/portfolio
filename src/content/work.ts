export type WorkProject = {
  title: string
  category: string
  year: string
  sentence: string
  technologies: string[]
  href: string
}

export const workProjects: WorkProject[] = [
  {
    title: "Belgian Ministry of Foreign Affairs Design System",
    category: "Design System",
    year: "2024–2026",
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
    href: "/work/spf-design-system",
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
  {
    title: "Femmes d'Influence",
    category: "Product Design",
    year: "2023",
    sentence:
      "Designed a digital platform helping women connect, learn and grow through community-driven experiences.",
    technologies: ["UX Research", "UI Design", "Design System", "Figma"],
    href: "/work/femmes-dinfluence",
  },
]
