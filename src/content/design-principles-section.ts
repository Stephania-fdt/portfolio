import type { LocalizedContent } from "@/i18n"

type DesignPrinciplesSectionContent = {
  ariaLabel: string
  kicker: string
  heading: [string, string]
  intro: string
  specimen: string
  tokens: {
    color: string
    typeScale: string
    headline: string
    sectionTitle: string
    body: string
    annotation: string
    spacing: string
  }
  components: {
    buttons: string
    primary: string
    outline: string
    secondary: string
    target: string
    email: string
    placeholder: string
    hint: string
    focus: string
    visible: string
    outlineHint: string
    tags: string
    pass: string
    token: string
    deprecated: string
    source: string
    governed: string
  }
  grid: {
    title: string
    ariaLabel: string
    start: string
    span: string
    end: string
    description: string
  }
}

const designPrinciplesSectionContent: LocalizedContent<DesignPrinciplesSectionContent> =
  {
    en: {
      ariaLabel: "Design Systems",
      kicker: "Design Systems",
      heading: ["Systems,", "not screens."],
      intro:
        "Every decision should make the next hundred decisions easier. Below: the actual tokens and components this portfolio is built from — the same discipline I bring to a federal design system.",
      specimen: "Specimen view",
      tokens: {
        color: "Color — 6 tokens",
        typeScale: "Type scale — fluid",
        headline: "Headline",
        sectionTitle: "Section title",
        body: "Body copy set for reading — 66 characters to the line.",
        annotation: "Technical annotation",
        spacing: "Spacing — 8pt base",
      },
      components: {
        buttons: "Buttons — 3 variants · 3 sizes",
        primary: "Primary",
        outline: "Outline",
        secondary: "Secondary",
        target: "min target 44px",
        email: "Email",
        placeholder: "you@studio.com",
        hint: "label + hint, never placeholder-only",
        focus: "Focus state",
        visible: "Visible, never suppressed",
        outlineHint: "outline 2px · offset 3px",
        tags: "Tags · status",
        pass: "AA PASS",
        token: "TOKEN",
        deprecated: "DEPRECATED",
        source: "Tokens → components, one source",
        governed: "Governed",
      },
      grid: {
        title: "Grid — 12 columns · 24px gutter",
        ariaLabel: "Twelve-column editorial layout grid",
        start: "col 01",
        span: "editorial span 4 / 8",
        end: "col 12",
        description:
          "The grid is the identity: the same 12 columns govern the hero, the work plates and this specimen — asymmetry comes from how content is placed on it, never from abandoning it.",
      },
    },
    fr: {
      ariaLabel: "Design Systems",
      kicker: "Design Systems",
      heading: ["Des systèmes,", "pas des écrans."],
      intro:
        "Chaque décision doit simplifier les cent suivantes. Ci-dessous : les tokens et composants réels de ce portfolio — la même discipline que j’apporte à un Design System fédéral.",
      specimen: "Vue du spécimen",
      tokens: {
        color: "Couleurs — 6 tokens",
        typeScale: "Échelle typographique — fluide",
        headline: "Titre principal",
        sectionTitle: "Titre de section",
        body: "Corps de texte conçu pour la lecture — 66 caractères par ligne.",
        annotation: "Annotation technique",
        spacing: "Espacement — base 8 pt",
      },
      components: {
        buttons: "Boutons — 3 variantes · 3 tailles",
        primary: "Principal",
        outline: "Contour",
        secondary: "Secondaire",
        target: "cible minimale 44 px",
        email: "E-mail",
        placeholder: "vous@studio.com",
        hint: "label + indication, jamais uniquement un placeholder",
        focus: "État de focus",
        visible: "Visible, jamais supprimé",
        outlineHint: "contour 2 px · décalage 3 px",
        tags: "Tags · statut",
        pass: "AA VALIDÉ",
        token: "TOKEN",
        deprecated: "DÉPRÉCIÉ",
        source: "Tokens → composants, une seule source",
        governed: "Gouverné",
      },
      grid: {
        title: "Grille — 12 colonnes · gouttière 24 px",
        ariaLabel: "Grille éditoriale à douze colonnes",
        start: "col. 01",
        span: "portée éditoriale 4 / 8",
        end: "col. 12",
        description:
          "La grille constitue l’identité : les mêmes 12 colonnes gouvernent le hero, les planches de projets et ce spécimen. L’asymétrie vient du placement du contenu dans la grille, jamais de son abandon.",
      },
    },
  }

export { designPrinciplesSectionContent }
export type { DesignPrinciplesSectionContent }
