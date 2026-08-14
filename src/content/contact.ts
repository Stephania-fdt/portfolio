export type ContactContent = {
  statement: string
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
  linkedin: "https://www.linkedin.com/in/stephania-fordant",
}

function getContactContent(language: "en" | "fr"): ContactContent {
  return language === "fr"
    ? {
        ...contactContent,
        statement:
          "N’hésitez pas à me contacter directement sur LinkedIn — indiquez simplement que vous avez découvert mon profil via mon portfolio.",
      }
    : contactContent
}

export { getContactContent }
