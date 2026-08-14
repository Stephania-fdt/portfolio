import harmonyMockup from "@/assets/case-studies/harmony/mockup.png"
import jogaAuraProductPage from "@/assets/case-studies/joga-aura/product.png"
import portfolioPreview from "@/assets/case-studies/portfolio/hero-preview.png"
import spfPortalPreview from "@/assets/case-studies/spf/product/Desktop - 54.png"
import wellpackWebsitePreview from "@/assets/case-studies/wellpack/02-brand/supports/Declinaisaon_siteweb.png"

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
   * "Role · Context" in one short line — who she was on this project and
   * for whom, verified against that project's own case-study prose (never
   * invented). Optional and only set for projects with a real case-study
   * page to display it on (`CaseStudy.tsx` renders it under the eyebrow) —
   * the Portfolio entry has its own hand-built Hero with the same
   * information already, and Joga Aura has no case study yet.
   */
  roleContext?: string
  /**
   * A real project artifact, not a mockup or stock image — same rule as
   * `CaseStudyImage` (see `content/case-studies/types.ts`). Optional and
   * deliberately rare: most entries don't have one yet, and the preview
   * card's "plate" placeholder is the honest default until real material
   * exists, not a gap to paper over.
   */
  previewImage?: string
  /**
   * True only once a real, dedicated case-study route exists outside the
   * generic `content/case-studies` registry (`WorkItem` checks both) —
   * the Portfolio case study is a hand-built route
   * (`pages/case-studies/Portfolio`), not generic heading/paragraph
   * content, so it needs its own signal. Same rule either way: a promised
   * page that doesn't exist is worse than no link.
   */
  hasCaseStudy?: boolean
}

/**
 * Narrative order approved 2026-08-13 (see PRODUCT_VISION.md — supersedes
 * the 2026-07-08/09 hierarchy). SPF stays the permanent flagship; this
 * portfolio itself is the second proof point — it's the one place her
 * current practice (Design Systems, accessibility, AI-assisted workflow,
 * front-end implementation) shows up as one shipped, complete product
 * rather than a described skill.
 */
export const workProjects: WorkProject[] = [
  {
    title: "SPF Affaires étrangères",
    category: "Product Design · Design System · Accessibility",
    year: "2023–present",
    roleContext: "Product Designer · Belgian Federal Institution",
    sentence:
      "Built and governed a scalable Design System for a Belgian federal institution — embedding WCAG-based accessibility and shared standards through close, earned collaboration with developers.",
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
    previewImage: spfPortalPreview,
  },
  {
    title: "Stéphania — Portfolio",
    category: "Product Design · Design System · Front-end · AI Workflow",
    year: "2026–present",
    sentence:
      "Designed and built this portfolio itself, end to end — from a bespoke design system through to accessible, responsive front-end code, shaped iteratively through AI-assisted workflows.",
    technologies: [
      "Figma",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Claude Code",
      "WCAG",
    ],
    signalTechnologies: ["Claude Code", "WCAG"],
    href: "/work/portfolio",
    previewImage: portfolioPreview,
    hasCaseStudy: true,
  },
  {
    title: "Harmony",
    category: "Product Design",
    year: "2022",
    roleContext:
      "Product Designer · Team of 4, French connected-bracelet startup",
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
    roleContext: "UX Researcher · B2B SaaS Marketing team",
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
    previewImage: wellpackWebsitePreview,
  },
  {
    title: "Joga Aura",
    category: "E-commerce · Product Design · Shopify",
    year: "2026",
    sentence:
      "Designed and built a luxury e-commerce experience for Joga Aura, from UX/UI design through Shopify implementation, with a focus on clarity, trust and conversion.",
    technologies: ["Shopify", "Figma", "UX/UI Design", "SEO"],
    signalTechnologies: ["Shopify"],
    href: "/work/joga-aura",
    previewImage: jogaAuraProductPage,
  },
]
