import type { LocalizedContent } from "@/i18n"

type NarrativeChapter = {
  kicker: string
  introduction: string
  sections: { label: string; paragraphs: string[] }[]
  conclusion: string
}

type SpfPageContent = {
  hero: {
    eyebrow: string
    title: string
    summary: string
    meta: { label: string; value: string }[]
    alt: string
  }
  overview: { kicker: string; points: { label: string; statement: string }[] }
  challenge: NarrativeChapter
  research: NarrativeChapter
  reflection: NarrativeChapter
}

const spfPageContent: LocalizedContent<SpfPageContent> = {
  en: {
    hero: {
      eyebrow: "Design System · Federal Public Service Foreign Affairs",
      title: "Building a Scalable Government Design System",
      summary:
        "Designing a modular, accessible and scalable design system for Belgium’s Federal Public Service Foreign Affairs.",
      meta: [
        { label: "Role", value: "Product Designer" },
        { label: "Timeline", value: "2023 — Present" },
        { label: "Team", value: "4–10+ developers" },
        { label: "Tools", value: "Figma · Angular Material · Zeroheight" },
      ],
      alt: "The SPF citizen portal's authentication screen — the government's architecture as backdrop, the sign-in flow as the one deliberate object in frame.",
    },
    overview: {
      kicker: "Project Overview",
      points: [
        {
          label: "Context",
          statement:
            "The Belgian Federal Public Service Foreign Affairs runs several SaaS applications — Travel Web, Visa on Web, Visanet — each built by its own team, with no shared UX methodology and no Product Designer ever involved.",
        },
        {
          label: "Mission",
          statement:
            "Standardize the applications and build a visual identity rooted in SPF's existing graphic charter — proposed early, before it was ever requested.",
        },
        {
          label: "Responsibilities",
          statement:
            "No Product Owner. No UX Lead. Every UX and UI decision was mine to make — not the application architecture, but the visual hierarchy of the information itself.",
        },
        {
          label: "Environment & Government Constraints",
          statement:
            "A federal public service, where accessibility and governance were real standing requirements — and where foundational components had to come from Angular Material, not a blank canvas.",
        },
      ],
    },
    challenge: {
      kicker: "The Challenge",
      introduction:
        "A citizen moving between the applications could reasonably assume each one had been built by a different company. Nothing about them said the same government was behind all four.",
      sections: [
        {
          label: "Four Applications, Built Like Strangers",
          paragraphs: [
            "Travel Web, Visa on Web, Visanet and the other applications the Belgian Federal Public Service Foreign Affairs runs had each been designed according to its own team’s habits and its own business needs. No Product Designer had ever worked alongside any of them. There was no shared UX methodology, no design system, and no visual consistency between applications a single citizen might use in the same week.",
          ],
        },
        {
          label: "The Cost Nobody Was Tracking",
          paragraphs: [
            "Developers were losing real time recreating the same UI decisions project after project — the same buttons, the same form patterns, reinvented from scratch every time because nothing existed to reuse. Accessibility had never been a design priority; the bar had simply been “functional.”",
          ],
        },
      ],
      conclusion:
        "That was the actual brief, once it was named plainly — not another feature, but a shared visual language four separate teams could stop reinventing.",
    },
    research: {
      kicker: "Research & UX",
      introduction:
        "A design system nobody asked for still has to earn its right to exist — once to the people who’d use it, and once to what could actually ship.",
      sections: [
        {
          label: "Making the Case, Before Making Anything",
          paragraphs: [
            "I proposed the design system myself, early on — it wasn’t in the original brief. Before I could design anything, I had to explain what a design system actually was: I ran workshops for the Business teams and the developers, making the case directly — time saved, consistency gained, and a real plan for how we’d get there, not just why we should.",
          ],
        },
        {
          label: "Fully Custom Didn’t Survive Contact With Reality",
          paragraphs: [
            "The first plan was a fully custom design system, built entirely on our own terms. Time constraints and extended conversations with the developers made that impractical. So the direction changed: foundational components would come from Angular Material, and I would build custom components from scratch wherever SPF’s identity actually needed to show — the header, the sidebar navigation, the footer. I wasn’t the application architect; there already were architects for that. What I owned was the visual hierarchy of the information itself.",
            "That wasn’t a retreat from ambition — it was a redirection of it. Giving up “fully custom everywhere” in exchange for “custom exactly where it mattered” meant the system could actually ship, and still carry SPF’s identity where a visitor would notice it most.",
          ],
        },
      ],
      conclusion:
        "The rest of this project overview shows what that decision produced — a shared foundation everywhere, and SPF’s own identity exactly where it needed to show.",
    },
    reflection: {
      kicker: "Reflection",
      introduction:
        "This project didn’t teach me a technical skill. It taught me that a design system is something you earn the right to build with a team, not something you hand them and walk away from.",
      sections: [
        {
          label: "Choosing Not to Defend From a Distance",
          paragraphs: [
            "One developer told me directly: “We build functional applications. That’s what really matters.” I didn’t try to argue my way past it. I went to understand the world it came from — I attended the Piscine at École 42 in Brussels, not to become a developer, but to become a better Product Designer for the ones I was working with.",
            "It wasn’t about acquiring a technical skill. It was about refusing to stay on my side of a divide I could have just as easily defended from a distance. Slowly, the developers who’d been wary of me started coming to me with questions instead — asking what I thought before they built something, not after. That was when I understood trust had actually been built, not assumed.",
          ],
        },
        {
          label: "What I Took With Me",
          paragraphs: [
            "I didn’t arrive and save anything. I arrived, was told what really mattered was function, and I spent the time it took to understand why someone would believe that before I asked them to believe something else.",
          ],
        },
      ],
      conclusion:
        "I believe great products are built when people understand each other before they build together.",
    },
  },
  fr: {
    hero: {
      eyebrow: "Design System · Service public fédéral Affaires étrangères",
      title: "Un Design System public, accessible et évolutif",
      summary:
        "Conception d’un Design System modulaire, accessible et évolutif pour le Service public fédéral belge Affaires étrangères.",
      meta: [
        { label: "Rôle", value: "Product Designer" },
        { label: "Période", value: "2023 — Aujourd’hui" },
        { label: "Équipe", value: "4–10+ développeurs" },
        { label: "Outils", value: "Figma · Angular Material · Zeroheight" },
      ],
      alt: "Écran d’authentification du portail citoyen du SPF, avec l’architecture gouvernementale en arrière-plan et le parcours de connexion comme élément central.",
    },
    overview: {
      kicker: "Vue d’ensemble du projet",
      points: [
        {
          label: "Contexte",
          statement:
            "Le Service public fédéral belge Affaires étrangères exploite plusieurs applications SaaS — Travel Web, Visa on Web, Visanet — chacune construite par sa propre équipe, sans méthodologie UX partagée et sans implication préalable d’un Product Designer.",
        },
        {
          label: "Mission",
          statement:
            "Standardiser les applications et construire une identité visuelle ancrée dans la charte graphique existante du SPF — une proposition formulée tôt, avant même qu’elle ne soit demandée.",
        },
        {
          label: "Responsabilités",
          statement:
            "Pas de Product Owner. Pas d’UX Lead. Toutes les décisions UX et UI m’appartenaient — non l’architecture applicative, mais la hiérarchie visuelle de l’information elle-même.",
        },
        {
          label: "Environnement & contraintes publiques",
          statement:
            "Un service public fédéral où l’accessibilité et la gouvernance étaient des exigences permanentes, et où les composants fondamentaux devaient provenir d’Angular Material plutôt que d’une page blanche.",
        },
      ],
    },
    challenge: {
      kicker: "Le défi",
      introduction:
        "Une personne passant d’une application à l’autre pouvait raisonnablement penser que chacune avait été conçue par une entreprise différente. Rien ne laissait comprendre que le même service public se trouvait derrière les quatre.",
      sections: [
        {
          label: "Quatre applications conçues comme des étrangères",
          paragraphs: [
            "Travel Web, Visa on Web, Visanet et les autres applications du Service public fédéral belge Affaires étrangères avaient chacune été conçues selon les habitudes de leur équipe et leurs propres besoins métier. Aucun Product Designer n’avait jamais travaillé avec elles. Il n’existait ni méthodologie UX partagée, ni Design System, ni cohérence visuelle entre des applications qu’une même personne pouvait utiliser au cours de la même semaine.",
          ],
        },
        {
          label: "Le coût que personne ne mesurait",
          paragraphs: [
            "Les développeurs perdaient un temps réel à recréer les mêmes décisions UI projet après projet : les mêmes boutons et les mêmes patterns de formulaires, réinventés de zéro à chaque fois puisque rien n’existait pour être réutilisé. L’accessibilité n’avait jamais été une priorité de design ; le seuil attendu était simplement « fonctionnel ».",
          ],
        },
      ],
      conclusion:
        "Voilà le véritable brief, une fois formulé clairement : non une fonctionnalité supplémentaire, mais un langage visuel partagé que quatre équipes distinctes pourraient cesser de réinventer.",
    },
    research: {
      kicker: "Recherche & UX",
      introduction:
        "Un Design System que personne n’a demandé doit malgré tout gagner son droit d’exister : auprès des personnes qui l’utiliseront et face à ce qui peut réellement être livré.",
      sections: [
        {
          label: "Convaincre avant de concevoir",
          paragraphs: [
            "J’ai moi-même proposé le Design System très tôt ; il ne figurait pas dans le brief initial. Avant de concevoir quoi que ce soit, j’ai dû expliquer ce qu’était réellement un Design System. J’ai animé des ateliers pour les équipes métier et les développeurs, en présentant directement les bénéfices : du temps gagné, une cohérence renforcée et un véritable plan pour y parvenir, pas seulement les raisons de le faire.",
          ],
        },
        {
          label: "Le sur-mesure intégral confronté à la réalité",
          paragraphs: [
            "Le premier projet était un Design System entièrement sur mesure. Les contraintes de temps et les échanges approfondis avec les développeurs ont rendu cette option irréaliste. La direction a donc évolué : les composants fondamentaux proviendraient d’Angular Material et je construirais des composants sur mesure là où l’identité du SPF devait réellement s’exprimer — le header, la navigation latérale et le footer. Je n’étais pas architecte applicative ; des architectes occupaient déjà ce rôle. Ma responsabilité portait sur la hiérarchie visuelle de l’information.",
            "Ce changement n’était pas un recul de l’ambition, mais sa réorientation. Abandonner le « tout sur mesure partout » au profit du « sur mesure exactement là où il compte » permettait au système d’être réellement livré tout en portant l’identité du SPF aux endroits les plus visibles.",
          ],
        },
      ],
      conclusion:
        "La suite de cette présentation du projet montre ce que cette décision a produit : une fondation partagée partout et l’identité propre du SPF exactement là où elle devait apparaître.",
    },
    reflection: {
      kicker: "Réflexion",
      introduction:
        "Ce projet ne m’a pas appris une compétence technique. Il m’a appris qu’un Design System est quelque chose dont on gagne le droit de construire avec une équipe, pas quelque chose qu’on lui remet avant de partir.",
      sections: [
        {
          label: "Choisir de ne pas défendre à distance",
          paragraphs: [
            "Un développeur m’a dit directement : « Nous construisons des applications fonctionnelles. C’est ce qui compte vraiment. » Je n’ai pas essayé de le convaincre par l’argumentation. Je suis allée comprendre le monde dont venait cette conviction : j’ai participé à la Piscine de l’École 42 à Bruxelles, non pour devenir développeuse, mais pour devenir une meilleure Product Designer pour celles et ceux avec qui je travaillais.",
            "Il ne s’agissait pas d’acquérir une compétence technique. Il s’agissait de refuser de rester de mon côté d’une séparation que j’aurais tout aussi facilement pu défendre à distance. Peu à peu, les développeurs qui se méfiaient de moi ont commencé à venir me poser des questions, à demander mon avis avant de construire quelque chose plutôt qu’après. C’est alors que j’ai compris que la confiance avait réellement été construite, et non supposée.",
          ],
        },
        {
          label: "Ce que j’en ai retenu",
          paragraphs: [
            "Je ne suis pas arrivée pour sauver quoi que ce soit. Je suis arrivée, on m’a dit que seule la fonctionnalité comptait vraiment, et j’ai pris le temps de comprendre pourquoi quelqu’un pouvait le croire avant de lui demander de croire autre chose.",
          ],
        },
      ],
      conclusion:
        "Je crois que les meilleurs produits naissent lorsque les personnes se comprennent avant de construire ensemble.",
    },
  },
}

export { spfPageContent }
export type { NarrativeChapter }
