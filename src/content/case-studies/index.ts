import { harmonyCaseStudy } from "@/content/case-studies/harmony"
import { jogaAuraCaseStudy } from "@/content/case-studies/joga-aura"
import type { CaseStudy } from "@/content/case-studies/types"

/**
 * Keyed by slug, not by array index — `WorkItem` checks this registry to
 * decide whether "Read Case Study" links anywhere real. Only add a project
 * here once its case study is actually written; an entry with no page to
 * go to is worse than no link at all.
 */
export const caseStudies: Record<string, CaseStudy> = {
  [harmonyCaseStudy.slug]: harmonyCaseStudy,
  [jogaAuraCaseStudy.slug]: jogaAuraCaseStudy,
}

const frenchHeadings: Record<string, string> = {
  Overview: "Vue d’ensemble",
  "The challenge": "Le défi",
  "Research & discovery": "Recherche & découverte",
  "Understanding the user": "Comprendre les utilisateurs",
  "Information architecture": "Architecture de l’information",
  "UX design": "Conception UX",
  "Testing & validation": "Tests & validation",
  "My role": "Mon rôle",
  "The process in brief": "Le processus en bref",
  "What I took from it": "Ce que j’en retiens",
  "Art direction": "Direction artistique",
  "From direction to experience": "De la direction à l’expérience",
  Wireframing: "Wireframing",
  "Coming Soon exploration": "Exploration Coming Soon",
  "From structure to final UI": "De la structure à l’interface finale",
  "Visual identity in the product": "L’identité visuelle dans le produit",
  "E-commerce & product experience": "E-commerce & expérience produit",
  "Responsive delivery": "Déclinaison responsive",
  "Figma → Shopify": "Figma → Shopify",
  "Outcome & reflection": "Résultat & réflexion",
}

function getCaseStudies(language: "en" | "fr"): Record<string, CaseStudy> {
  if (language === "en") return caseStudies
  return Object.fromEntries(
    Object.entries(caseStudies).map(([slug, study]) => [
      slug,
      {
        ...study,
        heroImage: study.heroImage
          ? {
              ...study.heroImage,
              alt: study.heroImage.frenchAlt ?? study.heroImage.alt,
            }
          : undefined,
        liveSite: study.liveSite
          ? { ...study.liveSite, label: study.liveSite.frenchLabel }
          : undefined,
        sections: study.sections.map((section) => ({
          ...section,
          heading:
            section.french?.heading ??
            frenchHeadings[section.heading] ??
            section.heading,
          title: section.french?.title ?? section.title,
          paragraphs: section.french?.paragraphs ?? section.paragraphs,
          facts: section.french?.facts ?? section.facts,
          images: section.images?.map((image, imageIndex) => ({
            ...image,
            alt: section.french?.imageAlts?.[imageIndex] ?? image.alt,
          })),
        })),
      },
    ]),
  )
}

export { getCaseStudies }

export type {
  CaseStudy,
  CaseStudySection,
  CaseStudyDisclosureSection,
} from "@/content/case-studies/types"
