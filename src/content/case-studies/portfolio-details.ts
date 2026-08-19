import type { LocalizedContent } from "@/i18n"

type PortfolioDetails = {
  ai: {
    subheading: string
    steps: { label: string; statement: string }[]
  }
  frontend: {
    subheading: string
    intro: string
    relationships: { from: string; to: string }[]
  }
  testing: {
    subheading: string
    introduction: string
    checks: { label: string; value: string }[]
    infrastructureLabel: string
    infrastructure: string
    conclusion: string
  }
  pageTitle: string
}

/**
 * Secondary-reading content only — everything here lives behind the
 * "How it was built" disclosure on the Designing & Building section, not
 * in the case study's main scroll. `portfolio-page.ts` carries the
 * scan-level narrative; this file carries the receipts for whoever opens
 * the deep dive.
 */
const portfolioDetails: LocalizedContent<PortfolioDetails> = {
  en: {
    ai: {
      subheading: "The five-step loop",
      steps: [
        {
          label: "Human Direction",
          statement:
            "I define the objective, constraints, visual direction and expected outcome.",
        },
        {
          label: "AI Exploration",
          statement:
            "AI helps explore implementation approaches, generate code, identify issues and accelerate iteration.",
        },
        {
          label: "Design Review",
          statement:
            "I evaluate the result against the original design intent, UX principles and accessibility requirements.",
        },
        {
          label: "Iteration",
          statement:
            "I refine the implementation through targeted prompts and corrections.",
        },
        {
          label: "Validation",
          statement:
            "The result is checked technically and visually before being accepted.",
        },
      ],
    },
    frontend: {
      subheading: "Tools in the chain",
      intro: "The exact chain, from design tool to validation:",
      relationships: [
        { from: "Figma", to: "Design direction" },
        { from: "Design System", to: "Visual consistency" },
        { from: "React / Vite / TypeScript", to: "Component architecture" },
        { from: "Tailwind", to: "Styling and responsive implementation" },
        {
          from: "Git / GitHub / VS Code",
          to: "Versioning and implementation workflow",
        },
        {
          from: "ChatGPT / Codex / Claude Code",
          to: "AI-assisted exploration, iteration and code review",
        },
        { from: "WCAG", to: "Accessibility validation" },
      ],
    },
    testing: {
      subheading: "What was actually checked",
      introduction:
        "The checks that were actually run against this codebase, not a general claim about quality.",
      checks: [
        { label: "TypeScript", value: "Clean — tsc -b --noEmit" },
        { label: "Lint", value: "Clean — oxlint" },
        { label: "Horizontal Overflow", value: "None, 320px–1440px" },
        { label: "Desktop Visual Check", value: "Verified" },
        { label: "Mobile Visual Check", value: "Verified" },
        {
          label: "Breakpoints Tested",
          value: "320 / 375 / 390 / 430 / 768 / 1024 / 1440",
        },
        {
          label: "Project Hierarchy",
          value: "Verified — 5 projects, exact order",
        },
      ],
      infrastructureLabel: "Supporting Infrastructure",
      infrastructure:
        "An automated WCAG A/AA accessibility test (axe-core, via Playwright) runs against the home page, and a pre-commit hook runs lint on every commit — real, standing infrastructure, not a one-time pass.",
      conclusion:
        "Every layout change was checked at 320px–1440px before shipping — not assumed.",
    },
    pageTitle: "Stéphania — Portfolio — Case study",
  },
  fr: {
    ai: {
      subheading: "La boucle en cinq étapes",
      steps: [
        {
          label: "Direction humaine",
          statement:
            "Je définis l’objectif, les contraintes, la direction visuelle et le résultat attendu.",
        },
        {
          label: "Exploration assistée par IA",
          statement:
            "L’IA aide à explorer des pistes, structurer les contenus, implémenter et identifier les problèmes.",
        },
        {
          label: "Évaluation design",
          statement:
            "J’évalue chaque proposition selon l’intention, les besoins utilisateurs, l’accessibilité et la cohérence.",
        },
        {
          label: "Implémentation",
          statement:
            "Je transforme la direction retenue en composants React et TypeScript réutilisables.",
        },
        {
          label: "Tests et itérations",
          statement:
            "Le résultat est vérifié techniquement et visuellement, puis corrigé avant validation.",
        },
      ],
    },
    frontend: {
      subheading: "Les outils de la chaîne",
      intro: "La chaîne exacte, de l’outil de design à la validation :",
      relationships: [
        { from: "Figma", to: "Direction design" },
        { from: "Design System", to: "Cohérence visuelle" },
        {
          from: "React / Vite / TypeScript",
          to: "Architecture des composants",
        },
        { from: "Tailwind CSS", to: "Styles et implémentation responsive" },
        {
          from: "Git / GitHub / VS Code",
          to: "Versionnage et workflow d’implémentation",
        },
        {
          from: "ChatGPT / Codex / Claude Code",
          to: "Exploration, itération et revue de code assistées par IA",
        },
        { from: "WCAG", to: "Validation de l’accessibilité" },
      ],
    },
    testing: {
      subheading: "Ce qui a été réellement vérifié",
      introduction:
        "Les contrôles réellement exécutés sur cette base de code, et non une affirmation générale sur sa qualité.",
      checks: [
        { label: "TypeScript", value: "Valide — tsc -b --noEmit" },
        { label: "Lint", value: "Valide — oxlint" },
        {
          label: "Débordement horizontal",
          value: "Aucun, de 320 px à 1440 px",
        },
        { label: "Contrôle visuel desktop", value: "Vérifié" },
        { label: "Contrôle visuel mobile", value: "Vérifié" },
        {
          label: "Breakpoints testés",
          value: "320 / 375 / 390 / 430 / 768 / 1024 / 1440",
        },
        {
          label: "Hiérarchie des projets",
          value: "Vérifiée — 5 projets, ordre exact",
        },
      ],
      infrastructureLabel: "Infrastructure de soutien",
      infrastructure:
        "Un test automatisé d’accessibilité WCAG A/AA — axe-core via Playwright — s’exécute sur la page d’accueil, et un hook pre-commit lance le lint à chaque commit : une véritable infrastructure permanente, non un passage unique.",
      conclusion:
        "Chaque modification de mise en page a été vérifiée de 320 px à 1440 px avant sa mise en ligne, et non supposée correcte.",
    },
    pageTitle: "Stéphania — Portfolio — Étude de cas",
  },
}

export { portfolioDetails }
