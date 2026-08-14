import homeThumbnail from "@/assets/case-studies/joga-aura/home-thumbnail.png"
import productPage from "@/assets/case-studies/joga-aura/product.png"
import type { CaseStudy } from "./types"

const publicAsset = (path: string) => `/joga%20aura/${path}`

const moodboard01 = publicAsset("moodboard/direction-01.webp.png")
const moodboard02 = publicAsset("moodboard/direction-02.webp.png")
const moodboard03 = publicAsset("moodboard/direction-03-selected.webp.png")
const homeWireframe = publicAsset("wireframes/home-wireframe.webp.png")
const productWireframe = publicAsset("wireframes/product-wireframe.webp.png")
const newsletterWireframe = publicAsset(
  "wireframes/newsletter-wireframe.webp.png",
)
const comingSoon01 = publicAsset(
  "wireframes/Coming%20Soon-propal1-wireframe.webp.png",
)
const comingSoon02 = publicAsset(
  "wireframes/Coming%20Soon-propal2-wireframe.webp.png",
)
const comingSoon03 = publicAsset(
  "wireframes/Coming%20Soon-propal3-wireframe.webp.png",
)
const finalMobileUi = publicAsset(
  "final-ui/Capture%20d%27%C3%A9cran%202026-08-14%20173458.png",
)

export const jogaAuraCaseStudy: CaseStudy = {
  slug: "joga-aura",
  heroImage: {
    src: productPage,
    alt: "Joga Aura's completed Blue Serenity yoga mat product page, showing product imagery and purchase actions.",
    caption: "Final e-commerce experience",
  },
  sections: [
    {
      heading: "Overview",
      paragraphs: [
        "Joga Aura is a premium wellness e-commerce experience designed from visual direction through to Shopify implementation. The work connected art direction, UX/UI and a product-led shopping journey for the Blue Serenity yoga mat.",
      ],
      facts: [
        { label: "Art directions", value: "03", emphasizeValue: true },
        { label: "Selected direction", value: "01", emphasizeValue: true },
        { label: "Coming Soon concepts", value: "03", emphasizeValue: true },
        { label: "Final direction", value: "01", emphasizeValue: true },
      ],
    },
    {
      heading: "The challenge",
      paragraphs: [
        "Create a coherent, premium digital experience that makes the product desirable and understandable while respecting e-commerce conventions, responsive behavior, shopper reassurance and the practical constraints of Shopify delivery.",
      ],
      processSteps: [
        { title: "Role", description: "Product Design · UX/UI" },
        { title: "Platform", description: "Shopify" },
        { title: "Type", description: "E-commerce" },
        { title: "Tools", description: "Figma · Shopify" },
      ],
    },
    {
      heading: "Art direction",
      paragraphs: [
        "Before designing the interface, I developed three distinct visual territories for the client to review. Each proposal brought together typography, colour, imagery and atmosphere; direction 03 was selected as the foundation for Joga Aura’s identity.",
      ],
      imageLayout: "three-up",
      images: [
        {
          src: moodboard01,
          alt: "First Joga Aura moodboard proposal, exploring a soft green wellness direction with typography, yoga illustrations and product imagery.",
          label: "Direction 01",
        },
        {
          src: moodboard02,
          alt: "Second Joga Aura moodboard proposal, exploring blue, cream and water-inspired imagery with typography and yoga illustrations.",
          label: "Direction 02",
        },
        {
          src: moodboard03,
          alt: "Selected Joga Aura moodboard proposal, combining cream, blue, deep green and burgundy with typography, yoga illustrations and material imagery.",
          label: "Direction 03 · selected",
          selected: true,
        },
      ],
    },
    {
      heading: "From direction to experience",
      paragraphs: [
        "Once the client selected a visual territory, the work moved from atmosphere into structure: shaping a clear path from brand discovery to product understanding and purchase.",
      ],
    },
    {
      heading: "Wireframing",
      paragraphs: [
        "Before moving into high-fidelity design, I used wireframes to establish hierarchy, content structure and the key e-commerce interactions. The homepage and product page carried the primary journey; the newsletter provided a supporting acquisition touchpoint.",
      ],
      imageLayout: "two-up",
      images: [
        {
          src: homeWireframe,
          alt: "Joga Aura homepage wireframe showing a launch-state hero, newsletter form, feature highlights and image-led content sections.",
          label: "Homepage wireframe",
        },
        {
          src: productWireframe,
          alt: "Joga Aura product-page wireframe showing the product gallery, information hierarchy, specifications and purchase actions.",
          label: "Product-page wireframe",
        },
        {
          src: newsletterWireframe,
          alt: "Joga Aura newsletter wireframe with a simple email field, privacy note and notification action.",
          label: "Newsletter · supporting flow",
        },
      ],
    },
    {
      heading: "Coming Soon exploration",
      paragraphs: [
        "The launch state was explored as three client-facing proposals rather than a single assumed answer. This made it possible to present, select and refine a direction before the final experience was produced.",
      ],
      imageLayout: "three-up",
      images: [
        {
          src: comingSoon01,
          alt: "First Joga Aura Coming Soon proposal with a full-width yoga image, launch message and newsletter sign-up.",
          label: "Proposal 01",
        },
        {
          src: comingSoon02,
          alt: "Second Joga Aura Coming Soon proposal with a visual home layout, launch message and newsletter sign-up.",
          label: "Proposal 02",
        },
        {
          src: comingSoon03,
          alt: "Selected Joga Aura Coming Soon proposal with editorial typography, product imagery, countdown and newsletter sign-up.",
          label: "Proposal 03 · selected",
          selected: true,
        },
      ],
    },
    {
      heading: "From structure to final UI",
      paragraphs: [
        "The final UI kept the hierarchy established in wireframes while carrying the selected visual direction into the customer-facing storefront. The paired artefacts below show the progression from structure to the completed experience.",
      ],
      imageLayout: "comparison",
      images: [
        {
          src: productWireframe,
          alt: "Joga Aura product-page wireframe used to structure product information and purchasing actions.",
          label: "Product page · wireframe",
        },
        {
          src: productPage,
          alt: "Completed Joga Aura Blue Serenity product page with product imagery, specifications and purchase actions.",
          label: "Product page · final UI",
        },
      ],
    },
    {
      heading: "Visual identity in the product",
      paragraphs: [
        "The selected moodboard became a practical design language in the interface. Its Playfair Display and Glacial Indifference typography, soft cream, blue, evergreen and burgundy palette, material imagery and generous spacing are carried into the completed storefront rather than treated as a separate branding exercise.",
      ],
    },
    {
      heading: "E-commerce & product experience",
      paragraphs: [
        "The shopping experience follows a focused progression: discover the product, understand its value, find reassurance, then purchase. The Blue Serenity product page combines imagery, visible pricing, a gallery, product details and direct purchase actions in one clear decision space.",
        "The completed product screen also makes the essential product information available: 183 × 61 cm dimensions, 6 mm thickness and premium high-density TPE material, alongside delivery reassurance and links to supporting help content.",
      ],
    },
    {
      heading: "Responsive delivery",
      paragraphs: [
        "The available project captures show the same Joga Aura language carried across desktop and mobile. On mobile, navigation, the announcement strip, hero imagery and the primary discovery action are retained in a compact, touch-oriented composition.",
      ],
      imageLayout: "two-up",
      images: [
        {
          src: homeThumbnail,
          alt: "Desktop Joga Aura homepage capture showing the completed e-commerce experience.",
          label: "Desktop",
        },
        {
          src: finalMobileUi,
          alt: "Mobile Joga Aura storefront capture showing the announcement strip, navigation, hero and discovery call to action.",
          label: "Mobile · final UI",
        },
      ],
    },
    {
      heading: "Figma → Shopify",
      paragraphs: [
        "The work continued beyond interface design into Shopify implementation on the Whisper theme. This required translating the approved visual direction and e-commerce hierarchy into a functioning storefront, while making deliberate trade-offs within a real commerce platform rather than treating the Figma file as the final deliverable.",
      ],
      processSteps: [
        { title: "Explore", description: "Three directions for client review" },
        { title: "Structure", description: "Wireframes for key journeys" },
        { title: "Design", description: "Selected direction into final UI" },
        { title: "Deliver", description: "Shopify storefront implementation" },
      ],
    },
    {
      heading: "Outcome & reflection",
      paragraphs: [
        "The project progressed from client-approved visual exploration to wireframes, a responsive final UI and a functional Shopify storefront. The result is a coherent product experience built around the Joga Aura mat and the information shoppers need to act with confidence.",
        "Joga Aura demonstrates that Product Design continues through delivery: exploring options before committing, turning a brand direction into an interface, and preserving the quality of that experience within the practical realities of production.",
      ],
    },
  ],
}
