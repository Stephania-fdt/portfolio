import type { LocalizedContent } from "@/i18n"

/** Illustration pass: one concise paragraph plus one closing line, replacing the former introduction+section+conclusion shape — a real trim, not a relabel (see the sections it replaces in git history if needed). */
type ReflectionContent = {
  kicker: string
  label: string
  paragraph: string
  conclusion: string
}

/** One decision: what forced the call, what I chose, why — one flowing block, its own proof sits beside it in the component. */
type Decision = {
  label: string
  paragraphs: string[]
}

type SpfPageContent = {
  hero: {
    eyebrow: string
    title: string
    summary: string
    meta: { label: string; value: string }[]
    alt: string
  }
  problem: {
    kicker: string
    /** A compressed, real-fact headline (not a new claim) — the opening line of `challenge`, reframed. */
    headline: string
    challengeLabel: string
    challenge: string
    contributionLabel: string
    contribution: string
  }
  decisions: {
    kicker: string
    intro: string
    items: Decision[]
  }
  result: {
    kicker: string
    intro: string
    outcome: string
  }
  reflection: ReflectionContent
}

/**
 * Rebuilt (editorial restructure, length pass 2): five chapters instead
 * of seven, no chapter kept just because it already existed in code.
 * Overview folded into Problem & Contribution (it repeated the same
 * facts at a different altitude); Design System, Execution and
 * Accessibility folded into three named decisions, each with its own
 * proof beside it — the exhaustive token/component inventory these
 * chapters used to spell out in full now lives behind two "reference"
 * disclosures on the decisions that earned them, unchanged in substance,
 * not forced on every reader.
 */
const spfPageContent: LocalizedContent<SpfPageContent> = {
  en: {
    hero: {
      eyebrow: "Design System · Federal Public Service Foreign Affairs",
      title: "Building a Scalable Government Design System",
      summary:
        "A modular, accessible design system for Belgium's Federal Public Service Foreign Affairs — four applications, one visual language.",
      meta: [
        { label: "Role", value: "Product Designer" },
        { label: "Timeline", value: "2023 — Present" },
        { label: "Team", value: "4–10+ developers" },
        { label: "Tools", value: "Figma · Angular Material · Zeroheight" },
      ],
      alt: "The SPF citizen portal's authentication screen — the government's architecture as backdrop, the sign-in flow as the one deliberate object in frame.",
    },
    problem: {
      kicker: "Problem & Contribution",
      headline:
        "Four Applications, Each Designed in Isolation, With No Shared UX Methodology.",
      challengeLabel: "The Challenge",
      challenge:
        "Travel Web, Visa on Web, Visanet and the other applications SPF runs had each been designed by its own team, with no shared UX methodology and no Product Designer ever involved — a citizen moving between them could reasonably assume four different companies had built them.",
      contributionLabel: "My Contribution",
      contribution:
        "There was no Product Owner, no UX Lead. Every UX and UI decision — not the application architecture, but the visual hierarchy of the information itself — was mine to make, in a federal service where accessibility and governance were real standing requirements, not aspirations.",
    },
    decisions: {
      kicker: "Key Decisions",
      intro:
        "Three calls carried the system from proposal to something four applications actually run on.",
      items: [
        {
          label: "Angular Material as the Base, Custom Where It Counts",
          paragraphs: [
            "A fully custom system didn't survive contact with reality: time constraints and developer conversations made it impractical. Foundational components come from Angular Material instead — alerts, pickers, navigation, dialogs, restyled to one shared language — and I built custom components from scratch only where SPF's identity actually needed to show: the header carrying the Kingdom of Belgium's crest, the sidebar, the footer.",
            "I wasn't the application architect; what I owned was the visual hierarchy of the information itself. That wasn't a retreat from ambition — it let the system actually ship, and still carry SPF's identity exactly where a citizen would notice it.",
          ],
        },
        {
          label: "Tokens Before Screens, Checked in Four Modes",
          paragraphs: [
            "Every color, type size and spacing value resolves to a named role before it resolves to a value — a hex code in a Figma layer doesn't travel to a developer's codebase, a named variable does. The same role resolves differently across four modes (Light, Light High Contrast, Light Medium Contrast, Dark), because contrast is a decision made in the system, not left to whichever screen renders it.",
            "Built and checked in Tokens Studio for Figma, exported as structured JSON, so a developer opens the same values in their own editor rather than a screenshot thrown across the gap between design and engineering.",
          ],
        },
        {
          label: "Accessibility Checked at the Token, Not the Audit",
          paragraphs: [
            "Contrast was verified inside Tokens Studio itself — “Level AA — Pass, Level AAA — Pass” — before a single component consumed the token. A disabled button that still reads as a button, dimmed by the same amount across every variant, is a decision, not whatever Angular Material shipped by default.",
            "The honest limit: no file in this project documents a visible focus order or a keyboard-only walkthrough of the portal yet, so none is claimed here.",
          ],
        },
      ],
    },
    result: {
      kicker: "Result",
      intro:
        "The same header, footer and button component that authenticate a citizen carry them into a real homepage, service cards and a dedicated FAQ — proof the system holds a real page together, not just a component sheet.",
      outcome:
        "Designed and shipped, in production since 2023 across the applications shown here — not a completed research program: no file in this project documents formal usability testing against it.",
    },
    reflection: {
      kicker: "Reflection",
      label: "Choosing Not to Defend From a Distance",
      paragraph:
        "One developer told me directly: “We build functional applications. That's what really matters.” Rather than argue, I went to understand the world that belief came from — attending the Piscine at École 42 in Brussels, not to become a developer, but to become a better Product Designer for the ones I worked with. Slowly, the developers who'd been wary of me started coming to me with questions before they built something, not after.",
      conclusion:
        "I believe great products are built when people understand each other before they build together.",
    },
  },
  fr: {
    hero: {
      eyebrow: "Design System · Service public fédéral Affaires étrangères",
      title: "Un Design System public, accessible et évolutif",
      summary:
        "Un Design System modulaire et accessible pour le SPF Affaires étrangères — quatre applications, un seul langage visuel.",
      meta: [
        { label: "Rôle", value: "Product Designer" },
        { label: "Période", value: "2023 — Aujourd'hui" },
        { label: "Équipe", value: "4–10+ développeurs" },
        { label: "Outils", value: "Figma · Angular Material · Zeroheight" },
      ],
      alt: "Écran d'authentification du portail citoyen du SPF, avec l'architecture gouvernementale en arrière-plan et le parcours de connexion comme élément central.",
    },
    problem: {
      kicker: "Problème & contribution",
      headline:
        "Quatre applications, chacune conçue isolément, sans méthodologie UX partagée.",
      challengeLabel: "Le défi",
      challenge:
        "Travel Web, Visa on Web, Visanet et les autres applications du SPF avaient chacune été conçues par leur propre équipe, sans méthodologie UX partagée et sans Product Designer impliqué — une personne passant de l'une à l'autre pouvait raisonnablement croire que quatre entreprises différentes les avaient conçues.",
      contributionLabel: "Ma contribution",
      contribution:
        "Pas de Product Owner, pas d'UX Lead. Toutes les décisions UX et UI — non l'architecture applicative, mais la hiérarchie visuelle de l'information elle-même — m'appartenaient, dans un service public fédéral où l'accessibilité et la gouvernance étaient des exigences réelles, pas des aspirations.",
    },
    decisions: {
      kicker: "Décisions clés",
      intro:
        "Trois choix ont porté le système de la proposition jusqu'à un usage réel par quatre applications.",
      items: [
        {
          label: "Angular Material en base, du sur-mesure là où ça compte",
          paragraphs: [
            "Un système entièrement sur mesure n'a pas survécu à la réalité : contraintes de temps et échanges avec les développeurs l'ont rendu impraticable. Les composants fondamentaux viennent d'Angular Material — alerts, pickers, navigation, dialogs, réadaptés à un langage commun — et j'ai construit du sur-mesure uniquement là où l'identité du SPF devait s'exprimer : le header portant le blason du Royaume de Belgique, la sidebar, le footer.",
            "Je n'étais pas architecte applicative ; ma responsabilité portait sur la hiérarchie visuelle de l'information. Ce n'était pas un recul d'ambition — cela a permis au système d'être réellement livré, tout en portant l'identité du SPF exactement là où une personne la remarque.",
          ],
        },
        {
          label: "Les tokens avant les écrans, contrôlés sur quatre modes",
          paragraphs: [
            "Chaque couleur, taille typographique et valeur d'espacement se résout d'abord vers un rôle nommé avant une valeur — une couleur hexadécimale dans un calque Figma ne voyage pas jusqu'au code d'un développeur, une variable nommée si. Le même rôle se résout différemment selon quatre modes (Light, Light High Contrast, Light Medium Contrast, Dark), car le contraste est une décision prise dans le système, pas laissée à l'écran qui l'affiche.",
            "Construits et contrôlés dans Tokens Studio for Figma, exportés en JSON structuré, pour qu'un développeur ouvre les mêmes valeurs dans son propre éditeur plutôt qu'une capture d'écran jetée par-dessus la séparation entre design et développement.",
          ],
        },
        {
          label: "L'accessibilité vérifiée au token, pas à l'audit",
          paragraphs: [
            "Le contraste a été vérifié directement dans Tokens Studio — « Level AA — Pass, Level AAA — Pass » — avant qu'un seul composant n'utilise le token. Un bouton désactivé qui reste identifiable comme bouton, atténué de la même manière sur chaque variante, résulte d'une décision, pas du comportement livré par défaut par Angular Material.",
            "La limite honnête : aucun fichier de ce projet ne documente encore un ordre de focus visible ou un parcours du portail uniquement au clavier ; aucune affirmation de ce type n'est donc formulée ici.",
          ],
        },
      ],
    },
    result: {
      kicker: "Résultat",
      intro:
        "Le même header, le même footer et le même composant de bouton qui authentifient une personne l'accompagnent vers une véritable page d'accueil, des cartes de services et une FAQ dédiée — la preuve que le système tient une vraie page ensemble, pas seulement une planche de composants.",
      outcome:
        "Conçu et livré, en production depuis 2023 sur les applications présentées ici — pas un programme de recherche abouti : aucun fichier de ce projet ne documente de tests d'utilisabilité formels.",
    },
    reflection: {
      kicker: "Réflexion",
      label: "Choisir de ne pas défendre à distance",
      paragraph:
        "Un développeur m'a dit directement : « Nous construisons des applications fonctionnelles. C'est ce qui compte vraiment. » Plutôt que d'argumenter, je suis allée comprendre le monde dont venait cette conviction — en participant à la Piscine de l'École 42 à Bruxelles, non pour devenir développeuse, mais pour devenir une meilleure Product Designer pour celles et ceux avec qui je travaillais. Peu à peu, les développeurs qui se méfiaient de moi ont commencé à venir me poser des questions avant de construire quelque chose, plutôt qu'après.",
      conclusion:
        "Je crois que les meilleurs produits naissent lorsque les personnes se comprennent avant de construire ensemble.",
    },
  },
}

export { spfPageContent }
export type { ReflectionContent, Decision }
