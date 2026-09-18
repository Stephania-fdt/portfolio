// Home page Selected Work thumbnails — distinct from each project's
// in-case-study imagery (Hero covers, iteration examples, etc.), which
// keep their own separate imports elsewhere and are untouched by this set.
import spfHomeThumbnail from "@/assets/case-studies/spf/home-thumbnail.png"
import spfHomePreview from "@/assets/case-studies/spf/product/Desktop - 54.png"
import portfolioHomeThumbnail from "@/assets/case-studies/portfolio/home-thumbnail.png"
import harmonyHomeThumbnail from "@/assets/case-studies/harmony/home-thumbnail.webp"
import harmonyHomePreview from "@/assets/images/harmony/harmony-hero.webp.png"
import wellpackHomeThumbnail from "@/assets/case-studies/wellpack/home-thumbnail.png"
import wellpackHomePreview from "@/assets/case-studies/wellpack/home-preview.png"
import jogaAuraHomeThumbnail from "@/assets/case-studies/joga-aura/home-thumbnail.png"

export type WorkProject = {
  title: string
  /** Short project name retained as the card's secondary eyebrow. */
  cardLabel: string
  /** Recruiter-facing problem statement used only as the card heading. */
  cardTitle: string
  category: string
  year: string
  sentence: string
  homeProblem: string
  homeRole: string
  homeOutcome: string
  homeProblemFr: string
  homeRoleFr: string
  homeOutcomeFr: string
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
   * information already.
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
  /** Optional homepage-only artifact when the archive thumbnail is less representative. */
  homePreviewImage?: string
  homePreviewAlt?: string
  homePreviewAltFr?: string
  homePreviewWidth?: number
  homePreviewHeight?: number
  previewAlt?: string
  previewAltFr?: string
  previewWidth?: number
  previewHeight?: number
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
const unorderedWorkProjects: WorkProject[] = [
  {
    title: "SPF Affaires étrangères",
    cardLabel: "SPF Foreign Affairs",
    cardTitle:
      "Scaling Accessible Public Services with a Unified Design System",
    category: "Product Design · Design System · Accessibility",
    year: "2023–present",
    roleContext: "Product Designer · Belgian Federal Institution",
    sentence:
      "Built and governed a scalable Design System for a Belgian federal institution — embedding WCAG-based accessibility and shared standards through close, earned collaboration with developers.",
    homeProblem:
      "Several public-service applications lacked a shared UX methodology and consistent interface language.",
    homeRole: "Product Designer",
    homeOutcome:
      "A Design System and Angular Material UI Kit shared across teams.",
    homeProblemFr:
      "Plusieurs applications de service public ne partageaient ni méthode UX ni langage d’interface cohérent.",
    homeRoleFr: "Product Designer",
    homeOutcomeFr:
      "Un Design System et un UI Kit Angular Material partagés entre les équipes.",
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
    previewImage: spfHomeThumbnail,
    homePreviewImage: spfHomePreview,
    homePreviewAlt:
      "SPF citizen portal authentication screen, built from the shared Design System",
    homePreviewAltFr:
      "Écran d’authentification du portail citoyen du SPF, construit à partir du Design System partagé",
    homePreviewWidth: 1440,
    homePreviewHeight: 1024,
    hasCaseStudy: true,
  },
  {
    title: "Stéphania — Portfolio",
    cardLabel: "Stéphania — Portfolio",
    cardTitle:
      "Designing and Building an Accessible Portfolio with AI-Assisted Workflows",
    category: "Product Design · Design System · Front-end · AI Workflow",
    year: "2026–present",
    sentence:
      "Designed and built this portfolio itself, end to end — from a bespoke design system through to accessible, responsive front-end code, shaped iteratively through AI-assisted workflows.",
    homeProblem:
      "The previous portfolio did not clearly present the depth of the work or professional experience.",
    homeRole: "Product Designer · Front-end implementation",
    homeOutcome:
      "A bilingual, accessible and responsive portfolio built with reusable components.",
    homeProblemFr:
      "Le portfolio précédent ne présentait pas clairement la profondeur des projets ni le parcours professionnel.",
    homeRoleFr: "Product Designer · Implémentation front-end",
    homeOutcomeFr:
      "Un portfolio bilingue, accessible et responsive construit avec des composants réutilisables.",
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
    previewImage: portfolioHomeThumbnail,
    hasCaseStudy: true,
  },
  {
    title: "Harmony",
    cardLabel: "Harmony",
    cardTitle: "Turning User Needs into a Connected Product Experience",
    category: "Product Design",
    year: "2022",
    roleContext:
      "Product Designer · Team of 4, French connected-bracelet startup",
    sentence:
      "Part of a four-person team taking a connected bracelet to the French market — from user research through interface design and testing.",
    homeProblem:
      "Harmony’s connected bracelet needed a consistent experience across its website and companion mobile app.",
    homeRole: "Product Designer · Team of 4",
    homeOutcome:
      "Tested web and mobile prototypes supported by a shared Design System.",
    homeProblemFr:
      "Le bracelet connecté Harmony nécessitait une expérience cohérente entre le site web et l’application mobile.",
    homeRoleFr: "Product Designer · Équipe de 4",
    homeOutcomeFr:
      "Des prototypes web et mobile testés, soutenus par un Design System partagé.",
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
    previewImage: harmonyHomeThumbnail,
    previewAlt:
      "Harmony connected-bracelet website displayed on a desktop monitor",
    previewAltFr:
      "Site du bracelet connecté Harmony affiché sur un écran d’ordinateur",
    previewWidth: 1600,
    previewHeight: 900,
    homePreviewImage: harmonyHomePreview,
    homePreviewAlt:
      "Harmony website homepage interface, showing the connected-bracelet hero section",
    homePreviewAltFr:
      "Interface de la page d’accueil du site Harmony, montrant la section hero du bracelet connecté",
    homePreviewWidth: 2560,
    homePreviewHeight: 1364,
    hasCaseStudy: true,
  },
  {
    title: "WellPack",
    cardLabel: "WellPack",
    cardTitle: "Turning User Research into Evidence-Based Marketing Decisions",
    category: "Marketing Design",
    year: "2021–2023",
    roleContext: "UX Researcher · B2B SaaS Marketing team",
    sentence:
      "Designed a repeatable research methodology turning client requests into evidence-based landing page briefs for B2B marketing campaigns.",
    homeProblem:
      "Landing-page briefs lacked a shared understanding of client audiences and markets.",
    homeRole: "UX Researcher",
    homeOutcome:
      "A research method and design briefs based on audience and market analysis.",
    homeProblemFr:
      "Les briefs de landing pages manquaient d’une compréhension partagée des audiences et des marchés clients.",
    homeRoleFr: "UX Researcher",
    homeOutcomeFr:
      "Une méthode de recherche et des briefs fondés sur l’analyse des audiences et des marchés.",
    technologies: [
      "UX Research",
      "Personas",
      "Market Analysis",
      "Design Briefs",
      "User Testing",
    ],
    signalTechnologies: ["UX Research", "Design Briefs"],
    href: "/work/wellpack",
    previewImage: wellpackHomeThumbnail,
    homePreviewImage: wellpackHomePreview,
    homePreviewAlt:
      "WellPack’s completed website homepage hero, showing the final interface and brand system in use",
    homePreviewAltFr:
      "Section d’accueil du site final de WellPack, montrant l’interface et le système de marque en situation",
    homePreviewWidth: 467,
    homePreviewHeight: 275,
    hasCaseStudy: true,
  },
  {
    title: "Joga Aura",
    cardLabel: "Joga Aura",
    cardTitle:
      "Shaping a Premium Shopify Journey from Product Discovery to Conversion",
    category: "E-commerce · Product Design · Shopify",
    year: "2026",
    roleContext:
      "Product Design · UX/UI · Art Direction · Shopify implementation",
    sentence:
      "Designed and built a luxury e-commerce experience for Joga Aura, from UX/UI design through Shopify implementation, with a focus on clarity, trust and conversion.",
    homeProblem:
      "Create a clear premium shopping journey for the Blue Serenity yoga mat.",
    homeRole: "UX/UI Design · Shopify implementation",
    homeOutcome: "A responsive e-commerce storefront implemented on Shopify.",
    homeProblemFr:
      "Créer un parcours d’achat premium et clair pour le tapis de yoga Blue Serenity.",
    homeRoleFr: "UX/UI Design · Implémentation Shopify",
    homeOutcomeFr:
      "Une boutique e-commerce responsive implémentée sur Shopify.",
    technologies: ["Shopify", "Figma", "UX/UI Design", "SEO"],
    signalTechnologies: ["Shopify"],
    href: "/work/joga-aura",
    previewImage: jogaAuraHomeThumbnail,
    hasCaseStudy: true,
  },
]

const projectOrder = [
  "/work/spf-design-system",
  "/work/harmony",
  "/work/wellpack",
  "/work/joga-aura",
  "/work/portfolio",
] as const

export const workProjects = projectOrder.map((href) => {
  const project = unorderedWorkProjects.find((item) => item.href === href)
  if (!project) throw new Error(`Project not found: ${href}`)
  return project
})

const featuredProjectHrefs = [
  "/work/spf-design-system",
  "/work/harmony",
  "/work/wellpack",
] as const

/** Curated Home preview, derived from the complete `/work` archive. */
export const featuredWorkProjects = featuredProjectHrefs.map((href) => {
  const project = workProjects.find((item) => item.href === href)

  if (!project) throw new Error(`Featured project not found: ${href}`)
  return project
})

function getWorkProjects(language: "en" | "fr"): WorkProject[] {
  if (language === "en") return workProjects

  const frenchCopy: Record<
    string,
    Pick<WorkProject, "cardTitle" | "category" | "sentence" | "roleContext">
  > = {
    "/work/spf-design-system": {
      cardTitle:
        "Faire évoluer des services publics accessibles grâce à un Design System unifié",
      category: "Product Design · Design System · Accessibilité",
      roleContext: "Product Designer · Institution fédérale belge",
      sentence:
        "Création et gouvernance d’un Design System évolutif pour une institution fédérale belge, avec des standards partagés et une accessibilité fondée sur les WCAG.",
    },
    "/work/portfolio": {
      cardTitle:
        "Concevoir et développer un portfolio accessible grâce à un workflow assisté par l’IA",
      category: "Product Design · Design System · Front-end · Workflow IA",
      sentence:
        "Conception et développement de ce portfolio de bout en bout : Design System sur mesure, front-end accessible et responsive, amélioré par des workflows assistés par IA.",
    },
    "/work/harmony": {
      cardTitle:
        "Transformer les besoins utilisateurs en expérience produit connectée",
      category: "Product Design",
      roleContext:
        "Product Designer · Équipe de 4, start-up française de bracelets connectés",
      sentence:
        "Participation à un projet de bracelet connecté destiné au marché français, de la recherche utilisateur à la conception d’interface et aux tests.",
    },
    "/work/wellpack": {
      cardTitle:
        "Transformer la recherche utilisateur en décisions marketing fondées sur des données",
      category: "Marketing Design",
      roleContext: "UX Researcher · Équipe marketing B2B SaaS",
      sentence:
        "Conception d’une méthode de recherche reproductible transformant les demandes clients en briefs de landing pages fondés sur des données pour des campagnes B2B.",
    },
    "/work/joga-aura": {
      cardTitle:
        "Concevoir une expérience Shopify premium, de la découverte à la conversion",
      category: "E-commerce · Product Design · Shopify",
      roleContext:
        "Product Design · UX/UI · Direction artistique · Implémentation Shopify",
      sentence:
        "Conception et développement d’une expérience e-commerce haut de gamme pour Joga Aura, de l’UX/UI à l’implémentation Shopify, centrée sur la clarté, la confiance et la conversion.",
    },
  }

  return workProjects.map((project) => ({
    ...project,
    ...frenchCopy[project.href],
  }))
}

function getFeaturedWorkProjects(language: "en" | "fr"): WorkProject[] {
  const projects = getWorkProjects(language)
  return featuredProjectHrefs.map((href) => {
    const project = projects.find((item) => item.href === href)
    if (!project) throw new Error(`Featured project not found: ${href}`)
    return project
  })
}

export { getWorkProjects, getFeaturedWorkProjects }
