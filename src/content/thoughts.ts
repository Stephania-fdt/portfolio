export type SelectedThought = {
  category: string
  headline: string
  paragraphs: string[]
}

/**
 * DRAFT — placeholders in Stéphania's established voice (systems,
 * accessibility, AI, strategy). Needs her real convictions before this
 * ships; replace freely, one or two paragraphs each.
 */
export const selectedThoughts: SelectedThought[] = [
  {
    category: "On Design Systems",
    headline: "A design system is a product, not a deliverable.",
    paragraphs: [
      "Most design systems fail the moment they ship — treated as a one-time handoff instead of a living product with its own users, roadmap and maintainers.",
      "I build them with the same discipline as anything customer-facing: research, iteration, documentation, and a team that still owns it long after launch.",
    ],
  },
  {
    category: "On AI",
    headline: "AI removes friction, not judgment.",
    paragraphs: [
      "The temptation with AI is to let it decide. My rule is the opposite: it clears the friction around a decision so I have more time to actually make it, not less reason to.",
    ],
  },
  {
    category: "On Accessibility",
    headline: "Accessible design is just design, done properly.",
    paragraphs: [
      "Treating accessibility as a separate workstream is how teams end up retrofitting empathy after the fact. It belongs in the first sketch, not the final audit — a decision made with everyone in mind from the start, not corrected for later.",
    ],
  },
  {
    category: "On Product Strategy",
    headline: "Good design decisions are strategy decisions.",
    paragraphs: [
      "A product's interface is where its strategy either holds up or falls apart — priorities, trade-offs and business model all become visible the moment someone tries to use it.",
      "I don't design after strategy is set. I design to help set it.",
    ],
  },
]

function getSelectedThoughts(language: "en" | "fr"): SelectedThought[] {
  if (language === "en") return selectedThoughts
  return [
    {
      category: "Sur les Design Systems",
      headline: "Un Design System est un produit, pas un livrable.",
      paragraphs: [
        "La plupart des Design Systems échouent au moment de leur livraison : ils sont traités comme une passation unique plutôt que comme un produit vivant avec ses utilisateurs, sa roadmap et ses responsables.",
        "Je les construis avec la même rigueur que les produits destinés aux clients : recherche, itération, documentation et une équipe qui les porte après le lancement.",
      ],
    },
    {
      category: "Sur l’IA",
      headline: "L’IA réduit la friction, pas le jugement.",
      paragraphs: [
        "La tentation avec l’IA est de la laisser décider. Ma règle est inverse : elle retire la friction autour d’une décision pour me laisser davantage de temps pour la prendre réellement.",
      ],
    },
    {
      category: "Sur l’accessibilité",
      headline: "Le design accessible, c’est simplement du design bien fait.",
      paragraphs: [
        "Traiter l’accessibilité comme un chantier séparé pousse les équipes à ajouter l’empathie après coup. Elle doit exister dans la première esquisse, pas dans le dernier audit.",
      ],
    },
    {
      category: "Sur la stratégie produit",
      headline:
        "Les bonnes décisions de design sont des décisions de stratégie.",
      paragraphs: [
        "L’interface est le lieu où la stratégie d’un produit tient ou s’effondre : priorités, arbitrages et modèle économique deviennent visibles dès qu’une personne l’utilise.",
        "Je ne conçois pas une fois la stratégie définie. Je conçois pour aider à la définir.",
      ],
    },
  ]
}

export { getSelectedThoughts }
