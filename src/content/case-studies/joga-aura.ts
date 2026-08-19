import productPage from "@/assets/case-studies/joga-aura/product.png"
import type { CaseStudy } from "./types"

const publicAsset = (path: string) => `/joga%20aura/${path}`

const moodboard01 = publicAsset("moodboard/direction-01.webp.png")
const moodboard02 = publicAsset("moodboard/direction-02.webp.png")
const moodboard03 = publicAsset("moodboard/direction-03-selected.webp.png")
// Despite their source filenames, these three captures are real, finished
// pages — full photography, real copy and pricing, working nav and footer
// — not low-fidelity wireframes. Named and described here for what they
// actually show, the same correction Harmony's Interfaces.tsx already
// made for its own "Wireframes.png" (confirmed by direct inspection, not
// assumed from the filename).
const homeCapture = publicAsset("wireframes/home-wireframe.webp.png")
const productCapture = publicAsset("wireframes/product-wireframe.webp.png")
const newsletterCapture = publicAsset(
  "wireframes/newsletter-wireframe.webp.png",
)
const sitemap = publicAsset("sitemap/sitemap.webp.png")
const comingSoon01 = publicAsset(
  "wireframes/Coming%20Soon-propal1-wireframe.webp.png",
)
const comingSoon02 = publicAsset(
  "wireframes/Coming%20Soon-propal2-wireframe.webp.png",
)
const comingSoon03 = publicAsset(
  "wireframes/Coming%20Soon-propal3-wireframe.webp.png",
)
const finalMobileUi = publicAsset("final-ui/Mobile.png")
const finalDesktopUi = publicAsset("final-ui/desktop.png")

/**
 * Joga Aura — condensed to eight sections (Sprint following
 * Portfolio/SPF/Harmony/WellPack's Senior/Staff pass). Overview now uses
 * `subsections` for a real Problem/Role/Solution summary instead of a
 * facts-only strip; Art Direction, the bridge paragraph and Information
 * Architecture merged into one "brand → structure" chapter; the former
 * three-section repetition (From structure to final UI / Visual identity
 * in the product / Responsive delivery — all making the same "the
 * direction carries into the real UI, desktop and mobile" point) merged
 * into one Final Experience chapter. Designing the Shopping Experience —
 * the strongest e-commerce evidence in this project — now shows
 * `productCapture`, the full product-page screen, in the main flow
 * instead of the cropped Hero asset.
 *
 * Mid-implementation correction, confirmed by direct inspection: three
 * assets whose filenames say "wireframe" (`home-wireframe.webp.png`,
 * `product-wireframe.webp.png`, `newsletter-wireframe.webp.png`) are
 * real, finished pages — full photography, real pricing, working nav and
 * footer — not low-fidelity structure sketches. Renamed to `homeCapture`
 * / `productCapture` / `newsletterCapture` here and described as what
 * they actually show throughout every section's copy, including
 * Overview, Final Experience, Figma → Shopify and Outcome, which all
 * referenced a "wireframing" step this project has no evidence for. The
 * files themselves are untouched — same correction Harmony's
 * Interfaces.tsx already made for its own misnamed `Wireframes.png`.
 *
 * The newsletter capture and the two Coming Soon proposals that weren't
 * selected moved to a "disclosure" deep dive — the shared renderer's
 * opt-in mechanism, already proven not to change WellPack's
 * or Harmony's rendering.
 */
export const jogaAuraCaseStudy: CaseStudy = {
  slug: "joga-aura",
  liveSite: {
    href: "https://joga-aura.com/",
    label: "Visit live website",
    frenchLabel: "Voir le site en ligne",
  },
  heroImage: {
    src: productPage,
    alt: "Joga Aura's completed Blue Serenity yoga mat product page, showing product imagery and purchase actions.",
    frenchAlt:
      "Page produit finalisée du tapis de yoga Blue Serenity de Joga Aura, avec visuels du produit et actions d’achat.",
    caption: "Final e-commerce experience",
    frenchCaption: "Expérience e-commerce finale",
  },
  sections: [
    {
      heading: "Overview",
      paragraphs: [],
      subsections: [
        {
          title: "The problem",
          paragraphs: [
            "The product needed a digital experience premium enough to match its positioning, clear enough to explain the mat itself, and buildable within Shopify's real constraints — not a moodboard that never left Figma.",
          ],
          french: {
            title: "Le problème",
            paragraphs: [
              "Le produit avait besoin d’une expérience numérique assez premium pour son positionnement, assez claire pour expliquer le tapis lui-même, et réalisable dans les contraintes réelles de Shopify — pas d’une planche d’ambiance restée dans Figma.",
            ],
          },
        },
        {
          title: "My role",
          paragraphs: [
            "I owned the work end to end: three visual directions, the site's architecture, the final UI, and the Shopify implementation on the Whisper theme.",
          ],
          french: {
            title: "Mon rôle",
            paragraphs: [
              "J’ai porté le travail de bout en bout : trois directions visuelles, l’architecture du site, l’interface finale, et l’intégration Shopify sur le thème Whisper.",
            ],
          },
        },
        {
          title: "The solution",
          paragraphs: [
            "A responsive Shopify storefront where the selected direction shows up everywhere it needs to — homepage, product page and mobile — built to reduce uncertainty before a purchase, not just look premium.",
          ],
          french: {
            title: "La solution",
            paragraphs: [
              "Une vitrine Shopify responsive où la direction retenue apparaît partout où elle doit être — accueil, page produit et mobile — conçue pour réduire l’incertitude avant l’achat, pas seulement paraître premium.",
            ],
          },
        },
      ],
      french: {
        heading: "Vue d’ensemble",
        paragraphs: [],
      },
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
      french: {
        heading: "Le défi",
        paragraphs: [
          "Créer une expérience numérique cohérente et premium qui rende le produit désirable et compréhensible, tout en respectant les conventions e-commerce, le comportement responsive, la réassurance des acheteurs et les contraintes pratiques d’une livraison sur Shopify.",
        ],
        processSteps: [
          { title: "Rôle", description: "Product Design · UX/UI" },
          { title: "Plateforme", description: "Shopify" },
          { title: "Type", description: "E-commerce" },
          { title: "Outils", description: "Figma · Shopify" },
        ],
      },
    },
    {
      heading: "Defining the Brand & Experience",
      paragraphs: [
        "Before designing the interface, I developed three distinct visual territories for the client to review — typography, colour, imagery and atmosphere, each proposing a different reading of the brand. Direction 03 was selected as the foundation for Joga Aura’s identity, and the work then moved from atmosphere into structure.",
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
      subsections: [
        {
          title: "Information Architecture",
          paragraphs: [
            "A sitemap turned that direction into a simple, consistent navigation — letting people discover the brand, understand the product and complete a purchase without unnecessary friction.",
          ],
          images: [
            {
              src: sitemap,
              alt: "Joga Aura e-commerce website sitemap",
              contain: true,
            },
          ],
          french: {
            title: "Architecture de l’information",
            paragraphs: [
              "Une sitemap a transformé cette direction en une navigation simple et cohérente — permettant de découvrir la marque, comprendre le produit et finaliser un achat sans friction inutile.",
            ],
            imageAlts: ["Sitemap du site e-commerce Joga Aura"],
          },
        },
      ],
      french: {
        heading: "Définir la marque & l’expérience",
        paragraphs: [
          "Avant de concevoir l’interface, j’ai développé trois territoires visuels distincts à soumettre au client — typographie, couleur, imagerie et atmosphère, chacun proposant une lecture différente de la marque. La direction 03 a été retenue comme fondation de l’identité de Joga Aura, et le travail est ensuite passé de l’atmosphère à la structure.",
        ],
        imageAlts: [
          "Première proposition de moodboard Joga Aura, explorant une direction bien-être vert doux avec typographie, illustrations de yoga et visuels produit.",
          "Deuxième proposition de moodboard Joga Aura, explorant des visuels bleus, crème et inspirés de l’eau avec typographie et illustrations de yoga.",
          "Proposition de moodboard Joga Aura sélectionnée, associant crème, bleu, vert profond et bordeaux à la typographie, aux illustrations de yoga et aux visuels de matières.",
        ],
        imageLabels: [
          "Direction 01",
          "Direction 02",
          "Direction 03 · sélectionnée",
        ],
      },
    },
    {
      heading: "Structuring the Store",
      paragraphs: [
        "The homepage carries the primary discovery journey — from an image-led hero through brand story, product benefits, FAQ and social content. The Coming Soon launch state went through the same discipline: three client-facing proposals, not a single assumed answer, before proposal 03 was selected.",
      ],
      imageLayout: "two-up",
      images: [
        {
          src: homeCapture,
          alt: "Full Joga Aura homepage capture showing navigation, an image-led hero, brand story, product benefits, FAQ and social content.",
          label: "Homepage",
          contain: true,
        },
        {
          src: comingSoon03,
          alt: "Selected Joga Aura Coming Soon proposal with editorial typography, product imagery, countdown and newsletter sign-up.",
          label: "Coming Soon page",
        },
      ],
      disclosure: {
        summary: "Exploration & alternatives",
        frenchSummary: "Explorations & alternatives",
        sections: [
          {
            title: "Newsletter",
            paragraphs: [
              "The newsletter provided a supporting acquisition touchpoint alongside the primary homepage-to-product journey.",
            ],
            images: [
              {
                src: newsletterCapture,
                alt: "Joga Aura newsletter capture with a simple email field, headline and sign-up button.",
                contain: true,
              },
            ],
            french: {
              title: "Newsletter",
              paragraphs: [
                "La newsletter constituait un point de contact d’acquisition complémentaire au parcours principal accueil → produit.",
              ],
              imageAlts: [
                "Capture de la newsletter Joga Aura avec champ e-mail simple, titre et bouton d’inscription.",
              ],
            },
          },
          {
            title: "Coming Soon — Other Directions",
            paragraphs: [
              "Two additional Coming Soon proposals were presented alongside the selected direction, each testing a different balance of imagery, message and newsletter capture.",
            ],
            imageLayout: "two-up",
            images: [
              {
                src: comingSoon01,
                alt: "First Joga Aura Coming Soon proposal with a full-width yoga image, launch message and newsletter sign-up.",
                contain: true,
              },
              {
                src: comingSoon02,
                alt: "Second Joga Aura Coming Soon proposal with a visual home layout, launch message and newsletter sign-up.",
                contain: true,
              },
            ],
            french: {
              title: "Coming Soon — autres directions",
              paragraphs: [
                "Deux autres propositions Coming Soon ont été présentées aux côtés de la direction retenue, chacune testant un équilibre différent entre visuel, message et capture newsletter.",
              ],
              imageAlts: [
                "Première proposition Coming Soon de Joga Aura avec image de yoga pleine largeur, message de lancement et inscription à la newsletter.",
                "Deuxième proposition Coming Soon de Joga Aura avec mise en page visuelle d’accueil, message de lancement et inscription à la newsletter.",
              ],
            },
          },
        ],
      },
      french: {
        heading: "Structurer la boutique",
        paragraphs: [
          "La page d’accueil porte le parcours principal de découverte — d’un hero centré sur l’image jusqu’à l’histoire de marque, les bénéfices produit, la FAQ et le contenu social. La page de lancement Coming Soon a suivi la même discipline : trois propositions soumises au client, plutôt qu’une réponse unique présupposée, avant que la proposition 03 ne soit retenue.",
        ],
        imageAlts: [
          "Capture complète de la page d’accueil Joga Aura présentant navigation, hero centré sur l’image, histoire de marque, bénéfices produit, FAQ et contenu social.",
          "Proposition Coming Soon sélectionnée de Joga Aura avec typographie éditoriale, visuels produit, compte à rebours et inscription à la newsletter.",
        ],
        imageLabels: ["Page d’accueil", "Page Coming Soon"],
      },
    },
    {
      heading: "Designing the Shopping Experience",
      paragraphs: [
        "The shopping experience follows a focused progression: discover the product, understand its value, find reassurance, then purchase. The Blue Serenity product page combines imagery, visible pricing, a gallery, product details and direct purchase actions in one clear decision space.",
        "The completed product screen also makes the essential product information available: 183 × 61 cm dimensions, 6 mm thickness and premium high-density TPE material, alongside delivery reassurance and links to supporting help content.",
      ],
      images: [
        {
          src: productCapture,
          alt: "Full Joga Aura product-page capture showing the gallery, price, product details, purchase actions, benefits, delivery reassurance and supporting content.",
          label: "The product page",
          contain: true,
          caption:
            "Price, dimensions, material and delivery reassurance in one decision space — not a spec sheet stapled to a photo.",
        },
      ],
      french: {
        heading: "Concevoir l’expérience d’achat",
        paragraphs: [
          "L’expérience d’achat suit une progression ciblée : découvrir le produit, comprendre sa valeur, être rassuré, puis acheter. La page produit Blue Serenity réunit visuels, prix clairement affiché, galerie, détails produit et actions d’achat directes dans un espace de décision lisible.",
          "L’écran produit finalisé rend également accessibles les informations essentielles : dimensions de 183 × 61 cm, épaisseur de 6 mm et matériau TPE haute densité premium, ainsi que des éléments de réassurance sur la livraison et des liens vers les contenus d’aide associés.",
        ],
        imageAlts: [
          "Capture complète de la page produit Joga Aura présentant galerie, prix, détails produit, actions d’achat, bénéfices, réassurance livraison et contenus complémentaires.",
        ],
        imageLabels: ["La page produit"],
        imageCaptions: [
          "Prix, dimensions, matériau et réassurance livraison dans un seul espace de décision — pas une fiche technique collée à une photo.",
        ],
      },
    },
    {
      heading: "Final Experience",
      paragraphs: [
        "The final UI carried the same hierarchy into the customer-facing storefront — the selected moodboard's Playfair Display and Glacial Indifference typography, its cream, blue, evergreen and burgundy palette and material imagery are in the product now, not left in a separate guideline.",
        "On mobile, the same language holds in a compact, touch-oriented composition: navigation, the announcement strip, hero imagery and the primary discovery action all carry over.",
      ],
      imageLayout: "editorial",
      images: [
        {
          src: finalDesktopUi,
          alt: "Joga Aura final desktop homepage with editorial navigation, yoga imagery and a Blue Serenity product call to action.",
          label: "Desktop · final UI",
          contain: true,
          featured: true,
        },
        {
          src: finalMobileUi,
          alt: "Joga Aura final mobile homepage with compact navigation, yoga imagery, brand story and product discovery actions.",
          label: "Mobile · final UI",
          contain: true,
          portrait: true,
        },
      ],
      french: {
        heading: "Expérience finale",
        paragraphs: [
          "L’interface finale porte la même hiérarchie dans la vitrine destinée aux clients — la typographie Playfair Display et Glacial Indifference, la palette crème, bleu, vert sapin et bordeaux et les visuels de matières du moodboard sélectionné sont désormais dans le produit, plus dans un guide séparé.",
          "Sur mobile, le même langage tient dans une composition compacte pensée pour le tactile : navigation, bandeau d’annonce, visuel hero et action principale de découverte sont tous conservés.",
        ],
        imageAlts: [
          "Page d’accueil desktop finale de Joga Aura avec navigation éditoriale, visuels de yoga et appel à l’action pour le produit Blue Serenity.",
          "Page d’accueil mobile finale de Joga Aura avec navigation compacte, visuels de yoga, histoire de marque et actions de découverte du produit.",
        ],
        imageLabels: [
          "Desktop · interface finale",
          "Mobile · interface finale",
        ],
      },
    },
    {
      heading: "Figma → Shopify",
      paragraphs: [
        "The work continued beyond interface design into Shopify implementation on the Whisper theme. This required translating the approved visual direction and e-commerce hierarchy into a functioning storefront, while making deliberate trade-offs within a real commerce platform rather than treating the Figma file as the final deliverable.",
      ],
      processSteps: [
        { title: "Explore", description: "Three directions for client review" },
        {
          title: "Structure",
          description: "Sitemap and page structure for key journeys",
        },
        { title: "Design", description: "Selected direction into final UI" },
        { title: "Deliver", description: "Shopify storefront implementation" },
      ],
      french: {
        heading: "Figma → Shopify",
        paragraphs: [
          "Le travail s’est poursuivi au-delà de la conception de l’interface avec l’intégration Shopify sur le thème Whisper. Il a fallu traduire la direction visuelle approuvée et la hiérarchie e-commerce en une vitrine fonctionnelle, tout en faisant des compromis délibérés dans une véritable plateforme de commerce plutôt que de considérer le fichier Figma comme le livrable final.",
        ],
        processSteps: [
          {
            title: "Explorer",
            description: "Trois directions soumises au client",
          },
          {
            title: "Structurer",
            description: "Sitemap et structure des parcours clés",
          },
          {
            title: "Concevoir",
            description: "Direction sélectionnée déclinée en interface finale",
          },
          { title: "Livrer", description: "Intégration de la vitrine Shopify" },
        ],
      },
    },
    {
      heading: "Outcome & reflection",
      paragraphs: [
        "The project progressed from client-approved visual exploration to structured pages, a responsive final UI and a functional Shopify storefront. The result is a coherent product experience built around the Joga Aura mat and the information shoppers need to act with confidence.",
        "Joga Aura demonstrates that Product Design continues through delivery: exploring options before committing, turning a brand direction into an interface, and preserving the quality of that experience within the practical realities of production.",
      ],
      french: {
        heading: "Résultat & réflexion",
        paragraphs: [
          "Le projet est passé d’une exploration visuelle approuvée par le client à des pages structurées, une interface finale responsive et une vitrine Shopify fonctionnelle. Le résultat est une expérience produit cohérente construite autour du tapis Joga Aura et des informations dont les acheteurs ont besoin pour agir en confiance.",
          "Joga Aura montre que le Product Design se poursuit jusqu’à la livraison : explorer plusieurs options avant de s’engager, transformer une direction de marque en interface et préserver la qualité de cette expérience face aux réalités concrètes de la production.",
        ],
      },
    },
  ],
}
