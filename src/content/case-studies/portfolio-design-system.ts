import type { LocalizedContent } from "@/i18n"

type DesignSystemDetailContent = {
  introduction: string
  typography: { label: string; paragraph: string }
  colors: { label: string; paragraph: string }
  spacing: { label: string; paragraph: string }
  motion: { label: string; paragraph: string }
}

/**
 * Real token values, copied verbatim from `src/index.css` — the "Design
 * system reference" disclosure on the Key Design Decisions section. The
 * three real component screenshots that used to live here moved to
 * Final Experience, where the page shows the product rather than
 * explains it.
 */
const portfolioDesignSystemContent: LocalizedContent<DesignSystemDetailContent> =
  {
    en: {
      introduction:
        "Every section on this site draws from the same small set of tokens — three type families, a fluid spacing scale, one motion curve, one accent color used deliberately rather than often.",
      typography: {
        label: "Typography",
        paragraph:
          "Three families, each with one job: General Sans for headings, Inter for body and UI text, IBM Plex Mono reserved for construction-language moments — numerals, edition marks, category labels — never body copy. The type scale itself is fluid above the 2xl step, sized with `clamp()` so headings resize smoothly across viewports instead of jumping at breakpoints.",
      },
      colors: {
        label: "Color System",
        paragraph:
          "A warm, near-neutral background and foreground carry almost every screen. One brand color — a deep burgundy — is reserved for deliberate moments (an active nav link, a category tag, a hover state), not wired in as a general UI color. Its own token comment says why directly: `reserved for deliberate brand moments, not a replacement for --primary/--accent in general UI`.",
      },
      spacing: {
        label: "Spacing",
        paragraph:
          "Three named, fluid steps instead of a fixed pixel scale — container padding, section rhythm, and a smaller “section-sm” step for tighter chapters. Each one is a `clamp()`, so the same token stays proportionate from a 320px screen to a 1440px one, rather than needing per-breakpoint overrides.",
      },
      motion: {
        label: "Motion & Interaction Patterns",
        paragraph:
          "One easing curve, three durations, used consistently rather than tuned per component. Interactions stay deliberately quiet: a hover shifts an arrow 2px, lightens a border, nudges an image scale — never a bounce, never an overshoot. Every animated component checks `useReducedMotion()` and a site-wide `prefers-reduced-motion` media query collapses every transition to near-zero for anyone who has asked for that.",
      },
    },
    fr: {
      introduction:
        "Chaque section du site puise dans le même ensemble réduit de tokens : trois familles typographiques, une échelle d’espacement fluide, une courbe de mouvement et une couleur d’accent utilisée intentionnellement plutôt que fréquemment.",
      typography: {
        label: "Typographie",
        paragraph:
          "Trois familles, chacune avec une fonction : General Sans pour les titres, Inter pour le corps de texte et l’UI, IBM Plex Mono réservée au langage de construction — numéros, marques d’édition, labels de catégories — jamais au corps de texte. L’échelle typographique devient fluide au-dessus du niveau 2xl grâce à `clamp()`, afin que les titres évoluent progressivement entre les viewports plutôt que de sauter aux breakpoints.",
      },
      colors: {
        label: "Système de couleurs",
        paragraph:
          "Un arrière-plan et un premier plan chauds, presque neutres, portent la quasi-totalité des écrans. Une seule couleur de marque — un bordeaux profond — est réservée aux moments intentionnels : lien de navigation actif, tag de catégorie ou état hover. Elle n’est pas utilisée comme couleur UI générale. Le commentaire de son token l’explique directement : `reserved for deliberate brand moments, not a replacement for --primary/--accent in general UI`.",
      },
      spacing: {
        label: "Espacement",
        paragraph:
          "Trois niveaux fluides nommés remplacent une échelle fixe en pixels : padding du container, rythme des sections et niveau « section-sm » plus réduit pour les chapitres resserrés. Chacun utilise `clamp()` afin qu’un même token reste proportionnel d’un écran de 320 px à un écran de 1440 px, sans surcharge par breakpoint.",
      },
      motion: {
        label: "Mouvements & patterns d’interaction",
        paragraph:
          "Une courbe d’easing et trois durées sont utilisées de manière cohérente plutôt qu’ajustées composant par composant. Les interactions restent volontairement discrètes : un hover déplace une flèche de 2 px, éclaircit une bordure ou augmente légèrement l’échelle d’une image — jamais de rebond ni de dépassement. Chaque composant animé vérifie `useReducedMotion()` et une media query globale `prefers-reduced-motion` réduit chaque transition presque à zéro pour les personnes qui en font la demande.",
      },
    },
  }

export { portfolioDesignSystemContent }
