import type { LocalizedContent } from "@/i18n"

type FoundationSection = {
  label: string
  paragraphs: string[]
  alts?: string[]
  captions?: string[]
}
type FoundationsContent = {
  kicker: string
  introduction: string
  missingDescription: string
  sections: Record<
    "typography" | "colors" | "icons" | "layout" | "elevation",
    FoundationSection
  >
}

const spfFoundationsContent: LocalizedContent<FoundationsContent> = {
  en: {
    kicker: "Foundations",
    introduction:
      "Before a single component existed, the system needed a shared visual language — the colors, type and icons every component would later draw from, not improvise.",
    missingDescription:
      "No real export exists yet — nothing shown rather than a fabricated diagram.",
    sections: {
      typography: {
        label: "Typography",
        paragraphs: [
          "A citizen filling out a visa application and a developer reading the documentation are looking at the same typographic system, at different moments, under different pressure. Hierarchy is what lets both of them find what matters first.",
          "Travel Web, Visa on Web, Visanet — three different products, one typographic voice: Roboto for interface text, Lora reserved for moments that need to read as editorial rather than functional. The same heading means the same thing, at the same weight, everywhere a citizen might land.",
          "Sizes, line-heights and contrast were set against WCAG's actual thresholds, not a visual guess — the same requirement both typefaces had to pass before either made it into the system.",
        ],
        alts: [
          "The SPF typography scale in Figma — the Roboto and Lora heading specimens side by side, H1 through H6, regular and bold.",
        ],
        captions: [
          "The type scale — Roboto for interface, Lora reserved for editorial moments.",
        ],
      },
      colors: {
        label: "Color System",
        paragraphs: [
          'Every color resolves to a role before it resolves to a hex value — primary, secondary and tertiary key colors, plus a dedicated feedback set for success, warning, information and error, each paired with its own "on-color" so text never has to guess its own contrast.',
          'Underneath the roles sits a full tonal system — ten steps per color, light mode and dark mode built from the same scale rather than two separate palettes. Semantic naming means a component asking for "error" gets the correct red whichever mode it\'s rendered in, and contrast holds at every step, not just the ones someone remembered to check.',
        ],
        alts: [
          "SPF accent color documentation — primary, secondary and tertiary key colors with hex values and usage notes.",
          "SPF system feedback colors — green success, yellow warning, blue information and error, each with its container and on-color pairing.",
          "The full SPF tonal color system in light and dark mode, from P-10 through P-100 for every color role.",
        ],
      },
      icons: {
        label: "Icons",
        paragraphs: [
          "Recognition has to survive translation — SPF serves citizens in four languages, and an icon has to mean the same thing before a single word is read. The library draws from Font Awesome's established conventions rather than inventing new metaphors, because familiarity was worth more here than originality.",
          "Every icon shares the same stroke weight and grid, so a system icon and a custom one sit next to each other without either reading as an afterthought — scalable enough to cover a government-sized surface area, and reusable enough that no team has to draw its own.",
        ],
        alts: [
          "The SPF icon library in Figma, built on Font Awesome's conventions, showing the full set at a shared stroke weight and grid.",
        ],
        captions: [
          "The icon library — Font Awesome's conventions, not a new metaphor.",
        ],
      },
      layout: {
        label: "Layout & Grid",
        paragraphs: [
          'A responsive grid is what lets "consistent across applications" survive contact with a phone screen — the same spacing scale and alignment logic, whether a citizen is filling out a form on a laptop in an office or on a phone in a waiting room.',
          "Predictable spacing does quiet work: it's what makes a page feel considered rather than assembled, without a visitor ever consciously noticing the rhythm doing it.",
        ],
      },
      elevation: {
        label: "Elevation",
        paragraphs: [
          "Five steps, named by weight rather than a pixel value — Super Light through Dark — each one a slightly deeper shadow than the last. Elevation had to do real work without ever feeling decorative — a government interface earns trust through restraint, so shadow exists here to separate a modal from its background, not to make anything look expensive.",
        ],
        alts: [
          "Five SPF elevation steps — Super Light, Light, Medium, Medium Dark and Dark — shown as swatches with progressively deeper shadow.",
        ],
      },
    },
  },
  fr: {
    kicker: "Fondations",
    introduction:
      "Avant même l’existence du premier composant, le système avait besoin d’un langage visuel partagé : les couleurs, la typographie et les icônes dans lesquels chaque composant puiserait ensuite, sans improviser.",
    missingDescription:
      "Aucun export réel n’existe encore — rien n’est montré plutôt que de fabriquer un diagramme.",
    sections: {
      typography: {
        label: "Typographie",
        paragraphs: [
          "Une personne remplissant une demande de visa et un développeur consultant la documentation regardent le même système typographique, à des moments différents et sous des pressions différentes. La hiérarchie leur permet à tous deux de trouver d’abord ce qui compte.",
          "Travel Web, Visa on Web, Visanet : trois produits différents, une seule voix typographique. Roboto est utilisée pour les textes d’interface et Lora est réservée aux moments qui doivent paraître éditoriaux plutôt que fonctionnels. Un même titre porte le même sens et la même graisse partout où une personne peut arriver.",
          "Les tailles, interlignages et contrastes ont été définis selon les seuils réels des WCAG, non selon une intuition visuelle — la même exigence que les deux polices devaient satisfaire avant d’entrer dans le système.",
        ],
        alts: [
          "Échelle typographique du SPF dans Figma, avec les spécimens de titres Roboto et Lora côte à côte, de H1 à H6, en regular et bold.",
        ],
        captions: [
          "L’échelle typographique : Roboto pour l’interface, Lora réservée aux moments éditoriaux.",
        ],
      },
      colors: {
        label: "Système de couleurs",
        paragraphs: [
          "Chaque couleur correspond à un rôle avant de correspondre à une valeur hexadécimale : couleurs clés primaires, secondaires et tertiaires, auxquelles s’ajoutent des couleurs de retour dédiées au succès, à l’avertissement, à l’information et à l’erreur. Chacune possède sa propre « on-color » afin que le contraste du texte ne soit jamais laissé au hasard.",
          "Sous ces rôles se trouve un système tonal complet : dix niveaux par couleur, avec des modes clair et sombre construits à partir de la même échelle plutôt que de deux palettes séparées. Grâce aux noms sémantiques, un composant demandant « error » reçoit le bon rouge quel que soit le mode, et le contraste tient à chaque niveau, pas uniquement à ceux que quelqu’un a pensé à vérifier.",
        ],
        alts: [
          "Documentation des couleurs d’accent du SPF : couleurs clés primaires, secondaires et tertiaires avec valeurs hexadécimales et règles d’usage.",
          "Couleurs système du SPF pour le succès, l’avertissement, l’information et l’erreur, avec leurs containers et on-colors.",
          "Système tonal complet du SPF en modes clair et sombre, de P-10 à P-100 pour chaque rôle de couleur.",
        ],
      },
      icons: {
        label: "Icônes",
        paragraphs: [
          "La reconnaissance doit survivre à la traduction : le SPF sert les citoyens dans quatre langues et une icône doit conserver le même sens avant la lecture du moindre mot. La bibliothèque s’appuie sur les conventions établies de Font Awesome plutôt que d’inventer de nouvelles métaphores, car la familiarité comptait ici davantage que l’originalité.",
          "Chaque icône partage la même épaisseur de trait et la même grille. Une icône système et une icône sur mesure peuvent ainsi se côtoyer sans que l’une paraisse ajoutée après coup — assez évolutives pour couvrir un périmètre gouvernemental et assez réutilisables pour qu’aucune équipe n’ait à dessiner les siennes.",
        ],
        alts: [
          "Bibliothèque d’icônes du SPF dans Figma, fondée sur les conventions de Font Awesome et présentant l’ensemble sur une grille et avec une épaisseur de trait communes.",
        ],
        captions: [
          "La bibliothèque d’icônes : les conventions de Font Awesome plutôt qu’une nouvelle métaphore.",
        ],
      },
      layout: {
        label: "Mise en page & grille",
        paragraphs: [
          "Une grille responsive permet à la cohérence entre applications de résister à un écran de téléphone : la même échelle d’espacement et la même logique d’alignement, qu’une personne remplisse un formulaire sur un ordinateur au bureau ou sur un téléphone dans une salle d’attente.",
          "Des espacements prévisibles accomplissent un travail discret : ils donnent à une page une impression de conception plutôt que d’assemblage, sans que la personne remarque consciemment le rythme qui la produit.",
        ],
      },
      elevation: {
        label: "Élévation",
        paragraphs: [
          "Cinq niveaux nommés selon leur poids plutôt que selon une valeur en pixels — de Super Light à Dark — chacun apportant une ombre légèrement plus profonde que le précédent. L’élévation devait remplir une fonction réelle sans devenir décorative : une interface publique gagne la confiance par la retenue. L’ombre sert donc à séparer une modale de son arrière-plan, pas à donner une impression de luxe.",
        ],
        alts: [
          "Cinq niveaux d’élévation du SPF — Super Light, Light, Medium, Medium Dark et Dark — représentés avec des ombres progressivement plus profondes.",
        ],
      },
    },
  },
}

export { spfFoundationsContent }
