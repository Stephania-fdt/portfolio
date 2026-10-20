import type { LocalizedContent } from "@/i18n"

/** Reflection keeps the page's one personal pull-quote — every other chapter folds its key line into prose instead. */
type Chapter = { kicker: string; paragraphs: string[]; quote?: string }

type WellPackPageContent = {
  hero: {
    eyebrow: string
    title: string
    summary: string
    detail: string
    meta: { label: string; value: string }[]
    alt: string
  }
  problem: {
    kicker: string
    paragraphs: string[]
  }
  decisions: {
    kicker: string
    intro: string
    methodBrief: {
      label: string
      paragraphs: string[]
      alt: string
      caption: string
    }
    brand: {
      label: string
      introduction: string
      paragraphs: string[]
      alts: string[]
      captions: string[]
    }
  }
  result: {
    kicker: string
    paragraphs: string[]
  }
  reflection: Chapter
}

/**
 * Editorial restructure (length + structure pass): four chapters instead
 * of seven — Problem & Contribution, Key Decisions (Method & Brief,
 * then Brand), Result, Reflection. Overview and Challenge merge (one
 * problem, told once); Method and Brief merge (one continuous decision,
 * not two); Proof folds into Result as a single sober line — the
 * "duration proves the method worked" argument stays cut, and the page
 * keeps exactly one personal pull-quote (Reflection) rather than pulling
 * the same key sentences out twice.
 */
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
    problem: {
      kicker: "Problem & Contribution",
      paragraphs: [
        "WellPack helps other businesses find local customers through SMS and RCS marketing. The product was never the problem — the landing pages were: each client brief arrived complete, but untested against who the client's customers actually were, so every page started from the same blank page the last one had.",
        "I built the research method itself — personas, market analysis, brand exercises — and turned its findings into UX recommendations and art direction. I owned the thinking behind every brief; a UI Designer owned the pixels.",
      ],
    },
    decisions: {
      kicker: "Key Decisions",
      intro:
        "One discipline, applied twice: diagnose before you design — first for client briefs, then for WellPack's own brand.",
      methodBrief: {
        label: "The Method, and the Brief It Produced",
        paragraphs: [
          "The biggest thing I built was never a landing page — it was a method: reusable templates for personas, market analysis, and a “Chinese portrait” exercise that surfaces what a brand actually is.",
          "What it found, I turned into research findings, UX recommendations and an art direction proposal, before handing all of it to our UI Designer to build. I owned the thinking behind every brief; I didn't own the final pixels — the UI Designer could commit to a direction immediately, because it had already survived scrutiny before it reached them.",
        ],
        alt: "A real 'Chinese portrait' exercise slide — WellPack described through a lion, a black panther and a herd of elephants, the same projective-brand technique the paragraph above names, shown here as it was actually built.",
        caption:
          "A real Chinese portrait exercise, applied here to WellPack's own brand — the same technique, not an illustration of it.",
      },
      brand: {
        label: "Applying It to the Brand Itself",
        introduction:
          "WellPack's own brand needed the same treatment its clients' briefs did — the client was WellPack itself this time, and the discipline didn't change.",
        paragraphs: [
          "An internal audit named the problem plainly: positioning that didn't match the industry, an image read as dated rather than expert. The answer was three words — premium, refined, expert — and everything that followed had to answer to them.",
          "That positioning became a full identity: a logo with light and dark variants, a palette anchored on a single orange, and a graphic language — a repeated chevron — pulled directly from the K in the wordmark.",
          "None of it stayed in a guideline document — the same system carried through to WellPack's own website, doing real work on a real page.",
        ],
        alts: [
          "A real brand-positioning slide defining the brand in three keywords: Premium, Refined, Expert.",
          "The WellPack logo system — three light-background variants and two dark-background variants of the wordmark, each keeping the same orange speech-bubble W.",
          "The WellPack homepage built on the new identity — crest-style orange wordmark in the header, the same orange accent on buttons and highlights, service cards, platform preview, testimonials and a dark footer, all in one continuous page.",
        ],
        captions: [
          "Three words, not a mood board — the brief the identity had to answer to.",
          "Light and dark variants, not one logo asked to work everywhere.",
          "The identity, doing real work on a real page.",
        ],
      },
    },
    result: {
      kicker: "Result",
      paragraphs: [
        "No business metric reached this role, and none is claimed here — that data belonged to Customer Administration and never reached Marketing. What shipped instead: a repeatable research method still running after I moved on to the next client, and a complete brand identity carried through to WellPack's own website, shown above.",
      ],
    },
    reflection: {
      kicker: "Reflection",
      paragraphs: [
        "WellPack taught me something I still carry into every project since: research only creates value when it actually changes a decision. Understanding a client's audience was never the deliverable. The design brief was — and the brief was only ever as good as the evidence underneath it.",
        "That wasn't a conviction I already believed walking in — it was a working practice I built because the system I'd created demanded it of me, every time I used it.",
      ],
      quote:
        "My role wasn't to produce research as an artifact people admired and moved past. It was to make sure every creative decision that followed started from evidence instead of assumption.",
    },
  },
  fr: {
    hero: {
      eyebrow: "Conception marketing · WellPack",
      title: "WellPack",
      summary:
        "Pendant deux ans, chaque page de destination livrée par mon équipe chez WellPack avait déjà été confrontée à des données sur le marché réel du client — pas à ma meilleure intuition, ni au cahier des charges que l’on m’avait remis.",
      detail:
        "J’ai conçu le système qui évitait à chacun de devoir deviner : une méthode de recherche reproductible transformant les demandes clients en cahiers des charges de pages de destination fondés sur des données.",
      meta: [
        { label: "Rôle", value: "UX Researcher" },
        { label: "Période", value: "2021 – 2023" },
        {
          label: "Parties prenantes",
          value: "PDG · Co-fondateur · Marketing · Ventes · Grands comptes",
        },
        {
          label: "Priorités",
          value: "UX Research · Personas · Analyse de marché",
        },
      ],
      alt: "Site final de WellPack montrant l’identité de marque appliquée à une expérience produit numérique réelle.",
    },
    problem: {
      kicker: "Problème & contribution",
      paragraphs: [
        "WellPack aide d'autres entreprises à trouver des clients locaux grâce au marketing par SMS et RCS. Le produit n'a jamais été le problème — les pages de destination l'étaient : chaque cahier des charges arrivait complet, mais jamais confronté à une compréhension réelle des clients du client, si bien que chaque page repartait de la même page blanche que la précédente.",
        "J'ai construit la méthode de recherche elle-même — personas, analyse de marché, exercices de marque — et transformé ses résultats en recommandations UX et en direction artistique. Je possédais la réflexion derrière chaque cahier des charges ; une designer UI possédait les pixels.",
      ],
    },
    decisions: {
      kicker: "Décisions clés",
      intro:
        "Une même discipline, appliquée deux fois : diagnostiquer avant de concevoir — d'abord pour les cahiers des charges clients, puis pour la marque WellPack elle-même.",
      methodBrief: {
        label: "La méthode, et le cahier des charges qu'elle a produit",
        paragraphs: [
          "La réalisation la plus importante que j'ai construite n'a jamais été une page de destination — c'était une méthode : des modèles réutilisables pour les personas, l'analyse de marché et un exercice de « portrait chinois » qui révèle ce qu'est réellement une marque.",
          "Ce qu'elle faisait émerger, je le transformais en résultats de recherche, recommandations UX et proposition de direction artistique, avant de transmettre l'ensemble à notre designer UI. J'étais responsable de la réflexion derrière chaque cahier des charges ; pas des pixels finaux — la designer UI pouvait s'engager immédiatement, car cette direction avait déjà résisté à l'examen avant de lui parvenir.",
        ],
        alt: "Une véritable planche d’exercice de portrait chinois décrivant WellPack à travers un lion, une panthère noire et un troupeau d’éléphants, telle qu’elle a réellement été conçue.",
        caption:
          "Un véritable exercice de portrait chinois, appliqué ici à la marque WellPack — la méthode elle-même, pas une illustration de celle-ci.",
      },
      brand: {
        label: "Appliquée à la marque elle-même",
        introduction:
          "La marque WellPack elle-même avait besoin du même traitement que les cahiers des charges de ses clients — cette fois, le client était WellPack, et la discipline n'a pas changé.",
        paragraphs: [
          "Un audit interne a nommé clairement le problème : un positionnement décalé par rapport au secteur, une image perçue comme datée plutôt qu'experte. La réponse tenait en trois mots — premium, épurée, experte — auxquels tout ce qui suivait devait répondre.",
          "Ce positionnement est devenu une identité complète : un logo avec des variantes claires et sombres, une palette ancrée dans un orange unique, et un langage graphique — un chevron répété — directement extrait du K du logotype.",
          "Rien de tout cela n'est resté dans un guide — le même système s'est prolongé dans le site de WellPack, au travail sur une vraie page.",
        ],
        alts: [
          "Une véritable planche de positionnement de marque intitulée « Image de marque à définir en 3 mots clés », aboutissant à Premium, Épurée et Expert.",
          "Le système de logos WellPack : trois variantes sur fond clair et deux sur fond sombre, conservant toutes le W orange en forme de bulle.",
          "La page d’accueil WellPack construite avec la nouvelle identité : logotype orange dans l’en-tête, accent orange sur les boutons et éléments clés, cartes de services, aperçu de la plateforme, témoignages et pied de page sombre.",
        ],
        captions: [
          "Trois mots, pas une planche d’ambiance — le cahier des charges auquel l’identité devait répondre.",
          "Des variantes claires et sombres, plutôt qu’un seul logo censé fonctionner partout.",
          "L’identité au travail sur une vraie page.",
        ],
      },
    },
    result: {
      kicker: "Résultat",
      paragraphs: [
        "Aucune métrique business n'a atteint ce rôle, et aucune n'est revendiquée ici — ces données appartenaient à l'Administration des ventes et ne sont jamais parvenues au marketing. Ce qui a été livré : une méthode de recherche reproductible, toujours en usage après mon passage au client suivant, et une identité de marque complète, prolongée jusqu'au site de WellPack, montrée ci-dessus.",
      ],
    },
    reflection: {
      kicker: "Réflexion",
      paragraphs: [
        "WellPack m’a appris quelque chose que j’emporte depuis dans chaque projet : la recherche ne crée de valeur que lorsqu’elle change réellement une décision. Comprendre l’audience d’un client n’a jamais été le livrable. Le cahier des charges de conception l’était — et ce cahier des charges ne valait que par les preuves sur lesquelles il reposait.",
        "Ce n’était pas une conviction que j’avais en arrivant, mais une pratique que j’ai construite parce que le système que j’avais créé l’exigeait de moi, à chaque fois que je l’utilisais.",
      ],
      quote:
        "Mon rôle n’était pas de produire une recherche que les gens admiraient avant de passer à autre chose. Il consistait à garantir que chaque décision créative suivante parte de preuves plutôt que d’hypothèses.",
    },
  },
}

export { wellPackPageContent }
