import type { LocalizedContent } from "@/i18n"

type Item = { label: string; statement: string }
type PortfolioPageContent = {
  hero: {
    eyebrow: string
    title: string
    summary: string
    detail: string
    meta: { label: string; value: string }[]
    alt: string
  }
  overview: {
    kicker: string
    problemLabel: string
    problem: string
    roleLabel: string
    role: string
    outcomeLabel: string
    outcome: string
  }
  challenge: {
    kicker: string
    paragraphs: string[]
    quote: string
    goals: string[]
  }
  approach: {
    kicker: string
    introduction: string
    steps: Item[]
    loop: string
  }
  decisions: {
    kicker: string
    title: string
    items: Item[]
    detailsSummary: string
  }
  building: {
    kicker: string
    title: string
    intro: string
    exampleLabel: string
    example: string
    codeLabel: string
    code: string
    conclusion: string
    detailsSummary: string
  }
  iterations: {
    kicker: string
    introduction: string
    assetLabel: string
    plate: string
    before: string
    alt: string
    after: string
    categoryLabel: string
    category: string
    beforeCategory: string
    afterCategory: string
    summaryTitle: string
    summaryBeforeLabel: string
    summaryAfterLabel: string
    summaryBeforeItems: string[]
    summaryAfterItems: string[]
  }
  finalExperience: {
    kicker: string
    introduction: string
    navAlt: string
    navCaption: string
    cardAlt: string
    cardCaption: string
    desktopAlt: string
    desktopCaption: string
    tabletAlt: string
    tabletCaption: string
    mobileAlt: string
    mobileCaption: string
  }
  outcomeLearnings: {
    kicker: string
    statement: string
    learnings: string[]
  }
}

const portfolioPageContent: LocalizedContent<PortfolioPageContent> = {
  en: {
    hero: {
      eyebrow: "Product Design · Stéphania — Portfolio",
      title: "Stéphania — Portfolio",
      summary:
        "Designing and building my own product experience from strategy to front-end.",
      detail:
        "A living personal product designed to express my Product Designer identity, make six years of experience legible, and demonstrate how I turn complex problems into simple, accessible and scalable experiences.",
      meta: [
        { label: "Role", value: "Product Designer & Front-end Implementer" },
        { label: "Timeline", value: "2026 — Present" },
        {
          label: "Scope",
          value: "UX/UI · Design System · Accessibility · Front-end",
        },
      ],
      alt: "This portfolio's homepage showing its editorial hero, primary navigation and calls to action.",
    },
    overview: {
      kicker: "Overview",
      problemLabel: "The problem",
      problem:
        "The previous portfolio looked good but proved little — uneven project overviews, one language, no real evidence of Design System or accessibility thinking.",
      roleLabel: "My role",
      role: "I owned it end to end — positioning, UX writing, the Design System and the production front-end — with AI accelerating execution under my direction.",
      outcomeLabel: "The outcome",
      outcome:
        "A bilingual, accessible product that shows the decisions behind it, not just the result.",
    },
    challenge: {
      kicker: "The Challenge",
      paragraphs: [
        "The project began as a mainly visual portfolio, then became a structured professional platform, and finally a living, bilingual personal product built through an AI-assisted workflow.",
        "The challenge was to express my Product Designer identity, make six years of experience credible and legible, and demonstrate how I turn complex problems into simple, accessible and scalable experiences — through the product itself, not claims in a biography.",
      ],
      quote: "The portfolio itself became the product.",
      goals: [
        "A differentiated positioning, not a template",
        "A scalable system, not one-off pages",
        "Accessible and responsive from the start",
        "Design shipped as real code, AI-assisted",
      ],
    },
    approach: {
      kicker: "Approach",
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
    decisions: {
      kicker: "Key Design Decisions",
      title: "The choices that hold this product together.",
      items: [
        {
          label: "Information architecture",
          statement:
            "Four top-level sections, not a menu: Work, About, Experience, Contact — a résumé's own order, read as a book. Work carries the whole first argument, proof before pitch; About and Experience are honest reuses of Design Principles and The Process rather than new chapters; Contact stays real and minimal, no form.",
        },
        {
          label: "Selected Work's hierarchy",
          statement:
            "Projects aren't ordered by date. SPF stays the permanent flagship — the clearest proof of enterprise Design System work at scale. This project sits second, deliberately: the one place the current practice shows up as a shipped product, not a described skill, without ever competing with SPF for the lead.",
        },
        {
          label: "A restrained Design System",
          statement:
            "One brand color — a deep burgundy — reserved for deliberate moments only, never wired in as a general UI color. Three type families, each with one job. Spacing and motion both run on a handful of fluid tokens instead of per-breakpoint overrides.",
        },
        {
          label: "Accessibility, built in",
          statement:
            "Real anchor links instead of clickable divs, a documented focus trap only where one exists, a focus ring that's never suppressed, and useReducedMotion() checked in every animated component. An automated WCAG A/AA check runs on every commit — not a one-time pass.",
        },
      ],
      detailsSummary: "Design system reference",
    },
    building: {
      kicker: "Designing & Building",
      title: "From decision to production code.",
      intro:
        "Every decision had to survive becoming real code — React, TypeScript, Tailwind. AI sits inside that chain as a tool for exploration and acceleration, directed and reviewed at every step; it never replaces Product Design judgment or human validation.",
      exampleLabel: "One Real Pass, Not a Hypothetical",
      example:
        "The Joga Aura entry in Selected Work is one real pass through that loop, not a staged example. Direction: replace a placeholder with a real project visual — never fabricate one. Exploration found two real candidates; review chose the cleaner product page over the homepage capture. The image was cropped to the card's existing ratio, then typecheck, lint and a full responsive sweep ran again before it shipped.",
      codeLabel: "Documented AI workflow example in code",
      code: `// Direction: real asset only, no fabricated visual.
// Exploration: search existing project files for "joga aura".
// Review: product page chosen over homepage — no lorem ipsum
//         visible in the usable crop region.
// Iteration: cropped to the card's existing 4:3 aspect ratio.
// Validation: tsc -b --noEmit, oxlint, 320px–1440px sweep.`,
      conclusion:
        "AI accelerated exploration and implementation. It never made a design decision on its own.",
      detailsSummary: "How it was built",
    },
    iterations: {
      kicker: "Iterations",
      introduction:
        "The final product is the result of repeated review, not a single pass. Two real examples, then what changed overall.",
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
        "SPF’s category tag went through a real review pass: the accessibility work described in that project overview wasn’t reflected in its own eyebrow tag until it was pointed out and corrected.",
      beforeCategory: "Product Design · Design System",
      afterCategory: "Product Design · Design System · Accessibility",
      summaryTitle:
        "The same identity, with a clearer and more capable product around it.",
      summaryBeforeLabel: "Before",
      summaryAfterLabel: "After",
      summaryBeforeItems: [
        "A mainly visual presentation",
        "Uneven depth in project overviews",
        "Limited navigation",
        "Little visibility into professional experience",
      ],
      summaryAfterItems: [
        "Harmonized, editorial project overviews",
        "Clearer UX narratives and evidence",
        "Richer About and Experience pages",
        "Responsive navigation and contextual CTAs",
      ],
    },
    finalExperience: {
      kicker: "Final Experience",
      introduction: "The real product, not mockups — captured live.",
      navAlt:
        "The site's primary navigation bar — logo, Work/About/Experience/Contact links, and the 'Let's talk' CTA button.",
      navCaption:
        "One primary CTA, everything else text links — nothing competes with 'Let's talk' for attention.",
      cardAlt:
        "A Selected Work project card at rest — the Harmony entry, showing the numbered eyebrow, title, description, technology tags and a real project screenshot.",
      cardCaption:
        "The same card component carries every project — one pattern, five entries, no per-project one-offs.",
      desktopAlt:
        "Selected Work at 1440px — SPF's lead entry with a wide two-column layout, image and text side by side.",
      desktopCaption:
        "Alternating image/text columns give each project room without repeating the same template beat-for-beat.",
      tabletAlt:
        "Selected Work at 768px — the same section, columns still side by side but narrower.",
      tabletCaption:
        "Columns narrow but stay side by side down to tablet — the asymmetry survives the breakpoint.",
      mobileAlt:
        "Selected Work at 375px — a single stacked column, image above text, and the INDEX dialog trigger replacing the inline nav links.",
      mobileCaption:
        "Below md, everything stacks image-first, and inline nav links become the INDEX dialog — nothing hidden, nothing scrolling sideways.",
    },
    outcomeLearnings: {
      kicker: "Outcome & Learnings",
      statement:
        "The result is a clearer professional identity and a more credible presentation for Senior Product Designer opportunities: a bilingual portfolio that documents design decisions, demonstrates process, and rests on a reusable technical foundation that can continue to evolve for French and international audiences.",
      learnings: [
        "Designing while building collapses the distance between a decision and its consequences — a spacing choice that looks fine in a comp can still overflow a 320px screen, and you find out immediately, not in a later handoff.",
        "Translating a design system into code exposes gaps a static file hides — a token that looks consistent in Figma still has to survive being reused across five different components before it's actually a system.",
        "Accessibility during implementation is cheaper and more honest than accessibility as a later audit — checking focus order while building a component takes minutes; retrofitting it afterward takes a rewrite.",
        "Iterative product thinking isn't a phase before the 'real' work — the loop this project overview describes is still running on this site today, and it doesn't have a planned end date.",
      ],
    },
  },
  fr: {
    hero: {
      eyebrow: "Product Design · Stéphania — Portfolio",
      title: "Stéphania — Portfolio",
      summary:
        "Concevoir et développer ma propre expérience produit, de la stratégie au front-end.",
      detail:
        "Un produit personnel vivant, conçu pour traduire mon identité de Product Designer, valoriser six années d’expérience et démontrer ma capacité à transformer des problématiques complexes en expériences simples, accessibles et évolutives.",
      meta: [
        { label: "Rôle", value: "Product Designer & intégratrice front-end" },
        { label: "Période", value: "2026 — Aujourd’hui" },
        {
          label: "Périmètre",
          value: "UX/UI · Design System · Accessibilité · Front-end",
        },
      ],
      alt: "Page d’accueil du portfolio montrant son hero éditorial, la navigation principale et les appels à l’action.",
    },
    overview: {
      kicker: "Vue d’ensemble",
      problemLabel: "Le problème",
      problem:
        "Le précédent portfolio avait l’air soigné mais démontrait peu : présentations de projets inégales, une seule langue, aucune preuve réelle de pensée Design System ou accessibilité.",
      roleLabel: "Mon rôle",
      role: "J’en ai porté l’ensemble : positionnement, UX writing, Design System et front-end de production — avec l’IA en appui de l’exécution, sous ma direction.",
      outcomeLabel: "Le résultat",
      outcome:
        "Un produit bilingue et accessible qui montre les décisions derrière le résultat, pas seulement le résultat.",
    },
    challenge: {
      kicker: "Le défi",
      paragraphs: [
        "Le projet a commencé comme un portfolio principalement visuel, avant de devenir une plateforme professionnelle structurée, puis un produit personnel vivant, bilingue et construit avec une approche assistée par l’IA.",
        "Le défi consistait à traduire mon identité de Product Designer, rendre six années d’expérience crédibles et lisibles, et démontrer ma capacité à transformer des problématiques complexes en expériences simples, accessibles et évolutives — à travers le produit lui-même.",
      ],
      quote: "Le portfolio lui-même est devenu le produit.",
      goals: [
        "Un positionnement différenciant, pas un template",
        "Un système évolutif, pas des pages isolées",
        "Accessible et responsive dès la conception",
        "Du design livré en code réel, assisté par l’IA",
      ],
    },
    approach: {
      kicker: "Approche",
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
    decisions: {
      kicker: "Décisions de conception clés",
      title: "Les choix qui tiennent ce produit ensemble.",
      items: [
        {
          label: "Architecture de l’information",
          statement:
            "Quatre sections principales, pas un menu : Projets, À propos, Expérience, Contact — l’ordre d’un CV, lu comme un livre. Projets porte tout le premier argument, la preuve avant le discours ; À propos et Expérience réutilisent honnêtement Design Principles et Le Processus plutôt que d’inventer de nouveaux chapitres ; Contact reste réel et minimal, sans formulaire.",
        },
        {
          label: "La hiérarchie des projets sélectionnés",
          statement:
            "Les projets ne sont pas classés par date. SPF reste le projet phare permanent — la preuve la plus claire d’un travail de Design System d’entreprise à grande échelle. Ce projet occupe volontairement la deuxième place : le seul endroit où la pratique actuelle apparaît comme un produit livré, et non comme une compétence décrite, sans jamais concurrencer SPF pour la tête de liste.",
        },
        {
          label: "Un Design System sobre",
          statement:
            "Une seule couleur de marque — un bordeaux profond — réservée aux moments intentionnels, jamais utilisée comme couleur UI générale. Trois familles typographiques, chacune avec une seule fonction. Espacement et mouvement reposent tous deux sur une poignée de tokens fluides plutôt que sur des surcharges par breakpoint.",
        },
        {
          label: "Une accessibilité intégrée dès la construction",
          statement:
            "De vrais liens plutôt que des divs cliquables, un focus trap documenté uniquement là où il est nécessaire, un anneau de focus jamais supprimé, et useReducedMotion() vérifié dans chaque composant animé. Un contrôle automatisé WCAG A/AA s’exécute à chaque commit — pas une passe ponctuelle.",
        },
      ],
      detailsSummary: "Référence du Design System",
    },
    building: {
      kicker: "Concevoir et construire",
      title: "De la décision au code de production.",
      intro:
        "Chaque décision devait résister au passage en code réel — React, TypeScript, Tailwind. L’IA intervient dans cette chaîne comme un outil d’exploration et d’accélération, dirigé et revu à chaque étape ; elle ne remplace jamais le jugement Product Design ni la validation humaine.",
      exampleLabel: "Un passage réel, pas un exemple hypothétique",
      example:
        "L’entrée Joga Aura dans les projets sélectionnés est un véritable passage par cette boucle, pas un exemple mis en scène. Direction : remplacer un placeholder par un vrai visuel de projet — sans jamais en fabriquer un. L’exploration a trouvé deux candidats réels ; la revue a retenu la page produit, plus nette, plutôt que la capture de la page d’accueil. L’image a été recadrée au ratio existant de la carte, puis typage, lint et un contrôle responsive complet ont tourné à nouveau avant la mise en ligne.",
      codeLabel: "Exemple de workflow IA documenté dans le code",
      code: `// Direction : uniquement un visuel réel, aucune fabrication.
// Exploration : rechercher « joga aura » dans les fichiers existants.
// Revue : page produit retenue plutôt que la page d’accueil,
//         sans lorem ipsum dans la zone de recadrage.
// Itération : recadrage selon le ratio 4:3 existant de la carte.
// Validation : tsc -b --noEmit, oxlint, contrôle 320 px–1440 px.`,
      conclusion:
        "L’IA a accéléré l’exploration et l’implémentation. Elle n’a jamais pris seule une décision de design.",
      detailsSummary: "Comment c’est construit",
    },
    iterations: {
      kicker: "Itérations",
      introduction:
        "Le produit final résulte de revues répétées, pas d’un unique passage. Deux exemples réels, puis ce qui a changé globalement.",
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
        "Le tag de catégorie de SPF a connu une véritable passe de revue : le travail d’accessibilité décrit dans cette présentation du projet n’apparaissait pas dans son propre eyebrow jusqu’à ce que cette omission soit relevée et corrigée.",
      beforeCategory: "Conception produit · Système de design",
      afterCategory: "Conception produit · Système de design · Accessibilité",
      summaryTitle:
        "La même identité, portée par un produit plus clair et plus complet.",
      summaryBeforeLabel: "Avant",
      summaryAfterLabel: "Après",
      summaryBeforeItems: [
        "Une présentation principalement visuelle",
        "Des présentations de projets de profondeur inégale",
        "Une navigation plus limitée",
        "Peu de visibilité sur le parcours professionnel",
      ],
      summaryAfterItems: [
        "Des présentations de projets harmonisées et éditoriales",
        "Des récits UX et des preuves plus clairs",
        "Des pages À propos et Expérience enrichies",
        "Une navigation responsive et des CTA contextualisés",
      ],
    },
    finalExperience: {
      kicker: "L’expérience finale",
      introduction: "Le produit réel, pas des maquettes — capturé en direct.",
      navAlt:
        "Barre de navigation principale du site avec logo, liens Projets, À propos, Expérience et Contact, ainsi que le bouton CTA « Échangeons ».",
      navCaption:
        "Un seul CTA plein, le reste en liens texte — rien ne concurrence « Échangeons » pour l’attention.",
      cardAlt:
        "Carte de projet Selected Work au repos pour Harmony, avec eyebrow numéroté, titre, description, tags technologiques et véritable capture du projet.",
      cardCaption:
        "Le même composant de carte porte chaque projet — un seul pattern, cinq entrées, aucun cas particulier.",
      desktopAlt:
        "Projets sélectionnés à 1440 px : projet SPF principal dans une large mise en page à deux colonnes, image et texte côte à côte.",
      desktopCaption:
        "Les colonnes image/texte s’inversent d’un projet à l’autre — chacun respire sans répéter le même gabarit.",
      tabletAlt:
        "Projets sélectionnés à 768 px : même section avec des colonnes côte à côte plus étroites.",
      tabletCaption:
        "Les colonnes se resserrent mais restent côte à côte jusqu’à la tablette — l’asymétrie survit au breakpoint.",
      mobileAlt:
        "Projets sélectionnés à 375 px : colonne unique empilée, image au-dessus du texte et bouton INDEX remplaçant les liens de navigation.",
      mobileCaption:
        "Sous le breakpoint md, tout s’empile image en premier, et les liens de navigation deviennent la boîte de dialogue INDEX — rien n’est caché, rien ne défile horizontalement.",
    },
    outcomeLearnings: {
      kicker: "Résultat & enseignements",
      statement:
        "Le résultat est une identité professionnelle plus claire et une présentation plus crédible pour des opportunités de Senior Product Designer : un portfolio bilingue qui documente les décisions, démontre le processus de conception et repose sur un socle technique réutilisable, capable d’évoluer pour une audience française et internationale.",
      learnings: [
        "Concevoir tout en construisant réduit la distance entre une décision et ses conséquences : un choix d’espacement convaincant dans une maquette peut encore déborder sur un écran de 320 px, et on le découvre immédiatement plutôt que lors d’un handoff ultérieur.",
        "Traduire un Design System en code expose les lacunes cachées par un fichier statique : un token cohérent dans Figma doit encore survivre à sa réutilisation dans cinq composants différents avant de devenir réellement un système.",
        "Traiter l’accessibilité pendant l’implémentation est moins coûteux et plus honnête qu’un audit tardif : vérifier l’ordre de focus pendant la construction prend quelques minutes ; le corriger après coup exige une réécriture.",
        "La pensée produit itérative n’est pas une phase précédant le « vrai » travail : la boucle décrite ici fonctionne encore aujourd’hui sur ce site et ne possède aucune date de fin planifiée.",
      ],
    },
  },
}

export { portfolioPageContent }
