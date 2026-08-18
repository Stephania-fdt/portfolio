export type ContactContent = {
  statement: string
  homepageStatement: string
  email: string
  linkedin: string
}

/**
 * The Epilogue (`PORTFOLIO_CONSTITUTION.md`) — the closing statement, one
 * real way to reach her. LinkedIn over a mailto/form: her real, verified
 * profile URL, opened in a new tab so leaving the portfolio isn't a dead
 * end. No other social links here — none are verified yet, and a portfolio
 * this disciplined about not fabricating project facts doesn't fabricate
 * a colophon either.
 */
export const contactContent: ContactContent = {
  statement:
    "Feel free to reach out directly on LinkedIn — just mention that you found me through my portfolio.",
  homepageStatement:
    "Want to discuss a role or a project? Email me or connect with me on LinkedIn.",
  email:
    "mailto:hello@stephania-fdt.com?subject=Product%20Design%20Opportunity%20%E2%80%94%20St%C3%A9phania",
  linkedin: "https://www.linkedin.com/in/stephania-fordant",
}

function getContactContent(language: "en" | "fr"): ContactContent {
  return language === "fr"
    ? {
        ...contactContent,
        statement:
          "N’hésitez pas à me contacter directement sur LinkedIn — indiquez simplement que vous avez découvert mon profil via mon portfolio.",
        homepageStatement:
          "Vous souhaitez échanger au sujet d’un poste ou d’un projet ? Écrivez-moi ou contactez-moi sur LinkedIn.",
      }
    : contactContent
}

export { getContactContent }
