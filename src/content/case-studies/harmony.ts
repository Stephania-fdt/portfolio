import customerJourney from "@/assets/case-studies/harmony/customer-journey.png"
import heatmap from "@/assets/case-studies/harmony/heatmap.png"
import heroCover from "@/assets/case-studies/harmony/home-thumbnail.png"
import mockup from "@/assets/case-studies/harmony/mockup.png"
import siteArchitecture from "@/assets/case-studies/harmony/site-architecture.png"
import wireframe from "@/assets/case-studies/harmony/wireframe.png"
import type { CaseStudy } from "@/content/case-studies/types"

export const harmonyCaseStudy: CaseStudy = {
  slug: "harmony",
  heroImage: {
    src: heroCover,
    alt: "Harmony's finished connected-bracelet storefront, shown on a desktop screen with the product and purchase experience.",
  },
  sections: [
    {
      heading: "Overview",
      paragraphs: [
        "In February 2022, we began a six-month Agile project for a client preparing to launch 100% Made in France connected bracelets in the French market. The task was larger than an app: define a coherent product and digital ecosystem around the bracelet, its purchase journey and its ongoing use.",
        "We were a team of four designers, meeting weekly with the client to keep progress, decisions and changes visible. Across Product Design, UX research and UI, the work moved from understanding the market to shaping and validating the experience.",
      ],
      facts: [
        { label: "Duration", value: "06", emphasizeValue: true },
        { label: "Team", value: "04", emphasizeValue: true },
        { label: "Market", value: "France" },
        { label: "Product", value: "Connected bracelet" },
      ],
    },
    {
      heading: "The challenge",
      paragraphs: [
        "The client had investor backing and a clear Made in France ambition, but neither the right audience nor the experience the product should deliver had been defined. We needed to understand who the bracelet was for, which functions mattered, and how the physical product and digital service could work together.",
        "Connected devices are a competitive space. Rather than design another feature-led fitness app, we focused on the people expected to use it and the decisions that would make the proposition feel relevant in the French market.",
      ],
    },
    {
      heading: "Research & discovery",
      paragraphs: [
        "The team defined a core, primary and secondary target. For the main target, the UX approach centred on healthy well-being and fitness. A mindset analysis grid in Figma helped us get closer to the persona and explore which potential functionalities could be relevant before treating a feature list as a solution.",
        "We also ran a Google Forms field study to determine the target audience, prioritise frequently used functions, identify barriers to use and understand interest in Made in France products. The research covered sport motivation, consumption habits, connected-bracelet use, purchasing criteria, pain points and broader observations — enough to ground the next decisions in evidence rather than assumption.",
      ],
    },
    {
      heading: "Understanding the user",
      paragraphs: [
        "Jobs To Be Done, personas, an Empathy Map and an Experience Map gave the team several ways to interpret the same research: the progress people were trying to make, the context around their choices, and where a connected product could support rather than interrupt everyday life.",
        "A Customer Journey Map and Service Blueprint then connected that understanding to the full service: discovery, search, purchase, bracelet use and the related personalised programme. They made the relationship between the physical product, the app and the support experience explicit before we designed screens.",
      ],
      images: [
        {
          src: customerJourney,
          alt: "Experience map for a Harmony persona, tracking emotional highs and lows from first contact through daily use of a connected bracelet.",
          caption:
            "The customer journey used to connect research insights to the connected-product experience.",
        },
      ],
    },
    {
      heading: "Information architecture",
      paragraphs: [
        "We used card sorting in Miro to understand how people grouped and named content. That gave us a way to prioritise information, define logical sections and align the navigation with users’ mental models rather than our own internal vocabulary.",
        "After sorting the content, we grouped it into pages and mapped a logical tree in Gloomaps. The goal was simple: make navigation intuitive and make the information people needed easier to find.",
      ],
      images: [
        {
          src: siteArchitecture,
          alt: "Site architecture diagram for Harmony, showing the navigation structure from the homepage to product, account, blog, about and retailer-map content.",
          caption:
            "Content grouped into a structure shaped by card sorting and user mental models.",
        },
      ],
    },
    {
      heading: "UX design",
      paragraphs: [
        "Zoning established the structural position of key page elements before visual design: navigation, content, visuals and supporting information. We then used wireframes to define the foundational digital experience before committing to high-fidelity UI.",
        "High-fidelity mockups carried that structure into layout, hierarchy, colours, spacing and typography. They also gave developers a precise implementation reference for the product experience.",
      ],
      images: [
        {
          src: wireframe,
          alt: "Low-fidelity Harmony wireframes showing the structural layout of the homepage and contact page before visual design.",
          caption:
            "Wireframes established the core structure before high-fidelity design.",
        },
        {
          src: mockup,
          alt: "High-fidelity Harmony mockups for the homepage, product page and category page in the finished visual language.",
          caption:
            "Mockups translated the structure into a coherent product interface.",
        },
      ],
    },
    {
      heading: "Testing & validation",
      paragraphs: [
        "We tested the experience rather than assuming the first direction was right. A/B testing was configured with WordPress and Google Optimize; one Home-page hero test examined which version encouraged visitors to click the “discover” CTA. The source material does not establish a winning variant or uplift, so this case study does not claim one.",
        "Hotjar and Excel supported click-heatmap analysis, user testing and behavioural feedback. These methods helped the team see where attention and hesitation appeared, then use that feedback to question interface decisions.",
      ],
      images: [
        {
          src: heatmap,
          alt: "Hotjar click heatmap over Harmony's homepage hero, showing where visitors concentrated their interactions.",
          caption:
            "Behavioural feedback was reviewed alongside user testing, not treated as a metric in isolation.",
        },
      ],
    },
    {
      heading: "My role",
      paragraphs: [
        "This was a team project, not a solo delivery. My contribution spanned UX research and target definition; persona, mindset and field-study work; Jobs To Be Done and experience mapping; card sorting and information architecture; zoning, wireframes and UI mockups; and testing through A/B tests, heatmaps and feedback.",
        "We worked with Figma, Miro, Trello, Notion, Google Forms, WordPress, Google Optimize, Hotjar and Excel across the project. The point was not to accumulate methods, but to use each one when it could make the next product decision clearer.",
      ],
    },
    {
      heading: "The process in brief",
      paragraphs: [
        "A compact view of the connected-product workflow, from evidence to a validated digital experience.",
      ],
      processSteps: [
        {
          title: "Discover",
          description: "Field study, target analysis and mindset analysis.",
        },
        {
          title: "Define",
          description: "JTBD, personas, empathy and journey mapping.",
        },
        {
          title: "Structure",
          description: "Card sorting, site architecture and zoning.",
        },
        {
          title: "Design",
          description: "Wireframes and high-fidelity mockups.",
        },
        {
          title: "Validate",
          description: "A/B testing, heatmaps and user feedback.",
        },
      ],
    },
    {
      heading: "What I took from it",
      paragraphs: [
        "Harmony was the first project where I understood, not just believed, that product design starts with people, not with interfaces. It showed how quickly a team’s assumptions can change once research is allowed to shape the work.",
        "The team made the decisions that mattered together: the research, structure, testing and changes that followed. What stayed with me was that understanding has to come before designing — not as a phase to complete and forget, but as the discipline that makes what follows worth building.",
      ],
    },
  ],
}
