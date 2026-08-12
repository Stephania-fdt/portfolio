import customerJourney from "@/assets/case-studies/harmony/customer-journey.png"
import heatmap from "@/assets/case-studies/harmony/heatmap.png"
import mockup from "@/assets/case-studies/harmony/mockup.png"
import siteArchitecture from "@/assets/case-studies/harmony/site-architecture.png"
import wireframe from "@/assets/case-studies/harmony/wireframe.png"
import type { CaseStudy } from "@/content/case-studies/types"

export const harmonyCaseStudy: CaseStudy = {
  slug: "harmony",
  sections: [
    {
      heading: "Where it started",
      paragraphs: [
        "In February 2022, we started working with Madame Martinez, who had just secured investor funding to launch a company built around a specific promise: connected bracelets, entirely made in France. The funding was real. The product wasn't, yet. What she needed from us wasn't a set of screens — it was a way into a market she believed in but hadn't yet proven she belonged in.",
        "We were four designers, working in six-month Agile sprints, meeting weekly to keep the work — and the founder — moving together. On paper, the brief sounded simple: create a connected bracelet and its mobile application for the French market. It didn't stay that simple for long.",
      ],
    },
    {
      heading: "The real challenge",
      paragraphs: [
        "What we found once we actually sat with the brief was that designing the interface wasn't the hard part. Understanding the people who'd use the product was.",
        "Madame Martinez had a strong idea and real conviction behind it, but neither the product nor the experience it should deliver had actually been defined yet. And the market she was entering wasn't empty — connected devices were already competitive, wearables especially. Building \"another fitness app\" would have been the easy version of this brief, and it wouldn't have been enough. Harmony was meant to be French, made in France, and that positioning had to mean something beyond a label — which meant we couldn't design toward a generic connected-device user. We needed to understand what people actually expected before we let ourselves decide what Harmony should become.",
      ],
    },
    {
      heading: "Understanding before designing",
      paragraphs: [
        "Going in, we assumed people would care mostly about what the bracelet could technically do — features, sensors, the kind of specs that get compared side by side in a buying decision. We built our research around that assumption: interviews, personas, empathy maps, a customer journey mapped from first contact through daily use, a service blueprint tracing the experience around the purchase and the ongoing relationship with the product.",
        "What came back surprised us. People weren't asking for more capability. They were asking for simplicity, for reassurance, for something that would fit into a life that already existed rather than demand a new one be built around it. That single finding changed how we worked from that point forward. We stopped designing from a list of features and started designing from how people actually behaved — what they'd tolerate, what they'd ignore, what would make them trust a bracelet enough to wear it every day.",
      ],
      images: [
        {
          src: customerJourney,
          alt: "Experience map for a persona named Léo, tracking his emotional journey — from arriving at the gym through frustration with a demotivating app to deciding to buy a connected bracelet — across stages, actions, feelings, and direct quotes.",
          caption:
            "The customer journey map that surfaced what people actually wanted from Harmony.",
        },
      ],
    },
    {
      heading: "Giving the understanding a shape",
      paragraphs: [
        "Understanding people doesn't design a product by itself — it has to become something a team can actually build from. We ran card sorting sessions in Miro to see how people actually grouped and named the things Harmony needed to contain, rather than assuming our own mental model would hold. From there, we built the application's structure in Gloomaps around those same mental models — not the hierarchy that made sense to us as designers, but the one that matched how the people we'd just spent time understanding actually expected to move through the product.",
        "It's a quiet step, and also the one where research either pays off or gets lost — where everything learned about people either becomes a structure someone can navigate, or stays a set of interview notes nobody uses. We didn't let ourselves move forward until that structure actually held.",
      ],
      images: [
        {
          src: siteArchitecture,
          alt: "Site arborescence diagram for Harmony, showing the navigation structure branching from the homepage into Products, Account, Footer, Blog, About, and Retailer Map sections.",
          caption:
            "The structure that came out of card sorting, not the one that came out of assumption.",
        },
      ],
    },
    {
      heading: "From structure to wireframe",
      paragraphs: [
        "Only once the structure held did we let ourselves move into wireframes, then UI, then prototypes — in that order, deliberately. It would have been faster to start sketching interfaces the moment the research was done. It would also have meant designing on top of a structure we hadn't actually tested, which is exactly the trap the earlier research was meant to help us avoid.",
      ],
      images: [
        {
          src: wireframe,
          alt: "Low-fidelity wireframes for Harmony's homepage and contact page, showing grayscale block layouts with placeholder image regions before any visual design was applied.",
          caption:
            "Wireframes — structure tested in grayscale, before a single color decision.",
        },
      ],
    },
    {
      heading: "From wireframe to interface",
      paragraphs: [
        "The visual identity had its own discipline running alongside this. Harmony's positioning — French, made in France — needed to show up in more than a tagline. We carried that through the interface and the communication around it, while keeping the product modern, accessible, and easy to use rather than leaning on heritage cues that would have dated it immediately. Brand consistency wasn't a separate pass at the end; it was considered at every stage, from the research through to the interface itself.",
      ],
      images: [
        {
          src: mockup,
          alt: "High-fidelity mockups of Harmony's homepage, product page, and category page, showing the finished visual design in the brand's teal and dark green palette.",
          caption:
            "The same pages, once the structure had earned its way to color and type.",
        },
      ],
    },
    {
      heading: "Testing what we believed",
      paragraphs: [
        "By this point we'd made a lot of decisions — about structure, about behavior over features, about what the brand needed to carry visually. The point of testing wasn't to confirm we'd gotten them right. It was to find out where we hadn't.",
        "We used A/B testing, heatmaps, and user testing to watch what actually happened rather than what we assumed would happen — where people hesitated, what drew their attention, which interactions caused confusion instead of clarity. We don't have a set of numbers to report from that work, and I'd rather say that plainly than manufacture some. What we do have is what changed because of it: several interface decisions got simpler than our first instinct, specifically because watching real hesitation and confusion told us more than our own judgment could.",
      ],
      images: [
        {
          src: heatmap,
          alt: "Hotjar click heatmap overlaid on Harmony's live homepage hero, showing concentrated clicks on the navigation menu and the primary call-to-action button beneath the headline.",
          caption:
            "Where people actually clicked — not where we assumed they would.",
        },
      ],
    },
    {
      heading: "What I took from it",
      paragraphs: [
        "Harmony was the first project where I understood, not just believed, that product design starts with people, not with interfaces. It's easy to say that as a principle. It's different to watch a team's own assumptions — mine included — get quietly overturned by an actual conversation with the people you're building for, and to change direction because of it, not because someone told you to.",
        "I didn't do this alone, and I don't want this case study to read as if I did. Four of us built Harmony together, and the decisions that mattered — the research, the structure, what we chose to test and what we chose to change — were made as a team. What I took with me was personal: the sense that understanding has to come before designing, not as a phase you complete and move past, but as the thing that makes everything built afterward actually worth building. I believe great products are built when people understand each other before they build together.",
      ],
    },
  ],
}
