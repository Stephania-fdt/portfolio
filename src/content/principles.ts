export type DesignPrinciple = {
  title: string
  sentence: string
}

/**
 * DRAFT — placeholders in Stéphania's established voice (systems,
 * accessibility, AI, scale). Needs her real convictions before this
 * ships; replace freely, the section works with any 3–5 entries here.
 */
export const designPrinciples: DesignPrinciple[] = [
  {
    title: "Systems over screens",
    sentence:
      "I design systems, not one-off screens — every decision should make the next hundred decisions easier, not harder.",
  },
  {
    title: "Accessible by default",
    sentence:
      "Accessibility isn't a checklist added at the end. It's a constraint that produces better design for everyone, from day one.",
  },
  {
    title: "Clarity over cleverness",
    sentence:
      "The best interface is the one nobody notices. Clarity always outperforms cleverness, especially at scale.",
  },
  {
    title: "AI as a collaborator, not a shortcut",
    sentence:
      "AI should extend a team's judgment, not replace it — the goal is better decisions, faster, never fewer decisions.",
  },
]
