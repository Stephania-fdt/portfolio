import type { LocalizedContent } from "@/i18n"

type SectionCopy = {
  label: string
  paragraphs: string[]
  alts?: string[]
  captions?: string[]
}
type ComponentsContent = {
  kicker: string
  introduction: string
  angular: SectionCopy
  custom: SectionCopy
  atomic: SectionCopy
  responsive: SectionCopy
  states: SectionCopy
  vocabulary: SectionCopy
  conclusion: string
}

const spfComponentsContent: LocalizedContent<ComponentsContent> = {
  en: {
    kicker: "Component Library",
    introduction:
      "Foundations gave the system its language. Tokens gave that language names. Components are where both had to survive being used — split across two separate Figma files, not one: `SPF _ Angular Material` for everything built on Angular's own foundation, and `SPF _ Design full-custom` for everything built from nothing. Neither file was allowed to feel like the other's afterthought.",
    angular: {
      label: "The Angular Material Foundation",
      paragraphs: [
        "The Angular file's own sidebar reads less like a component list and more like an inventory: alerts, badges, avatars, banners, bottom navigation, bottom sheets, breadcrumbs, buttons, cards, carousels, chips, dialogs, dividers, expansion panels, footers, grid system, icons, lists, menus, navigation drawers, paginations, pickers, progress, ratings — each one checked off, not sketched once and left half-finished.",
        "Pickers alone show the discipline: a date calendar, a month selector and a time clock, restyled to the same dark-header language rather than left in Material's own defaults. Nothing here was skinned once and called done.",
      ],
      alts: [
        "Three Angular Material picker components restyled for SPF — a date calendar, a month selector and a time clock, all sharing the same dark header and rounded-corner language.",
      ],
      captions: [
        "Date, month and time — three pickers, one visual language, not three.",
      ],
    },
    custom: {
      label: "What Angular Couldn’t Give It",
      paragraphs: [
        "Angular Material could give the system its buttons and its pickers. It couldn’t give it a header carrying the Kingdom of Belgium’s own crest, or a footer that had to read as government-issued at a glance — those were built from nothing, under their own section of the file: Header, Sidebar, Footer, each its own folder, not a variant of something borrowed.",
        "The footer alone ships in three color registers — a dark primary, a warm secondary, a light tertiary — because a single application's footer and a shared platform's footer don't carry the same weight, and the system had to hold both without forking into two components.",
      ],
      alts: [
        "The custom SPF header component carrying the Kingdom of Belgium's crest, shown at Desktop-1440 and Tablet-1024 breakpoints, in both light and dark variants.",
        "The custom SPF sidebar navigation component, expanded, shown in both light and dark variants side by side.",
        "The custom SPF footer component in three color registers — dark primary, warm secondary, light tertiary.",
      ],
      captions: [
        "The header — built from nothing, at Desktop and Tablet widths.",
        "The sidebar — the third piece Angular Material couldn't give it, light and dark.",
        "One footer component, three color registers, never three separate builds.",
      ],
    },
    atomic: {
      label: "The Atomic Layer",
      paragraphs: [
        "Underneath the structural pieces sits a second, smaller layer — SPF's own atomic components, built for what Angular Material doesn't cover: a notification system carrying the exact same info, success, warning and error roles the token system already defined, and a radio-option component tested across nine, then fourteen instances at once — every group size a real form might actually need, not just the one that looked good in a mockup.",
      ],
      alts: [
        "The SPF notification/alert component in info, success, warning and error variants — plain, with a text link, with two action buttons, and as a full-width banner — the same semantic color roles defined in the Design Tokens chapter.",
        "The SPF radio-option component tested across group sizes from two to fourteen options at once, showing single-select behavior at every configuration a real form might use.",
      ],
      captions: [
        "Info, success, warning, error — the same roles the tokens already named.",
        "Fourteen group sizes tested at once — not the one that happened to fit a mockup.",
      ],
    },
    responsive: {
      label: "Built at Every Width, Not Just One",
      paragraphs: [
        "None of this was designed once at one size and left to break. The language selector alone exists at six explicit widths — 1920, 1440, 1024, 768, 380 and 350 — because a citizen switching languages on a phone in a waiting room deserves the same component a case worker gets on a desktop monitor, not a smaller, quieter version of it.",
      ],
      alts: [
        "The SPF language selector component built at six explicit breakpoints — 1920, 1440, 1024, 768, 380 and 350 pixels, each labeled in the Figma file and stacked by width.",
      ],
      captions: [
        "The widest of six labeled breakpoints, stacked top to bottom by width — 1920 down to 350.",
      ],
    },
    states: {
      label: "States Aren’t an Afterthought",
      paragraphs: [
        "A form input isn't one component, it's roughly a dozen: default, focus, filled, error, validated, disabled, autocomplete — multiplied again across text, number and date types, each one drawn on purpose rather than assumed to fall out of Angular Material for free.",
      ],
      alts: [
        "A matrix of SPF input field states — default, focus, filled, error, validated, disabled, autocomplete — across text, number and date input types.",
      ],
      captions: [
        "Roughly a dozen states, drawn for every input type — not assumed.",
      ],
    },
    vocabulary: {
      label: "The Same Vocabulary, In Use",
      paragraphs: [
        "The same discipline shows up somewhere a citizen would actually feel it: an account-activation stepper with named states — in progress, pending, to be verified, completed, rejected — the same semantic vocabulary the token system defined two chapters ago, now doing real work in a real flow, not just sitting in a palette nobody consumed.",
      ],
      alts: [
        "The SPF account-activation stepper with named states — in progress, pending, to be verified, completed, rejected — reusing the same semantic colors as the token system and the notification component.",
      ],
      captions: [
        "In progress, pending, to be verified, completed, rejected — the tokens, doing real work.",
      ],
    },
    conclusion:
      "None of these pieces were designed in isolation. The same info, success, warning and error roles color a token, a notification and a stepper. The same button sits inside a card's actions and an alert's actions. That repetition, chapter after chapter, is the actual proof — not a folder of screens that happen to share a file, but one system, used everywhere it needed to be.",
  },
  fr: {
    kicker: "Bibliothèque de composants",
    introduction:
      "Les fondations ont donné son langage au système. Les tokens ont donné des noms à ce langage. Les composants sont l’endroit où les deux devaient résister à l’usage — répartis dans deux fichiers Figma distincts : `SPF _ Angular Material` pour tout ce qui repose sur les fondations d’Angular, et `SPF _ Design full-custom` pour tout ce qui a été construit de zéro. Aucun des deux fichiers ne devait sembler être une réflexion ajoutée après l’autre.",
    angular: {
      label: "Les fondations Angular Material",
      paragraphs: [
        "La barre latérale du fichier Angular ressemble moins à une liste de composants qu’à un inventaire : alerts, badges, avatars, banners, bottom navigation, bottom sheets, breadcrumbs, buttons, cards, carousels, chips, dialogs, dividers, expansion panels, footers, grid system, icons, lists, menus, navigation drawers, paginations, pickers, progress et ratings. Chacun est finalisé, pas simplement esquissé puis laissé incomplet.",
        "Les pickers illustrent à eux seuls cette discipline : calendrier de date, sélecteur de mois et horloge, tous adaptés au même langage de header sombre plutôt que laissés avec les styles par défaut de Material. Rien n’a été habillé une seule fois avant d’être considéré comme terminé.",
      ],
      alts: [
        "Trois composants picker Angular Material adaptés au SPF : calendrier de date, sélecteur de mois et horloge partageant le même header sombre et les mêmes angles arrondis.",
      ],
      captions: [
        "Date, mois et heure : trois pickers, un seul langage visuel.",
      ],
    },
    custom: {
      label: "Ce qu’Angular ne pouvait pas fournir",
      paragraphs: [
        "Angular Material pouvait fournir les boutons et les pickers du système. Il ne pouvait pas fournir un header portant le blason du Royaume de Belgique ni un footer immédiatement identifiable comme gouvernemental. Ceux-ci ont été construits de zéro dans leur propre section du fichier : Header, Sidebar et Footer, chacun dans son dossier, plutôt que comme variante d’un élément emprunté.",
        "Le footer existe à lui seul dans trois registres chromatiques — primary sombre, secondary chaud et tertiary clair — car le footer d’une application unique et celui d’une plateforme partagée ne portent pas le même poids. Le système devait accueillir les deux sans se diviser en deux composants.",
      ],
      alts: [
        "Composant header sur mesure du SPF portant le blason du Royaume de Belgique, présenté aux breakpoints Desktop-1440 et Tablet-1024 dans des variantes claires et sombres.",
        "Navigation latérale sur mesure du SPF déployée, présentée côte à côte dans ses variantes claire et sombre.",
        "Footer sur mesure du SPF dans trois registres chromatiques : primary sombre, secondary chaud et tertiary clair.",
      ],
      captions: [
        "Le header, construit de zéro aux largeurs Desktop et Tablet.",
        "La sidebar, troisième élément qu’Angular Material ne pouvait pas fournir, en clair et sombre.",
        "Un seul composant footer, trois registres chromatiques, jamais trois constructions séparées.",
      ],
    },
    atomic: {
      label: "La couche atomique",
      paragraphs: [
        "Sous les éléments structurels se trouve une seconde couche plus petite : les composants atomiques propres au SPF, construits pour ce qu’Angular Material ne couvre pas. Le système de notifications reprend exactement les rôles info, success, warning et error déjà définis par les tokens. Un composant d’option radio a été testé avec neuf puis quatorze occurrences simultanées — toutes les tailles de groupe qu’un véritable formulaire pourrait demander, pas seulement celle qui convenait à une maquette.",
      ],
      alts: [
        "Composant de notification et d’alerte du SPF dans ses variantes info, success, warning et error, en version simple, avec lien texte, deux boutons d’action et bannière pleine largeur.",
        "Composant d’option radio du SPF testé dans des groupes de deux à quatorze options, avec sélection unique dans chaque configuration.",
      ],
      captions: [
        "Info, success, warning, error : les mêmes rôles déjà nommés par les tokens.",
        "Quatorze tailles de groupes testées simultanément, pas uniquement celle qui entrait dans une maquette.",
      ],
    },
    responsive: {
      label: "Conçu pour chaque largeur, pas pour une seule",
      paragraphs: [
        "Aucun élément n’a été conçu à une seule taille avant d’être abandonné aux ruptures. Le sélecteur de langue existe à lui seul pour six largeurs explicites — 1920, 1440, 1024, 768, 380 et 350 — car une personne changeant de langue sur son téléphone dans une salle d’attente mérite le même composant qu’un agent sur son écran d’ordinateur, et non une version plus petite et plus discrète.",
      ],
      alts: [
        "Sélecteur de langue du SPF conçu pour six breakpoints explicites — 1920, 1440, 1024, 768, 380 et 350 pixels — chacun nommé dans Figma et empilé selon sa largeur.",
      ],
      captions: [
        "Le plus large des six breakpoints nommés, empilés de 1920 à 350 pixels.",
      ],
    },
    states: {
      label: "Les états ne viennent pas après coup",
      paragraphs: [
        "Un champ de formulaire n’est pas un composant unique, mais près d’une douzaine : default, focus, filled, error, validated, disabled, autocomplete — à multiplier encore pour les types text, number et date. Chaque état a été dessiné intentionnellement plutôt que supposé gratuit avec Angular Material.",
      ],
      alts: [
        "Matrice des états de champs du SPF — default, focus, filled, error, validated, disabled et autocomplete — pour les types text, number et date.",
      ],
      captions: [
        "Près d’une douzaine d’états dessinés pour chaque type de champ, et non supposés.",
      ],
    },
    vocabulary: {
      label: "Le même vocabulaire en usage",
      paragraphs: [
        "La même discipline apparaît là où une personne peut réellement la ressentir : un stepper d’activation de compte avec des états nommés — in progress, pending, to be verified, completed, rejected. Le vocabulaire sémantique défini deux chapitres plus tôt par les tokens travaille désormais dans un véritable parcours, plutôt que de rester dans une palette inutilisée.",
      ],
      alts: [
        "Stepper d’activation de compte du SPF avec les états in progress, pending, to be verified, completed et rejected, réutilisant les mêmes couleurs sémantiques que les tokens et les notifications.",
      ],
      captions: [
        "In progress, pending, to be verified, completed, rejected : les tokens au travail dans un véritable parcours.",
      ],
    },
    conclusion:
      "Aucun de ces éléments n’a été conçu isolément. Les mêmes rôles info, success, warning et error colorent un token, une notification et un stepper. Le même bouton se trouve dans les actions d’une carte et celles d’une alerte. Cette répétition, chapitre après chapitre, constitue la véritable preuve : non un dossier d’écrans partageant par hasard un fichier, mais un système unique utilisé partout où il devait l’être.",
  },
}

export { spfComponentsContent }
