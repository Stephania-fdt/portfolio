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
    headline: "AI should make judgment faster, not replace it.",
    paragraphs: [
      "The temptation with AI is to let it decide. My rule is the opposite: it removes the friction around a decision so a designer can spend that time actually deciding.",
      "Used well, it buys more exploration and more rigor. Used carelessly, it ships someone else's average taste at scale.",
    ],
  },
  {
    category: "On Accessibility",
    headline: "Accessible design is just design, done properly.",
    paragraphs: [
      "I've never met a constraint from accessibility that didn't also produce a clearer, more resilient product for everyone using it.",
      "Treating it as a separate workstream is how teams end up retrofitting empathy. It belongs in the first sketch, not the final audit.",
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
