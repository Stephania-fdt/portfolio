export type ProcessStage = {
  title: string
  sentence: string
}

/**
 * DRAFT — placeholders in Stéphania's established voice (systems,
 * accessibility, scale). Needs her real approach before this ships;
 * replace freely, the section is built for exactly these five stages.
 */
export const processStages: ProcessStage[] = [
  {
    title: "Discover",
    sentence:
      "Every project starts with listening — to users, to data, to the constraints nobody wrote down. I'd rather spend longer understanding the problem than rush toward the wrong solution.",
  },
  {
    title: "Frame",
    sentence:
      "Complexity is rarely the problem — ambiguity is. I turn scattered inputs into a clear, shared point of view before a single screen gets designed.",
  },
  {
    title: "Design",
    sentence:
      "I design in systems, not screens — components, patterns and language that stay coherent as a product grows far beyond its first release.",
  },
  {
    title: "Validate",
    sentence:
      'Design is a hypothesis until it meets real people. I test early, test often, and treat accessibility as a non-negotiable part of what "working" means.',
  },
  {
    title: "Scale",
    sentence:
      "The work isn't finished when it ships — it's finished when a team can carry it forward without me. Documentation, tokens and shared language are what make that possible.",
  },
]

function getProcessStages(language: "en" | "fr"): ProcessStage[] {
  if (language === "en") return processStages
  return [
    {
      title: "Découvrir",
      sentence:
        "Chaque projet commence par l’écoute : des utilisateurs, des données et des contraintes que personne n’a formulées. Je préfère comprendre le problème plutôt que d’aller trop vite vers une mauvaise solution.",
    },
    {
      title: "Cadrer",
      sentence:
        "La complexité est rarement le problème ; l’ambiguïté l’est. Je transforme des éléments dispersés en une vision claire et partagée avant de concevoir le moindre écran.",
    },
    {
      title: "Concevoir",
      sentence:
        "Je conçois des systèmes, pas des écrans isolés : composants, patterns et langage restent cohérents à mesure que le produit grandit.",
    },
    {
      title: "Valider",
      sentence:
        "Le design est une hypothèse jusqu’à sa rencontre avec de vraies personnes. Je teste tôt, souvent, et traite l’accessibilité comme une exigence non négociable.",
    },
    {
      title: "Faire évoluer",
      sentence:
        "Le travail n’est pas terminé à la mise en ligne : il l’est lorsqu’une équipe peut le poursuivre sans moi. Documentation, tokens et langage partagé rendent cela possible.",
    },
  ]
}

export { getProcessStages }
