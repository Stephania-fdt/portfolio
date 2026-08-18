import { createContext, useContext, useEffect, useMemo, useState } from "react"
import type { ReactNode } from "react"

export type Language = "en" | "fr"

const STORAGE_KEY = "portfolio-language"

const copy = {
  en: {
    nav: {
      work: "Work",
      about: "About",
      experience: "Experience",
      contact: "Contact",
      talk: "Let's talk",
    },
    controls: {
      index: "Index",
      close: "Close",
      openNavigation: "Open navigation",
      closeNavigation: "Close navigation",
      switchToEnglish: "Switch site language to English",
      switchToFrench: "Switch site language to French",
      chooseLanguage: "Choose language",
      changeLanguage: "Change language",
      language: "Language",
      zoomImage: "Open image in full size",
      playVideo: "Play video",
      openDocument: "Open document in a new tab",
    },
    common: {
      selectedWork: "Selected Work",
      allProjects: "All projects",
      viewCaseStudy: "View Case Study",
      viewAllWork: "View all my work",
      backToWork: "Selected Work",
      contact: "Contact",
      connectLinkedIn: "Connect on LinkedIn",
      emailMe: "Email me",
      stages: "stages",
      productDesigner: "Product Designer",
      introduction: "Introduction",
      specimenView: "Specimen view",
      chapters: "Chapters",
      role: "Role",
      year: "Year",
      tools: "Tools",
      loading: "Loading content…",
      primaryNavigation: "Primary navigation",
      designPhilosophy: "Design philosophy",
      disciplines: "Design Systems · Accessibility · AI",
      selectedThoughts: "Selected Thoughts",
      process: "The Process",
    },
    work: {
      intro:
        "A selection of product systems, services and research methods shaped with real teams, constraints and the people who use them in mind.",
      title: "Selected projects, systems and digital experiences.",
      description:
        "Public digital services, connected products, e-commerce and the systems that make ambitious products easier to build and sustain.",
    },
    meta: {
      homeTitle: "Stéphania — Product Designer",
      workTitle: "Work — Stéphania Fordant | Product Designer",
      aboutTitle: "About — Stéphania Fordant | Product Designer",
      caseFallbackTitle: "Case study — Stéphania",
      missingCase: "This case study doesn’t exist yet.",
    },
  },
  fr: {
    nav: {
      work: "Projets",
      about: "À propos",
      experience: "Expérience",
      contact: "Contact",
      talk: "Échangeons",
    },
    controls: {
      index: "Index",
      close: "Fermer",
      openNavigation: "Ouvrir la navigation",
      closeNavigation: "Fermer la navigation",
      switchToEnglish: "Passer le site en anglais",
      switchToFrench: "Passer le site en français",
      chooseLanguage: "Choisir la langue",
      changeLanguage: "Changer la langue",
      language: "Langue",
      zoomImage: "Agrandir l’image",
      playVideo: "Lire la vidéo",
      openDocument: "Ouvrir le document dans un nouvel onglet",
    },
    common: {
      selectedWork: "Projets sélectionnés",
      allProjects: "Tous les projets",
      viewCaseStudy: "Voir l’étude de cas",
      viewAllWork: "Voir tous mes projets",
      backToWork: "Projets sélectionnés",
      contact: "Contact",
      connectLinkedIn: "Me contacter sur LinkedIn",
      emailMe: "Me contacter par e-mail",
      stages: "étapes",
      productDesigner: "Product Designer",
      introduction: "Introduction",
      specimenView: "Vue du spécimen",
      chapters: "Chapitres",
      role: "Rôle",
      year: "Année",
      tools: "Outils",
      loading: "Chargement du contenu…",
      primaryNavigation: "Navigation principale",
      designPhilosophy: "Philosophie du design",
      disciplines: "Design Systems · Accessibilité · IA",
      selectedThoughts: "Réflexions sélectionnées",
      process: "Le processus",
    },
    work: {
      intro:
        "Une sélection de systèmes produit, services et méthodes de recherche façonnés avec de vraies équipes, des contraintes concrètes et les personnes qui les utilisent.",
      title: "Projets, systèmes et expériences numériques sélectionnés.",
      description:
        "Services numériques publics, produits connectés, e-commerce et systèmes qui rendent les produits ambitieux plus simples à créer et à faire évoluer.",
    },
    meta: {
      homeTitle: "Stéphania — Product Designer",
      workTitle: "Projets — Stéphania Fordant | Product Designer",
      aboutTitle: "À propos — Stéphania Fordant | Product Designer",
      caseFallbackTitle: "Étude de cas — Stéphania",
      missingCase: "Cette étude de cas n’existe pas encore.",
    },
  },
} as const

type Translation = (typeof copy)[Language]

type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  copy: Translation
}

type LocalizedContent<T> = Record<Language, T>

function getLocalizedContent<T>(
  content: LocalizedContent<T>,
  language: Language,
): T {
  return content[language]
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function getInitialLanguage(): Language {
  if (typeof window === "undefined") return "en"
  return window.localStorage.getItem(STORAGE_KEY) === "fr" ? "fr" : "en"
}

function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language)
    document.documentElement.lang = language
  }, [language])

  const value = useMemo(
    () => ({ language, setLanguage, copy: copy[language] }),
    [language],
  )

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context)
    throw new Error("useLanguage must be used within LanguageProvider")
  return context
}

export { LanguageProvider, useLanguage, getLocalizedContent }
export type { LocalizedContent }
