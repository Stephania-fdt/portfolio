import siteArchitecture from "@/assets/case-studies/harmony/site-architecture.png"
import heroCover from "@/assets/images/harmony/harmony-hero.webp.png"
import researchOverview from "@/assets/images/harmony/harmony-research.webp.jpg"
import researchSport from "@/assets/images/harmony/EXP UX-UI DSP5 UX-UI 021 – G5 – Cahier des charges V2_page-0120.jpg"
import researchTools from "@/assets/images/harmony/EXP UX-UI DSP5 UX-UI 021 – G5 – Cahier des charges V2_page-0121.jpg"
import researchPricing from "@/assets/images/harmony/EXP UX-UI DSP5 UX-UI 021 – G5 – Cahier des charges V2_page-0122.jpg"
import persona from "@/assets/images/harmony/harmony-persona.webp.jpg"
import jtbd from "@/assets/images/harmony/harmony-jtbd.webp.jpg"
import cardSorting from "@/assets/images/harmony/harmony-card-sorting.webp.jpg"
import journeyEmpathy from "@/assets/images/harmony/harmony-empathy-map-user-journey.webp.jpg"
import journeyBlueprint from "@/assets/images/harmony/harmony-experiencemap-blueprint.webp.jpg"
import paperPrototype from "@/assets/images/harmony/harmony-paper-prototype.webp.jpg"
import websiteWireframesDesktop from "@/assets/images/harmony/harmony-website-wireframes.webp.jpg"
import websiteWireframesMobile from "@/assets/images/harmony/harmony-mobile-wireframes.webp.png"
import finalUiDesktop from "@/assets/images/harmony/harmony-website-final-ui-desktop.webp.png"
import finalUiTablet from "@/assets/images/harmony/harmony-website-final-ui-tablet.webp.png"
import finalUiMobile from "@/assets/images/harmony/harmony-website-final-ui-mobile.webp.png"
import appWireframes1 from "@/assets/images/harmony/harmony-app-wireframes-1.webp.png"
import appWireframes2 from "@/assets/images/harmony/harmony-app-wireframes-2.webp.png"
import appOnboarding from "@/assets/images/harmony/harmony-app-onboarding.webp.jpg"
import appDashboard from "@/assets/images/harmony/harmony-app-dashboard.webp.jpg"
import communityGamification1 from "@/assets/images/harmony/harmony-community-gamification-1.webp.jpg"
import communityGamification2 from "@/assets/images/harmony/harmony-community-gamification-2.webp.jpg"
import accessibility2 from "@/assets/images/harmony/harmony-app-website-accessibilite-2.webp.jpg"
import type { CaseStudy } from "@/content/case-studies/types"

const websitePrototypeVideo = "/videos/harmony/harmony-website-prototype.mp4"
const appPrototypeVideo = "/videos/harmony/harmony-app-prototype.mp4"
const designSystemPdf = "/documents/harmony/harmony-design-system.pdf"

/**
 * Editorial restructure (length + structure pass): four chapters instead
 * of eight — Overview, Key Decisions, Result, Reflection. Overview folds
 * in the former Challenge (same "earn the reason" story, told once).
 * Key Decisions folds in Understanding the Experience's research snapshot
 * directly ahead of the three decisions it produced (Onboarding,
 * Dashboard, Community & Gamification) — the same real research
 * disclosure (survey detail, persona, JTBD, card sort, journey map)
 * stays intact and zoomable, uncropped, just attached to the decisions it
 * earned rather than sitting in its own chapter first. Result folds in
 * Paper Prototype's two testing findings, the final UI gallery, the two
 * prototype videos, the wireframes disclosure and the accessibility
 * proof. Reflection folds in the former Accessibility chapter's one
 * honest limitation alongside Outcomes, Limitations & Learnings — a
 * limit is a limit regardless of which chapter it used to live in.
 */
export const harmonyCaseStudy: CaseStudy = {
  slug: "harmony",
  heroImage: {
    src: heroCover,
    alt: "Harmony website homepage showing the Harmony Fit connected bracelet in white and turquoise, with the headline 'Prenez votre santé en main avec notre bracelet connecté Harmony Fit'.",
    frenchAlt:
      "Page d’accueil du site Harmony montrant le bracelet connecté Harmony Fit en blanc et turquoise, avec le titre « Prenez votre santé en main avec notre bracelet connecté Harmony Fit ».",
    contain: true,
    width: 2560,
    height: 1364,
  },
  sections: [
    {
      heading: "Overview",
      paragraphs: [
        "A manufacturing ambition — a 100% Made in France connected bracelet — arrived before an audience, a feature set or a reason to choose Harmony over Fitbit or Garmin. Connected wearables are a crowded market; Made in France carries real weight with French buyers, but weight alone doesn't make a product relevant.",
        "I worked UX research, information architecture, wireframes and UI end to end, on a four-person team meeting weekly with the client — every finding and interface shown here came out of shared work, not individual output. Our job was to earn that reason: understand who the bracelet was actually for, and how the product, website and app needed to work together.",
      ],
      facts: [
        { label: "Team size", value: "04", emphasizeValue: true },
        { label: "Survey responses", value: "70+", emphasizeValue: true },
        { label: "Market", value: "France" },
      ],
      french: {
        heading: "Vue d’ensemble",
        paragraphs: [
          "Une ambition de fabrication — un bracelet connecté 100% Made in France — est arrivée avant un public défini, des fonctionnalités choisies ou une raison de préférer Harmony à Fitbit ou Garmin. Les objets connectés forment un marché saturé ; le Made in France a un vrai poids auprès des acheteurs français, mais ce poids seul ne suffit pas à rendre un produit pertinent.",
          "J’ai porté la recherche UX, l’architecture de l’information, les wireframes et l’UI de bout en bout, au sein d’une équipe de quatre personnes avec un point hebdomadaire client — chaque résultat et interface présentés ici sont issus d’un travail partagé. Notre mission était de construire cette raison : comprendre à qui s’adressait le bracelet, et comment produit, site et application devaient s’articuler.",
        ],
        facts: [
          { label: "Taille de l’équipe", value: "04", emphasizeValue: true },
          { label: "Réponses au sondage", value: "70+", emphasizeValue: true },
          { label: "Marché", value: "France" },
        ],
      },
    },
    {
      heading: "Key Decisions",
      title: "From Research to Product",
      paragraphs: [
        "A field survey found respondents skewed female, active, already using some kind of tracking tool. The clearest gap was motivation and support over time — complexity, a lack of guidance and no sense of community were why tools got abandoned, not a missing feature. Three decisions answered that gap directly.",
      ],
      facts: [
        { label: "Already track activity", value: "76%", emphasizeValue: true },
        {
          label: "Made in France sways purchase",
          value: "60%",
          emphasizeValue: true,
        },
      ],
      subsections: [
        {
          title: "Personalized Onboarding",
          pairWithNext: true,
          paragraphs: [
            "Right after sign-up, a five-question quiz builds a training program tailored to the person answering, rather than dropping everyone into the same generic dashboard — people didn't want more features, they wanted the app to already know what they were training for.",
          ],
          images: [
            {
              src: appOnboarding,
              alt: "Harmony app onboarding flow: simplified sign-in via Apple, Facebook or Google, device selection and pairing confirmation, then a five-question quiz covering goal, fitness level, weight and height, weekly sport frequency and daily obstacles.",
              contain: true,
              zoomable: true,
              width: 2481,
              height: 3508,
            },
          ],
          french: {
            title: "Onboarding personnalisé",
            paragraphs: [
              "Juste après l’inscription, un quiz en cinq questions construit un programme adapté à la personne qui répond, plutôt que de déposer tout le monde sur le même dashboard générique — les gens ne voulaient pas plus de fonctionnalités, ils voulaient que l’application sache déjà pour quoi ils s’entraînaient.",
            ],
            imageAlts: [
              "Parcours d’onboarding de l’application Harmony : connexion simplifiée via Apple, Facebook ou Google, sélection et confirmation d’appairage de l’appareil, puis un quiz en cinq questions sur l’objectif, le niveau sportif, le poids et la taille, la fréquence sportive hebdomadaire et les freins au quotidien.",
            ],
          },
        },
        {
          title: "Dashboard & Progress Tracking",
          paragraphs: [
            "The daily dashboard surfaces the day's key numbers in one readable 'Today' view. It stays personalizable — data that doesn't apply, like menstrual tracking, can be swapped for something that does — directly answering the 'too complex' complaint respondents raised about existing apps.",
          ],
          images: [
            {
              src: appDashboard,
              alt: "Harmony app dashboard: a daily 'Today' view with steps, sleep, heart rate, calories and hydration rings, a weekly training program, per-session exercise details, a run-history map with distance and pace, and a training calendar.",
              contain: true,
              zoomable: true,
              width: 2481,
              height: 3508,
            },
          ],
          french: {
            title: "Dashboard & suivi de progression",
            paragraphs: [
              "Le dashboard quotidien réunit les indicateurs clés du jour dans une vue « Aujourd’hui » lisible. Il reste personnalisable — une donnée qui ne s’applique pas, comme le suivi du cycle menstruel, peut être remplacée par une autre — en réponse directe au reproche de complexité formulé sur les applications existantes.",
            ],
            imageAlts: [
              "Dashboard de l’application Harmony : vue quotidienne « Aujourd’hui » avec anneaux de pas, sommeil, fréquence cardiaque, calories et hydratation, un programme d’entraînement hebdomadaire, le détail de chaque séance, une carte d’historique de course avec distance et allure, et un calendrier d’entraînement.",
            ],
          },
        },
        {
          title: "Community & Gamification",
          paragraphs: [
            "Groups, friend challenges and community leaderboards give training a social layer respondents said they were missing. Badges and time-boxed challenges — '10km in a month', 'move in August' — reward consistency rather than just logging it: motivation fades without support.",
          ],
          imageLayout: "two-up",
          images: [
            {
              src: communityGamification1,
              alt: "Harmony community screens: challenges and friends tabs, wellbeing/yoga/sleep groups to join, a friends leaderboard, and community challenge cards like '10km in a month'.",
              label: "Community",
              contain: true,
              zoomable: true,
              width: 2481,
              height: 3508,
            },
            {
              src: communityGamification2,
              alt: "Harmony gamification screens: achievement badges by level, an encouraging 'goal reached' message, and time-boxed challenge cards such as 'move in August'.",
              label: "Gamification",
              contain: true,
              zoomable: true,
              width: 2481,
              height: 3508,
            },
          ],
          french: {
            title: "Communauté & gamification",
            paragraphs: [
              "Des groupes, des défis entre amis et des classements communautaires apportent la dimension sociale que les répondant·es disaient manquer. Badges et défis limités dans le temps — « 10 km en un mois », « bougez en août » — récompensent la régularité : la motivation s’essouffle sans soutien.",
            ],
            imageLabels: ["Communauté", "Gamification"],
            imageAlts: [
              "Écrans communauté Harmony : onglets défis et amis, groupes bien-être/yoga/sommeil à rejoindre, classement entre amis, et cartes de défis communautaires comme « 10 km en un mois ».",
              "Écrans de gamification Harmony : badges de récompense par niveau, message d’encouragement « objectif atteint », et cartes de défis limités dans le temps comme « bougez en août ».",
            ],
          },
        },
      ],
      images: [
        {
          src: researchOverview,
          alt: "Harmony field survey overview: a Google Forms questionnaire distributed on LinkedIn and Facebook wellbeing groups, its research objectives, and 70+ respondent demographics (around 70% women, mostly active professionals).",
          label: "70+ real responses",
          frenchLabel: "70+ réponses réelles",
          caption:
            "Not an assumed audience — the evidence the rest of the project was built on.",
          frenchCaption:
            "Pas un public supposé : la preuve sur laquelle s’est appuyé le reste du projet.",
          contain: true,
          zoomable: true,
          displayWidth: "reference",
          width: 2481,
          height: 3508,
        },
      ],
      disclosure: {
        summary: "Research details",
        frenchSummary: "Détails de la recherche",
        sections: [
          {
            title: "Survey Detail",
            paragraphs: [
              "Respondents skewed female (around 70%), mostly active professionals training 1 to 4 times a week — training for health and fitness first, appearance second, stress relief third.",
            ],
            imageLayout: "two-up",
            images: [
              {
                src: researchSport,
                alt: "Survey results on sport habits: 66% train 1–4 times a week, motivated mainly by health (88%) and appearance (46%); running and fitness are the most practiced activities.",
                label: "Sport habits & motivation",
                contain: true,
                zoomable: true,
                width: 2481,
                height: 3508,
              },
              {
                src: researchTools,
                alt: "Survey results on tracking tools: 76% already use a fitness app, smartwatch or connected bracelet, led by Fitbit, Garmin and Apple Watch.",
                label: "Existing tools & competitors",
                contain: true,
                zoomable: true,
                width: 2481,
                height: 3508,
              },
              {
                src: researchPricing,
                alt: "Survey results on Made in France and pricing: 60% say Made in France influences their purchase, and most respondents would pay between €100 and €250 for a French-made connected bracelet.",
                label: "Made in France & pricing",
                contain: true,
                zoomable: true,
                width: 2481,
                height: 3508,
              },
            ],
            french: {
              paragraphs: [
                "Les répondant·es étaient majoritairement des femmes (environ 70%), actives, pratiquant un sport 1 à 4 fois par semaine — motivées d’abord par la santé et la forme, puis par l’apparence, puis par la gestion du stress.",
              ],
              imageAlts: [
                "Résultats sur les habitudes sportives : 66% pratiquent une activité 1 à 4 fois par semaine, motivés d’abord par la santé (88%) puis l’apparence (46%) ; course à pied et fitness sont les activités les plus pratiquées.",
                "Résultats sur les outils de suivi : 76% utilisent déjà une application sportive, une montre ou un bracelet connecté, avec Fitbit, Garmin et Apple Watch en tête.",
                "Résultats sur le Made in France et le prix : 60% déclarent que le Made in France influence leur achat, la majorité étant prête à payer entre 100€ et 250€ pour un bracelet connecté fabriqué en France.",
              ],
            },
          },
          {
            title: "Persona",
            paragraphs: [
              "The team defined a core, primary and secondary target through the field survey and a mindset-analysis exercise in Figma. Amélia — a freelance professional and part-time yoga teacher balancing training, sleep and family life — is the persona card the team produced in full, and the one whose day the empathy map, journey map and service blueprint later trace in detail.",
              "In the source material she's documented as a secondary persona; the primary target was defined through the research above rather than a matching finished card. Amélia is shown here because she's the fullest, most evidence-backed artifact available, not because the labeling was reconciled.",
            ],
            images: [
              {
                src: persona,
                alt: "Persona card for Amélia J., 30, a freelance aeronautics developer and part-time yoga teacher living in Boulogne-Billancourt — her needs, frustrations, personality traits and the apps and brands she already uses.",
                contain: true,
                zoomable: true,
                width: 2481,
                height: 3508,
              },
            ],
            french: {
              paragraphs: [
                "L’équipe a défini une cible cœur, une cible principale et une cible secondaire à partir de l’enquête terrain et d’un exercice d’analyse de mindset dans Figma. Amélia — professionnelle indépendante et professeure de yoga à temps partiel, entre entraînement, sommeil et vie de famille — est le persona que l’équipe a détaillé en entier, et celle dont l’empathy map, le parcours et le service blueprint retracent ensuite la journée.",
                "Dans les documents source, elle est identifiée comme persona secondaire ; la cible principale a été définie par la recherche ci-dessus plutôt que par une fiche équivalente. Amélia est présentée ici parce que c’est l’artefact le plus complet et le mieux documenté dont nous disposons, pas parce que cet écart d’étiquetage a été résolu.",
              ],
              imageAlts: [
                "Fiche persona d’Amélia J., 30 ans, développeuse indépendante dans l’aéronautique et professeure de yoga à temps partiel à Boulogne-Billancourt — ses besoins, frustrations, traits de personnalité, applications et marques déjà utilisées.",
              ],
            },
          },
          {
            title: "Jobs To Be Done",
            paragraphs: [
              "We wrote Jobs To Be Done across all three targets — core, primary and secondary — each broken into a functional, emotional and social dimension: training for a marathon, disconnecting from screens during practice, and supporting a partner's wellbeing. Read together, they describe progress people wanted, not features they'd tick on a list.",
              "That framing set the product scope. We prioritized what those jobs required directly — a personalized program, simple progress tracking, motivation support — over broader e-commerce or social features the research hadn't shown to matter as much.",
            ],
            images: [
              {
                src: jtbd,
                alt: "Jobs To Be Done for Harmony's three targets — core, primary and secondary — each with a functional, emotional and social dimension, from training for a marathon to a digital detox to supporting a partner's wellbeing.",
                contain: true,
                zoomable: true,
                width: 2481,
                height: 3508,
              },
            ],
            french: {
              paragraphs: [
                "Nous avons rédigé les Jobs To Be Done pour les trois cibles — cœur, principale et secondaire — chacune déclinée en dimension fonctionnelle, émotionnelle et sociale : s’entraîner pour un marathon, décrocher des écrans pendant la pratique, soutenir le bien-être de sa/son partenaire. Lus ensemble, ils décrivent la progression recherchée, pas une liste de fonctionnalités à cocher.",
                "Ce cadrage a orienté le périmètre produit. Nous avons priorisé ce que ces jobs demandaient directement — un programme personnalisé, un suivi de progression simple, un soutien à la motivation — plutôt que des fonctionnalités e-commerce ou sociales plus larges que la recherche n’avait pas montrées comme prioritaires.",
              ],
              imageAlts: [
                "Jobs To Be Done pour les trois cibles Harmony — cœur, principale et secondaire — chacune avec une dimension fonctionnelle, émotionnelle et sociale, de l’entraînement pour un marathon à la digital detox jusqu’au soutien du bien-être d’un·e partenaire.",
              ],
            },
          },
          {
            title: "Information Architecture",
            paragraphs: [
              "We ran a card sort in Miro to see how people actually grouped and named content, rather than imposing our own internal vocabulary — homepage, account, products, footer and 'who we are' emerged as the sections people reached for naturally.",
              "That sort became a sitemap: homepage, product catalogue, account, footer, blog and a retailer map, structured around how visitors think, not how the org chart was drawn.",
            ],
            imageLayout: "two-up",
            images: [
              {
                src: cardSorting,
                alt: "Miro card-sorting board for Harmony, with sticky notes grouped by participants into homepage, account, products, navigation bar, footer and 'who we are' categories.",
                label: "Card sort · Miro",
                contain: true,
                zoomable: true,
                width: 3508,
                height: 2481,
              },
              {
                src: siteArchitecture,
                alt: "Site architecture diagram for Harmony, showing the navigation tree from the homepage to products, account, footer, blog and the retailer map.",
                label: "Resulting sitemap",
                contain: true,
                zoomable: true,
                width: 1088,
                height: 688,
              },
            ],
            french: {
              title: "Architecture de l’information",
              paragraphs: [
                "Nous avons mené un tri de cartes dans Miro pour observer comment les gens regroupaient et nommaient réellement le contenu, plutôt que d’imposer notre propre vocabulaire interne — accueil, compte, produits, footer et « qui sommes-nous » sont ressortis comme des regroupements naturels.",
                "Ce tri a donné une sitemap : accueil, catalogue produits, compte, footer, blog et une carte des revendeurs, structurée selon la façon dont les visiteur·ses pensent le site, pas selon l’organigramme interne.",
              ],
              imageLabels: ["Tri de cartes · Miro", "Sitemap obtenu"],
              imageAlts: [
                "Tableau Miro de tri de cartes pour Harmony, avec des post-it regroupés par les participant·es en catégories accueil, compte, produits, barre de navigation, footer et « qui sommes-nous ».",
                "Diagramme d’architecture du site Harmony, montrant l’arborescence de navigation de l’accueil vers les produits, le compte, le footer, le blog et la carte des revendeurs.",
              ],
            },
          },
          {
            title: "User Journey",
            paragraphs: [
              "Using Amélia as the throughline, we mapped an empathy map and a full-day customer journey — waking, meditating, teaching, worrying about training alone in the evening — to surface where the bracelet could genuinely help versus where it would just add another notification.",
              "A second experience map and service blueprint then connected her day to the system behind it: which moments are frontstage (the app, the bracelet) and which are backstage (data logging, safety alerts, sleep diagnostics) — the step that turned a persona's day into product requirements.",
            ],
            imageLayout: "two-up",
            images: [
              {
                src: journeyEmpathy,
                alt: "Empathy map for a Harmony persona (thoughts, feelings, what they hear and see) paired with a full-day customer journey map for Amélia, tracking her tools, actions, emotional highs and lows, friction points and opportunities.",
                label: "Empathy map & customer journey",
                contain: true,
                zoomable: true,
                width: 2481,
                height: 3508,
              },
              {
                src: journeyBlueprint,
                alt: "Experience map for Amélia's day paired with a service blueprint mapping her customer journey against frontstage app and bracelet actions, backstage data logging, and support processes like safety alerts and sleep diagnostics.",
                label: "Experience map & service blueprint",
                contain: true,
                zoomable: true,
                width: 2481,
                height: 3508,
              },
            ],
            french: {
              title: "Parcours utilisateur",
              paragraphs: [
                "En prenant Amélia comme fil conducteur, nous avons construit une empathy map et un parcours client sur une journée complète — réveil, méditation, cours donné, inquiétude à s’entraîner seule le soir — pour repérer où le bracelet pouvait vraiment aider plutôt que d’ajouter une notification de plus.",
                "Une experience map et un service blueprint ont ensuite relié sa journée au système qui la soutient : quels moments sont frontstage (l’application, le bracelet) et lesquels sont backstage (enregistrement des données, alertes de sécurité, diagnostic du sommeil) — l’étape qui a transformé la journée d’un persona en exigences produit.",
              ],
              imageLabels: [
                "Carte d’empathie & parcours client",
                "Carte d’expérience & service blueprint",
              ],
              imageAlts: [
                "Empathy map pour un persona Harmony (pensées, sentiments, ce qu’il/elle entend et voit) associée à un parcours client d’Amélia sur une journée complète, avec ses outils, actions, hauts et bas émotionnels, points de friction et opportunités.",
                "Experience map de la journée d’Amélia associée à un service blueprint reliant son parcours client aux actions frontstage (application, bracelet), à l’enregistrement des données backstage, et aux processus de support comme les alertes de sécurité et le diagnostic du sommeil.",
              ],
            },
          },
        ],
      },
      french: {
        heading: "Décisions clés",
        title: "De la recherche au produit",
        paragraphs: [
          "Un questionnaire terrain a révélé des répondant·es majoritairement des femmes, actives, déjà équipées d’un outil de suivi. Le manque le plus net portait sur la motivation et l’accompagnement dans la durée — complexité, manque de guidage et absence de communauté expliquaient l’abandon des outils, pas une fonctionnalité manquante. Trois décisions répondent directement à ce manque.",
        ],
        facts: [
          {
            label: "Utilisent déjà un outil de suivi",
            value: "76%",
            emphasizeValue: true,
          },
          {
            label: "Made in France influence l’achat",
            value: "60%",
            emphasizeValue: true,
          },
        ],
        imageAlts: [
          "Vue d’ensemble de l’enquête terrain Harmony : questionnaire Google Forms diffusé sur LinkedIn et des groupes Facebook bien-être, ses objectifs et le profil des répondant·es (majoritairement des femmes, actives).",
        ],
        imageLabels: ["70+ réponses réelles"],
        imageCaptions: [
          "Pas un public supposé : la preuve sur laquelle s’est appuyé le reste du projet.",
        ],
      },
    },
    {
      heading: "Result",
      paragraphs: [
        "Before any high-fidelity screen, a hand-sketched homepage, product page and application flow were tested with real people — navigation was already clear, but testers wanted help choosing a bracelet by sport habit, and expected to see color options from the homepage. High-fidelity mockups answered both: category pages group bracelets by use (Health, Move, Luxe), and product colors are visible from the homepage.",
        "We integrated foundational accessibility practices rather than claiming a finished audit: a toolbar (text resizing, grayscale, high/negative contrast), descriptive alt text on every product image, clear inline form errors, and checked color contrast — the footer's white-on-teal combination measures 10.22:1, passing both AA and AAA.",
      ],
      imageLayout: "three-up",
      images: [
        {
          src: finalUiDesktop,
          alt: "Final desktop UI for Harmony's homepage, product page and category page, in the finished visual language with product colors visible from the homepage. Zoom to see the full sheet.",
          label: "Desktop",
          zoomable: true,
          width: 794,
          height: 1126,
          cropAspectClassName: "aspect-[3/4]",
          cropZoomClassName: "scale-100",
          cropPositionClassName: "object-top",
        },
        {
          src: finalUiTablet,
          alt: "Final tablet UI for Harmony's homepage, product page and category page, adapting the desktop layout to a medium viewport. Zoom to see the full sheet.",
          label: "Tablet",
          frenchLabel: "Tablette",
          zoomable: true,
          width: 710,
          height: 1154,
          cropAspectClassName: "aspect-[3/4]",
          cropZoomClassName: "scale-100",
          cropPositionClassName: "object-top",
        },
        {
          src: finalUiMobile,
          alt: "Final mobile UI for Harmony's homepage, product page and category page, adapting the layout to a narrow viewport. Zoom to see the full sheet.",
          label: "Mobile",
          zoomable: true,
          width: 784,
          height: 1172,
          cropAspectClassName: "aspect-[3/4]",
          cropZoomClassName: "scale-100",
          cropPositionClassName: "object-top",
        },
      ],
      videos: [
        {
          src: websitePrototypeVideo,
          poster: finalUiDesktop,
          posterAlt:
            "Poster frame for the Harmony website prototype walkthrough, cropped to the top of the final desktop UI sheet.",
          frenchPosterAlt:
            "Image d’aperçu de la présentation du prototype du site Harmony, cadrée sur le haut de la planche de l’interface desktop finale.",
          label: "Website prototype walkthrough",
          frenchLabel: "Présentation du prototype du site web",
          sizeNote: "Video · ~45 MB",
          frenchSizeNote: "Vidéo · ~45 Mo",
          displayWidth: "website",
          width: 794,
          height: 1126,
          posterAspectClassName: "aspect-[16/9]",
          posterZoomClassName: "scale-100",
          posterPositionClassName: "object-top",
        },
        {
          src: appPrototypeVideo,
          poster: appDashboard,
          posterAlt:
            "Poster frame for the Harmony app prototype walkthrough, cropped to the top of the app dashboard sheet.",
          frenchPosterAlt:
            "Image d’aperçu de la présentation du prototype de l’application Harmony, cadrée sur le haut de la planche du tableau de bord.",
          label: "App prototype walkthrough",
          frenchLabel: "Présentation du prototype de l’application",
          sizeNote: "Video · ~54 MB",
          frenchSizeNote: "Vidéo · ~54 Mo",
          displayWidth: "mobile",
          width: 2481,
          height: 3508,
          posterAspectClassName: "aspect-[3/4]",
          posterZoomClassName: "scale-100",
          posterPositionClassName: "object-top",
        },
      ],
      document: {
        href: designSystemPdf,
        label: "View the full design system (PDF)",
        frenchLabel: "Voir le design system complet (PDF)",
        sizeNote: "~640 KB",
      },
      disclosure: {
        summary: "Wireframes & accessibility detail",
        frenchSummary: "Wireframes & détail accessibilité",
        sections: [
          {
            title: "Paper Prototype",
            paragraphs: [
              "The hand-sketched homepage, product page and application flow tested before any high-fidelity screen.",
            ],
            images: [
              {
                src: paperPrototype,
                alt: "Hand-sketched paper prototypes for Harmony's homepage, testimonial section and application, with a written summary of user-testing findings: navigation was clear, but testers wanted bracelet-choice guidance and visible color options from the homepage.",
                contain: true,
                zoomable: true,
                width: 2481,
                height: 3508,
              },
            ],
            french: {
              title: "Prototype papier",
              paragraphs: [
                "La page d’accueil, la page produit et le parcours applicatif dessinés à la main, testés avant tout écran haute-fidélité.",
              ],
              imageAlts: [
                "Prototypes papier dessinés à la main pour la page d’accueil, la section témoignages et l’application Harmony, avec une synthèse écrite des tests utilisateurs : navigation claire, mais besoin d’aide au choix du bracelet et de coloris visibles dès l’accueil.",
              ],
            },
          },
          {
            title: "Website Wireframes",
            paragraphs: [
              "Zoning set the structural position of each page's key elements before any visual design. Wireframes for the homepage, product, category and contact pages then defined the site's structure at desktop and mobile widths.",
            ],
            imageLayout: "two-up",
            images: [
              {
                src: websiteWireframesDesktop,
                alt: "Desktop wireframes for Harmony's homepage, contact page, product page and category page, showing structure and content hierarchy before visual design.",
                label: "Wireframes · Desktop",
                contain: true,
                zoomable: true,
                width: 2481,
                height: 3508,
              },
              {
                src: websiteWireframesMobile,
                alt: "Mobile wireframes for Harmony's homepage, contact page, product page and category page, adapting the same structure to a narrow viewport.",
                label: "Wireframes · Mobile",
                contain: true,
                zoomable: true,
                width: 722,
                height: 1144,
              },
            ],
            french: {
              title: "Wireframes du site",
              paragraphs: [
                "Le zoning a fixé la position structurelle des éléments clés de chaque page avant tout habillage visuel. Les wireframes de l’accueil, de la fiche produit, de la page catégorie et de la page contact ont ensuite défini la structure du site en desktop et en mobile.",
              ],
              imageAlts: [
                "Wireframes desktop de l’accueil, de la page contact, de la fiche produit et de la page catégorie Harmony, montrant la structure et la hiérarchie de contenu avant l’habillage visuel.",
                "Wireframes mobiles de l’accueil, de la page contact, de la fiche produit et de la page catégorie Harmony, adaptant la même structure à un écran étroit.",
              ],
            },
          },
          {
            title: "Mobile App Wireframes",
            paragraphs: [
              "The companion app's wireframes cover the full loop: pairing and onboarding, the daily dashboard, a training program, progress statistics, community and workout screens.",
            ],
            imageLayout: "two-up",
            images: [
              {
                src: appWireframes1,
                alt: "App wireframes: a weekly training-program screen, device-connected confirmation, and the onboarding quiz asking for goals and fitness level.",
                label: "Onboarding & program",
                contain: true,
                zoomable: true,
                width: 742,
                height: 652,
              },
              {
                src: appWireframes2,
                alt: "App wireframes: the daily dashboard with activity rings, community challenges and leaderboard, progress statistics, workout categories, and device-selection screen.",
                label: "Dashboard, community & workouts",
                contain: true,
                zoomable: true,
                width: 766,
                height: 410,
              },
            ],
            french: {
              title: "Wireframes de l’application",
              paragraphs: [
                "Les wireframes de l’application couvrent l’ensemble du parcours : appairage et onboarding, dashboard quotidien, programme d’entraînement, statistiques de progression, écrans communauté et entraînements.",
              ],
              imageLabels: [
                "Onboarding & programme",
                "Tableau de bord, communauté & entraînements",
              ],
              imageAlts: [
                "Wireframes de l’application : écran hebdomadaire de programme d’entraînement, confirmation d’appareil connecté, et quiz d’onboarding demandant l’objectif et le niveau sportif.",
                "Wireframes de l’application : dashboard quotidien avec anneaux d’activité, défis communautaires et classement, statistiques de progression, catégories d’entraînement et écran de sélection d’appareil.",
              ],
            },
          },
          {
            title: "Accessibility Proof",
            paragraphs: [
              "Alt text, inline form errors and the contrast check shown in one sheet.",
            ],
            images: [
              {
                src: accessibility2,
                alt: "Examples of descriptive alt text on product images, inline error messages on the contact form, and a contrast check confirming a 10.22:1 ratio (AA and AAA) for white text on the teal footer background.",
                label: "Alt text, forms & contrast",
                contain: true,
                zoomable: true,
                width: 2481,
                height: 3508,
              },
            ],
            french: {
              title: "Preuve d’accessibilité",
              paragraphs: [
                "Textes alternatifs, erreurs de formulaire en ligne et vérification de contraste réunis sur une planche.",
              ],
              imageAlts: [
                "Exemples de texte alternatif descriptif sur les images produits, de messages d’erreur en ligne sur le formulaire de contact, et une vérification de contraste confirmant un ratio de 10.22:1 (AA et AAA) pour le texte blanc sur le fond sarcelle du footer.",
              ],
              imageLabels: ["Textes alternatifs, formulaires & contraste"],
            },
          },
        ],
      },
      french: {
        heading: "Résultat",
        paragraphs: [
          "Avant tout écran haute-fidélité, une page d’accueil, une page produit et un parcours applicatif dessinés à la main ont été testés auprès de vraies personnes — la navigation était déjà claire, mais les testeur·ses voulaient de l’aide pour choisir un bracelet selon leurs habitudes sportives, et s’attendaient à voir les coloris dès l’accueil. Les maquettes haute-fidélité ont répondu aux deux : les pages catégorie regroupent les bracelets par usage (Health, Move, Luxe), et les coloris produits sont visibles dès l’accueil.",
          "Nous avons intégré des pratiques fondamentales d’accessibilité plutôt que de revendiquer un audit complet : une barre d’outils (redimensionnement du texte, niveaux de gris, contraste élevé/négatif), un texte alternatif descriptif sur chaque image produit, des messages d’erreur clairs, et une vérification des contrastes — le footer en blanc sur sarcelle atteint un ratio de 10.22:1, conforme AA et AAA.",
        ],
        imageAlts: [
          "Interface desktop finale de l’accueil, de la fiche produit et de la page catégorie Harmony, dans le langage visuel final avec les coloris produits visibles dès l’accueil. Zoomer pour voir la planche complète.",
          "Interface tablette finale de l’accueil, de la fiche produit et de la page catégorie Harmony, adaptant la mise en page desktop à un écran intermédiaire. Zoomer pour voir la planche complète.",
          "Interface mobile finale de l’accueil, de la fiche produit et de la page catégorie Harmony, adaptant la mise en page à un écran étroit. Zoomer pour voir la planche complète.",
        ],
      },
    },
    {
      heading: "Reflection",
      paragraphs: [
        "By the end of the project, research had produced a defined audience and validated priorities. The A/B test and heatmap work referenced in this project are documented plans and methodology, not completed results — the source material doesn't establish a winning variant, and none is claimed here.",
        "There was no real user base at scale, and Harmony's site is partially accessible — a full WCAG audit would still be needed before any real production launch. What stayed with me is that understanding has to come before designing: not a phase to finish and forget, but the discipline that made every decision after it defensible.",
      ],
      french: {
        heading: "Réflexion",
        paragraphs: [
          "À la fin du projet, la recherche avait produit un public défini et des priorités validées. Le travail d’A/B testing et de heatmap mentionné dans ce projet documente un plan et une méthodologie, pas des résultats aboutis — les documents source n’établissent pas de variante gagnante, et aucune n’est revendiquée ici.",
          "Il n’y a pas eu de base d’utilisateur·rices réelle à grande échelle, et le site Harmony est partiellement accessible — un audit complet au regard des WCAG resterait nécessaire avant toute mise en production réelle. Ce qui m’en reste, c’est que comprendre doit précéder concevoir : non comme une étape à finir puis oublier, mais comme la discipline qui a rendu chaque décision suivante défendable.",
        ],
      },
    },
  ],
}
