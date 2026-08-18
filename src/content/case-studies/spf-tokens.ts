import type { LocalizedContent } from "@/i18n"

type TokenSection = {
  label: string
  paragraphs: string[]
  alt?: string
  caption?: string
}
type TokensContent = {
  kicker: string
  introduction: string
  palette: TokenSection
  schemes: TokenSection
  tooling: TokenSection
  code: TokenSection
}

const spfTokensContent: LocalizedContent<TokensContent> = {
  en: {
    kicker: "Design Tokens",
    introduction:
      "Foundations became tokens the moment they needed to survive being used by someone else — a hex value in a Figma layer doesn’t travel to a developer’s codebase. A named variable does.",
    palette: {
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
    schemes: {
      label: "Where the Modes Actually Diverge",
      paragraphs: [
        "One group over, the same palette gets assigned meaning. `Schemes` — 49 variables — resolves the raw ramp into roles a component can actually ask for: `Primary`, `On Primary`, `Primary Container`, and an “On” pairing for every single role, not just the ones someone remembered to check.",
        "This is also where the four modes stop agreeing. `Secondary` resolves to `645E53` in Light, `262219` in Light High Contrast, `474239` in Light Medium Contrast, and `FFFFFF` in Dark — the same semantic name, four independently defined values. Contrast is a decision made in the scheme, not a property of the palette underneath it.",
      ],
      alt: "The Figma Variables panel for SPF's material-theme collection, Schemes group selected — semantic roles including Primary, On Primary, Primary Container, Secondary and Error, each resolving to different hex values across the Light, Light High Contrast, Light Medium Contrast and Dark mode columns.",
      caption:
        "Primary, Secondary, Error and their on-colors — one name, four independently resolvable values.",
    },
    tooling: {
      label: "Built and Checked in Tooling",
      paragraphs: [
        "The tokens were built and maintained in Tokens Studio for Figma, not styled by hand per screen — the same Collections-and-Groups structure the Variables panel already showed, organized under one shared structure rather than a palette copied into each new file.",
        "A tooltip reading “Level AA — Pass, Level AAA — Pass” on a background/text pairing means that contrast check happened here, at the source, before a single component consumed the token — not discovered later in an audit, after it had already shipped everywhere.",
      ],
      alt: "Tokens Studio for Figma's panel, showing the material-theme color set under a light theme, with a tooltip reporting a WCAG contrast check: Level AA pass, Level AAA pass.",
      caption:
        "Tokens Studio for Figma — contrast checked at the token, before a component ever consumes it.",
    },
    code: {
      label: "Exported as Code",
      paragraphs: [
        "The tokens don’t stop at Figma. Exported as structured JSON — `$type`, `$value`, one file per collection, a dedicated `$themes.json` defining how they combine — the same values a developer opens in their own editor, not a screenshot handed across the gap between design and engineering.",
      ],
      alt: "The exported SPF design tokens as JSON in a code editor — files named SPF Foreign Affairs foundations.tokens.json, Color Styles.tokens.json, $themes.json and global.json, using the $type/$value token format.",
      caption: "The same tokens, exported — real file names, real values.",
    },
  },
  fr: {
    kicker: "Design Tokens",
    introduction:
      "Les fondations sont devenues des tokens dès qu’elles ont dû survivre à leur utilisation par quelqu’un d’autre : une valeur hexadécimale dans un calque Figma ne voyage pas jusqu’au code d’un développeur. Une variable nommée, si.",
    palette: {
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
    schemes: {
      label: "Là où les modes divergent réellement",
      paragraphs: [
        "Dans le groupe voisin, la même palette reçoit une signification. `Schemes` — 49 variables — transforme la gamme brute en rôles qu’un composant peut réellement demander : `Primary`, `On Primary`, `Primary Container`, avec une association « On » pour chaque rôle, pas seulement pour ceux que quelqu’un a pensé à vérifier.",
        "C’est également ici que les quatre modes cessent de correspondre. `Secondary` vaut `645E53` en Light, `262219` en Light High Contrast, `474239` en Light Medium Contrast et `FFFFFF` en Dark : un même nom sémantique, quatre valeurs définies indépendamment. Le contraste résulte d’une décision prise dans le scheme, et non d’une propriété de la palette sous-jacente.",
      ],
      alt: "Panneau Figma Variables de la collection material-theme du SPF, groupe Schemes sélectionné : rôles sémantiques dont Primary, On Primary, Primary Container, Secondary et Error, avec des valeurs différentes selon les quatre modes.",
      caption:
        "Primary, Secondary, Error et leurs on-colors : un seul nom, quatre valeurs pouvant être résolues indépendamment.",
    },
    tooling: {
      label: "Construit et contrôlé dans les outils",
      paragraphs: [
        "Les tokens ont été construits et maintenus dans Tokens Studio for Figma, sans stylisation manuelle écran par écran. Ils reprennent la structure Collections-and-Groups déjà visible dans le panneau Variables, organisée dans une structure partagée plutôt que dans une palette copiée dans chaque nouveau fichier.",
        "Une infobulle indiquant « Level AA — Pass, Level AAA — Pass » pour une association arrière-plan/texte signifie que le contraste a été vérifié ici, à la source, avant qu’un seul composant n’utilise le token — et non découvert plus tard lors d’un audit, après son déploiement général.",
      ],
      alt: "Panneau Tokens Studio for Figma montrant les couleurs material-theme en mode clair, avec une infobulle de contrôle WCAG indiquant Level AA pass et Level AAA pass.",
      caption:
        "Tokens Studio for Figma : contraste contrôlé au niveau du token, avant son utilisation par un composant.",
    },
    code: {
      label: "Exporté sous forme de code",
      paragraphs: [
        "Les tokens ne s’arrêtent pas à Figma. Ils sont exportés en JSON structuré — `$type`, `$value`, un fichier par collection et un fichier `$themes.json` dédié définissant leur combinaison. Un développeur ouvre ainsi les mêmes valeurs dans son éditeur, plutôt que de recevoir une capture d’écran jetée par-dessus la séparation entre design et développement.",
      ],
      alt: "Design tokens du SPF exportés en JSON dans un éditeur de code, avec les fichiers SPF Foreign Affairs foundations.tokens.json, Color Styles.tokens.json, $themes.json et global.json utilisant le format $type/$value.",
      caption:
        "Les mêmes tokens exportés : de véritables noms de fichiers et de véritables valeurs.",
    },
  },
}

export { spfTokensContent }
