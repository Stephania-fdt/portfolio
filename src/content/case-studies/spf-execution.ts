import type { LocalizedContent } from "@/i18n"

type ImageBlock = {
  label: string
  paragraphs: string[]
  alt: string
  caption: string
}

type ExecutionContent = {
  kicker: string
  introduction: string
  systemSplit: ImageBlock
  reuse: ImageBlock
  product: {
    label: string
    authAlts: string[]
    authCaptions: string[]
    authParagraph: string
    portalLabel: string
    portalParagraph: string
    portalAlt: string
    portalCaption: string
    faqLabel: string
    faqParagraphs: string[]
    faqAlt: string
    faqCaption: string
  }
  conclusion: string
  detailsSummary: string
  reference: {
    angularPickers: ImageBlock
    sidebarFooter: {
      label: string
      paragraphs: string[]
      sidebarAlt: string
      sidebarCaption: string
      footerAlt: string
      footerCaption: string
    }
    atomicRadio: ImageBlock
    responsiveLanguage: ImageBlock
    statesInputs: ImageBlock
    vocabularyStepper: ImageBlock
  }
}

/**
 * Merges the former Component Library and Product Interfaces chapters
 * into one: the Angular Material / custom split decision, the same
 * semantic roles reused component to component, then the real product —
 * auth, portal, FAQ — a citizen actually completing a task. Every
 * sentence traces back to the original Components or Interfaces copy;
 * the ~13-image gallery both chapters carried is curated down to the
 * handful that prove a decision, the rest moved to "Component library
 * reference."
 */
const spfExecutionContent: LocalizedContent<ExecutionContent> = {
  en: {
    kicker: "Execution",
    introduction:
      "The system had to prove itself twice — once as components that could be reused, and once as a real product a citizen could actually complete a task in.",
    systemSplit: {
      label: "Angular Material, and Exactly Where It Wasn't Enough",
      paragraphs: [
        "Angular Material covered the inventory a government portal actually needs — alerts, pickers, navigation, dialogs — each restyled to the same dark-header language rather than left in Material's own defaults. What it couldn't give the system was a header carrying the Kingdom of Belgium's own crest, or a footer that had to read as government-issued at a glance.",
        "Those were built from nothing, in their own section of the file — Header, Sidebar, Footer — because that's exactly where Angular Material stops being able to carry an identity, and where SPF's had to show.",
      ],
      alt: "The custom SPF header component carrying the Kingdom of Belgium's crest, shown at Desktop-1440 and Tablet-1024 breakpoints, in both light and dark variants.",
      caption: "The header — built from nothing, at Desktop and Tablet widths.",
    },
    reuse: {
      label: "The Same Roles, Doing Real Work",
      paragraphs: [
        "A notification system carries the exact same info, success, warning and error roles the token system already defined — and an account-activation stepper reuses that same vocabulary in a real flow a citizen actually completes.",
        "The same button sits inside a card's actions and an alert's actions. That repetition, component after component, is the actual proof: not a folder of screens that happen to share a file, but one system, used everywhere it needed to be.",
      ],
      alt: "The SPF notification/alert component in info, success, warning and error variants — plain, with a text link, with two action buttons, and as a full-width banner — the same semantic color roles defined in the Design System chapter.",
      caption:
        "Info, success, warning, error — the same roles the tokens already named.",
    },
    product: {
      label: "The System, Assembled Into a Real Product",
      authAlts: [
        "The SPF authentication screen at desktop width — 'Please Authenticate,' with a digital-key option for Belgian citizens and a standard account option for non-Belgians, over a photograph of the ministry's own architecture.",
        "The same SPF authentication screen at mobile width, on an iPhone — identical crest, photograph and two-button choice, scaled to a single hand.",
      ],
      authCaptions: [
        "The same choice, the same photograph, at desktop width.",
        "...and at mobile width. Not a smaller version — the same one.",
      ],
      authParagraph:
        "The choice a citizen makes first — a Belgian digital key, or a standard account for anyone else — renders identically in intent at both ends of the scale: the same crest, the same warm architectural photograph, the same two buttons, whether it's a desktop monitor or a phone held in one hand.",
      portalLabel: "The Portal, Assembled",
      portalParagraph:
        "Once inside, the same header and footer that were built as isolated components now carry an actual homepage — service cards, an FAQ accordion, a rotating set of articles — proving the system wasn't designed to look good in a component sheet. It was designed to hold a real page together.",
      portalAlt:
        "The SPF citizen portal homepage — header with crest, a grid of service cards, an FAQ accordion, an article carousel, and the government footer, all built from the same components documented earlier in the project overview.",
      portalCaption:
        "The portal homepage — every piece of it already introduced, none of it new.",
      faqLabel: "Support, Not Buried in an Accordion",
      faqParagraphs: [
        "The homepage's FAQ accordion is one entry point. A citizen who navigates there directly gets a dedicated page instead of a scroll-and-hope — real categories (Access; Legalisations & Apostilles; La Banque de données des Actes de l'État Civil), each with its own heading and illustration, not one flat list of questions standing in for all of them.",
      ],
      faqAlt:
        "The SPF FAQ page, organized into real categories — Access, Legalisations & Apostilles, and La Banque de données des Actes de l'État Civil — each with its own heading and line illustration, under a header carrying the same crest as the rest of the platform.",
      faqCaption: "A dedicated FAQ page, not just the homepage's accordion.",
    },
    conclusion:
      "The crest on the header, the warm photography, the same button component authenticating a citizen and then carrying them into a real page with a real question to answer — carried, unbroken, from the first screen to the last. That continuity is the actual argument for building a system instead of a set of pages: everything downstream inherits it for free.",
    detailsSummary: "Component library reference",
    reference: {
      angularPickers: {
        label: "The Angular Material Foundation",
        paragraphs: [
          "The Angular file's own sidebar reads less like a component list and more like an inventory: alerts, badges, avatars, banners, bottom navigation, bottom sheets, breadcrumbs, buttons, cards, carousels, chips, dialogs, dividers, expansion panels, footers, grid system, icons, lists, menus, navigation drawers, paginations, pickers, progress, ratings — each one checked off, not sketched once and left half-finished.",
          "Pickers alone show the discipline: a date calendar, a month selector and a time clock, restyled to the same dark-header language rather than left in Material's own defaults. Nothing here was skinned once and called done.",
        ],
        alt: "Three Angular Material picker components restyled for SPF — a date calendar, a month selector and a time clock, all sharing the same dark header and rounded-corner language.",
        caption:
          "Date, month and time — three pickers, one visual language, not three.",
      },
      sidebarFooter: {
        label: "The Rest of What Angular Couldn't Give It",
        paragraphs: [
          "The footer alone ships in three color registers — a dark primary, a warm secondary, a light tertiary — because a single application's footer and a shared platform's footer don't carry the same weight, and the system had to hold both without forking into two components.",
        ],
        sidebarAlt:
          "The custom SPF sidebar navigation component, expanded, shown in both light and dark variants side by side.",
        sidebarCaption:
          "The sidebar — the third piece Angular Material couldn't give it, light and dark.",
        footerAlt:
          "The custom SPF footer component in three color registers — dark primary, warm secondary, light tertiary.",
        footerCaption:
          "One footer component, three color registers, never three separate builds.",
      },
      atomicRadio: {
        label: "The Atomic Layer",
        paragraphs: [
          "Underneath the structural pieces sits a second, smaller layer — SPF's own atomic components, built for what Angular Material doesn't cover: a radio-option component tested across nine, then fourteen instances at once — every group size a real form might actually need, not just the one that looked good in a mockup.",
        ],
        alt: "The SPF radio-option component tested across group sizes from two to fourteen options at once, showing single-select behavior at every configuration a real form might use.",
        caption:
          "Fourteen group sizes tested at once — not the one that happened to fit a mockup.",
      },
      responsiveLanguage: {
        label: "Built at Every Width, Not Just One",
        paragraphs: [
          "None of this was designed once at one size and left to break. The language selector alone exists at six explicit widths — 1920, 1440, 1024, 768, 380 and 350 — because a citizen switching languages on a phone in a waiting room deserves the same component a case worker gets on a desktop monitor, not a smaller, quieter version of it.",
        ],
        alt: "The SPF language selector component built at six explicit breakpoints — 1920, 1440, 1024, 768, 380 and 350 pixels, each labeled in the Figma file and stacked by width.",
        caption:
          "The widest of six labeled breakpoints, stacked top to bottom by width — 1920 down to 350.",
      },
      statesInputs: {
        label: "States Aren't an Afterthought",
        paragraphs: [
          "A form input isn't one component, it's roughly a dozen: default, focus, filled, error, validated, disabled, autocomplete — multiplied again across text, number and date types, each one drawn on purpose rather than assumed to fall out of Angular Material for free.",
        ],
        alt: "A matrix of SPF input field states — default, focus, filled, error, validated, disabled, autocomplete — across text, number and date input types.",
        caption:
          "Roughly a dozen states, drawn for every input type — not assumed.",
      },
      vocabularyStepper: {
        label: "The Same Vocabulary, In Use",
        paragraphs: [
          "The same discipline shows up somewhere a citizen would actually feel it: an account-activation stepper with named states — in progress, pending, to be verified, completed, rejected — the same semantic vocabulary the Design System chapter defined, now doing real work in a real flow, not just sitting in a palette nobody consumed.",
        ],
        alt: "The SPF account-activation stepper with named states — in progress, pending, to be verified, completed, rejected — reusing the same semantic colors as the token system and the notification component.",
        caption:
          "In progress, pending, to be verified, completed, rejected — the tokens, doing real work.",
      },
    },
  },
  fr: {
    kicker: "Exécution",
    introduction:
      "Le système devait faire ses preuves deux fois : une fois comme composants réutilisables, une fois comme produit réel dans lequel une personne pouvait accomplir une tâche.",
    systemSplit: {
      label: "Angular Material, et exactement là où il ne suffisait pas",
      paragraphs: [
        "Angular Material couvrait l’inventaire dont un portail public a réellement besoin — alerts, pickers, navigation, dialogs — chacun réadapté au même langage de header sombre plutôt que laissé aux styles par défaut de Material. Ce qu’il ne pouvait pas fournir, c’est un header portant le blason du Royaume de Belgique, ni un footer immédiatement identifiable comme gouvernemental.",
        "Ceux-ci ont été construits de zéro, dans leur propre section du fichier — Header, Sidebar, Footer — car c’est exactement là qu’Angular Material cesse de porter une identité, et où celle du SPF devait apparaître.",
      ],
      alt: "Composant header sur mesure du SPF portant le blason du Royaume de Belgique, présenté aux breakpoints Desktop-1440 et Tablet-1024 dans des variantes claires et sombres.",
      caption: "Le header, construit de zéro aux largeurs Desktop et Tablet.",
    },
    reuse: {
      label: "Les mêmes rôles, au travail",
      paragraphs: [
        "Un système de notifications reprend exactement les rôles info, success, warning et error déjà définis par les tokens — et un stepper d’activation de compte réutilise ce même vocabulaire dans un véritable parcours qu’une personne accomplit réellement.",
        "Le même bouton se trouve dans les actions d’une carte et celles d’une alerte. Cette répétition, composant après composant, constitue la véritable preuve : non un dossier d’écrans partageant par hasard un fichier, mais un système unique utilisé partout où il devait l’être.",
      ],
      alt: "Composant de notification et d’alerte du SPF dans ses variantes info, success, warning et error, en version simple, avec lien texte, deux boutons d’action et bannière pleine largeur.",
      caption:
        "Info, success, warning, error : les mêmes rôles déjà nommés par les tokens.",
    },
    product: {
      label: "Le système, assemblé en produit réel",
      authAlts: [
        "Écran d’authentification du SPF sur ordinateur, avec l’instruction « Please Authenticate », une option de clé numérique pour les citoyens belges et un compte standard pour les autres, sur une photographie de l’architecture du ministère.",
        "Même écran d’authentification du SPF sur un iPhone, avec le même blason, la même photographie et les deux mêmes choix adaptés à une utilisation à une main.",
      ],
      authCaptions: [
        "Le même choix et la même photographie sur ordinateur.",
        "…et sur mobile. Pas une version réduite : la même interface.",
      ],
      authParagraph:
        "Le premier choix d’une personne — une clé numérique belge ou un compte standard pour les autres — conserve exactement la même intention aux deux extrémités de l’échelle : le même blason, la même photographie architecturale chaleureuse et les deux mêmes boutons, sur un écran d’ordinateur comme sur un téléphone tenu d’une main.",
      portalLabel: "Le portail assemblé",
      portalParagraph:
        "Une fois connectés, le même header et le même footer construits comme composants isolés portent désormais une véritable page d’accueil : cartes de services, accordéon de FAQ et carrousel d’articles. Le système n’a pas été conçu pour paraître réussi dans une planche de composants, mais pour maintenir une vraie page ensemble.",
      portalAlt:
        "Page d’accueil du portail citoyen du SPF avec header et blason, grille de cartes de services, accordéon de FAQ, carrousel d’articles et footer gouvernemental, tous construits avec les composants documentés précédemment.",
      portalCaption:
        "La page d’accueil du portail : chaque pièce a déjà été présentée, aucune n’est nouvelle.",
      faqLabel: "Une aide qui ne reste pas enfouie dans un accordéon",
      faqParagraphs: [
        "L’accordéon de FAQ de la page d’accueil constitue un point d’entrée. Une personne qui s’y rend directement obtient une page dédiée plutôt qu’une longue recherche par défilement : de véritables catégories — Accès ; Légalisations & Apostilles ; La Banque de données des Actes de l’État Civil — chacune avec son titre et son illustration, plutôt qu’une liste unique censée les représenter toutes.",
      ],
      faqAlt:
        "Page FAQ du SPF organisée en catégories réelles — Accès, Légalisations & Apostilles et La Banque de données des Actes de l’État Civil — chacune avec son titre et son illustration, sous le même blason que le reste de la plateforme.",
      faqCaption:
        "Une page FAQ dédiée, pas seulement l’accordéon de la page d’accueil.",
    },
    conclusion:
      "Le blason du header, la photographie chaleureuse et le même composant de bouton qui authentifie une personne avant de l’accompagner vers une véritable page et une véritable question restent continus du premier au dernier écran. Cette continuité constitue l’argument réel en faveur d’un système plutôt que d’une collection de pages : tout ce qui suit en hérite sans effort supplémentaire.",
    detailsSummary: "Référence de la bibliothèque de composants",
    reference: {
      angularPickers: {
        label: "Les fondations Angular Material",
        paragraphs: [
          "La barre latérale du fichier Angular ressemble moins à une liste de composants qu’à un inventaire : alerts, badges, avatars, banners, bottom navigation, bottom sheets, breadcrumbs, buttons, cards, carousels, chips, dialogs, dividers, expansion panels, footers, grid system, icons, lists, menus, navigation drawers, paginations, pickers, progress et ratings. Chacun est finalisé, pas simplement esquissé puis laissé incomplet.",
          "Les pickers illustrent à eux seuls cette discipline : calendrier de date, sélecteur de mois et horloge, tous adaptés au même langage de header sombre plutôt que laissés avec les styles par défaut de Material. Rien n’a été habillé une seule fois avant d’être considéré comme terminé.",
        ],
        alt: "Trois composants picker Angular Material adaptés au SPF : calendrier de date, sélecteur de mois et horloge partageant le même header sombre et les mêmes angles arrondis.",
        caption: "Date, mois et heure : trois pickers, un seul langage visuel.",
      },
      sidebarFooter: {
        label: "Le reste de ce qu’Angular ne pouvait pas fournir",
        paragraphs: [
          "Le footer existe à lui seul dans trois registres chromatiques — primary sombre, secondary chaud et tertiary clair — car le footer d’une application unique et celui d’une plateforme partagée ne portent pas le même poids. Le système devait accueillir les deux sans se diviser en deux composants.",
        ],
        sidebarAlt:
          "Navigation latérale sur mesure du SPF déployée, présentée côte à côte dans ses variantes claire et sombre.",
        sidebarCaption:
          "La sidebar, troisième élément qu’Angular Material ne pouvait pas fournir, en clair et sombre.",
        footerAlt:
          "Footer sur mesure du SPF dans trois registres chromatiques : primary sombre, secondary chaud et tertiary clair.",
        footerCaption:
          "Un seul composant footer, trois registres chromatiques, jamais trois constructions séparées.",
      },
      atomicRadio: {
        label: "La couche atomique",
        paragraphs: [
          "Sous les éléments structurels se trouve une seconde couche plus petite : les composants atomiques propres au SPF, construits pour ce qu’Angular Material ne couvre pas. Un composant d’option radio a été testé avec neuf puis quatorze occurrences simultanées — toutes les tailles de groupe qu’un véritable formulaire pourrait demander, pas seulement celle qui convenait à une maquette.",
        ],
        alt: "Composant d’option radio du SPF testé dans des groupes de deux à quatorze options, avec sélection unique dans chaque configuration.",
        caption:
          "Quatorze tailles de groupes testées simultanément, pas uniquement celle qui entrait dans une maquette.",
      },
      responsiveLanguage: {
        label: "Conçu pour chaque largeur, pas pour une seule",
        paragraphs: [
          "Aucun élément n’a été conçu à une seule taille avant d’être abandonné aux ruptures. Le sélecteur de langue existe à lui seul pour six largeurs explicites — 1920, 1440, 1024, 768, 380 et 350 — car une personne changeant de langue sur son téléphone dans une salle d’attente mérite le même composant qu’un agent sur son écran d’ordinateur, et non une version plus petite et plus discrète.",
        ],
        alt: "Sélecteur de langue du SPF conçu pour six breakpoints explicites — 1920, 1440, 1024, 768, 380 et 350 pixels — chacun nommé dans Figma et empilé selon sa largeur.",
        caption:
          "Le plus large des six breakpoints nommés, empilés de 1920 à 350 pixels.",
      },
      statesInputs: {
        label: "Les états ne viennent pas après coup",
        paragraphs: [
          "Un champ de formulaire n’est pas un composant unique, mais près d’une douzaine : default, focus, filled, error, validated, disabled, autocomplete — à multiplier encore pour les types text, number et date. Chaque état a été dessiné intentionnellement plutôt que supposé gratuit avec Angular Material.",
        ],
        alt: "Matrice des états de champs du SPF — default, focus, filled, error, validated, disabled et autocomplete — pour les types text, number et date.",
        caption:
          "Près d’une douzaine d’états dessinés pour chaque type de champ, et non supposés.",
      },
      vocabularyStepper: {
        label: "Le même vocabulaire en usage",
        paragraphs: [
          "La même discipline apparaît là où une personne peut réellement la ressentir : un stepper d’activation de compte avec des états nommés — in progress, pending, to be verified, completed, rejected. Le vocabulaire sémantique défini par le chapitre Design System travaille désormais dans un véritable parcours, plutôt que de rester dans une palette inutilisée.",
        ],
        alt: "Stepper d’activation de compte du SPF avec les états in progress, pending, to be verified, completed et rejected, réutilisant les mêmes couleurs sémantiques que les tokens et les notifications.",
        caption:
          "In progress, pending, to be verified, completed, rejected : les tokens au travail dans un véritable parcours.",
      },
    },
  },
}

export { spfExecutionContent }
