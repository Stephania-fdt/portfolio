import type { LocalizedContent } from "@/i18n"

type PortfolioDetails = {
  ai: {
    kicker: string
    title: string
    intro: string
    steps: { label: string; statement: string }[]
    exampleLabel: string
    example: string
    codeLabel: string
    code: string
    conclusion: string
  }
  frontend: {
    kicker: string
    intro: string
    relationships: { from: string; to: string }[]
  }
  learnings: { kicker: string; items: string[] }
  pageTitle: string
}

const portfolioDetails: LocalizedContent<PortfolioDetails> = {
  en: {
    ai: {
      kicker: "Designing with AI",
      title: "AI as a design and development partner",
      intro:
        "Artificial intelligence supported visual exploration, content structuring, front-end implementation and code review. Every strategic, UX and visual decision remained human-led and was evaluated according to user needs, accessibility and consistency.",
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
      exampleLabel: "One Real Pass, Not a Hypothetical",
      example:
        "The Joga Aura entry in Selected Work is a real instance of this loop, not an illustration built after the fact. Direction: replace a placeholder with a real project visual, and explicitly do not fabricate one. Exploration: searched the available project files for a genuine Joga Aura asset rather than generating a mockup. Review: two real candidates existed — a homepage capture and a product page — and the product page was chosen because it read cleaner, without visible placeholder copy. Iteration: the chosen image was cropped to the card’s existing aspect ratio rather than distorted or replaced with something more convenient. Validation: typecheck, lint and a full 320px–1440px responsive sweep ran again before the change shipped.",
      codeLabel: "Documented AI workflow example in code",
      code: `// Direction: real asset only, no fabricated visual.
// Exploration: search existing project files for "joga aura".
// Review: product page chosen over homepage — no lorem ipsum
//         visible in the usable crop region.
// Iteration: cropped to the card's existing 4:3 aspect ratio.
// Validation: tsc -b --noEmit, oxlint, 320px–1440px sweep.`,
      conclusion:
        "AI accelerated exploration and implementation. It never made a design decision on its own.",
    },
    frontend: {
      kicker: "Tools & front-end implementation",
      intro:
        "Every design decision had to survive becoming real code. AI sits inside this chain as a tool for exploration, assistance and acceleration; it does not replace Product Design expertise or human validation.",
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
    learnings: {
      kicker: "What I learned",
      items: [
        "Designing while building collapses the distance between a decision and its consequences — a spacing choice that looks fine in a comp can still overflow a 320px screen, and you find out immediately, not in a later handoff.",
        "AI compresses the distance between an idea and a working draft. It doesn't compress the judgment needed to evaluate that draft — that part stayed mine, every time.",
        "Translating a design system into code exposes gaps a static file hides — a token that looks consistent in Figma still has to survive being reused across five different components before it's actually a system.",
        "Accessibility during implementation is cheaper and more honest than accessibility as a later audit — checking focus order while building a component takes minutes; retrofitting it afterward takes a rewrite.",
        "Iterative product thinking isn't a phase before the 'real' work — the Discover-to-Iterate loop this case study describes is still running on this site today, and it doesn't have a planned end date.",
      ],
    },
    pageTitle: "Stéphania — Portfolio — Case study",
  },
  fr: {
    ai: {
      kicker: "Concevoir avec l’IA",
      title: "L’IA comme partenaire de design et de développement",
      intro:
        "L’intelligence artificielle a accompagné l’exploration visuelle, la structuration des contenus, l’implémentation front-end et la revue du code. Chaque décision stratégique, UX et visuelle est restée guidée par une expertise humaine et évaluée selon les besoins utilisateurs, l’accessibilité et la cohérence globale du produit.",
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
      exampleLabel: "Un passage réel, pas un exemple hypothétique",
      example:
        "L’entrée Joga Aura dans les projets sélectionnés constitue une véritable instance de cette boucle, et non une illustration créée après coup. Direction : remplacer un placeholder par un véritable visuel de projet et ne surtout pas en fabriquer. Exploration : recherche d’un véritable visuel Joga Aura dans les fichiers disponibles plutôt que génération d’un mockup. Revue : deux candidats réels existaient — une capture de page d’accueil et une page produit — et la page produit a été choisie pour sa meilleure lisibilité, sans placeholder visible. Itération : l’image retenue a été recadrée selon le ratio existant de la carte plutôt que déformée ou remplacée par une solution plus pratique. Validation : typage, lint et contrôle responsive complet de 320 px à 1440 px ont été relancés avant la mise en ligne.",
      codeLabel: "Exemple de workflow IA documenté dans le code",
      code: `// Direction : uniquement un visuel réel, aucune fabrication.
// Exploration : rechercher « joga aura » dans les fichiers existants.
// Revue : page produit retenue plutôt que la page d’accueil,
//         sans lorem ipsum dans la zone de recadrage.
// Itération : recadrage selon le ratio 4:3 existant de la carte.
// Validation : tsc -b --noEmit, oxlint, contrôle 320 px–1440 px.`,
      conclusion:
        "L’IA a accéléré l’exploration et l’implémentation. Elle n’a jamais pris seule une décision de design.",
    },
    frontend: {
      kicker: "Outils & implémentation",
      intro:
        "Chaque décision design devait résister au passage vers du code réel. L’IA intervient dans cette chaîne comme un outil d’exploration, d’assistance et d’accélération ; elle ne remplace ni l’expertise Product Design ni la validation humaine.",
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
    learnings: {
      kicker: "Ce que j’ai appris",
      items: [
        "Concevoir tout en construisant réduit la distance entre une décision et ses conséquences : un choix d’espacement convaincant dans une maquette peut encore déborder sur un écran de 320 px, et on le découvre immédiatement plutôt que lors d’un handoff ultérieur.",
        "L’IA réduit la distance entre une idée et un premier résultat fonctionnel. Elle ne réduit pas le jugement nécessaire pour évaluer ce résultat : cette responsabilité est restée la mienne à chaque fois.",
        "Traduire un Design System en code expose les lacunes cachées par un fichier statique : un token cohérent dans Figma doit encore survivre à sa réutilisation dans cinq composants différents avant de devenir réellement un système.",
        "Traiter l’accessibilité pendant l’implémentation est moins coûteux et plus honnête qu’un audit tardif : vérifier l’ordre de focus pendant la construction prend quelques minutes ; le corriger après coup exige une réécriture.",
        "La pensée produit itérative n’est pas une phase précédant le « vrai » travail : la boucle de Découvrir à Itérer décrite ici fonctionne encore aujourd’hui sur ce site et ne possède aucune date de fin planifiée.",
      ],
    },
    pageTitle: "Stéphania — Portfolio — Étude de cas",
  },
}

export { portfolioDetails }
