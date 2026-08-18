import type { LocalizedContent } from "@/i18n"

type InterfacesContent = {
  kicker: string
  introduction: string
  authentication: { alts: string[]; captions: string[]; paragraph: string }
  portal: { label: string; paragraph: string; alt: string; caption: string }
  support: { label: string; paragraphs: string[]; alt: string; caption: string }
  conclusion: string
}

const spfInterfacesContent: LocalizedContent<InterfacesContent> = {
  en: {
    kicker: "Product Interfaces",
    introduction:
      "Every chapter until now proved a piece. This one proves the assembly — a citizen actually completing a real task, not a component sitting in a library waiting to be used.",
    authentication: {
      alts: [
        "The SPF authentication screen at desktop width — 'Please Authenticate,' with a digital-key option for Belgian citizens and a standard account option for non-Belgians, over a photograph of the ministry's own architecture.",
        "The same SPF authentication screen at mobile width, on an iPhone — identical crest, photograph and two-button choice, scaled to a single hand.",
      ],
      captions: [
        "The same choice, the same photograph, at desktop width.",
        "...and at mobile width. Not a smaller version — the same one.",
      ],
      paragraph:
        "The choice a citizen makes first — a Belgian digital key, or a standard account for anyone else — renders identically in intent at both ends of the scale: the same crest, the same warm architectural photograph, the same two buttons, whether it's a desktop monitor or a phone held in one hand.",
    },
    portal: {
      label: "The Portal, Assembled",
      paragraph:
        "Once inside, the same header and footer that were built as isolated components two chapters ago now carry an actual homepage — service cards, an FAQ accordion, a rotating set of articles — proving the system wasn't designed to look good in a component sheet. It was designed to hold a real page together.",
      alt: "The SPF citizen portal homepage — header with crest, a grid of service cards, an FAQ accordion, an article carousel, and the government footer, all built from the same components documented earlier in the case study.",
      caption:
        "The portal homepage — every piece of it already introduced, none of it new.",
    },
    support: {
      label: "Support, Not Buried in an Accordion",
      paragraphs: [
        "The homepage’s FAQ accordion is one entry point. A citizen who navigates there directly gets a dedicated page instead of a scroll-and-hope — real categories (Access; Legalisations & Apostilles; La Banque de données des Actes de l'État Civil), each with its own heading and illustration, not one flat list of questions standing in for all of them.",
        "Its header carries the same crest and photography treatment as everywhere else in the system — a citizen looking for help lands somewhere that still visibly belongs to the same platform, not a support page that forgot which system it was part of.",
      ],
      alt: "The SPF FAQ page, organized into real categories — Access, Legalisations & Apostilles, and La Banque de données des Actes de l'État Civil — each with its own heading and line illustration, under a header carrying the same crest as the rest of the platform.",
      caption: "A dedicated FAQ page, not just the homepage's accordion.",
    },
    conclusion:
      "The crest on the header, the warm photography, the same button component authenticating a citizen and then carrying them into a real page with a real question to answer — carried, unbroken, from the first screen to the last. That continuity is the actual argument for building a system instead of a set of pages: everything downstream inherits it for free.",
  },
  fr: {
    kicker: "Interfaces produit",
    introduction:
      "Chaque chapitre précédent prouvait une pièce du système. Celui-ci prouve leur assemblage : une personne accomplit réellement une tâche, plutôt qu’un composant qui attend dans une bibliothèque d’être utilisé.",
    authentication: {
      alts: [
        "Écran d’authentification du SPF sur ordinateur, avec l’instruction « Please Authenticate », une option de clé numérique pour les citoyens belges et un compte standard pour les autres, sur une photographie de l’architecture du ministère.",
        "Même écran d’authentification du SPF sur un iPhone, avec le même blason, la même photographie et les deux mêmes choix adaptés à une utilisation à une main.",
      ],
      captions: [
        "Le même choix et la même photographie sur ordinateur.",
        "…et sur mobile. Pas une version réduite : la même interface.",
      ],
      paragraph:
        "Le premier choix d’une personne — une clé numérique belge ou un compte standard pour les autres — conserve exactement la même intention aux deux extrémités de l’échelle : le même blason, la même photographie architecturale chaleureuse et les deux mêmes boutons, sur un écran d’ordinateur comme sur un téléphone tenu d’une main.",
    },
    portal: {
      label: "Le portail assemblé",
      paragraph:
        "Une fois connectés, le même header et le même footer construits comme composants isolés deux chapitres plus tôt portent désormais une véritable page d’accueil : cartes de services, accordéon de FAQ et carrousel d’articles. Le système n’a pas été conçu pour paraître réussi dans une planche de composants, mais pour maintenir une vraie page ensemble.",
      alt: "Page d’accueil du portail citoyen du SPF avec header et blason, grille de cartes de services, accordéon de FAQ, carrousel d’articles et footer gouvernemental, tous construits avec les composants documentés précédemment.",
      caption:
        "La page d’accueil du portail : chaque pièce a déjà été présentée, aucune n’est nouvelle.",
    },
    support: {
      label: "Une aide qui ne reste pas enfouie dans un accordéon",
      paragraphs: [
        "L’accordéon de FAQ de la page d’accueil constitue un point d’entrée. Une personne qui s’y rend directement obtient une page dédiée plutôt qu’une longue recherche par défilement : de véritables catégories — Accès ; Légalisations & Apostilles ; La Banque de données des Actes de l’État Civil — chacune avec son titre et son illustration, plutôt qu’une liste unique censée les représenter toutes.",
        "Son header reprend le même blason et le même traitement photographique que le reste du système. Une personne cherchant de l’aide arrive ainsi dans un espace qui appartient toujours visiblement à la même plateforme, et non sur une page de support ayant oublié le système dont elle fait partie.",
      ],
      alt: "Page FAQ du SPF organisée en catégories réelles — Accès, Légalisations & Apostilles et La Banque de données des Actes de l’État Civil — chacune avec son titre et son illustration, sous le même blason que le reste de la plateforme.",
      caption:
        "Une page FAQ dédiée, pas seulement l’accordéon de la page d’accueil.",
    },
    conclusion:
      "Le blason du header, la photographie chaleureuse et le même composant de bouton qui authentifie une personne avant de l’accompagner vers une véritable page et une véritable question restent continus du premier au dernier écran. Cette continuité constitue l’argument réel en faveur d’un système plutôt que d’une collection de pages : tout ce qui suit en hérite sans effort supplémentaire.",
  },
}

export { spfInterfacesContent }
