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
        "A manufacturing ambition — a 100% Made in France connected bracelet — arrived before an audience, a feature set or a reason to choose Harmony over Fitbit or Garmin.",
        "I worked UX research, information architecture, wireframes and UI end to end, on a four-person team meeting weekly with the client — every finding and interface shown here came out of shared work, not individual output.",
        "The result is a companion website and app built around one insight: people didn't need more fitness features, they needed help staying motivated over time.",
      ],
      facts: [
        { label: "Duration", value: "06", emphasizeValue: true },
        { label: "Team", value: "04", emphasizeValue: true },
        { label: "Research", value: "70+", emphasizeValue: true },
        { label: "Market", value: "France" },
      ],
      french: {
        heading: "Vue d’ensemble",
        paragraphs: [
          "Une ambition de fabrication — un bracelet connecté 100% Made in France — est arrivée avant un public défini, des fonctionnalités choisies ou une raison de préférer Harmony à Fitbit ou Garmin.",
          "J’ai porté la recherche UX, l’architecture de l’information, les wireframes et l’UI de bout en bout, au sein d’une équipe de quatre personnes avec un point hebdomadaire client — chaque résultat et interface présentés ici sont issus d’un travail partagé, pas d’une production individuelle.",
          "Le résultat est un site et une application construits autour d’un seul insight : les gens n’avaient pas besoin de plus de fonctionnalités sportives, mais d’aide pour rester motivés dans la durée.",
        ],
        facts: [
          { label: "Durée", value: "06", emphasizeValue: true },
          { label: "Équipe", value: "04", emphasizeValue: true },
          { label: "Recherche", value: "70+", emphasizeValue: true },
          { label: "Marché", value: "France" },
        ],
      },
    },
    {
      heading: "The Challenge",
      paragraphs: [
        "Connected wearables are a crowded market, and Made in France carries real weight with French buyers — but weight alone doesn’t make a product relevant. The brief had a manufacturing ambition before it had a defined audience, a feature set, or a reason for someone to choose Harmony over Fitbit or Garmin.",
        "Our challenge was to earn that reason: understand who the bracelet was actually for, which functions mattered to them, and how the physical product, the website and the app needed to work together — rather than default to another feature-led fitness app.",
      ],
      french: {
        heading: "Le défi",
        paragraphs: [
          "Les objets connectés forment un marché saturé, et le Made in France a un vrai poids auprès des acheteurs français — mais ce poids ne suffit pas à rendre un produit pertinent. Le brief portait une ambition de fabrication avant d’avoir un public défini, des fonctionnalités choisies ou une raison de préférer Harmony à Fitbit ou Garmin.",
          "Notre défi était de construire cette raison : comprendre à qui s’adressait réellement le bracelet, quelles fonctions comptaient pour ces personnes, et comment le produit physique, le site et l’application devaient s’articuler — plutôt que de reproduire une énième application fitness pilotée par les fonctionnalités.",
        ],
      },
    },
    {
      heading: "Understanding the Experience",
      paragraphs: [
        "A field survey — 70+ responses via Google Forms, shared on LinkedIn and wellbeing/sport Facebook groups — found respondents skewed female, active, training for health first. 76% already tracked their activity with a fitness app, smartwatch or bracelet; 60% said Made in France would sway a purchase, but only alongside a credible product.",
        "The clearest gap was motivation and support over time: complexity, a lack of guidance and no sense of community were why tools got abandoned — not a missing feature. That single insight is what the onboarding, dashboard and community & gamification decisions later in this project overview respond to.",
        "A persona, Jobs To Be Done, a card sort and a full customer journey turned that evidence into a validated audience and structure — the detail behind that work is in the disclosure below.",
      ],
      facts: [
        { label: "Already track activity", value: "76%", emphasizeValue: true },
        {
          label: "Made in France sways purchase",
          value: "60%",
          emphasizeValue: true,
        },
        { label: "Train 1–4×/week", value: "66%" },
        { label: "Top motivator", value: "Health & fitness" },
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
        heading: "Comprendre l’expérience",
        paragraphs: [
          "Un questionnaire terrain — plus de 70 réponses via Google Forms, diffusé sur LinkedIn et des groupes Facebook bien-être/sport — a révélé des répondant·es majoritairement des femmes, actives, motivées d’abord par la santé. 76% suivaient déjà leur activité avec une application, une montre ou un bracelet ; 60% déclaraient que le Made in France influencerait un achat, mais seulement associé à un produit crédible.",
          "Le manque le plus net portait sur la motivation et l’accompagnement dans la durée : complexité, manque de guidage et absence de communauté expliquaient l’abandon des outils — pas une fonctionnalité manquante. C’est à cet insight unique que répondent les décisions d’onboarding, de dashboard et de communauté & gamification présentées plus loin.",
          "Un persona, des Jobs To Be Done, un tri de cartes et un parcours client complet ont transformé cette preuve en public validé et en structure — le détail de ce travail se trouve dans le contenu déroulant ci-dessous.",
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
          { label: "S’entraînent 1 à 4×/semaine", value: "66%" },
          { label: "Première motivation", value: "Santé & forme" },
        ],
        imageAlts: [
          "Vue d’ensemble de l’enquête terrain Harmony : questionnaire Google Forms diffusé sur LinkedIn et des groupes Facebook bien-être, ses objectifs et le profil des 70+ répondant·es (environ 70% de femmes, majoritairement actives).",
        ],
        imageLabels: ["70+ réponses réelles"],
        imageCaptions: [
          "Pas un public supposé : la preuve sur laquelle s’est appuyé le reste du projet.",
        ],
      },
    },
    {
      heading: "Paper Prototype & User Testing",
      paragraphs: [
        "Before any high-fidelity screen, we tested a hand-sketched homepage, product page and application flow with real people. Navigation to find a connected bracelet was clear; two things weren't.",
        "Testers wanted help choosing between bracelets based on their own sport habits, and expected to see color options from the homepage rather than needing to open a product page first. Both fed directly into the wireframes and final UI that follow.",
      ],
      images: [
        {
          src: paperPrototype,
          alt: "Hand-sketched paper prototypes for Harmony's homepage, testimonial section and application, with a written summary of user-testing findings: navigation was clear, but testers wanted bracelet-choice guidance and visible color options from the homepage.",
          contain: true,
          zoomable: true,
          displayWidth: "reference",
          width: 2481,
          height: 3508,
        },
      ],
      french: {
        heading: "Prototype papier & tests utilisateurs",
        paragraphs: [
          "Avant tout écran haute-fidélité, nous avons testé une page d’accueil, une page produit et un parcours applicatif dessinés à la main auprès de vraies personnes. La navigation pour trouver un bracelet connecté était claire ; deux points ne l’étaient pas.",
          "Les testeur·ses voulaient de l’aide pour choisir entre les bracelets selon leurs propres habitudes sportives, et s’attendaient à voir les coloris dès l’accueil plutôt que d’avoir à ouvrir une fiche produit. Ces deux retours ont directement nourri les wireframes et l’interface finale qui suivent.",
        ],
        imageAlts: [
          "Prototypes papier dessinés à la main pour la page d’accueil, la section témoignages et l’application Harmony, avec une synthèse écrite des tests utilisateurs : navigation claire, mais besoin d’aide au choix du bracelet et de coloris visibles dès l’accueil.",
        ],
      },
    },
    {
      heading: "Designing the Interaction",
      paragraphs: [
        "Three decisions carried the research forward into the product — each answers a specific gap testers and respondents named, not a generic best practice.",
      ],
      subsections: [
        {
          title: "Personalized Onboarding",
          paragraphs: [
            "Straight after sign-up, a five-question quiz — goal, fitness level, weight and height, weekly sport frequency, daily obstacles — builds a training program tailored to the person answering, rather than dropping everyone into the same generic dashboard.",
            "This is the direct answer to the personalization gap the research surfaced: people didn't want more features, they wanted the app to already know what they were training for.",
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
              "Juste après l’inscription, un quiz en cinq questions — objectif, niveau sportif, poids et taille, fréquence sportive hebdomadaire, freins au quotidien — construit un programme d’entraînement adapté à la personne qui répond, plutôt que de déposer tout le monde sur le même dashboard générique.",
              "C’est la réponse directe au manque de personnalisation révélé par la recherche : les gens ne voulaient pas plus de fonctionnalités, ils voulaient que l’application sache déjà pour quoi ils s’entraînaient.",
            ],
            imageAlts: [
              "Parcours d’onboarding de l’application Harmony : connexion simplifiée via Apple, Facebook ou Google, sélection et confirmation d’appairage de l’appareil, puis un quiz en cinq questions sur l’objectif, le niveau sportif, le poids et la taille, la fréquence sportive hebdomadaire et les freins au quotidien.",
            ],
          },
        },
        {
          title: "Dashboard & Progress Tracking",
          paragraphs: [
            "The daily dashboard surfaces steps, sleep, heart rate, calories and hydration as one readable 'Today' view, with a weekly training program, per-session exercise detail and a run history with map, distance and pace underneath it.",
            "It's built to be simplified, not exhaustive: the dashboard is personalizable, so data that doesn't apply — menstrual tracking, for instance — can be swapped for something that does. That directly answers the 'too complex' complaint respondents raised about existing apps.",
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
              "Le dashboard quotidien réunit pas, sommeil, fréquence cardiaque, calories et hydratation dans une vue « Aujourd’hui » lisible, avec un programme d’entraînement hebdomadaire, le détail de chaque séance et un historique de course avec carte, distance et allure en dessous.",
              "Il est pensé pour être simplifié, pas exhaustif : le dashboard est personnalisable, une donnée qui ne s’applique pas — le suivi du cycle menstruel, par exemple — peut être remplacée par une autre. C’est la réponse directe au reproche de complexité formulé par les répondant·es sur les applications existantes.",
            ],
            imageAlts: [
              "Dashboard de l’application Harmony : vue quotidienne « Aujourd’hui » avec anneaux de pas, sommeil, fréquence cardiaque, calories et hydratation, un programme d’entraînement hebdomadaire, le détail de chaque séance, une carte d’historique de course avec distance et allure, et un calendrier d’entraînement.",
            ],
          },
        },
        {
          title: "Community & Gamification",
          paragraphs: [
            "Groups (sleep, yoga & fitness, wellbeing), friend challenges and community leaderboards give training a social layer respondents said they were missing. Badges, encouraging in-app messages and time-boxed challenges — '10km in a month', 'move in August' — reward consistency rather than just logging it.",
            "This is the most direct response to the research's clearest gap: motivation fades without support, so the product adds people, not just more stats.",
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
              "Des groupes (sommeil, yoga & fitness, bien-être), des défis entre amis et des classements communautaires apportent la dimension sociale que les répondant·es disaient manquer. Badges, messages d’encouragement dans l’app et défis limités dans le temps — « 10 km en un mois », « bougez en août » — récompensent la régularité plutôt que le simple enregistrement.",
              "C’est la réponse la plus directe au manque le plus net révélé par la recherche : la motivation s’essouffle sans soutien, donc le produit ajoute des personnes, pas seulement plus de statistiques.",
            ],
            imageLabels: ["Communauté", "Gamification"],
            imageAlts: [
              "Écrans communauté Harmony : onglets défis et amis, groupes bien-être/yoga/sommeil à rejoindre, classement entre amis, et cartes de défis communautaires comme « 10 km en un mois ».",
              "Écrans de gamification Harmony : badges de récompense par niveau, message d’encouragement « objectif atteint », et cartes de défis limités dans le temps comme « bougez en août ».",
            ],
          },
        },
        {
          title: "Behind the Decisions",
          paragraphs: [
            "Website and app wireframes set this structure before any visual design — desktop, mobile and the app's full loop, all zoned before color or type entered the file. The design system that carried it into every screen — logo, color, type, components — is documented in full below.",
          ],
          french: {
            title: "Derrière les décisions",
            paragraphs: [
              "Les wireframes du site et de l’application ont posé cette structure avant tout habillage visuel — desktop, mobile et la boucle complète de l’application, zonés avant toute couleur ou typographie. Le design system qui l’a portée sur chaque écran — logo, couleur, typographie, composants — est documenté intégralement ci-dessous.",
            ],
          },
        },
      ],
      document: {
        href: designSystemPdf,
        label: "View the full design system (PDF)",
        frenchLabel: "Voir le design system complet (PDF)",
        sizeNote: "~640 KB",
      },
      disclosure: {
        summary: "Additional wireframes",
        frenchSummary: "Wireframes supplémentaires",
        sections: [
          {
            title: "Website Wireframes",
            paragraphs: [
              "Zoning set the structural position of each page's key elements — navigation, content, visuals, supporting information — before any visual design, across the homepage, product, category, contact and retailer-map pages. Wireframes for the homepage, product page, category page and contact page then defined the site's structure at both desktop and mobile widths.",
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
                "Le zoning a fixé la position structurelle des éléments clés de chaque page — navigation, contenu, visuels, informations complémentaires — avant tout habillage visuel, sur l’accueil, la fiche produit, la page catégorie, la page contact et la carte des revendeurs. Les wireframes de l’accueil, de la fiche produit, de la page catégorie et de la page contact ont ensuite défini la structure du site en desktop et en mobile.",
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
              "The companion app's wireframes cover the full loop: a device-pairing and onboarding quiz, the daily dashboard, a training program, progress statistics, community and workout screens — the structural pass behind every high-fidelity screen shown above.",
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
                "Les wireframes de l’application couvrent l’ensemble du parcours : appairage de l’appareil et quiz d’onboarding, dashboard quotidien, programme d’entraînement, statistiques de progression, écrans communauté et entraînements — le travail de structure derrière chaque écran haute-fidélité présenté ci-dessus.",
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
        ],
      },
      french: {
        heading: "Concevoir l’interaction",
        paragraphs: [
          "Trois décisions ont porté la recherche jusqu’au produit — chacune répond à un manque précis nommé par les testeur·ses et répondant·es, pas à une bonne pratique générique.",
        ],
      },
    },
    {
      heading: "Final Experience",
      paragraphs: [
        "High-fidelity mockups carried the wireframes' structure into layout, color, spacing and typography — and answered the two gaps user testing surfaced: product colors are visible from the homepage, and category pages group bracelets by use (Health, Move, Luxe) so choosing one is guided, not a guess.",
        "The final screens were connected into two interactive Figma prototypes — the site's homepage-to-product journey, and the app's onboarding-to-community loop — so the client could click through the real flow rather than review static frames.",
      ],
      imageLayout: "three-up",
      images: [
        {
          src: finalUiDesktop,
          alt: "Final desktop UI for Harmony's homepage, product page and category page, in the finished visual language with product colors visible from the homepage.",
          label: "Desktop",
          contain: true,
          zoomable: true,
          width: 794,
          height: 1126,
        },
        {
          src: finalUiTablet,
          alt: "Final tablet UI for Harmony's homepage, product page and category page, adapting the desktop layout to a medium viewport.",
          label: "Tablet",
          frenchLabel: "Tablette",
          contain: true,
          zoomable: true,
          width: 710,
          height: 1154,
        },
        {
          src: finalUiMobile,
          alt: "Final mobile UI for Harmony's homepage, product page and category page, adapting the layout to a narrow viewport.",
          label: "Mobile",
          contain: true,
          zoomable: true,
          width: 784,
          height: 1172,
        },
      ],
      videos: [
        {
          src: websitePrototypeVideo,
          poster: finalUiDesktop,
          posterAlt:
            "Poster frame for the Harmony website prototype walkthrough, showing the final desktop UI sheet.",
          frenchPosterAlt:
            "Image d’aperçu de la présentation du prototype du site Harmony, montrant la planche de l’interface desktop finale.",
          label: "Website prototype walkthrough",
          frenchLabel: "Présentation du prototype du site web",
          sizeNote: "Video · ~45 MB",
          frenchSizeNote: "Vidéo · ~45 Mo",
          displayWidth: "website",
          width: 794,
          height: 1126,
        },
        {
          src: appPrototypeVideo,
          poster: appDashboard,
          posterAlt:
            "Poster frame for the Harmony app prototype walkthrough, showing the app dashboard sheet.",
          frenchPosterAlt:
            "Image d’aperçu de la présentation du prototype de l’application Harmony, montrant la planche du tableau de bord.",
          label: "App prototype walkthrough",
          frenchLabel: "Présentation du prototype de l’application",
          sizeNote: "Video · ~54 MB",
          frenchSizeNote: "Vidéo · ~54 Mo",
          displayWidth: "mobile",
          width: 2481,
          height: 3508,
        },
      ],
      french: {
        heading: "Expérience finale",
        paragraphs: [
          "Les maquettes haute-fidélité ont porté la structure des wireframes vers la mise en page, la couleur, les espacements et la typographie — et ont répondu aux deux manques révélés par les tests : les coloris produits sont visibles dès l’accueil, et les pages catégorie regroupent les bracelets par usage (Health, Move, Luxe) pour guider le choix plutôt que le laisser au hasard.",
          "Les écrans finaux ont été reliés dans deux prototypes Figma interactifs — le parcours accueil → produit du site, et la boucle onboarding → communauté de l’application — pour que le client puisse parcourir le vrai flux plutôt que de relire des écrans statiques.",
        ],
        imageAlts: [
          "Interface desktop finale de l’accueil, de la fiche produit et de la page catégorie Harmony, dans le langage visuel final avec les coloris produits visibles dès l’accueil.",
          "Interface tablette finale de l’accueil, de la fiche produit et de la page catégorie Harmony, adaptant la mise en page desktop à un écran intermédiaire.",
          "Interface mobile finale de l’accueil, de la fiche produit et de la page catégorie Harmony, adaptant la mise en page à un écran étroit.",
        ],
      },
    },
    {
      heading: "Accessibility",
      paragraphs: [
        "We integrated foundational practices rather than claiming a finished audit: an accessibility toolbar (text resizing, grayscale, high/negative contrast, underlined links), descriptive alt text on every product image, clear inline form-error messages, and checked color-contrast ratios — the footer's white-on-teal combination measures 10.22:1, passing both AA and AAA.",
        "The team's own conclusion, kept as written: Harmony's site is partially accessible. A full audit against WCAG would still be needed before any real production launch.",
      ],
      images: [
        {
          src: accessibility2,
          alt: "Examples of descriptive alt text on product images, inline error messages on the contact form, and a contrast check confirming a 10.22:1 ratio (AA and AAA) for white text on the teal footer background.",
          label: "Alt text, forms & contrast",
          contain: true,
          zoomable: true,
          displayWidth: "reference",
          width: 2481,
          height: 3508,
        },
      ],
      french: {
        heading: "Accessibilité",
        paragraphs: [
          "Nous avons intégré des pratiques fondamentales plutôt que de revendiquer un audit complet : une barre d’outils d’accessibilité (redimensionnement du texte, niveaux de gris, contraste élevé/négatif, liens soulignés), un texte alternatif descriptif sur chaque image produit, des messages d’erreur de formulaire clairs, et une vérification des contrastes — le footer en blanc sur sarcelle atteint un ratio de 10.22:1, conforme AA et AAA.",
          "La conclusion de l’équipe, reprise telle quelle : le site Harmony est partiellement accessible. Un audit complet au regard des WCAG resterait nécessaire avant toute mise en production réelle.",
        ],
        imageAlts: [
          "Exemples de texte alternatif descriptif sur les images produits, de messages d’erreur en ligne sur le formulaire de contact, et une vérification de contraste confirmant un ratio de 10.22:1 (AA et AAA) pour le texte blanc sur le fond sarcelle du footer.",
        ],
        imageLabels: ["Textes alternatifs, formulaires & contraste"],
      },
    },
    {
      heading: "Outcomes, Limitations & Learnings",
      paragraphs: [
        "By the end of the project, research had produced a defined audience and a validated set of priorities; that evidence carried through card sorting, wireframes, a finished responsive site and app UI, and two interactive prototypes. The A/B test and heatmap work here are documented plans and methodology, not completed results — the source material doesn't establish a winning variant, and this project overview doesn't claim one.",
        "There was no real user base at scale, and accessibility was treated as foundational practice rather than a completed WCAG audit. What stayed with me is that understanding has to come before designing — not a phase to finish and forget, but the discipline that made every decision after it defensible.",
      ],
      french: {
        heading: "Résultats, limites & apprentissages",
        paragraphs: [
          "À la fin du projet, la recherche avait produit un public défini et des priorités validées ; cette évidence s’est retrouvée dans le tri de cartes, les wireframes, une interface finie et responsive pour le site et l’application, et deux prototypes interactifs. Le travail d’A/B testing et de heatmap présenté ici documente un plan et une méthodologie, pas des résultats aboutis — les documents source n’établissent pas de variante gagnante, et cette présentation du projet n’en revendique aucune.",
          "Il n’y a pas eu de base d’utilisateur·rices réelle à grande échelle, et l’accessibilité a été traitée comme une pratique fondationnelle plutôt qu’un audit WCAG complet. Ce qui m’en reste, c’est que comprendre doit précéder concevoir — non comme une étape à finir puis oublier, mais comme la discipline qui a rendu chaque décision suivante défendable.",
        ],
      },
    },
  ],
}
