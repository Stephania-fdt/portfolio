export type ExperienceContribution = {
  label: string
  items: string[]
}

export type ProfessionalExperience = {
  period: string
  role: string
  company: string
  consultancy?: string
  context: string
  highlight?: string
  contributions?: ExperienceContribution[]
}

export const professionalExperience: ProfessionalExperience[] = [
  {
    period: "August 2025 — Present",
    role: "IT Product Designer",
    company: "Belgian Federal Public Service — Foreign Affairs",
    consultancy: "eGov Select, Brussels",
    context:
      "Leading the standardisation and evolution of the Design System with technical and business teams, improving UX quality and interface consistency across digital services.",
    contributions: [
      {
        label: "User research & analysis",
        items: [
          "Gathered requirements from analysts, project managers and stakeholders.",
          "Conducted UX audits and benchmarks of existing applications.",
          "Worked with developers to understand technical constraints.",
        ],
      },
      {
        label: "Design system",
        items: [
          "Created and evolved an Angular Material UI Kit.",
          "Standardised reusable components and reduced UI inconsistencies.",
          "Developed an accessible and scalable Design System.",
          "Documented components and guidelines in Zeroheight.",
          "Worked with Design Tokens and Tokens Studio.",
        ],
      },
      {
        label: "Accessibility",
        items: [
          "Integrated WCAG-based accessibility requirements into product and component design.",
          "Designed accessibility as part of the system rather than as a final audit.",
        ],
      },
      {
        label: "Collaboration",
        items: [
          "Facilitated ideation, brainstorming and co-design workshops.",
          "Participated in Agile rituals, including stand-ups, Scrum ceremonies and sprint planning.",
        ],
      },
    ],
  },
  {
    period: "April 2023 — August 2025",
    role: "IT Product Designer",
    company: "Belgian Federal Public Service — Foreign Affairs",
    consultancy: "Cream Consulting, Brussels",
    context:
      "Product Design work for Belgian federal digital services, combining UX Research, interface design, accessibility and Design System implementation.",
    highlight:
      "This began the long-term Foreign Affairs mission, continued after the consulting-company transition to eGov Select.",
  },
  {
    period: "February 2021 — January 2023",
    role: "UX Designer",
    company: "WellPack — Paris",
    context:
      "Designed mobile-first experiences for an SMS Marketing and mobile-acquisition company, focused on engagement and conversion.",
    contributions: [
      {
        label: "Research & product strategy",
        items: [
          "Conducted user interviews, market research and user testing.",
          "Translated client needs into structured digital experiences.",
        ],
      },
      {
        label: "Branding & UI",
        items: [
          "Contributed to visual identity and art direction.",
          "Designed landing pages and digital interfaces.",
        ],
      },
      {
        label: "Design system",
        items: [
          "Created a standardised UI Kit.",
          "Helped make production more repeatable and consistent.",
        ],
      },
    ],
  },
  {
    period: "September 2019 — December 2020",
    role: "UI Designer",
    company: "Femmes d’Influence — Paris",
    context:
      "Worked on the growth and digital experience of a women-focused media brand and community.",
    contributions: [
      {
        label: "Experience optimisation",
        items: [
          "Facilitated workshops using personas, empathy maps and user journeys.",
          "Contributed to community and digital engagement initiatives.",
          "Used A/B testing and competitive analysis to improve experiences.",
        ],
      },
    ],
  },
]

export const education = [
  {
    year: "2024",
    title: "École 42 — La Piscine",
    description:
      "Intensive technical selection programme, building technical literacy for stronger designer–developer collaboration.",
  },
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

export const expertiseGroups = [
  {
    number: "01",
    title: "Product Design",
    skills: [
      "UX/UI Design",
      "Information Architecture",
      "Wireframing",
      "Prototyping",
      "User Flows",
      "Interaction Design",
      "Product Thinking",
    ],
  },
  {
    number: "02",
    title: "UX Research",
    skills: [
      "User Interviews",
      "Personas",
      "Customer Journey Maps",
      "User Testing",
      "Card Sorting",
      "A/B Testing",
      "Competitive Analysis",
    ],
  },
  {
    number: "03",
    title: "Design Systems",
    skills: [
      "Design Systems",
      "UI Kits",
      "Component Libraries",
      "Design Tokens",
      "Variables",
      "Tokens Studio",
      "Zeroheight",
      "Angular Material",
    ],
  },
  {
    number: "04",
    title: "Accessibility",
    skills: [
      "WCAG",
      "Inclusive Design",
      "Accessible Components",
      "Keyboard Navigation",
      "Responsive Design",
      "Accessibility-by-design",
    ],
  },
  {
    number: "05",
    title: "Design × Technology",
    skills: [
      "Figma",
      "React understanding",
      "TypeScript understanding",
      "HTML/CSS",
      "Tailwind CSS",
      "Git",
      "AI-assisted workflows",
      "Developer collaboration",
    ],
  },
]

export const tools = [
  "Figma",
  "Tokens Studio",
  "Zeroheight",
  "Angular Material",
  "Adobe XD",
  "Miro",
  "WordPress",
  "Hotjar",
  "Marvel",
  "Balsamiq",
  "Adobe Photoshop",
  "HTML/CSS",
]

export const certifications = [
  { title: "Google UX Design", detail: "In progress" },
  { title: "École 42 — La Piscine", detail: "2024" },
  { title: "AT Internet / OPQuast", detail: "2019" },
]
