import type { LocalizedContent } from "@/i18n"

type Chapter = { kicker: string; paragraphs: string[]; quote: string }

type WellPackPageContent = {
  hero: {
    eyebrow: string
    title: string
    summary: string
    detail: string
    meta: { label: string; value: string }[]
    alt: string
  }
  challenge: Chapter
  method: Chapter & { alt: string; caption: string }
  brief: Chapter
  brand: {
    kicker: string
    introduction: string
    paragraphs: string[]
    alts: string[]
    captions: string[]
    quote: string
  }
  proof: Chapter
  reflection: Chapter
}

const wellPackPageContent: LocalizedContent<WellPackPageContent> = {
  en: {
    hero: {
      eyebrow: "Marketing Design · WellPack",
      title: "WellPack",
      summary:
        "For two years, every landing page my team at WellPack shipped had already survived contact with evidence about the client’s actual market — not my best guess, and not the brief I’d been handed.",
      detail:
        "I designed the system that made sure nobody had to guess: a repeatable research method that turned client requests into evidence-based landing-page briefs.",
      meta: [
        { label: "Role", value: "UX Researcher" },
        { label: "Timeline", value: "2021 – 2023" },
        {
          label: "Stakeholders",
          value: "CEO · Co-founder · Marketing · Sales · Key Accounts",
        },
        { label: "Focus", value: "UX Research · Personas · Market Analysis" },
      ],
      alt: "WellPack's completed website, showing the brand identity applied to a real digital product experience.",
    },
    challenge: {
      kicker: "The Challenge",
      paragraphs: [
        "WellPack helps other businesses find local customers through SMS and RCS marketing — geo-targeted campaigns, real-time audience data, a platform called WeData that already did its job well. The product was never the problem. The landing pages built around it were: some had gone quiet, visually, the way anything does when nobody’s had a reason to look at it twice. There was no fire to put out. Just a steady, ordinary need to keep the Marketing team’s work from drifting.",
        "What made that drift possible wasn’t a lack of effort. It was a lack of memory. Each client brief arrived complete, ready to hand to design — but nothing in that brief had been tested against an actual understanding of who the client’s customers were. So each page started from the same blank page the last one had.",
      ],
      quote:
        "Not because anyone on the team was careless. Because nobody had ever built the thing that would have stopped it from happening again.",
    },
    method: {
      kicker: "The Method",
      paragraphs: [
        "The biggest thing I built at WellPack was never a landing page. It was a method — reusable templates for personas, for market analysis, for the kind of “portrait chinois” exercise that sounds like a game until you notice what it actually surfaces about a brand. Internal discovery documents that asked the same rigorous questions whether the client meeting had gone long or the week had gone short.",
        "That distinction matters more than it sounds like it should. Conducting good research for one client is a skill. Building a system that guarantees every client gets that same rigor, regardless of who’s doing the work or how much time is left in the week, is a different thing entirely — closer to infrastructure than craft. I didn’t just study each client’s market. I built the mechanism that turned “what does this client need” into an evidence-based design brief, the same way, every time. That mechanism outlasted any single landing page. It was still running after I’d moved on to the next client.",
      ],
      alt: "A real 'portrait chinois' exercise slide — WellPack described through a lion, a black panther and a herd of elephants, the same projective-brand technique the paragraph above names, shown here as it was actually built.",
      caption:
        "A real portrait chinois exercise, applied here to WellPack’s own brand — the same technique, not an illustration of it.",
      quote:
        "Conducting good research for one client is a skill. Building a system that guarantees every client gets that same rigor is a different thing entirely.",
    },
    brief: {
      kicker: "From Method to Brief",
      paragraphs: [
        "My job was never to hand over a finished interface. What the method surfaced — the client’s market, their actual customers, what mattered to the people who’d eventually land on that page — I turned into research findings, a set of UX recommendations, and an art direction proposal. Then I handed all of it to our UI Designer to build.",
        "I owned the thinking behind every brief. I didn’t own the final pixels. That line sounds small written down, but it changed how the work actually moved: the UI Designer could commit to a direction immediately, because that direction had already survived scrutiny before it reached them. Neither of us was guessing alongside the other. And before any of it reached a client, it was tested — not as a formality tacked onto the end of the process, but as the same discipline that started the brief, still holding at the finish.",
      ],
      quote:
        "I owned the thinking behind every brief. I didn’t own the final pixels.",
    },
    brand: {
      kicker: "The Brand Itself",
      introduction:
        "The research methodology wasn’t the only system this role asked me to build. WellPack’s own brand needed the same evidence-first treatment its clients’ briefs did.",
      paragraphs: [
        "Before any of it got redesigned, it had to be diagnosed honestly. An internal audit named the problem plainly: positioning that didn’t match the industry, an image read as dated rather than expert, a brand that hadn’t decided what it wanted to be mistaken for. The answer wasn’t a mood board. It was three words — premium, épurée, expert — and everything that followed had to answer to them.",
        "That positioning became a full identity: a logo with defined light and dark variants and explicit rules for what not to do with it, a palette anchored on a single orange rather than a gradient of good intentions, and a graphic language — a repeated chevron — pulled directly from the K in the wordmark instead of invented separately from it.",
        "None of it stayed in a guideline document. The same system carried through to WellPack’s own website — the identity doing real work on a real, working page rather than sitting in a specimen sheet nobody consumed.",
      ],
      alts: [
        "A real brand-positioning slide — 'Image de marque à définir en 3 mots clés' — landing on three keywords: Premium, Épurée, Expert.",
        "The WellPack logo system — three light-background variants and two dark-background variants of the wordmark, each keeping the same orange speech-bubble W.",
        "The WellPack homepage built on the new identity — crest-style orange wordmark in the header, the same orange accent on buttons and highlights, service cards, platform preview, testimonials and a dark footer, all in one continuous page.",
      ],
      captions: [
        "Three words, not a mood board — the brief the identity had to answer to.",
        "Light and dark variants, not one logo asked to work everywhere.",
        "The identity, doing real work on a real page — not a guideline PDF nobody opened again.",
      ],
      quote:
        "The client was WellPack itself this time. The discipline — diagnose before you design — didn’t change because of that.",
    },
    proof: {
      kicker: "Proof Without a Metric",
      paragraphs: [
        "I don’t have a business metric to point to here, and I’m not going to invent one. That data belonged to Customer Administration, and it never reached Marketing while I was there. I could soften that, or I could just say it plainly: I don’t have the number.",
        "What I have instead is this. I worked in this role for around two years, collaborating directly with the CEO, the Co-founder, the Marketing Manager, our Sales team, and Key Account Managers, the entire way through. Nobody keeps bringing the same person back to the same table for two years because a methodology looked good on paper once. That’s not a number. It’s still evidence — just a different kind than a dashboard gives you.",
      ],
      quote:
        "That’s not a number. It’s still evidence — just a different kind than a dashboard gives you.",
    },
    reflection: {
      kicker: "Reflection",
      paragraphs: [
        "WellPack taught me something I still carry into every project since: research only creates value when it actually changes a decision. Understanding a client’s audience was never the deliverable. The design brief was — and the brief was only ever as good as the evidence underneath it.",
        "My role wasn’t to produce research as an artifact people admired and moved past. It was to make sure every creative decision that followed started from evidence instead of assumption. That’s the discipline WellPack actually taught me — not something I already believed walking in, but a working practice I built because the system I’d created demanded it of me, every time I used it.",
      ],
      quote:
        "My role wasn’t to produce research as an artifact people admired and moved past. It was to make sure every creative decision that followed started from evidence instead of assumption.",
    },
  },
  fr: {
    hero: {
      eyebrow: "Marketing Design · WellPack",
      title: "WellPack",
      summary:
        "Pendant deux ans, chaque landing page livrée par mon équipe chez WellPack avait déjà été confrontée à des données sur le marché réel du client — pas à ma meilleure intuition, ni au brief que l’on m’avait remis.",
      detail:
        "J’ai conçu le système qui évitait à chacun de devoir deviner : une méthode de recherche reproductible transformant les demandes clients en briefs de landing pages fondés sur des données.",
      meta: [
        { label: "Rôle", value: "UX Researcher" },
        { label: "Période", value: "2021 – 2023" },
        {
          label: "Parties prenantes",
          value: "CEO · Co-fondateur · Marketing · Ventes · Grands comptes",
        },
        {
          label: "Priorités",
          value: "UX Research · Personas · Analyse de marché",
        },
      ],
      alt: "Site final de WellPack montrant l’identité de marque appliquée à une expérience produit numérique réelle.",
    },
    challenge: {
      kicker: "Le défi",
      paragraphs: [
        "WellPack aide d’autres entreprises à trouver des clients locaux grâce au marketing par SMS et RCS : campagnes géociblées, données d’audience en temps réel et une plateforme appelée WeData qui remplissait déjà bien sa mission. Le produit n’a jamais été le problème. Les landing pages construites autour de lui l’étaient : certaines s’étaient visuellement éteintes, comme tout ce que personne n’a de raison de regarder une deuxième fois. Il n’y avait pas d’incendie à éteindre. Seulement un besoin constant et ordinaire d’empêcher le travail de l’équipe Marketing de dériver.",
        "Ce qui rendait cette dérive possible n’était pas un manque d’effort. C’était un manque de mémoire. Chaque brief client arrivait complet, prêt à être transmis au design — mais rien dans ce brief n’avait été confronté à une compréhension réelle des clients du client. Chaque page repartait donc de la même page blanche que la précédente.",
      ],
      quote:
        "Non pas parce qu’un membre de l’équipe manquait de rigueur. Mais parce que personne n’avait encore construit ce qui aurait empêché que cela se reproduise.",
    },
    method: {
      kicker: "La méthode",
      paragraphs: [
        "La réalisation la plus importante que j’ai construite chez WellPack n’a jamais été une landing page. C’était une méthode : des modèles réutilisables pour les personas, l’analyse de marché et ce type d’exercice de « portrait chinois » qui ressemble à un jeu jusqu’à ce que l’on voie ce qu’il révèle réellement d’une marque. Des documents de découverte internes qui posaient les mêmes questions rigoureuses, que la réunion client se soit prolongée ou que la semaine ait été trop courte.",
        "Cette distinction compte davantage qu’il n’y paraît. Mener une bonne recherche pour un client est une compétence. Construire un système garantissant la même rigueur à chaque client, quelle que soit la personne qui mène le travail ou le temps restant dans la semaine, est tout autre chose — plus proche d’une infrastructure que d’un savoir-faire isolé. Je n’ai pas seulement étudié le marché de chaque client. J’ai construit le mécanisme qui transformait « de quoi ce client a-t-il besoin ? » en un brief de design fondé sur des données, de la même manière, à chaque fois. Ce mécanisme a survécu à chaque landing page. Il fonctionnait encore lorsque j’étais déjà passée au client suivant.",
      ],
      alt: "Une véritable planche d’exercice de portrait chinois décrivant WellPack à travers un lion, une panthère noire et un troupeau d’éléphants, telle qu’elle a réellement été conçue.",
      caption:
        "Un véritable exercice de portrait chinois, appliqué ici à la marque WellPack — la méthode elle-même, pas une illustration de celle-ci.",
      quote:
        "Mener une bonne recherche pour un client est une compétence. Construire un système garantissant la même rigueur à chaque client est tout autre chose.",
    },
    brief: {
      kicker: "De la méthode au brief",
      paragraphs: [
        "Mon travail n’a jamais consisté à livrer une interface terminée. Ce que la méthode faisait émerger — le marché du client, ses véritables clients et ce qui comptait pour les personnes qui arriveraient finalement sur cette page — je le transformais en résultats de recherche, en recommandations UX et en proposition de direction artistique. Je transmettais ensuite l’ensemble à notre UI Designer pour la réalisation.",
        "J’étais responsable de la réflexion derrière chaque brief. Pas des pixels finaux. Cette distinction paraît minime à l’écrit, mais elle changeait réellement la façon dont le travail avançait : l’UI Designer pouvait s’engager immédiatement dans une direction, car celle-ci avait déjà résisté à l’examen avant de lui parvenir. Aucun de nous ne devinait à côté de l’autre. Et avant que quoi que ce soit n’arrive chez un client, le résultat était testé — non comme une formalité ajoutée à la fin du processus, mais comme la même discipline qui avait initié le brief et tenait toujours jusqu’à l’arrivée.",
      ],
      quote:
        "J’étais responsable de la réflexion derrière chaque brief. Pas des pixels finaux.",
    },
    brand: {
      kicker: "La marque elle-même",
      introduction:
        "La méthodologie de recherche n’était pas le seul système que ce rôle m’a demandé de construire. La marque WellPack elle-même avait besoin du même traitement fondé sur les données que les briefs de ses clients.",
      paragraphs: [
        "Avant toute refonte, il fallait établir un diagnostic honnête. Un audit interne a nommé clairement le problème : un positionnement décalé par rapport au secteur, une image perçue comme datée plutôt qu’experte, une marque qui n’avait pas décidé ce à quoi elle voulait être associée. La réponse n’était pas un moodboard. C’étaient trois mots — premium, épurée, experte — auxquels tout ce qui suivait devait répondre.",
        "Ce positionnement est devenu une identité complète : un logo avec des variantes claires et sombres définies et des règles explicites sur les usages interdits, une palette ancrée dans un orange unique plutôt que dans un dégradé de bonnes intentions, et un langage graphique — un chevron répété — directement extrait du K du logotype plutôt qu’inventé séparément.",
        "Rien de tout cela n’est resté dans un guide. Le même système s’est prolongé dans le site de WellPack : l’identité travaillait sur une page réelle et fonctionnelle, au lieu de rester dans une planche de spécimens que personne ne consultait.",
      ],
      alts: [
        "Une véritable planche de positionnement de marque intitulée « Image de marque à définir en 3 mots clés », aboutissant à Premium, Épurée et Expert.",
        "Le système de logos WellPack : trois variantes sur fond clair et deux sur fond sombre, conservant toutes le W orange en forme de bulle.",
        "La page d’accueil WellPack construite avec la nouvelle identité : logotype orange dans le header, accent orange sur les boutons et éléments clés, cartes de services, aperçu de la plateforme, témoignages et footer sombre.",
      ],
      captions: [
        "Trois mots, pas un moodboard — le brief auquel l’identité devait répondre.",
        "Des variantes claires et sombres, plutôt qu’un seul logo censé fonctionner partout.",
        "L’identité au travail sur une vraie page — pas dans un guide PDF que personne ne rouvrirait.",
      ],
      quote:
        "Cette fois, le client était WellPack lui-même. La discipline — diagnostiquer avant de concevoir — n’a pas changé pour autant.",
    },
    proof: {
      kicker: "Une preuve sans métrique",
      paragraphs: [
        "Je n’ai pas de métrique business à présenter ici et je ne vais pas en inventer une. Ces données appartenaient à l’Administration des ventes et ne sont jamais parvenues au Marketing pendant ma présence. Je pourrais atténuer ce constat ou le dire clairement : je n’ai pas ce chiffre.",
        "Voici ce que j’ai à la place. J’ai exercé ce rôle pendant environ deux ans, en collaboration directe avec le CEO, le co-fondateur, la Marketing Manager, notre équipe commerciale et les Key Account Managers, tout au long du parcours. Personne ne continue de convier la même personne à la même table pendant deux ans simplement parce qu’une méthodologie a semblé bonne une fois sur le papier. Ce n’est pas un chiffre. Cela reste une preuve — simplement différente de celle fournie par un dashboard.",
      ],
      quote:
        "Ce n’est pas un chiffre. Cela reste une preuve — simplement différente de celle fournie par un dashboard.",
    },
    reflection: {
      kicker: "Réflexion",
      paragraphs: [
        "WellPack m’a appris quelque chose que j’emporte depuis dans chaque projet : la recherche ne crée de valeur que lorsqu’elle change réellement une décision. Comprendre l’audience d’un client n’a jamais été le livrable. Le brief de design l’était — et ce brief ne valait que par les preuves sur lesquelles il reposait.",
        "Mon rôle n’était pas de produire une recherche que les gens admiraient avant de passer à autre chose. Il consistait à garantir que chaque décision créative suivante parte de données plutôt que d’hypothèses. Voilà la discipline que WellPack m’a réellement apprise — non une conviction que j’avais en arrivant, mais une pratique que j’ai construite parce que le système que j’avais créé l’exigeait de moi chaque fois que je l’utilisais.",
      ],
      quote:
        "Mon rôle n’était pas de produire une recherche que les gens admiraient avant de passer à autre chose. Il consistait à garantir que chaque décision créative suivante parte de données plutôt que d’hypothèses.",
    },
  },
}

export { wellPackPageContent }
