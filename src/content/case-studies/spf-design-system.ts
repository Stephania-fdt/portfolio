import type { LocalizedContent } from "@/i18n"

type CopyBlock = { label: string; paragraphs: string[] }
type ImageBlock = CopyBlock & { alt: string; caption?: string }
type GapBlock = CopyBlock & {
  assetStatus: string
  missingAssets: string[]
  missingDescription: string
}

type DesignSystemContent = {
  belgianIdentity: ImageBlock
  detailsSummary: string
  reference: {
    typography: ImageBlock
    fullColorSystem: ImageBlock
    icons: ImageBlock
    layout: GapBlock
    elevation: ImageBlock
    tokenPalette: ImageBlock
    tokenSchemes: ImageBlock
    tokenTooling: ImageBlock
    tokenCode: ImageBlock
  }
}

/**
 * Merges the former Foundations and Tokens chapters into one: the
 * problem (no shared visual language, tokens that have to survive being
 * used by someone else) → the system decision (role-based color, checked
 * per mode) → one real proof in the main flow, everything else — full
 * type/icon/elevation documentation, the full token architecture,
 * exported code — behind "Design system reference." No paragraph here
 * is invented; every sentence traces back to the original Foundations
 * or Tokens copy, just re-scoped between scan-level and deep-dive.
 */
const spfDesignSystemContent: LocalizedContent<DesignSystemContent> = {
  en: {
    belgianIdentity: {
      label: "A visual identity rooted in the Belgian context",
      paragraphs: [
        "The colours of the Belgian flag — black, yellow and red — serve as visual cues in the design system. Used as accents in the interfaces, they reflect the applications’ Belgian identity and create a consistent visual link across services. This national reference sits within the palette without overshadowing readability or the hierarchy of information.",
      ],
      alt: "Belgian identity palette: black, yellow and red swatches with their hexadecimal values.",
    },
    detailsSummary: "Design system reference",
    reference: {
      typography: {
        label: "Typography",
        paragraphs: [
          "A citizen filling out a visa application and a developer reading the documentation are looking at the same typographic system, at different moments, under different pressure. Hierarchy is what lets both of them find what matters first.",
          "Travel Web, Visa on Web, Visanet — three different products, one typographic voice: Roboto for interface text, Lora reserved for moments that need to read as editorial rather than functional. The same heading means the same thing, at the same weight, everywhere a citizen might land.",
          "Sizes, line-heights and contrast were set against WCAG's actual thresholds, not a visual guess — the same requirement both typefaces had to pass before either made it into the system.",
        ],
        alt: "SPF typography reference showing baseline and emphasized styles for display text, headlines, titles, labels and body text.",
        caption:
          "The type scale — Roboto for interface, Lora reserved for editorial moments.",
      },
      fullColorSystem: {
        label: "The Full Tonal System",
        paragraphs: [
          "The tonal palettes provide the shades assigned to interface roles in light and dark themes. Functional colours retain their distinct roles for errors, warnings, information and confirmations alongside the accents expressing Belgian identity.",
        ],
        alt: "SPF tonal palettes for primary, secondary, tertiary, error and neutral colours, with their roles in light and dark themes.",
      },
      icons: {
        label: "Icons",
        paragraphs: [
          "Recognition has to survive translation — SPF serves citizens in four languages, and an icon has to mean the same thing before a single word is read. The library draws from Font Awesome's established conventions rather than inventing new metaphors, because familiarity was worth more here than originality.",
          "Every icon shares the same stroke weight and grid, so a system icon and a custom one sit next to each other without either reading as an afterthought — scalable enough to cover a government-sized surface area, and reusable enough that no team has to draw its own.",
        ],
        alt: "The SPF icon library in Figma, built on Font Awesome's conventions, showing the full set at a shared stroke weight and grid.",
        caption:
          "The icon library — Font Awesome's conventions, not a new metaphor.",
      },
      layout: {
        label: "Layout & Grid",
        paragraphs: [
          'A responsive grid is what lets "consistent across applications" survive contact with a phone screen — the same spacing scale and alignment logic, whether a citizen is filling out a form on a laptop in an office or on a phone in a waiting room.',
          "Predictable spacing does quiet work: it's what makes a page feel considered rather than assembled, without a visitor ever consciously noticing the rhythm doing it.",
        ],
        assetStatus: "awaiting assets",
        missingAssets: ["spacing.webp", "grid.webp"],
        missingDescription:
          "No real export exists yet — nothing shown rather than a fabricated diagram.",
      },
      elevation: {
        label: "Elevation",
        paragraphs: [
          "Five steps, named by weight rather than a pixel value — Super Light through Dark — each one a slightly deeper shadow than the last. Elevation had to do real work without ever feeling decorative — a government interface earns trust through restraint, so shadow exists here to separate a modal from its background, not to make anything look expensive.",
        ],
        alt: "Five SPF elevation steps — Super Light, Light, Medium, Medium Dark and Dark — shown as swatches with progressively deeper shadow.",
      },
      tokenPalette: {
        label: "The Palette, Independent of Mode",
        paragraphs: [
          "Before a color means anything, it’s a position on a ramp. Eighteen steps per hue, named by position — Primary 100, 90, 80, down to 0 — sitting inside a `Palettes` group holding 108 of this one collection’s 174 variables, alongside `Schemes`, `Surfaces` and `Extended Colors` as siblings in the same file, not a palette re-copied per project.",
          "Four modes already exist at this layer — Light, Light High Contrast, Light Medium Contrast, Dark — but every one of them resolves to the same value here. Primary 90 is D9E3F1 whichever mode is active. The palette is raw material, built once; it hasn’t been asked to carry meaning yet.",
          "This one collection sits beside two much larger ones in the same file — `material-theme/Dark` and `material-theme/Light`, 1,568 variables each — the fully expanded palette a single mode draws from. A system built at that scale isn’t maintained by hand, one swatch at a time.",
        ],
        alt: "The Figma Variables panel for SPF's material-theme collection, Palettes group selected — a raw tonal ramp from Primary 100 through Primary 0, with four mode columns (Light, Light High Contrast, Light Medium Contrast, Dark) all showing identical hex values per step.",
        caption:
          "Primary 100 through 0 — the same hex in all four modes. The palette doesn't know what a theme is yet.",
      },
      tokenSchemes: {
        label: "Where the Modes Actually Diverge",
        paragraphs: [
          "One group over, the same palette gets assigned meaning. `Schemes` — 49 variables — resolves the raw ramp into roles a component can actually ask for: `Primary`, `On Primary`, `Primary Container`, and an “On” pairing for every single role, not just the ones someone remembered to check.",
          "This is also where the four modes stop agreeing. `Secondary` resolves to `645E53` in Light, `262219` in Light High Contrast, `474239` in Light Medium Contrast, and `FFFFFF` in Dark — the same semantic name, four independently defined values. Contrast is a decision made in the scheme, not a property of the palette underneath it.",
        ],
        alt: "The Figma Variables panel for SPF's material-theme collection, Schemes group selected — semantic roles including Primary, On Primary, Primary Container, Secondary and Error, each resolving to different hex values across the Light, Light High Contrast, Light Medium Contrast and Dark mode columns.",
        caption:
          "Primary, Secondary, Error and their on-colors — one name, four independently resolvable values.",
      },
      tokenTooling: {
        label: "Built and Checked in Tooling",
        paragraphs: [
          "The tokens were built and maintained in Tokens Studio for Figma, not styled by hand per screen — the same Collections-and-Groups structure the Variables panel already showed, organized under one shared structure rather than a palette copied into each new file.",
          "The screenshot shows a contrast check for the Primary / On Primary pairing in Tokens Studio. The displayed AA and AAA results apply to that pairing; this capture alone does not establish accessibility compliance for the applications.",
        ],
        alt: "Tokens Studio for Figma showing light and dark token sets and a contrast tooltip for Primary #004e58 paired with On Primary #ffffff.",
        caption:
          "Tokens Studio — contrast check for the displayed Primary / On Primary pairing.",
      },
      tokenCode: {
        label: "Exported as Code",
        paragraphs: [
          "The tokens don’t stop at Figma. Exported as structured JSON — `$type`, `$value`, one file per collection, a dedicated `$themes.json` defining how they combine — the same values a developer opens in their own editor, not a screenshot handed across the gap between design and engineering.",
        ],
        alt: "The exported SPF design tokens as JSON in a code editor — files named SPF Foreign Affairs foundations.tokens.json, Color Styles.tokens.json, $themes.json and global.json, using the $type/$value token format.",
        caption: "The same tokens, exported — real file names, real values.",
      },
    },
  },
  fr: {
    belgianIdentity: {
      label: "Une identité visuelle ancrée dans le contexte belge",
      paragraphs: [
        "Les couleurs du drapeau belge — noir, jaune et rouge — servent de repères visuels dans le design system. Utilisées par touches dans les interfaces, elles rappellent l’identité belge des applications et créent un lien visuel cohérent entre les différents services. Cette référence nationale s’intègre à la palette sans prendre le pas sur la lisibilité ni sur la hiérarchie de l’information.",
      ],
      alt: "Palette de l’identité belge : nuances de noir, jaune et rouge avec leurs valeurs hexadécimales.",
    },
    detailsSummary: "Référence du Design System",
    reference: {
      typography: {
        label: "Typographie",
        paragraphs: [
          "Une personne remplissant une demande de visa et un développeur consultant la documentation regardent le même système typographique, à des moments différents et sous des pressions différentes. La hiérarchie leur permet à tous deux de trouver d’abord ce qui compte.",
          "Travel Web, Visa on Web, Visanet : trois produits différents, une seule voix typographique. Roboto est utilisée pour les textes d’interface et Lora est réservée aux moments qui doivent paraître éditoriaux plutôt que fonctionnels. Un même titre porte le même sens et la même graisse partout où une personne peut arriver.",
          "Les tailles, interlignages et contrastes ont été définis selon les seuils réels des WCAG, non selon une intuition visuelle — la même exigence que les deux polices devaient satisfaire avant d’entrer dans le système.",
        ],
        alt: "Référence typographique du SPF : styles de base et accentués pour les grands titres, titres, libellés et textes courants.",
        caption:
          "L’échelle typographique : Roboto pour l’interface, Lora réservée aux moments éditoriaux.",
      },
      fullColorSystem: {
        label: "Le système tonal complet",
        paragraphs: [
          "Les palettes tonales fournissent les nuances associées aux rôles d’interface en thèmes clair et sombre. Les couleurs fonctionnelles conservent leurs rôles distincts pour les erreurs, les avertissements, l’information et les confirmations, aux côtés des accents exprimant l’identité belge.",
        ],
        alt: "Palettes tonales du SPF pour les couleurs primaires, secondaires, tertiaires, d’erreur et neutres, avec leurs rôles en thèmes clair et sombre.",
      },
      icons: {
        label: "Icônes",
        paragraphs: [
          "La reconnaissance doit survivre à la traduction : le SPF sert les citoyens dans quatre langues et une icône doit conserver le même sens avant la lecture du moindre mot. La bibliothèque s’appuie sur les conventions établies de Font Awesome plutôt que d’inventer de nouvelles métaphores, car la familiarité comptait ici davantage que l’originalité.",
          "Chaque icône partage la même épaisseur de trait et la même grille. Une icône système et une icône sur mesure peuvent ainsi se côtoyer sans que l’une paraisse ajoutée après coup — assez évolutives pour couvrir un périmètre gouvernemental et assez réutilisables pour qu’aucune équipe n’ait à dessiner les siennes.",
        ],
        alt: "Bibliothèque d’icônes du SPF dans Figma, fondée sur les conventions de Font Awesome et présentant l’ensemble sur une grille et avec une épaisseur de trait communes.",
        caption:
          "La bibliothèque d’icônes : les conventions de Font Awesome plutôt qu’une nouvelle métaphore.",
      },
      layout: {
        label: "Mise en page & grille",
        paragraphs: [
          "Une grille responsive permet à la cohérence entre applications de résister à un écran de téléphone : la même échelle d’espacement et la même logique d’alignement, qu’une personne remplisse un formulaire sur un ordinateur au bureau ou sur un téléphone dans une salle d’attente.",
          "Des espacements prévisibles accomplissent un travail discret : ils donnent à une page une impression de conception plutôt que d’assemblage, sans que la personne remarque consciemment le rythme qui la produit.",
        ],
        assetStatus: "visuels en attente",
        missingAssets: ["spacing.webp", "grid.webp"],
        missingDescription:
          "Aucun export réel n’existe encore — rien n’est montré plutôt que de fabriquer un diagramme.",
      },
      elevation: {
        label: "Élévation",
        paragraphs: [
          "Cinq niveaux nommés selon leur poids plutôt que selon une valeur en pixels — de Super Light à Dark — chacun apportant une ombre légèrement plus profonde que le précédent. L’élévation devait remplir une fonction réelle sans devenir décorative : une interface publique gagne la confiance par la retenue. L’ombre sert donc à séparer une modale de son arrière-plan, pas à donner une impression de luxe.",
        ],
        alt: "Cinq niveaux d’élévation du SPF — Super Light, Light, Medium, Medium Dark et Dark — représentés avec des ombres progressivement plus profondes.",
      },
      tokenPalette: {
        label: "La palette, indépendante du mode",
        paragraphs: [
          "Avant de porter un sens, une couleur occupe une position sur une gamme. Dix-huit niveaux par teinte, nommés selon leur position — Primary 100, 90, 80, jusqu’à 0 — sont réunis dans un groupe `Palettes` contenant 108 des 174 variables de cette collection. `Schemes`, `Surfaces` et `Extended Colors` se trouvent à côté dans le même fichier, plutôt que dans une palette recopiée pour chaque projet.",
          "Quatre modes existent déjà à ce niveau — Light, Light High Contrast, Light Medium Contrast, Dark — mais ils aboutissent tous ici à la même valeur. Primary 90 reste D9E3F1 quel que soit le mode actif. La palette est une matière première construite une fois ; elle ne porte pas encore de signification.",
          "Cette collection côtoie deux collections bien plus grandes dans le même fichier : `material-theme/Dark` et `material-theme/Light`, avec 1 568 variables chacune. Elles constituent la palette entièrement déployée dans laquelle puise un mode. Un système de cette ampleur ne se maintient pas manuellement, nuance par nuance.",
        ],
        alt: "Panneau Figma Variables de la collection material-theme du SPF, groupe Palettes sélectionné : gamme tonale brute de Primary 100 à Primary 0, avec quatre colonnes de modes affichant les mêmes valeurs hexadécimales à chaque niveau.",
        caption:
          "De Primary 100 à 0 : la même valeur hexadécimale dans les quatre modes. La palette ne connaît pas encore la notion de thème.",
      },
      tokenSchemes: {
        label: "Là où les modes divergent réellement",
        paragraphs: [
          "Dans le groupe voisin, la même palette reçoit une signification. `Schemes` — 49 variables — transforme la gamme brute en rôles qu’un composant peut réellement demander : `Primary`, `On Primary`, `Primary Container`, avec une association « On » pour chaque rôle, pas seulement pour ceux que quelqu’un a pensé à vérifier.",
          "C’est également ici que les quatre modes cessent de correspondre. `Secondary` vaut `645E53` en Light, `262219` en Light High Contrast, `474239` en Light Medium Contrast et `FFFFFF` en Dark : un même nom sémantique, quatre valeurs définies indépendamment. Le contraste résulte d’une décision prise dans le scheme, et non d’une propriété de la palette sous-jacente.",
        ],
        alt: "Panneau Figma Variables de la collection material-theme du SPF, groupe Schemes sélectionné : rôles sémantiques dont Primary, On Primary, Primary Container, Secondary et Error, avec des valeurs différentes selon les quatre modes.",
        caption:
          "Primary, Secondary, Error et leurs on-colors : un seul nom, quatre valeurs pouvant être résolues indépendamment.",
      },
      tokenTooling: {
        label: "Construit et contrôlé dans les outils",
        paragraphs: [
          "Les tokens ont été construits et maintenus dans Tokens Studio for Figma, sans stylisation manuelle écran par écran. Ils reprennent la structure Collections-and-Groups déjà visible dans le panneau Variables, organisée dans une structure partagée plutôt que dans une palette copiée dans chaque nouveau fichier.",
          "La capture montre un contrôle de contraste de l’association Primary / On Primary dans Tokens Studio. Les résultats AA et AAA affichés concernent cette association ; cette capture seule ne permet pas d’établir la conformité des applications en matière d’accessibilité.",
        ],
        alt: "Tokens Studio for Figma présentant les jeux de tokens clairs et sombres et une infobulle de contraste pour Primary #004e58 associé à On Primary #ffffff.",
        caption:
          "Tokens Studio : contrôle du contraste de l’association Primary / On Primary affichée.",
      },
      tokenCode: {
        label: "Exporté sous forme de code",
        paragraphs: [
          "Les tokens ne s’arrêtent pas à Figma. Ils sont exportés en JSON structuré — `$type`, `$value`, un fichier par collection et un fichier `$themes.json` dédié définissant leur combinaison. Un développeur ouvre ainsi les mêmes valeurs dans son éditeur, plutôt que de recevoir une capture d’écran jetée par-dessus la séparation entre design et développement.",
        ],
        alt: "Design tokens du SPF exportés en JSON dans un éditeur de code, avec les fichiers SPF Foreign Affairs foundations.tokens.json, Color Styles.tokens.json, $themes.json et global.json utilisant le format $type/$value.",
        caption:
          "Les mêmes tokens exportés : de véritables noms de fichiers et de véritables valeurs.",
      },
    },
  },
}

export { spfDesignSystemContent }
