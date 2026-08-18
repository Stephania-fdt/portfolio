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
      paragraphs: [
        "Joga Aura is a premium wellness e-commerce experience designed from visual direction through to Shopify implementation. The work connected art direction, UX/UI and a product-led shopping journey for the Blue Serenity yoga mat.",
      ],
      facts: [
        { label: "Art directions", value: "03", emphasizeValue: true },
        { label: "Selected direction", value: "01", emphasizeValue: true },
        { label: "Coming Soon concepts", value: "03", emphasizeValue: true },
        { label: "Final direction", value: "01", emphasizeValue: true },
      ],
      french: {
        heading: "Vue d’ensemble",
        paragraphs: [
          "Joga Aura est une expérience e-commerce bien-être premium, conçue de la direction visuelle jusqu’à l’intégration Shopify. Le projet relie direction artistique, UX/UI et parcours d’achat centré sur le tapis de yoga Blue Serenity.",
        ],
        facts: [
          {
            label: "Directions artistiques",
            value: "03",
            emphasizeValue: true,
          },
          {
            label: "Direction sélectionnée",
            value: "01",
            emphasizeValue: true,
          },
          { label: "Concepts Coming Soon", value: "03", emphasizeValue: true },
          { label: "Direction finale", value: "01", emphasizeValue: true },
        ],
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
      french: {
        heading: "Direction artistique",
        paragraphs: [
          "Avant de concevoir l’interface, j’ai développé trois territoires visuels distincts à soumettre au client. Chaque proposition réunissait typographie, couleur, imagerie et atmosphère ; la direction 03 a été retenue comme fondation de l’identité de Joga Aura.",
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
      heading: "From direction to experience",
      paragraphs: [
        "Once the client selected a visual territory, the work moved from atmosphere into structure: shaping a clear path from brand discovery to product understanding and purchase.",
      ],
      french: {
        heading: "De la direction à l’expérience",
        paragraphs: [
          "Une fois le territoire visuel sélectionné par le client, le travail est passé de l’atmosphère à la structure : façonner un parcours clair, de la découverte de la marque à la compréhension du produit et à l’achat.",
        ],
      },
    },
    {
      heading: "Information Architecture",
      title: "Structuring a clear and intuitive shopping experience",
      paragraphs: [
        "The sitemap helped define a simple and consistent navigation system, allowing users to discover the brand, understand the product and complete their purchase without unnecessary friction.",
      ],
      french: {
        heading: "Architecture de l’information",
        title: "Structurer une expérience d’achat claire et intuitive",
        paragraphs: [
          "La sitemap a permis de définir une navigation simple et cohérente, afin d’aider les utilisateurs à découvrir la marque, comprendre le produit et finaliser leur achat sans friction inutile.",
        ],
        imageAlts: ["Sitemap du site e-commerce Joga Aura"],
      },
      imageLayout: "single",
      images: [
        {
          src: sitemap,
          alt: "Joga Aura e-commerce website sitemap",
          contain: true,
        },
      ],
    },
    {
      heading: "Wireframing",
      paragraphs: [
        "Before moving into high-fidelity design, I used wireframes to establish hierarchy, content structure and the key e-commerce interactions. The homepage and product page carried the primary journey; the newsletter provided a supporting acquisition touchpoint.",
      ],
      imageLayout: "editorial",
      images: [
        {
          src: homeWireframe,
          alt: "Full Joga Aura homepage wireframe showing navigation, an image-led hero, brand story, product benefits, FAQ and social content.",
          label: "Homepage wireframe",
          contain: true,
          featured: true,
        },
        {
          src: productWireframe,
          alt: "Full Joga Aura product-page wireframe showing the gallery, product details, purchase actions, benefits and supporting content.",
          label: "Product-page wireframe",
          contain: true,
        },
        {
          src: newsletterWireframe,
          alt: "Joga Aura newsletter wireframe with a simple email field, privacy note and notification action.",
          label: "Newsletter · supporting flow",
          contain: true,
        },
      ],
      french: {
        heading: "Wireframing",
        paragraphs: [
          "Avant de passer à la conception haute fidélité, j’ai utilisé des wireframes pour établir la hiérarchie, la structure du contenu et les interactions e-commerce clés. La page d’accueil et la page produit portaient le parcours principal ; la newsletter constituait un point de contact d’acquisition complémentaire.",
        ],
        imageAlts: [
          "Wireframe complet de la page d’accueil Joga Aura présentant navigation, hero centré sur l’image, histoire de marque, bénéfices produit, FAQ et contenu social.",
          "Wireframe complet de la page produit Joga Aura présentant galerie, détails produit, actions d’achat, bénéfices et contenus complémentaires.",
          "Wireframe de la newsletter Joga Aura avec champ e-mail simple, note de confidentialité et action de notification.",
        ],
        imageLabels: [
          "Wireframe de la page d’accueil",
          "Wireframe de la page produit",
          "Newsletter · parcours complémentaire",
        ],
      },
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
      french: {
        heading: "Exploration Coming Soon",
        paragraphs: [
          "L’état de lancement a été exploré sous la forme de trois propositions destinées au client, plutôt que d’une réponse unique présupposée. Cela a permis de présenter, sélectionner et affiner une direction avant de produire l’expérience finale.",
        ],
        imageAlts: [
          "Première proposition Coming Soon de Joga Aura avec image de yoga pleine largeur, message de lancement et inscription à la newsletter.",
          "Deuxième proposition Coming Soon de Joga Aura avec mise en page visuelle d’accueil, message de lancement et inscription à la newsletter.",
          "Proposition Coming Soon sélectionnée de Joga Aura avec typographie éditoriale, visuels produit, compte à rebours et inscription à la newsletter.",
        ],
        imageLabels: [
          "Proposition 01",
          "Proposition 02",
          "Proposition 03 · sélectionnée",
        ],
      },
    },
    {
      heading: "From structure to final UI",
      paragraphs: [
        "The final UI kept the hierarchy established in wireframes while carrying the selected visual direction into the customer-facing storefront. The paired artefacts below show the progression from structure to the completed experience.",
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
        heading: "De la structure à l’interface finale",
        paragraphs: [
          "L’interface finale conserve la hiérarchie établie dans les wireframes tout en transposant la direction visuelle sélectionnée dans la vitrine destinée aux clients. Les artefacts associés ci-dessous montrent la progression de la structure vers l’expérience finalisée.",
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
      heading: "Visual identity in the product",
      paragraphs: [
        "The selected moodboard became a practical design language in the interface. Its Playfair Display and Glacial Indifference typography, soft cream, blue, evergreen and burgundy palette, material imagery and generous spacing are carried into the completed storefront rather than treated as a separate branding exercise.",
      ],
      french: {
        heading: "L’identité visuelle dans le produit",
        paragraphs: [
          "Le moodboard sélectionné est devenu un langage de design concret dans l’interface. Ses typographies Playfair Display et Glacial Indifference, sa palette crème doux, bleu, vert sapin et bordeaux, ses visuels de matières et ses espacements généreux se retrouvent dans la vitrine finalisée au lieu d’être traités comme un exercice de branding séparé.",
        ],
      },
    },
    {
      heading: "E-commerce & product experience",
      paragraphs: [
        "The shopping experience follows a focused progression: discover the product, understand its value, find reassurance, then purchase. The Blue Serenity product page combines imagery, visible pricing, a gallery, product details and direct purchase actions in one clear decision space.",
        "The completed product screen also makes the essential product information available: 183 × 61 cm dimensions, 6 mm thickness and premium high-density TPE material, alongside delivery reassurance and links to supporting help content.",
      ],
      french: {
        heading: "E-commerce & expérience produit",
        paragraphs: [
          "L’expérience d’achat suit une progression ciblée : découvrir le produit, comprendre sa valeur, être rassuré, puis acheter. La page produit Blue Serenity réunit visuels, prix clairement affiché, galerie, détails produit et actions d’achat directes dans un espace de décision lisible.",
          "L’écran produit finalisé rend également accessibles les informations essentielles : dimensions de 183 × 61 cm, épaisseur de 6 mm et matériau TPE haute densité premium, ainsi que des éléments de réassurance sur la livraison et des liens vers les contenus d’aide associés.",
        ],
      },
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
      french: {
        heading: "Déclinaison responsive",
        paragraphs: [
          "Les captures disponibles du projet montrent le même langage Joga Aura décliné sur desktop et mobile. Sur mobile, la navigation, le bandeau d’annonce, le visuel hero et l’action principale de découverte sont conservés dans une composition compacte pensée pour le tactile.",
        ],
        imageAlts: [
          "Capture desktop de la page d’accueil Joga Aura montrant l’expérience e-commerce finalisée.",
          "Capture mobile de la vitrine Joga Aura montrant le bandeau d’annonce, la navigation, le hero et l’appel à l’action de découverte.",
        ],
        imageLabels: ["Desktop", "Mobile · interface finale"],
      },
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
          { title: "Structurer", description: "Wireframes des parcours clés" },
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
        "The project progressed from client-approved visual exploration to wireframes, a responsive final UI and a functional Shopify storefront. The result is a coherent product experience built around the Joga Aura mat and the information shoppers need to act with confidence.",
        "Joga Aura demonstrates that Product Design continues through delivery: exploring options before committing, turning a brand direction into an interface, and preserving the quality of that experience within the practical realities of production.",
      ],
      french: {
        heading: "Résultat & réflexion",
        paragraphs: [
          "Le projet est passé d’une exploration visuelle approuvée par le client à des wireframes, une interface finale responsive et une vitrine Shopify fonctionnelle. Le résultat est une expérience produit cohérente construite autour du tapis Joga Aura et des informations dont les acheteurs ont besoin pour agir en confiance.",
          "Joga Aura montre que le Product Design se poursuit jusqu’à la livraison : explorer plusieurs options avant de s’engager, transformer une direction de marque en interface et préserver la qualité de cette expérience face aux réalités concrètes de la production.",
        ],
      },
    },
  ],
}
