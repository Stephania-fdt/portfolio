export type EditorialQuoteContent = {
  quote: string
  attribution: string
}

/**
 * DRAFT — placeholder in Stéphania's established voice (systems,
 * accessibility, scale). Needs her real words before this ships;
 * replace freely, the section works with any string here.
 */
export const editorialQuote: EditorialQuoteContent = {
  quote:
    "The best design systems don't just ship products — they make every team around them faster, kinder and more confident.",
  attribution: "Design Philosophy",
}

function getEditorialQuote(language: "en" | "fr"): EditorialQuoteContent {
  return language === "fr"
    ? {
        quote:
          "Les meilleurs Design Systems ne se contentent pas de livrer des produits : ils rendent chaque équipe plus rapide, plus attentive et plus confiante.",
        attribution: "Philosophie du design",
      }
    : editorialQuote
}

export { getEditorialQuote }
