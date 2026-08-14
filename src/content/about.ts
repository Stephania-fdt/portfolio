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
