export type ContactPageContent = {
  eyebrow: string
  heading: string
  intro: string
  emailLabel: string
  emailValue: string
  emailHref: string
  copyEmail: string
  emailCopied: string
  linkedinLabel: string
  linkedinValue: string
  linkedinHref: string
  locationLabel: string
  locationValue: string
  cvLabel: string
  cvValue: string
  cvHref: string
  cvFilename: string
  cvAriaLabel: string
}

/**
 * The dedicated `/contact` page — "one screen, one intention." Reuses the
 * exact email and LinkedIn values already live in `content/contact.ts`
 * (the Epilogue section) and the exact CV paths already live in
 * `pages/Experience/Experience.tsx` — nothing here is a new address or a
 * new file, only a new place to find the same four real facts at a glance.
 */
const contactPageContent: Record<"en" | "fr", ContactPageContent> = {
  en: {
    eyebrow: "Contact",
    heading: "Let’s talk.",
    intro: "Direct and simple — no form in between.",
    emailLabel: "Email",
    emailValue: "hello@stephania-fdt.com",
    emailHref:
      "mailto:hello@stephania-fdt.com?subject=Product%20Design%20Opportunity%20%E2%80%94%20St%C3%A9phania",
    copyEmail: "Copy email address",
    emailCopied: "Email address copied",
    linkedinLabel: "LinkedIn",
    linkedinValue: "linkedin.com/in/stephania-fordant",
    linkedinHref: "https://www.linkedin.com/in/stephania-fordant",
    locationLabel: "Location",
    locationValue: "Brussels, Belgium",
    cvLabel: "CV",
    cvValue: "Download résumé",
    cvHref: "/stephania-fordant-product-designer-cv-en.pdf",
    cvFilename: "Stephania-Fordant-Product-Designer-CV-EN.pdf",
    cvAriaLabel: "Download Stéphania Fordant’s Product Designer CV as a PDF",
  },
  fr: {
    eyebrow: "Contact",
    heading: "Échangeons.",
    intro: "Direct et simple — sans formulaire intermédiaire.",
    emailLabel: "E-mail",
    emailValue: "hello@stephania-fdt.com",
    emailHref:
      "mailto:hello@stephania-fdt.com?subject=Product%20Design%20Opportunity%20%E2%80%94%20St%C3%A9phania",
    copyEmail: "Copier l’adresse e-mail",
    emailCopied: "Adresse e-mail copiée",
    linkedinLabel: "LinkedIn",
    linkedinValue: "linkedin.com/in/stephania-fordant",
    linkedinHref: "https://www.linkedin.com/in/stephania-fordant",
    locationLabel: "Localisation",
    locationValue: "Bruxelles, Belgique",
    cvLabel: "CV",
    cvValue: "Télécharger mon CV",
    cvHref: "/stephania-fordant-product-designer-cv-fr.pdf",
    cvFilename: "Stephania-Fordant-Product-Designer-CV-FR.pdf",
    cvAriaLabel:
      "Télécharger le CV Product Designer de Stéphania Fordant au format PDF",
  },
}

function getContactPageContent(language: "en" | "fr"): ContactPageContent {
  return contactPageContent[language]
}

export { getContactPageContent }
