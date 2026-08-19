export type ExperienceContribution = {
  label: string
  items: string[]
}

export type ProfessionalExperience = {
  period: string
  role: string
  company: string
  location?: string
  /** How this assignment was staffed — a subtext line, not a second job
   *  title. SPF's two consulting companies (Cream Consulting, then eGov
   *  Select) are one continuous engagement, not two roles — matching how
   *  the CV itself presents it (Sprint "Experience — CV consistency"). */
  consultancy?: string
  /** One sentence: the environment and the problem space. */
  scope: string
  /** Grouped, labelled contributions — used for the two roles with enough
   *  real substance to structure this way (SPF, WellPack). */
  contributions?: ExperienceContribution[]
  /** A single-sentence contribution — used for the oldest, most synthetic
   *  entry instead of `contributions`, so its size on the page matches its
   *  recency (Sprint "Experience — recency weighting"). */
  contribution?: string
  /** Only ever a real, documented figure — never estimated or implied.
   *  Sourced from the CV where the portfolio itself didn't already state
   *  it. */
  outcome?: string
  /** A short aside for something real but secondary to the role itself —
   *  used once, for co-founding UX Tribe during the SPF engagement. */
  note?: string
}

export const professionalExperience: ProfessionalExperience[] = [
  {
    period: "April 2023 — Present",
    role: "IT Product Designer",
    company: "Belgian Federal Public Service — Foreign Affairs",
    location: "Brussels",
    consultancy:
      "Continuous engagement — staffed via Cream Consulting, then eGov Select",
    scope:
      "Standardising several public-sector applications for the Belgian federal government — UX, interface design and accessibility across teams.",
    contributions: [
      {
        label: "Design System",
        items: [
          "Built and evolved an Angular Material UI Kit into a scalable Design System — reusable components, Design Tokens, Zeroheight documentation.",
          "Grew from contributing to the system into leading its standardisation across teams.",
        ],
      },
      {
        label: "Research & accessibility",
        items: [
          "Led UX audits and benchmarking of existing applications, gathering requirements directly from analysts, project managers and stakeholders.",
          "Integrated WCAG 2.1 AA requirements into the system itself, not as a final audit.",
        ],
      },
      {
        label: "Collaboration",
        items: [
          "Facilitated ideation, card-sorting and co-design workshops, and worked directly with developers, Business Analysts and Product Owners through Agile ceremonies.",
        ],
      },
    ],
    outcome: "Workshop participation grew 20% within six months.",
    note: "Also co-founded UX Tribe, an internal community for UX knowledge-sharing, training and workshops.",
  },
  {
    period: "February 2021 — January 2023",
    role: "UX Designer / Marketing Project Manager",
    company: "WellPack",
    location: "Paris",
    scope:
      "Mobile-first product and marketing design for an SMS, RCS and mobile-acquisition company, translating client briefs into evidence-based decisions.",
    contributions: [
      {
        label: "Research & systems",
        items: [
          "Ran user interviews, market research and testing, then built reusable research frameworks and a standardised UI Kit.",
        ],
      },
      {
        label: "Brand & delivery",
        items: [
          "Shaped the visual identity and art direction, and designed mobile-first landing pages and interfaces.",
        ],
      },
    ],
    outcome:
      "The standardised UI Kit cut production time from four days to two.",
  },
  {
    period: "September 2019 — December 2020",
    role: "UI Designer / Social Media Manager",
    company: "Femmes d’Influence",
    location: "Paris",
    scope:
      "UX and content work for a women-focused media brand and its 3-million-follower community.",
    contribution:
      "Facilitated workshops using personas, empathy maps and journeys, and used competitive analysis and A/B testing to improve the experience across channels.",
    outcome:
      "Contributed to acquiring 330,000 new followers and a 13% increase in loyal users.",
  },
]

export type EducationEntry = {
  year: string
  title: string
  description?: string
}

export const education: EducationEntry[] = [
  {
    year: "2019",
    title: "Master — UX Designer",
    description: "Digital School of Paris",
  },
  {
    year: "2017",
    title: "Bachelor — Web Marketing",
    description: "ESCEN — École Supérieure de Commerce & d’Économie Numérique",
  },
]

export type CertificationEntry = {
  title: string
  detail: string
}

/** École 42 lives here, not in `education` — an intensive technical
 *  selection programme, not a degree, and previously duplicated in both
 *  lists (Sprint "Experience — repetition audit"). Framed the same way it
 *  already was: building technical literacy for stronger collaboration
 *  with developers, not a claim to be one. */
export const certifications: CertificationEntry[] = [
  { title: "École 42 — La Piscine", detail: "2024" },
  { title: "Google UX Design", detail: "In progress" },
  { title: "AT Internet / OPQuast", detail: "2019" },
  { title: "Interaction Design Foundation", detail: "Continuing education" },
]

export type ExpertiseGroup = {
  title: string
  skills: string[]
}

/** Four groups, matching the CV's own "Core Skills" categories rather than
 *  the portfolio's previous five-group, ~35-tag grid — condensed on
 *  purpose (Sprint "Experience — skills condensation"): the Homepage
 *  already signals expertise, the case studies already demonstrate it, so
 *  this only needs to name the structuring categories, not exhaust them.
 *  Tools appear only where they explain a category (Systems), not as a
 *  separate list. */
export const expertiseGroups: ExpertiseGroup[] = [
  {
    title: "Product Design",
    skills: ["Product Design", "Product Strategy", "UX/UI Design", "DesignOps"],
  },
  {
    title: "Research",
    skills: [
      "UX Research",
      "User interviews",
      "Journey mapping",
      "User testing",
      "Card sorting",
    ],
  },
  {
    title: "Systems & accessibility",
    skills: [
      "Design Systems",
      "Design Tokens",
      "Angular Material",
      "Tokens Studio",
      "Zeroheight",
      "WCAG 2.1 AA",
    ],
  },
  {
    title: "Collaboration",
    skills: [
      "Design Thinking facilitation",
      "Agile & Scrum",
      "Business Analysts",
      "Product Owners",
      "Developers",
    ],
  },
]

export type ExperienceContent = {
  eyebrow: string
  heading: string
  intro: string
  experienceKicker: string
  educationKicker: string
  certificationsLabel: string
  languagesLabel: string
  languageLevels: string
  skillsKicker: string
  profileEyebrow: string
  profileTitle: string
  profileBody: string
  download: string
  downloadHref: string
  downloadFilename: string
  ariaDownload: string
  metaDescription: string
  professionalExperience: ProfessionalExperience[]
  education: EducationEntry[]
  certifications: CertificationEntry[]
  expertiseGroups: ExpertiseGroup[]
  outcomeLabel: string
  presentLabel: string
}

const experienceContentEn: ExperienceContent = {
  eyebrow: "Experience",
  heading:
    "Six years of Product Design, taking on more systems, more accessibility and more responsibility.",
  intro:
    "My path started in web marketing and UI design, then grew into Product Design roles where I could take on Design Systems, accessibility and closer collaboration with engineering teams.",
  experienceKicker: "Professional Experience",
  educationKicker: "Education & Certifications",
  certificationsLabel: "Certifications & training",
  languagesLabel: "Languages",
  languageLevels: "English — C1  ·  German — B2",
  skillsKicker: "Skills",
  profileEyebrow: "Full profile",
  profileTitle: "Want the complete version?",
  profileBody:
    "For the full timeline, education and professional background, you can download my CV.",
  download: "Download my CV",
  downloadHref: "/stephania-fordant-product-designer-cv-en.pdf",
  downloadFilename: "Stephania-Fordant-Product-Designer-CV-EN.pdf",
  ariaDownload: "Download Stéphania Fordant's Product Designer CV as a PDF",
  metaDescription:
    "Product Designer with 6+ years of experience across UX/UI, Design Systems, accessibility, UX Research and digital product design.",
  professionalExperience,
  education,
  certifications,
  expertiseGroups,
  outcomeLabel: "Outcome",
  presentLabel: "Present",
}

const experienceContentFr: ExperienceContent = {
  eyebrow: "Expérience",
  heading:
    "Six ans de Product Design, avec toujours plus de systèmes, d’accessibilité et de responsabilités.",
  intro:
    "Mon parcours a commencé dans le web marketing et l’UI design, avant d’évoluer vers des rôles de Product Design où j’ai pu prendre en charge les Design Systems, l’accessibilité et une collaboration plus étroite avec les équipes techniques.",
  experienceKicker: "Expérience professionnelle",
  educationKicker: "Formation & certifications",
  certificationsLabel: "Certifications & formation complémentaire",
  languagesLabel: "Langues",
  languageLevels: "Anglais — C1  ·  Allemand — B2",
  skillsKicker: "Compétences",
  profileEyebrow: "Profil complet",
  profileTitle: "Envie de voir la version complète ?",
  profileBody:
    "Pour le parcours détaillé, la formation et l’expérience professionnelle, vous pouvez télécharger mon CV.",
  download: "Télécharger mon CV",
  downloadHref: "/stephania-fordant-product-designer-cv-fr.pdf",
  downloadFilename: "Stephania-Fordant-Product-Designer-CV-FR.pdf",
  ariaDownload:
    "Télécharger le CV Product Designer de Stéphania Fordant au format PDF",
  metaDescription:
    "Product Designer avec plus de 6 ans d’expérience en UX/UI, Design Systems, accessibilité, UX Research et conception de produits numériques.",
  professionalExperience: [
    {
      period: "Avril 2023 — Aujourd’hui",
      role: "IT Product Designer",
      company: "Service public fédéral belge — Affaires étrangères",
      location: "Bruxelles",
      consultancy: "Mission continue — via Cream Consulting, puis eGov Select",
      scope:
        "Standardisation de plusieurs applications publiques pour le gouvernement fédéral belge — UX, conception d’interfaces et accessibilité avec les équipes.",
      contributions: [
        {
          label: "Design System",
          items: [
            "Construction et évolution d’un UI Kit Angular Material vers un Design System évolutif — composants réutilisables, Design Tokens, documentation Zeroheight.",
            "Passage d’une contribution au système à un pilotage de sa standardisation avec les équipes.",
          ],
        },
        {
          label: "Recherche & accessibilité",
          items: [
            "Pilotage d’audits UX et de benchmarks des applications existantes, en recueillant les besoins directement auprès des analystes, chefs de projet et parties prenantes.",
            "Intégration des exigences WCAG 2.1 AA directement dans le système, plutôt qu’en audit final.",
          ],
        },
        {
          label: "Collaboration",
          items: [
            "Animation d’ateliers d’idéation, de card sorting et de co-conception, en collaboration directe avec les développeurs, Business Analysts et Product Owners lors des rituels Agile.",
          ],
        },
      ],
      outcome: "La participation aux ateliers a augmenté de 20 % en six mois.",
      note: "Co-fondatrice d’UX Tribe, une communauté interne dédiée au partage de connaissances UX, aux formations et aux ateliers.",
    },
    {
      period: "Février 2021 — Janvier 2023",
      role: "UX Designer / Cheffe de projet marketing",
      company: "WellPack",
      location: "Paris",
      scope:
        "Design produit et marketing mobile-first pour une entreprise de SMS, RCS et acquisition mobile, transformant les briefs clients en décisions documentées.",
      contributions: [
        {
          label: "Recherche & systèmes",
          items: [
            "Entretiens utilisateurs, études de marché et tests, puis construction de modèles de recherche réutilisables et d’un UI Kit standardisé.",
          ],
        },
        {
          label: "Marque & production",
          items: [
            "Définition de l’identité visuelle et de la direction artistique, conception de landing pages et d’interfaces mobile-first.",
          ],
        },
      ],
      outcome:
        "L’UI Kit standardisé a réduit le temps de production de quatre à deux jours.",
    },
    {
      period: "Septembre 2019 — Décembre 2020",
      role: "UI Designer / Social Media Manager",
      company: "Femmes d’Influence",
      location: "Paris",
      scope:
        "Travail UX et contenu pour un média féminin et sa communauté de trois millions d’abonnés.",
      contribution:
        "Animation d’ateliers avec personas, empathy maps et parcours utilisateurs, et utilisation de l’analyse concurrentielle et de l’A/B testing pour améliorer l’expérience sur les différents canaux.",
      outcome:
        "Contribution à l’acquisition de 330 000 nouveaux abonnés et à une progression de 13 % des utilisateurs fidèles.",
    },
  ],
  education: [
    {
      year: "2019",
      title: "Master UX Designer",
      description: "Digital School of Paris",
    },
    {
      year: "2017",
      title: "Bachelor Web Marketing",
      description:
        "ESCEN — École Supérieure de Commerce & d’Économie Numérique",
    },
  ],
  certifications: [
    { title: "École 42 — La Piscine", detail: "2024" },
    { title: "Google UX Design", detail: "En cours" },
    { title: "AT Internet / OPQuast", detail: "2019" },
    { title: "Interaction Design Foundation", detail: "Formation continue" },
  ],
  expertiseGroups: [
    {
      title: "Product Design",
      skills: [
        "Product Design",
        "Product Strategy",
        "UX/UI Design",
        "DesignOps",
      ],
    },
    {
      title: "Recherche",
      skills: [
        "UX Research",
        "Entretiens utilisateurs",
        "Parcours utilisateurs",
        "Tests utilisateurs",
        "Card sorting",
      ],
    },
    {
      title: "Systèmes & accessibilité",
      skills: [
        "Design Systems",
        "Design Tokens",
        "Angular Material",
        "Tokens Studio",
        "Zeroheight",
        "WCAG 2.1 AA",
      ],
    },
    {
      title: "Collaboration",
      skills: [
        "Facilitation Design Thinking",
        "Agile & Scrum",
        "Business Analysts",
        "Product Owners",
        "Développeurs",
      ],
    },
  ],
  outcomeLabel: "Résultat",
  presentLabel: "Aujourd’hui",
}

function getExperienceContent(language: "en" | "fr"): ExperienceContent {
  return language === "en" ? experienceContentEn : experienceContentFr
}

export { getExperienceContent }
