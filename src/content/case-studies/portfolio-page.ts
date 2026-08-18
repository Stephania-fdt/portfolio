import type { LocalizedContent } from "@/i18n"

type Item = { label: string; statement: string }
type PortfolioPageContent = {
  objectives: { kicker: string; items: Item[] }
  process: { kicker: string; introduction: string; steps: Item[]; loop: string }
  architecture: {
    kicker: string
    introduction: string
    live: string
    planned: string
    hierarchyLabel: string
    hierarchy: string
  }
  responsive: {
    kicker: string
    paragraph: string
    alts: string[]
    captions: string[]
  }
  testing: {
    kicker: string
    introduction: string
    checks: { label: string; value: string }[]
    infrastructureLabel: string
    infrastructure: string
    conclusion: string
  }
  iteration: {
    kicker: string
    introduction: string
    assetLabel: string
    plate: string
    before: string
    alt: string
    after: string
    categoryLabel: string
    category: string
  }
  accessibility: {
    kicker: string
    introduction: string
    practices: Item[]
    qualificationLabel: string
    qualification: string
  }
}

const portfolioPageContent: LocalizedContent<PortfolioPageContent> = {
  en: {
    objectives: {
      kicker: "Objectives",
      items: [
        {
          label: "Positioning",
          statement:
            "Create a clear and differentiated Product Designer positioning — not another generic portfolio template.",
        },
        {
          label: "System",
          statement:
            "Build a scalable visual system, not a set of one-off pages.",
        },
        {
          label: "Accessibility & Responsive",
          statement:
            "Make the experience accessible and responsive by construction, not as a pass added at the end.",
        },
        {
          label: "Design-to-Code",
          statement:
            "Translate design decisions into production-ready front-end code myself.",
        },
        {
          label: "AI Workflow",
          statement:
            "Use AI to accelerate iteration, not to make the decisions.",
        },
        {
          label: "Dual Proof",
          statement:
            "Create a portfolio that demonstrates design and technical understanding in the same artifact.",
        },
      ],
    },
    process: {
      kicker: "Process",
      introduction:
        "Six stages, run more than once — each pass through Build and Test fed back into what Discover and Define got right, or didn’t.",
      steps: [
        {
          label: "Discover",
          statement:
            "Inspected the existing architecture, content and tokens before writing anything new — what already worked, what a new section had to respect.",
        },
        {
          label: "Define",
          statement:
            "Turned a brief into concrete objectives and a real information architecture, not a wish list.",
        },
        {
          label: "Design",
          statement:
            "Made the visual and structural decisions — hierarchy, composition, what earns space and what doesn't.",
        },
        {
          label: "Build",
          statement:
            "Implemented the decision in React, TypeScript and Tailwind — production code, not a static comp.",
        },
        {
          label: "Test",
          statement:
            "Checked typecheck, lint, responsive behavior and accessibility before calling anything done.",
        },
        {
          label: "Iterate",
          statement:
            "Reviewed the result against intent, corrected what didn't hold, and went back to Discover for the next pass.",
        },
      ],
      loop: "Iterate feeds back into Discover — this loop ran more than once before anything shipped.",
    },
    architecture: {
      kicker: "Information Architecture",
      introduction:
        "The top-level structure is four sections: Work, About, Experience, Contact — a résumé’s own order, read as a book instead of a list. Work carries the whole first argument (proof before pitch). About and Experience are honest reuses, not new chapters: they point to Design Principles and The Process, the two existing sections that already answer what those labels ask for. Contact is real and minimal — one statement, one direct email link, no form.",
      live: "Live",
      planned: "Planned",
      hierarchyLabel: "Selected Work’s Deliberate Hierarchy",
      hierarchy:
        "Selected Work isn’t ordered by date or alphabet. SPF stays the permanent flagship — the clearest single proof of enterprise Design System work, accessibility and governance at scale — regardless of what else is added around it. This case study sits second, deliberately: it’s the one place the current practice (Design Systems, accessibility, AI-assisted workflow, front-end implementation) shows up as one shipped product rather than a described skill, so it gets real editorial room without ever competing with SPF for the lead position. Harmony, WellPack and Joga Aura follow, each proving a different, complementary register — research, methodology, and real client delivery.",
    },
    responsive: {
      kicker: "Responsive Design",
      paragraph:
        "Desktop is where the asymmetric composition happens — a project’s text and image columns sit side by side, mirrored every other row. Below the md breakpoint, every row collapses to a single column, image above text, in source order — no information hidden, nothing requiring horizontal scroll. Mobile also swaps the inline nav links for the INDEX dialog, visible in the capture below.",
      alts: [
        "Selected Work at 1440px — SPF's lead entry with a wide two-column layout, image and text side by side.",
        "Selected Work at 768px — the same section, columns still side by side but narrower.",
        "Selected Work at 375px — a single stacked column, image above text, and the INDEX dialog trigger replacing the inline nav links.",
      ],
      captions: [
        "1440px — asymmetric two-column composition.",
        "768px — tablet.",
        "375px — mobile, INDEX navigation visible.",
      ],
    },
    testing: {
      kicker: "Testing & Validation",
      introduction:
        "These are the checks that were actually run against this codebase, not a general claim about quality. No usability testing has been conducted on this specific site, and none is claimed here.",
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
        "Beyond the manual checks above, an automated WCAG A/AA accessibility test (axe-core, via Playwright) runs against the home page, and a pre-commit hook runs lint on every commit — real, standing infrastructure, not a one-time pass.",
      conclusion:
        "Every layout change was checked at 320px–1440px before shipping — not assumed.",
    },
    iteration: {
      kicker: "Iteration",
      introduction:
        "The final portfolio is the result of repeated design, implementation and review cycles, not a single pass. Two real examples from this project, not staged for this page.",
      assetLabel:
        "Example — a Placeholder, Replaced Once Real Evidence Existed",
      plate: "Plate 05",
      before:
        "Before — the sober placeholder used while no real Joga Aura asset existed yet.",
      alt: "Joga Aura's real product page, showing the Tapis Blue Serenity yoga mat — the real asset that replaced the placeholder.",
      after:
        "After — a real client asset, found and cropped to the same aspect ratio, not invented.",
      categoryLabel: "Example — a Category Tag, Refined Under Review",
      category:
        "SPF’s category tag went through a real review pass: the accessibility work described in that case study wasn’t reflected in its own eyebrow tag until it was pointed out and corrected.",
    },
    accessibility: {
      kicker: "Accessibility",
      introduction:
        "Accessibility was considered while building each component, not run as a checklist after the fact.",
      practices: [
        {
          label: "Semantic HTML",
          statement:
            "Project cards are real anchor links, not clickable divs — a single, real tab stop, not a keyboard trap dressed up to look interactive.",
        },
        {
          label: "Keyboard Navigation",
          statement:
            "Every interactive element — links, buttons, the mobile INDEX panel — is reachable and operable by keyboard alone, with a documented focus trap inside the INDEX dialog.",
        },
        {
          label: "Focus States",
          statement:
            "A visible focus ring (2px solid, the brand color, 3px offset) is never suppressed — it's set once, globally, in the base layer.",
        },
        {
          label: "Reduced Motion",
          statement:
            "Every animated component checks useReducedMotion(), and a site-wide prefers-reduced-motion query collapses transitions and scroll-behavior to near-zero.",
        },
        {
          label: "Responsive Behavior",
          statement:
            "No horizontal overflow at any tested width from 320px to 1440px — checked on every layout change, not assumed.",
        },
        {
          label: "Accessible Interactive Elements",
          statement:
            "Decorative numerals, arrows and icons carry aria-hidden; the elements a screen reader actually announces are the ones that matter.",
        },
      ],
      qualificationLabel: "What This Is — and Isn’t",
      qualification:
        "This site runs an automated accessibility check — axe-core, via Playwright, scoped to WCAG 2.1 A and AA rules — against the home page, and lint runs on every commit through a pre-commit hook. That’s real, ongoing, automated verification. It is not a manual audit and not a formal accessibility certification, and this case study doesn’t claim either.",
    },
  },
  fr: {
    objectives: {
      kicker: "Objectifs",
      items: [
        {
          label: "Positionnement",
          statement:
            "Créer un positionnement clair et différencié de Product Designer, plutôt qu’un nouveau template de portfolio générique.",
        },
        {
          label: "Système",
          statement:
            "Construire un système visuel évolutif, pas une collection de pages isolées.",
        },
        {
          label: "Accessibilité & responsive",
          statement:
            "Rendre l’expérience accessible et responsive dès sa construction, plutôt que lors d’une vérification finale.",
        },
        {
          label: "Du design au code",
          statement:
            "Traduire moi-même les décisions de design en code front-end prêt pour la production.",
        },
        {
          label: "Workflow IA",
          statement:
            "Utiliser l’IA pour accélérer l’itération, non pour prendre les décisions.",
        },
        {
          label: "Double preuve",
          statement:
            "Créer un portfolio démontrant dans le même produit la pratique du design et la compréhension technique.",
        },
      ],
    },
    process: {
      kicker: "Processus",
      introduction:
        "Six étapes parcourues plusieurs fois : chaque passage par Build et Test réinjectait ses enseignements dans ce que Discover et Define avaient correctement cadré, ou non.",
      steps: [
        {
          label: "Découvrir",
          statement:
            "Inspection de l’architecture, des contenus et des tokens existants avant toute nouvelle écriture : ce qui fonctionnait déjà et ce qu’une nouvelle section devait respecter.",
        },
        {
          label: "Définir",
          statement:
            "Transformation d’un brief en objectifs concrets et en véritable architecture de l’information, pas en liste de souhaits.",
        },
        {
          label: "Concevoir",
          statement:
            "Prise des décisions visuelles et structurelles : hiérarchie, composition, ce qui mérite de l’espace et ce qui n’en mérite pas.",
        },
        {
          label: "Construire",
          statement:
            "Implémentation de la décision en React, TypeScript et Tailwind : du code de production, pas une maquette statique.",
        },
        {
          label: "Tester",
          statement:
            "Vérification du typage, du lint, du comportement responsive et de l’accessibilité avant de considérer un élément comme terminé.",
        },
        {
          label: "Itérer",
          statement:
            "Comparaison du résultat à l’intention, correction de ce qui ne tenait pas, puis retour à Découvrir pour le passage suivant.",
        },
      ],
      loop: "Itérer revient vers Découvrir : cette boucle a été parcourue plusieurs fois avant la mise en ligne.",
    },
    architecture: {
      kicker: "Architecture de l’information",
      introduction:
        "La structure principale comprend quatre sections : Projets, À propos, Expérience, Contact — l’ordre naturel d’un CV, lu comme un livre plutôt que comme une liste. Projets porte le premier argument complet : la preuve avant le discours. À propos et Expérience sont des réutilisations honnêtes, non de nouveaux chapitres : elles pointent vers Design Principles et Le processus, les deux sections existantes qui répondent déjà à ces attentes. Contact reste réel et minimal : une phrase, un lien direct vers l’adresse e-mail, aucun formulaire.",
      live: "En ligne",
      planned: "Prévu",
      hierarchyLabel: "La hiérarchie intentionnelle des projets sélectionnés",
      hierarchy:
        "Les projets sélectionnés ne sont classés ni par date ni par ordre alphabétique. SPF reste le projet phare permanent — la preuve la plus claire d’un travail de Design System d’entreprise, d’accessibilité et de gouvernance à grande échelle — indépendamment de ce qui sera ajouté autour. Cette étude de cas occupe volontairement la deuxième place : c’est le seul endroit où la pratique actuelle — Design Systems, accessibilité, workflow assisté par IA et implémentation front-end — apparaît comme un produit livré plutôt que comme une compétence décrite. Elle reçoit donc un véritable espace éditorial sans concurrencer SPF pour la première place. Harmony, WellPack et Joga Aura suivent, chacun démontrant un registre différent et complémentaire : recherche, méthodologie et livraison réelle pour un client.",
    },
    responsive: {
      kicker: "Design responsive",
      paragraph:
        "La composition asymétrique apparaît sur desktop : les colonnes de texte et d’image d’un projet se placent côte à côte et s’inversent une ligne sur deux. Sous le breakpoint md, chaque ligne devient une colonne unique, avec l’image au-dessus du texte selon l’ordre du contenu : aucune information masquée et aucun défilement horizontal. Sur mobile, les liens de navigation intégrés sont également remplacés par la boîte de dialogue INDEX, visible dans la capture ci-dessous.",
      alts: [
        "Projets sélectionnés à 1440 px : projet SPF principal dans une large mise en page à deux colonnes, image et texte côte à côte.",
        "Projets sélectionnés à 768 px : même section avec des colonnes côte à côte plus étroites.",
        "Projets sélectionnés à 375 px : colonne unique empilée, image au-dessus du texte et bouton INDEX remplaçant les liens de navigation.",
      ],
      captions: [
        "1440 px : composition asymétrique à deux colonnes.",
        "768 px : tablette.",
        "375 px : mobile, navigation INDEX visible.",
      ],
    },
    testing: {
      kicker: "Tests & validation",
      introduction:
        "Voici les contrôles réellement exécutés sur cette base de code, et non une affirmation générale sur sa qualité. Aucun test d’utilisabilité n’a été mené sur ce site spécifique et aucun n’est revendiqué ici.",
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
        "Au-delà des contrôles manuels ci-dessus, un test automatisé d’accessibilité WCAG A/AA — axe-core via Playwright — s’exécute sur la page d’accueil, et un hook pre-commit lance le lint à chaque commit. Il s’agit d’une véritable infrastructure permanente, non d’un passage unique.",
      conclusion:
        "Chaque modification de mise en page a été vérifiée de 320 px à 1440 px avant sa mise en ligne, et non supposée correcte.",
    },
    iteration: {
      kicker: "Itération",
      introduction:
        "Le portfolio final résulte de cycles répétés de design, d’implémentation et de revue, non d’un passage unique. Voici deux exemples réels du projet, non mis en scène pour cette page.",
      assetLabel:
        "Exemple — un placeholder remplacé dès l’arrivée d’une preuve réelle",
      plate: "Planche 05",
      before:
        "Avant : le placeholder sobre utilisé tant qu’aucun véritable visuel Joga Aura n’existait.",
      alt: "Véritable page produit de Joga Aura montrant le tapis de yoga Tapis Blue Serenity, visuel réel ayant remplacé le placeholder.",
      after:
        "Après : un véritable visuel client trouvé et recadré au même ratio, non inventé.",
      categoryLabel: "Exemple — un tag de catégorie affiné pendant la revue",
      category:
        "Le tag de catégorie de SPF a connu une véritable passe de revue : le travail d’accessibilité décrit dans cette étude de cas n’apparaissait pas dans son propre eyebrow jusqu’à ce que cette omission soit relevée et corrigée.",
    },
    accessibility: {
      kicker: "Accessibilité",
      introduction:
        "L’accessibilité a été prise en compte pendant la construction de chaque composant, et non traitée comme une checklist après coup.",
      practices: [
        {
          label: "HTML sémantique",
          statement:
            "Les cartes de projets sont de véritables liens et non des divs cliquables : un seul arrêt de tabulation réel, plutôt qu’un piège clavier déguisé en élément interactif.",
        },
        {
          label: "Navigation au clavier",
          statement:
            "Chaque élément interactif — liens, boutons et panneau INDEX mobile — est accessible et utilisable uniquement au clavier, avec un focus trap documenté dans la boîte de dialogue INDEX.",
        },
        {
          label: "États de focus",
          statement:
            "Un anneau de focus visible — trait plein de 2 px, couleur de marque, décalage de 3 px — n’est jamais supprimé ; il est défini une seule fois globalement dans la couche de base.",
        },
        {
          label: "Mouvements réduits",
          statement:
            "Chaque composant animé vérifie useReducedMotion(), tandis qu’une media query prefers-reduced-motion globale réduit presque à zéro les transitions et le défilement animé.",
        },
        {
          label: "Comportement responsive",
          statement:
            "Aucun débordement horizontal à toutes les largeurs testées de 320 px à 1440 px : vérifié à chaque modification de mise en page, et non supposé.",
        },
        {
          label: "Éléments interactifs accessibles",
          statement:
            "Les numéros, flèches et icônes décoratifs utilisent aria-hidden ; les éléments réellement annoncés par un lecteur d’écran sont ceux qui portent du sens.",
        },
      ],
      qualificationLabel: "Ce que cela est — et n’est pas",
      qualification:
        "Ce site exécute sur la page d’accueil un contrôle automatisé d’accessibilité — axe-core via Playwright, limité aux règles WCAG 2.1 A et AA — et le lint s’exécute à chaque commit grâce à un hook pre-commit. Il s’agit d’une vérification automatisée réelle, continue. Ce n’est ni un audit manuel ni une certification formelle d’accessibilité, et cette étude de cas ne revendique aucun des deux.",
    },
  },
}

export { portfolioPageContent }
