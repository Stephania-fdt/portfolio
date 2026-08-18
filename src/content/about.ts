import {
  getLocalizedContent,
  type Language,
  type LocalizedContent,
} from "@/i18n"

export type AboutSection = {
  id: string
  title: string
  paragraphs: string[]
}

export type AboutContent = {
  eyebrow: string
  heading: string
  introduction: string
  sections: AboutSection[]
  primaryCta: string
  secondaryCta: string
}

/** Approved bilingual copy for the standalone `/about` route. */
export const aboutContent: LocalizedContent<AboutContent> = {
  en: {
    eyebrow: "About",
    heading:
      "I design with the people who use products — and the teams who build them — in mind.",
    introduction:
      "I’m Stéphania, a Product Designer based in Brussels. For more than six years, I’ve designed digital products and services by balancing user needs, business goals and technical constraints.",
    sections: [
      {
        id: "what-drives-me",
        title: "What drives me",
        paragraphs: [
          "What first drew me to Product Design was the opportunity to understand users: what gets in their way, what they genuinely need and what makes an experience useful in their everyday lives.",
          "My curiosity about technology pushes me to look beyond the screen. I like understanding how a product is built, how its components work and what makes a solution feasible so I can collaborate more effectively with developers.",
          "Outside work, dance, photography and basketball feed my creativity, energy and ability to notice both details and team dynamics.",
        ],
      },
      {
        id: "how-i-work",
        title: "How I work",
        paragraphs: [
          "When facing a complex problem, I start by clarifying the real issue, listening to stakeholders and examining the technical constraints.",
          "When working with developers, I translate business needs, build a shared language and look for a feasible compromise. Solutions often become stronger when they evolve through technical discussion.",
          "While working on the Belgian Foreign Affairs Design System, some solutions were adjusted with developers to preserve the user intent while respecting Angular Material, accessibility requirements and implementation realities.",
          "I prefer building decisions that the team understands and supports rather than arriving with a fully fixed answer.",
        ],
      },
      {
        id: "what-i-am-looking-for",
        title: "What I’m looking for",
        paragraphs: [
          "I’m now looking for a Senior Product Designer role within a structured product team, working closely with PMs, business analysts and developers.",
          "My ideal environment provides real access to users, values testing and research, and combines autonomy with clear objectives. I want to contribute from early product framing through implementation while supporting Design Systems and accessibility across teams.",
          "My goal is a role where design contributes to product decisions — not only to interface execution after the important choices have already been made.",
        ],
      },
    ],
    primaryCta: "View my experience & CV",
    secondaryCta: "Contact me",
  },
  fr: {
    eyebrow: "À propos",
    heading:
      "Je conçois avec les personnes qui utilisent les produits — et les équipes qui les construisent.",
    introduction:
      "Je suis Stéphania, Product Designer basée à Bruxelles. Depuis plus de six ans, je conçois des produits et services numériques en conciliant les besoins des utilisateurs, les objectifs métier et les contraintes techniques.",
    sections: [
      {
        id: "ce-qui-m-anime",
        title: "Ce qui m’anime",
        paragraphs: [
          "Ce qui m’a attirée vers le Product Design, c’est d’abord la possibilité de comprendre les utilisateurs : ce qui les bloque, ce dont ils ont réellement besoin et ce qui rend une expérience utile dans leur quotidien.",
          "Ma curiosité technologique me pousse à regarder au-delà des écrans. J’aime comprendre comment un produit est construit, comment ses composants fonctionnent et ce qui rend une solution réalisable afin de mieux collaborer avec les développeurs.",
          "En dehors du travail, la danse, la photographie et le basketball nourrissent ma créativité, mon énergie et ma manière d’observer les détails comme les dynamiques collectives.",
        ],
      },
      {
        id: "ma-maniere-de-travailler",
        title: "Ma manière de travailler",
        paragraphs: [
          "Face à un problème complexe, je commence par clarifier le vrai sujet, écouter les parties prenantes et étudier les contraintes techniques.",
          "Avec les développeurs, je traduis les besoins métier, construis un langage commun et recherche un compromis réalisable. Une solution gagne souvent à évoluer au fil des échanges techniques.",
          "Sur le Design System du SPF Affaires étrangères, certaines solutions ont ainsi été ajustées avec les développeurs pour préserver l’intention utilisateur tout en respectant Angular Material, l’accessibilité et la réalité de l’implémentation.",
          "Je préfère construire des décisions comprises et partagées par l’équipe plutôt qu’arriver avec une réponse déjà figée.",
        ],
      },
      {
        id: "ce-que-je-recherche",
        title: "Ce que je recherche aujourd’hui",
        paragraphs: [
          "Je souhaite aujourd’hui évoluer comme Senior Product Designer au sein d’une équipe produit structurée, en collaboration étroite avec les PM, BA et développeurs.",
          "Mon environnement idéal donne un accès réel aux utilisateurs, valorise les tests et la recherche, et associe autonomie et objectifs clairs. Je veux intervenir en amont, accompagner le produit jusqu’à sa réalisation et contribuer de manière transverse aux Design Systems et à l’accessibilité.",
          "Je vise un rôle où le design participe aux décisions produit — pas uniquement à l’exécution des interfaces lorsque les choix ont déjà été faits.",
        ],
      },
    ],
    primaryCta: "Voir mon expérience & mon CV",
    secondaryCta: "Me contacter",
  },
}

function getAboutContent(language: Language): AboutContent {
  return getLocalizedContent(aboutContent, language)
}

export { getAboutContent }
