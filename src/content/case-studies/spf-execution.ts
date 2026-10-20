import type { LocalizedContent } from "@/i18n"

type ImageBlock = {
  label: string
  paragraphs: string[]
  alt: string
  caption: string
}

type ExecutionContent = {
  product: {
    label: string
    authAlts: string[]
    authCaptions: string[]
    authParagraph: string
  }
  detailsSummary: string
  reference: {
    angularPickers: ImageBlock
    /** Buttons, cards, text fields — one alt + caption per sheet, in that order. */
    angularSheets: {
      label: string
      paragraphs: string[]
      items: { alt: string; caption: string }[]
    }
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
    product: {
      label: "The System, Assembled Into a Real Product",
      authAlts: [
        "The SPF 'Welcome back' sign-in screen at desktop width — email and password fields and a single Sign in button inside the teal-headed card, over a photograph of the ministry's own architecture.",
        "The SPF authentication screen at mobile width, on a phone — 'Choose your authentication method,' with a digital-key option for Belgian citizens and a no-digital-key option for non-Belgians, same crest and photograph, stacked for a single hand.",
        "The same SPF authentication screen at tablet width — the two options stacked full-width inside the card, the ministry photograph still framing it.",
      ],
      authCaptions: [
        "Signing back in, over the same photograph, at desktop width.",
        "The authentication choice at mobile and tablet width. Not a smaller version — the same one.",
      ],
      authParagraph:
        "The choice a citizen makes first — a Belgian digital key, or a standard account for anyone else — renders identically in intent at both ends of the scale: the same crest, the same warm architectural photograph, the same two buttons, whether it's a desktop monitor or a phone held in one hand.",
    },
    detailsSummary: "Component library reference",
    reference: {
      angularPickers: {
        label: "The Angular Material Foundation",
        paragraphs: [
          "The Angular file's own sidebar reads less like a component list and more like an inventory: alerts, badges, avatars, banners, bottom navigation, bottom sheets, breadcrumbs, buttons, cards, carousels, chips, dialogs, dividers, expansion panels, footers, grid system, icons, lists, menus, navigation drawers, paginations, pickers, progress, ratings — each one checked off, not sketched once and left half-finished.",
          "Pickers alone show the discipline: a date calendar, a month selector and a time clock, restyled to the same dark-header language rather than left in Material's own defaults. Nothing here was skinned once and called done.",
        ],
        alt: "The SPF date-picker documentation sheet, built on Angular Material — modal pickers for a single date, a year and a date range; input pickers for one date or a range; docked desktop pickers with calendar, month and year lists; and a building-blocks matrix of day and year states (enabled, hovered, focused, pressed, disabled), all in the same teal accent and rounded-corner language.",
        caption:
          "Modal, input and docked — three date pickers, one visual language, not three.",
      },
      angularSheets: {
        label: "The Rest of the Material Layer",
        paragraphs: [
          "The same treatment carries across the rest of the Angular Material layer: floating action buttons in every size and role, cards with their header, media and action slots, and text fields in filled and outlined variants — each documented state by state and restyled to the same teal accent.",
        ],
        items: [
          {
            alt: "The SPF floating action button (FAB) documentation sheet, built on Angular Material — standard, medium and large FABs and their extended, labelled versions, each in primary, secondary and tertiary roles, filled and container variants, across four interaction states.",
            caption: "FABs — three sizes, three roles, four states.",
          },
          {
            alt: "The SPF cards documentation sheet, built on Angular Material — vertical cards with header, media, title, supporting text and secondary and primary actions; compact horizontal cards; swappable content slots; and a building-blocks grid of surface and elevation variants.",
            caption: "Cards — the same slots, vertical or compact.",
          },
          {
            alt: "The SPF text fields documentation sheet, built on Angular Material — filled and outlined fields, with or without a leading search icon and a trailing clear icon, shown in enabled, focused, hovered, error and disabled states with label, input, placeholder and supporting text.",
            caption: "Text fields — filled or outlined, five states each.",
          },
        ],
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
    product: {
      label: "Le système, assemblé en produit réel",
      authAlts: [
        "Écran de reconnexion « Welcome back » du SPF sur ordinateur, avec les champs e-mail et mot de passe et un unique bouton « Sign in » dans la carte à en-tête bleu canard, sur une photographie de l’architecture du ministère.",
        "Écran d’authentification du SPF sur smartphone, avec l’instruction « Choose your authentication method », une option de clé numérique pour les citoyens belges et une option sans clé numérique pour les autres, le même blason et la même photographie, adaptés à une utilisation à une main.",
        "Même écran d’authentification du SPF au format tablette, avec les deux options en pleine largeur dans la carte et la photographie du ministère toujours visible autour.",
      ],
      authCaptions: [
        "La reconnexion, sur la même photographie, sur ordinateur.",
        "Le choix d’authentification sur mobile et tablette. Pas une version réduite : la même interface.",
      ],
      authParagraph:
        "Le premier choix d’une personne — une clé numérique belge ou un compte standard pour les autres — conserve exactement la même intention aux deux extrémités de l’échelle : le même blason, la même photographie architecturale chaleureuse et les deux mêmes boutons, sur un écran d’ordinateur comme sur un téléphone tenu d’une main.",
    },
    detailsSummary: "Référence de la bibliothèque de composants",
    reference: {
      angularPickers: {
        label: "Les fondations Angular Material",
        paragraphs: [
          "La barre latérale du fichier Angular ressemble moins à une liste de composants qu’à un inventaire : alerts, badges, avatars, banners, bottom navigation, bottom sheets, breadcrumbs, buttons, cards, carousels, chips, dialogs, dividers, expansion panels, footers, grid system, icons, lists, menus, navigation drawers, paginations, pickers, progress et ratings. Chacun est finalisé, pas simplement esquissé puis laissé incomplet.",
          "Les pickers illustrent à eux seuls cette discipline : calendrier de date, sélecteur de mois et horloge, tous adaptés au même langage de header sombre plutôt que laissés avec les styles par défaut de Material. Rien n’a été habillé une seule fois avant d’être considéré comme terminé.",
        ],
        alt: "Planche de documentation des date pickers du SPF, basée sur Angular Material : pickers modaux pour une date, une année et une plage de dates ; pickers de saisie pour une date ou une plage ; pickers ancrés desktop avec calendrier, liste des mois et des années ; et une matrice des états des jours et des années (enabled, hovered, focused, pressed, disabled), avec le même accent bleu canard et les mêmes angles arrondis.",
        caption:
          "Modal, saisie et ancré : trois date pickers, un seul langage visuel.",
      },
      angularSheets: {
        label: "Le reste de la couche Material",
        paragraphs: [
          "Le même traitement s’étend au reste de la couche Angular Material : floating action buttons dans toutes les tailles et tous les rôles, cards avec leurs zones header, média et actions, et text fields en variantes filled et outlined. Chacun est documenté état par état et adapté au même accent bleu canard.",
        ],
        items: [
          {
            alt: "Planche de documentation des floating action buttons (FAB) du SPF, basée sur Angular Material : FAB standard, medium et large et leurs versions étendues avec libellé, chacun en rôles primary, secondary et tertiary, en variantes pleines et container, sur quatre états d’interaction.",
            caption: "FAB : trois tailles, trois rôles, quatre états.",
          },
          {
            alt: "Planche de documentation des cards du SPF, basée sur Angular Material : cards verticales avec header, média, titre, texte et actions secondary et primary ; cards horizontales compactes ; zones de contenu interchangeables ; et une grille de building blocks des variantes de surface et d’élévation.",
            caption: "Cards : les mêmes zones, en vertical ou en compact.",
          },
          {
            alt: "Planche de documentation des text fields du SPF, basée sur Angular Material : champs filled et outlined, avec ou sans icône de recherche et icône d’effacement, dans les états enabled, focused, hovered, error et disabled, avec label, saisie, placeholder et texte d’aide.",
            caption: "Text fields : filled ou outlined, cinq états chacun.",
          },
        ],
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
