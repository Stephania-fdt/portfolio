export type AboutChapter = {
  eyebrow: string
  title: string
  paragraphs: string[]
}

export type AboutContent = {
  heading: string
  chapters: AboutChapter[]
  /** The closing editorial statement — one line per array entry, rendered
   *  on its own line (a deliberate content-driven break, same convention
   *  Hero's own two-line statement uses, not word-wrap). */
  conclusion: string[]
}

/**
 * `/about` — approved copy, used verbatim. Nothing here is invented or
 * reworded; see the chat request this page was built from for the source.
 */
export const aboutContent: AboutContent = {
  heading: "About Me",
  chapters: [
    {
      eyebrow: "Introduction",
      title:
        "Designing with curiosity. Building with technology. Creating with purpose.",
      paragraphs: [
        "I'm a Product Designer passionate about creating digital experiences that find the right balance between design, technology, and human needs.",
        "With 6+ years of experience in the digital industry, I've worked across UX/UI and Product Design, from research and strategy to interface design, prototyping, testing, and design systems.",
        "What drives me most is taking a complex problem, understanding the people behind it, turning it into a simple and meaningful experience, and working closely with technical teams to bring it to life.",
      ],
    },
    {
      eyebrow: "More Than Design",
      title: "More than design",
      paragraphs: [
        "My curiosity about technology has naturally pushed me beyond the boundaries of interface design.",
        "I'm interested in understanding how products are built, how technical constraints influence design decisions, and how technology can open new possibilities for users.",
        "From Figma and Design Systems to Design Tokens, Angular Material, React, TypeScript and AI tools, I enjoy exploring the ecosystem where design and technology meet.",
        "This technical mindset helps me collaborate closely with developers, understand feasibility, anticipate constraints, and design solutions that are not only beautiful, but also realistic, scalable and maintainable.",
      ],
    },
    {
      eyebrow: "Experience That Shapes My Work",
      title: "Experience that shapes my work",
      paragraphs: [
        "Throughout my career, I've worked on digital products and services in demanding environments, including the Belgian Federal Public Service for Foreign Affairs, where I contributed to digital transformation, accessibility, and design consistency.",
        "I worked on the creation and evolution of a Design System, an Angular Material UI Kit, Design Tokens, and accessibility practices aligned with WCAG and RGAA standards.",
        "I've also worked on e-commerce, growth, digital services and user-focused products, allowing me to develop a broad understanding of the product lifecycle — from identifying a problem to delivering and improving the final experience.",
      ],
    },
    {
      eyebrow: "Projects I Love",
      title: "Projects I love",
      paragraphs: [
        "What excites me about a project is the journey from an idea to something people can actually use.",
        "Research → Strategy → Architecture → Wireframes → UI → Design System → Prototype → Testing → Iteration.",
        "I particularly enjoy projects where design has a real impact: simplifying complex journeys, making digital services more accessible, creating intuitive mobile experiences, or transforming an idea into a meaningful product.",
        "Alongside my professional work, I also develop personal projects to experiment with new ideas and explore the intersection of Product Design, technology and innovation.",
      ],
    },
    {
      eyebrow: "How I Think",
      title: "How I think",
      paragraphs: [
        "I don't simply design screens.",
        "I try to understand why a product exists, who it is designed for, and how it can genuinely improve someone's experience.",
        "To me, a great product should be useful, accessible, intuitive, technically thoughtful and enjoyable to use.",
        "And I believe the best products happen when designers, developers, product teams and users build together.",
      ],
    },
  ],
  conclusion: [
    "Curious by nature.",
    "Designer by passion.",
    "Tech enthusiast by choice.",
  ],
}

function getAboutContent(language: "en" | "fr"): AboutContent {
  if (language === "en") return aboutContent
  return {
    heading: "À propos de moi",
    chapters: [
      {
        eyebrow: "Introduction",
        title:
          "Concevoir avec curiosité. Construire avec la technologie. Créer avec intention.",
        paragraphs: [
          "Je suis Product Designer et je crée des expériences numériques qui trouvent le bon équilibre entre design, technologie et besoins humains.",
          "Avec plus de six ans d’expérience dans le numérique, j’ai travaillé en UX/UI et Product Design, de la recherche et la stratégie jusqu’aux interfaces, prototypes, tests et Design Systems.",
          "Ce qui me motive est de comprendre un problème complexe et les personnes concernées, puis de le transformer en une expérience simple et utile avec les équipes techniques.",
        ],
      },
      {
        eyebrow: "Au-delà du design",
        title: "Au-delà du design",
        paragraphs: [
          "Ma curiosité pour la technologie m’a naturellement menée au-delà des frontières de la conception d’interfaces.",
          "Je m’intéresse à la manière dont les produits sont construits, à l’influence des contraintes techniques et aux possibilités qu’ouvre la technologie pour les utilisateurs.",
          "De Figma et des Design Systems aux Design Tokens, Angular Material, React, TypeScript et aux outils IA, j’aime explorer le terrain où design et technologie se rencontrent.",
          "Cette culture technique me permet de collaborer étroitement avec les développeurs et de concevoir des solutions belles, réalistes, évolutives et maintenables.",
        ],
      },
      {
        eyebrow: "Une expérience qui façonne ma pratique",
        title: "Une expérience qui façonne ma pratique",
        paragraphs: [
          "J’ai contribué à des produits et services numériques dans des environnements exigeants, notamment au Service public fédéral Affaires étrangères, autour de la transformation numérique, de l’accessibilité et de la cohérence des interfaces.",
          "J’y ai participé à la création et à l’évolution d’un Design System, d’un UI Kit Angular Material, de Design Tokens et de pratiques d’accessibilité alignées sur les WCAG et le RGAA.",
          "J’ai aussi travaillé sur l’e-commerce, la croissance, les services numériques et des produits centrés utilisateur, ce qui m’a donné une vision large du cycle de vie produit.",
        ],
      },
      {
        eyebrow: "Les projets que j’aime",
        title: "Les projets que j’aime",
        paragraphs: [
          "Ce qui m’enthousiasme dans un projet, c’est le chemin qui mène d’une idée à quelque chose que les personnes peuvent réellement utiliser.",
          "Recherche → Stratégie → Architecture → Wireframes → UI → Design System → Prototype → Tests → Itération.",
          "J’apprécie particulièrement les projets où le design a un impact réel : simplifier des parcours complexes, rendre les services numériques plus accessibles ou transformer une idée en produit utile.",
          "En parallèle de mon activité professionnelle, je développe aussi des projets personnels pour expérimenter de nouvelles idées à l’intersection du Product Design, de la technologie et de l’innovation.",
        ],
      },
      {
        eyebrow: "Ma manière de penser",
        title: "Ma manière de penser",
        paragraphs: [
          "Je ne conçois pas simplement des écrans.",
          "Je cherche à comprendre pourquoi un produit existe, pour qui il est conçu et comment il peut véritablement améliorer une expérience.",
          "Pour moi, un excellent produit doit être utile, accessible, intuitif, techniquement réfléchi et agréable à utiliser.",
          "Et je crois que les meilleurs produits naissent lorsque designers, développeurs, équipes produit et utilisateurs construisent ensemble.",
        ],
      },
    ],
    conclusion: [
      "Curieuse par nature.",
      "Designer par passion.",
      "Enthousiaste de la tech par choix.",
    ],
  }
}

export { getAboutContent }
