import type { LocalizedContent } from "@/i18n"

type AccessibilityContent = {
  kicker: string
  introduction: string
  contrast: { label: string; paragraphs: string[]; alt: string }
  states: { label: string; paragraphs: string[]; alt: string; caption: string }
  gap: {
    checklist: string
    description: string
    label: string
    paragraph: string
  }
  conclusion: string
}

const spfAccessibilityContent: LocalizedContent<AccessibilityContent> = {
  en: {
    kicker: "Accessibility",
    introduction:
      "Every citizen filling out this system arrives with a different screen, a different input device, a different amount of patience. Accessibility wasn’t a pass taken at the end — it was checked at the token, before a single screen existed.",
    contrast: {
      label: "Contrast, Checked at the Source",
      paragraphs: [
        'The Design Tokens chapter already carries one piece of evidence: a background/text pairing checked inside Tokens Studio itself, reporting “Level AA — Pass, Level AAA — Pass” before a single component consumed the token. A second capture gives the surface layer the same treatment — Surface Dim, Surface, Surface Bright and five Surface Container steps, each a real resolved hex, with a dedicated On Surface and Outline built to sit on top of them. Nine roles, nine real values, not one "text color" asked to work everywhere.',
        "The same discipline shows up in Foundations’ tonal system: every feedback role — success, warning, information, error — ships with its own dedicated on-color, so a component asking for a feedback color never has to guess whether its own text will read against it.",
      ],
      alt: "SPF's surface and neutral color tokens documented with real hex values — Surface Dim, Surface, Surface Bright, five Surface Container steps, On Surface, On Surface Variant, Outline and Outline Variant — shown twice, once against a pale backdrop and once against near-black.",
    },
    states: {
      label: "States Aren’t Cosmetic",
      paragraphs: [
        "A disabled button that still reads as a button — dimmed enough to signal “not now,” legible enough not to disappear — is a decision, not whatever Angular Material happened to ship by default. Every variant in the system carries the same disabled treatment: primary, rounded, outlined, text, tile, each dimmed by the same amount rather than five separate guesses.",
        "That same discipline is what let the Component Library chapter show a dozen input states — default, focus, filled, error, validated, disabled, autocomplete — and a notification system built on roles a screen reader and a stressed citizen both need to tell apart at a glance.",
      ],
      alt: "A matrix of Angular Material button variants from the SPF component library — normal, primary, disabled and rounded — showing the disabled state applied consistently across every button style.",
      caption:
        "Normal, primary, disabled, rounded — the same treatment, not five separate guesses.",
    },
    gap: {
      checklist: "Keyboard Navigation",
      description:
        "No real capture of focus order or a keyboard-only flow exists yet — nothing shown rather than a fabricated diagram.",
      label: "What Isn’t Proven Yet",
      paragraph:
        "A citizen filling out a visa form by keyboard alone, or by screen reader, deserves a system designed for that path, not one that merely tolerates it. That’s the honest gap in this chapter: no file in the project documents a visible focus order or a keyboard-only walkthrough of the portal, so none is claimed here.",
    },
    conclusion:
      "None of this adds up to a claim that the system is fully accessible — three chapters of evidence aren’t entitled to say that. What they can say is narrower and true: contrast was checked before a component existed, states were drawn on purpose, and where the evidence runs out, this chapter says so instead of filling the gap with a badge nobody earned.",
  },
  fr: {
    kicker: "Accessibilité",
    introduction:
      "Chaque personne qui utilise ce système arrive avec un écran différent, un périphérique de saisie différent et une patience différente. L’accessibilité n’était pas une vérification finale : elle était contrôlée au niveau du token, avant même l’existence du premier écran.",
    contrast: {
      label: "Le contraste vérifié à la source",
      paragraphs: [
        "Le chapitre Design Tokens apporte déjà une première preuve : une association arrière-plan/texte contrôlée directement dans Tokens Studio, avec les résultats « Level AA — Pass, Level AAA — Pass », avant qu’un seul composant n’utilise le token. Une deuxième capture applique le même traitement aux surfaces : Surface Dim, Surface, Surface Bright et cinq niveaux de Surface Container, chacun résolu vers une véritable valeur hexadécimale, avec des rôles dédiés On Surface et Outline. Neuf rôles, neuf valeurs réelles, plutôt qu’une seule « couleur de texte » censée fonctionner partout.",
        "La même discipline apparaît dans le système tonal des Fondations : chaque rôle de retour — succès, avertissement, information, erreur — possède sa propre on-color. Un composant demandant une couleur de retour n’a donc jamais à deviner si son texte sera lisible dessus.",
      ],
      alt: "Tokens de surface et de couleurs neutres du SPF documentés avec leurs valeurs hexadécimales réelles : Surface Dim, Surface, Surface Bright, cinq niveaux Surface Container, On Surface, On Surface Variant, Outline et Outline Variant, présentés sur deux arrière-plans.",
    },
    states: {
      label: "Les états ne sont pas cosmétiques",
      paragraphs: [
        "Un bouton désactivé qui reste identifiable comme bouton — assez atténué pour signifier « pas maintenant », assez lisible pour ne pas disparaître — résulte d’une décision, pas du comportement livré par défaut dans Angular Material. Chaque variante du système partage le même traitement désactivé : primary, rounded, outlined, text et tile sont toutes atténuées de la même manière plutôt que selon cinq approximations différentes.",
        "Cette même discipline permet au chapitre Bibliothèque de composants de montrer une douzaine d’états de champs — default, focus, filled, error, validated, disabled, autocomplete — ainsi qu’un système de notifications fondé sur des rôles qu’un lecteur d’écran comme une personne sous pression doivent pouvoir distinguer immédiatement.",
      ],
      alt: "Matrice des variantes de boutons Angular Material de la bibliothèque SPF — normal, primary, disabled et rounded — montrant un état désactivé cohérent pour chaque style.",
      caption:
        "Normal, primary, disabled, rounded : le même traitement plutôt que cinq approximations séparées.",
    },
    gap: {
      checklist: "Navigation au clavier",
      description:
        "Aucune capture réelle d’un ordre de focus ou d’un parcours entièrement au clavier n’existe encore — rien n’est montré plutôt que de fabriquer un diagramme.",
      label: "Ce qui n’est pas encore prouvé",
      paragraph:
        "Une personne remplissant un formulaire de visa uniquement au clavier ou avec un lecteur d’écran mérite un système conçu pour ce parcours, pas un système qui le tolère à peine. Voilà la lacune réelle de ce chapitre : aucun fichier du projet ne documente un ordre de focus visible ou un parcours du portail uniquement au clavier ; aucune affirmation de ce type n’est donc formulée ici.",
    },
    conclusion:
      "Rien de tout cela ne permet d’affirmer que le système est entièrement accessible : trois chapitres de preuves n’autorisent pas cette conclusion. Ils permettent une affirmation plus précise et exacte : le contraste a été vérifié avant l’existence des composants, les états ont été dessinés intentionnellement et, lorsque les preuves s’arrêtent, ce chapitre le dit au lieu de combler le vide avec un badge qui n’a pas été mérité.",
  },
}

export { spfAccessibilityContent }
