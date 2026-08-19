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
          label: study.heroImage.frenchLabel ?? study.heroImage.label,
          caption: study.heroImage.frenchCaption ?? study.heroImage.caption,
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
      processSteps: section.french?.processSteps ?? section.processSteps,
      images: section.images?.map((image, imageIndex) => ({
        ...image,
        alt: section.french?.imageAlts?.[imageIndex] ?? image.alt,
        label:
          section.french?.imageLabels?.[imageIndex] ??
          image.frenchLabel ??
          image.label,
        caption:
          section.french?.imageCaptions?.[imageIndex] ??
          image.frenchCaption ??
          image.caption,
      })),
      videos: section.videos?.map((video, videoIndex) => ({
        ...video,
        posterAlt:
          section.french?.videoPosterAlts?.[videoIndex] ??
          video.frenchPosterAlt ??
          video.posterAlt,
        label:
          section.french?.videoLabels?.[videoIndex] ??
          video.frenchLabel ??
          video.label,
        caption:
          section.french?.videoCaptions?.[videoIndex] ??
          video.frenchCaption ??
          video.caption,
        sizeNote:
          section.french?.videoSizeNotes?.[videoIndex] ??
          video.frenchSizeNote ??
          video.sizeNote,
      })),
      document: section.document
        ? { ...section.document, label: section.document.frenchLabel }
        : undefined,
      subsections: section.subsections?.map((sub) => ({
        ...sub,
        title: sub.french?.title ?? sub.title,
        paragraphs: sub.french?.paragraphs ?? sub.paragraphs,
        images: sub.images?.map((image, imageIndex) => ({
          ...image,
          alt: sub.french?.imageAlts?.[imageIndex] ?? image.alt,
          label:
            sub.french?.imageLabels?.[imageIndex] ??
            image.frenchLabel ??
            image.label,
          caption:
            sub.french?.imageCaptions?.[imageIndex] ??
            image.frenchCaption ??
            image.caption,
        })),
      })),
      disclosure: section.disclosure
        ? {
            ...section.disclosure,
            summary: section.disclosure.frenchSummary,
            sections: section.disclosure.sections.map((sub) => ({
              ...sub,
              title: sub.french?.title ?? sub.title,
              paragraphs: sub.french?.paragraphs ?? sub.paragraphs,
              images: sub.images?.map((image, imageIndex) => ({
                ...image,
                alt: sub.french?.imageAlts?.[imageIndex] ?? image.alt,
                label:
                  sub.french?.imageLabels?.[imageIndex] ??
                  image.frenchLabel ??
                  image.label,
                caption:
                  sub.french?.imageCaptions?.[imageIndex] ??
                  image.frenchCaption ??
                  image.caption,
              })),
            })),
          }
        : undefined,
    })),
  }
}

export { translateCaseStudy }
