import type { LocalizedContent } from "@/i18n"

type CopyBlock = { label: string; paragraphs: string[] }
type ImageBlock = CopyBlock & { alt: string; caption?: string }
type MultiImageBlock = CopyBlock & { alts: string[] }
type GapBlock = CopyBlock & {
  assetStatus: string
  missingAssets: string[]
  missingDescription: string
}

type DesignSystemContent = {
  kicker: string
  introduction: string
  colorRoles: ImageBlock
  system: CopyBlock
  conclusion: string
  detailsSummary: string
  reference: {
    typography: ImageBlock
    fullColorSystem: MultiImageBlock
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
    kicker: "The Design System",
    introduction:
      "Four applications with no shared visual language, and developers rebuilding the same buttons every time — the fix had to be a system, not a style guide. Every color, type size and spacing value resolves to a named role before it resolves to a value, because a hex code in a Figma layer doesn't travel to a developer's codebase. A named variable does.",
    colorRoles: {
      label: "Color, Resolved by Role",
      paragraphs: [
        "Every color resolves to a role before it resolves to a hex value — primary, secondary and tertiary key colors, plus a dedicated feedback set for success, warning, information and error, each paired with its own “on-color” so text never has to guess its own contrast.",
        "The same semantic name resolves differently across four modes — Light, Light High Contrast, Light Medium Contrast, Dark — because contrast is a decision made in the system, not a property left to whichever screen happens to render it.",
      ],
      alt: "SPF accent color documentation — primary, secondary and tertiary key colors with hex values and usage notes.",
      caption:
        "Primary, secondary, tertiary — and their feedback counterparts — each with a hex value and its own on-color, so no component has to guess its own contrast.",
    },
    system: {
      label: "One System, Four Modes",
      paragraphs: [
        "The palette alone runs 174 variables across one collection — eighteen steps per hue, resolving to the same value in all four modes, because a palette is raw material, not yet a decision. Meaning gets assigned one group over: forty-nine semantic roles like Primary, On Primary and Primary Container, each independently defined per mode — Secondary alone resolves to four different hex values depending on which one is active.",
        "Built and checked in Tokens Studio for Figma, not styled by hand per screen, and exported as structured JSON so a developer opens the same values in their own editor — never a screenshot thrown across the gap between design and engineering.",
      ],
    },
    conclusion:
      "None of this was designed to look good in a token sheet. It was designed to survive four applications, four contrast modes, and however many developers touched it after — which is the actual test a design system has to pass.",
    detailsSummary: "Design system reference",
    reference: {
      typography: {
        label: "Typography",
        paragraphs: [
          "A citizen filling out a visa application and a developer reading the documentation are looking at the same typographic system, at different moments, under different pressure. Hierarchy is what lets both of them find what matters first.",
          "Travel Web, Visa on Web, Visanet — three different products, one typographic voice: Roboto for interface text, Lora reserved for moments that need to read as editorial rather than functional. The same heading means the same thing, at the same weight, everywhere a citizen might land.",
          "Sizes, line-heights and contrast were set against WCAG's actual thresholds, not a visual guess — the same requirement both typefaces had to pass before either made it into the system.",
        ],
        alt: "The SPF typography scale in Figma — the Roboto and Lora heading specimens side by side, H1 through H6, regular and bold.",
        caption:
          "The type scale — Roboto for interface, Lora reserved for editorial moments.",
      },
      fullColorSystem: {
        label: "The Full Tonal System",
        paragraphs: [
          'Underneath the roles sits a full tonal system — ten steps per color, light mode and dark mode built from the same scale rather than two separate palettes. Semantic naming means a component asking for "error" gets the correct red whichever mode it\'s rendered in, and contrast holds at every step, not just the ones someone remembered to check.',
        ],
        alts: [
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
          "A tooltip reading “Level AA — Pass, Level AAA — Pass” on a background/text pairing means that contrast check happened here, at the source, before a single component consumed the token — not discovered later in an audit, after it had already shipped everywhere.",
        ],
        alt: "Tokens Studio for Figma's panel, showing the material-theme color set under a light theme, with a tooltip reporting a WCAG contrast check: Level AA pass, Level AAA pass.",
        caption:
          "Tokens Studio for Figma — contrast checked at the token, before a component ever consumes it.",
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
    kicker: "Le Design System",
    introduction:
      "Quatre applications sans langage visuel commun, et des développeurs qui recréaient les mêmes boutons à chaque projet : la réponse devait être un système, pas un guide de style. Chaque couleur, taille typographique et valeur d’espacement se résout d’abord vers un rôle nommé avant une valeur, car une couleur hexadécimale dans un calque Figma ne voyage pas jusqu’au code d’un développeur. Une variable nommée, si.",
    colorRoles: {
      label: "La couleur, résolue par rôle",
      paragraphs: [
        "Chaque couleur correspond à un rôle avant de correspondre à une valeur hexadécimale : couleurs clés primaires, secondaires et tertiaires, ainsi qu’un jeu de couleurs de retour dédié au succès, à l’avertissement, à l’information et à l’erreur, chacune associée à sa propre « on-color » pour que le contraste du texte ne soit jamais laissé au hasard.",
        "Un même nom sémantique se résout différemment selon quatre modes — Light, Light High Contrast, Light Medium Contrast, Dark — car le contraste est une décision prise dans le système, non une propriété laissée au hasard de l’écran qui l’affiche.",
      ],
      alt: "Documentation des couleurs d’accent du SPF : couleurs clés primaires, secondaires et tertiaires avec valeurs hexadécimales et règles d’usage.",
      caption:
        "Primary, secondary, tertiary — et leurs équivalents de retour — chacune avec sa valeur hexadécimale et sa propre on-color, pour qu’aucun composant n’ait à deviner son propre contraste.",
    },
    system: {
      label: "Un système, quatre modes",
      paragraphs: [
        "La seule palette compte 174 variables dans une collection : dix-huit niveaux par teinte, résolus vers la même valeur dans les quatre modes, car une palette est une matière première, pas encore une décision. La signification est attribuée dans le groupe voisin : quarante-neuf rôles sémantiques comme Primary, On Primary et Primary Container, chacun défini indépendamment par mode — Secondary seul se résout en quatre valeurs hexadécimales différentes selon le mode actif.",
        "Construits et contrôlés dans Tokens Studio for Figma plutôt que stylés à la main écran par écran, et exportés en JSON structuré pour qu’un développeur ouvre les mêmes valeurs dans son propre éditeur — jamais une capture d’écran jetée par-dessus la séparation entre design et développement.",
      ],
    },
    conclusion:
      "Rien de tout cela n’a été conçu pour bien paraître dans une planche de tokens. Cela a été conçu pour résister à quatre applications, quatre modes de contraste, et à tous les développeurs qui l’utiliseraient ensuite — c’est le véritable test qu’un Design System doit réussir.",
    detailsSummary: "Référence du Design System",
    reference: {
      typography: {
        label: "Typographie",
        paragraphs: [
          "Une personne remplissant une demande de visa et un développeur consultant la documentation regardent le même système typographique, à des moments différents et sous des pressions différentes. La hiérarchie leur permet à tous deux de trouver d’abord ce qui compte.",
          "Travel Web, Visa on Web, Visanet : trois produits différents, une seule voix typographique. Roboto est utilisée pour les textes d’interface et Lora est réservée aux moments qui doivent paraître éditoriaux plutôt que fonctionnels. Un même titre porte le même sens et la même graisse partout où une personne peut arriver.",
          "Les tailles, interlignages et contrastes ont été définis selon les seuils réels des WCAG, non selon une intuition visuelle — la même exigence que les deux polices devaient satisfaire avant d’entrer dans le système.",
        ],
        alt: "Échelle typographique du SPF dans Figma, avec les spécimens de titres Roboto et Lora côte à côte, de H1 à H6, en regular et bold.",
        caption:
          "L’échelle typographique : Roboto pour l’interface, Lora réservée aux moments éditoriaux.",
      },
      fullColorSystem: {
        label: "Le système tonal complet",
        paragraphs: [
          "Sous ces rôles se trouve un système tonal complet : dix niveaux par couleur, avec des modes clair et sombre construits à partir de la même échelle plutôt que de deux palettes séparées. Grâce aux noms sémantiques, un composant demandant « error » reçoit le bon rouge quel que soit le mode, et le contraste tient à chaque niveau, pas uniquement à ceux que quelqu’un a pensé à vérifier.",
        ],
        alts: [
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
          "Une infobulle indiquant « Level AA — Pass, Level AAA — Pass » pour une association arrière-plan/texte signifie que le contraste a été vérifié ici, à la source, avant qu’un seul composant n’utilise le token — et non découvert plus tard lors d’un audit, après son déploiement général.",
        ],
        alt: "Panneau Tokens Studio for Figma montrant les couleurs material-theme en mode clair, avec une infobulle de contrôle WCAG indiquant Level AA pass et Level AAA pass.",
        caption:
          "Tokens Studio for Figma : contraste contrôlé au niveau du token, avant son utilisation par un composant.",
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
