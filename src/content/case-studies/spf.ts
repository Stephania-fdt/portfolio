import type { CaseStudy } from "@/content/case-studies/types"

export const spfCaseStudy: CaseStudy = {
  slug: "spf-design-system",
  sections: [
    {
      heading: "Context",
      paragraphs: [
        "The Belgian Federal Public Service Foreign Affairs runs several SaaS applications — Travel Web, Visa on Web, Visanet, among others. Before I joined, an IT department had always built and maintained them. No Product Designer had ever worked alongside that team. Each application had been designed according to its own team's habits and business needs — there was no shared UX methodology, no design system, and no visual consistency between them.",
      ],
    },
    {
      heading: "The actual problem",
      paragraphs: [
        'The applications didn\'t resemble each other at all — someone moving between them could reasonably assume each had been built by a different company. There was nothing to signal you were using a government service. Developers were losing real time recreating the same UI decisions project after project, and accessibility had never been a design priority — the bar had simply been "functional."',
      ],
    },
    {
      heading: "Why a Design System became necessary",
      paragraphs: [
        "I proposed it myself, early on. The original brief when I joined was to standardize the applications and build a visual identity rooted in SPF's existing graphic charter, adapted for digital use. Getting there meant first explaining what a design system actually was — I ran workshops for the Business teams and developers, making the case directly: time saved, consistency gained, and a real plan for how we'd get there, not just why we should.",
      ],
    },
    {
      heading: "My reasoning and the key decisions I made",
      paragraphs: [
        "The first plan was a fully custom Design System, built entirely on our own terms. That didn't survive contact with reality — time constraints and extended conversations with the developers made a fully custom system impractical. So we changed direction: foundational components would come from Angular Material, and I would build custom components from scratch wherever SPF's identity actually needed to show — the header, the sidebar navigation, the footer. I wasn't the application architect; there already were architects for that. What I owned was the visual hierarchy of the information itself.",
      ],
    },
    {
      heading: "Technical constraints and trade-offs",
      paragraphs: [
        'The trade-off wasn\'t a retreat from ambition — it was a redirection of it. Giving up "fully custom everywhere" in exchange for "custom exactly where it mattered" meant the system could actually ship, and still carry SPF\'s identity where a visitor would notice it most.',
      ],
    },
    {
      heading: "Collaboration with Business Analysts and developers",
      paragraphs: [
        "There was no Product Owner — Business Analysts filled that role. There was no UX Lead — every UX and UI decision was mine to make. Depending on the project, I worked alongside teams of four to more than ten developers.",
        "The collaboration didn't start easily. When I introduced the Design System, several developers assumed I was about to upend how they worked and hand them more to do for no clear benefit. One told me directly: \"We build functional applications. That's what really matters.\"",
        "That sentence stayed with me. I didn't try to argue my way past it. Instead, I went to understand the world it came from — I attended the Piscine at École 42 in Brussels, not to become a developer, but to become a better Product Designer for the ones I was working with. It changed how I showed up with them. I stopped defending design as a discipline and started building solutions alongside them. Slowly, the developers who'd been wary of me started coming to me with questions instead — asking what I thought before they built something, not after. That was when I understood trust had actually been built, not assumed.",
      ],
    },
    {
      heading: "Accessibility and governance",
      paragraphs: [
        "As a federal public service, accessibility and public-sector governance were real, standing requirements discussed across the teams — I can't point to the exact legal text behind them, and I won't pretend to. What I can say precisely is what I did: I pushed accessibility further from a Product Design perspective than it had been — proposing WCAG-based practices, auditing the existing applications myself, and building accessibility into the Design System directly rather than treating it as a separate concern.",
        "There was never a formal governance model, and I won't describe one that didn't exist. I was initially responsible for creating and evolving the system, but every change was discussed collaboratively with Business Analysts and developers. It evolved the way trust does — through the people using it, not through a process imposed on them.",
      ],
    },
    {
      heading: "Design Tokens, Angular Material, and Zeroheight",
      paragraphs: [
        "I built the design tokens myself, using Figma's Design Tokens extension. Angular Material gave us the foundation for basic components, but I customized its UI kit directly in Figma rather than using it untouched — it needed to look like SPF, not like a generic Material application. Zeroheight became the system's documentation layer, at my proposal — the place the tokens, components, and guidance actually lived for the teams using them.",
      ],
    },
    {
      heading: "What changed after",
      paragraphs: [
        "I don't have numbers to point to, and I'd rather say that plainly than invent ones. What I can say with certainty: teams progressively adopted the Design System. Developers stopped independently recreating the same UI decisions. Accessibility became part of ordinary design conversations, not an afterthought. Business Analysts and developers became genuinely familiar with what Product Design and Design Systems actually are. And the system itself has kept evolving — it's been in continuous use and maintenance since 2023.",
      ],
    },
    {
      heading: "Why this project changed me as a Product Designer",
      paragraphs: [
        "This project taught me that a design system isn't something you hand a team and walk away from — it's something you earn the right to build with them. Attending the Piscine at 42 wasn't about acquiring a technical skill. It was about refusing to stay on my side of a divide I could have just as easily defended from a distance. That choice reshaped how I approach every cross-disciplinary collaboration since.",
      ],
    },
    {
      heading: "What I took with me",
      paragraphs: [
        "I didn't arrive and save anything. I arrived, was told what really mattered was function, and I spent the time it took to understand why someone would believe that before I asked them to believe something else. I believe great products are built when people understand each other before they build together.",
      ],
    },
  ],
}
