import type { LocalizedContent } from "@/i18n"

type HomeProfileContent = {
  kicker: string
  title: string
  paragraphs: string[]
  experienceCta: string
}

const homeProfileContent: LocalizedContent<HomeProfileContent> = {
  en: {
    kicker: "A little about me",
    title: "I’m curious about how products are built — not only how they look.",
    paragraphs: [
      "I’m Stéphania, a Product Designer based in Brussels. I work with business teams, developers and users to turn real constraints into clear product decisions.",
      "After 6+ years across public services, research and digital products, I’m looking for a senior role where accessibility, systems thinking and collaboration shape the work from the start.",
    ],
    experienceCta: "View experience & CV",
  },
  fr: {
    kicker: "Quelques mots sur moi",
    title:
      "Je m’intéresse à la manière dont les produits sont construits — pas seulement à leur apparence.",
    paragraphs: [
      "Je suis Stéphania, Product Designer basée à Bruxelles. Je travaille avec les équipes métier, les développeurs et les utilisateurs pour transformer des contraintes concrètes en décisions produit claires.",
      "Après plus de 6 ans dans les services publics, la recherche et les produits numériques, je recherche aujourd’hui un rôle senior où l’accessibilité, les systèmes et la collaboration font partie du travail dès le départ.",
    ],
    experienceCta: "Voir mon expérience & mon CV",
  },
}

export { homeProfileContent }
export type { HomeProfileContent }
