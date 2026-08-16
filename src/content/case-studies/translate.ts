import type { CaseStudy } from "@/content/case-studies/types"

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

function translateCaseStudy(
  study: CaseStudy,
  language: "en" | "fr",
): CaseStudy {
  if (language === "en") return study
  return {
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
  }
}

export { translateCaseStudy }
