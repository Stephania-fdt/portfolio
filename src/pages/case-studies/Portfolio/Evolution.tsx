import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import { useLanguage } from "@/i18n"
import { fadeUp, staggerContainer } from "@/lib/motion"
import { formatNumeral } from "@/lib/numerals"

const COPY = {
  en: {
    eyebrow: "The Evolution",
    title: "From portfolio to personal product",
    intro:
      "The work evolved through six connected phases. Each one extended the same product rather than replacing what came before.",
    phases: [
      [
        "Foundations",
        "Positioning, art direction, palette, typography, the first architecture and the initial project selection.",
      ],
      [
        "Structuring the experience",
        "Clearer navigation and case-study hierarchy, dedicated About and Experience pages, a stronger header, mobile menu and contextual calls to action.",
      ],
      [
        "Enriching the case studies",
        "A shared editorial standard across SPF, Harmony, WellPack and Joga Aura, supported by real wireframes, moodboards, sitemaps, final interfaces and product links.",
      ],
      [
        "Building with AI",
        "AI-assisted visual exploration, React and TypeScript implementation, responsive refinement, code review and debugging — with human validation at every consequential decision.",
      ],
      [
        "Preparing for an international audience",
        "French and English content, a persistent language selector, adapted calls to action and stronger consistency across routes.",
      ],
      [
        "Continuous improvement",
        "Accessibility, contrast, responsive behavior, performance, Git and GitHub versioning, deployment readiness and domain integration.",
      ],
    ],
  },
  fr: {
    eyebrow: "L’évolution",
    title: "Du portfolio au produit personnel",
    intro:
      "Le projet a évolué à travers six phases liées. Chacune a enrichi le même produit sans remplacer ce qui existait déjà.",
    phases: [
      [
        "Fondations",
        "Positionnement, direction artistique, palette, typographie, première architecture et sélection initiale des projets.",
      ],
      [
        "Structurer l’expérience",
        "Navigation et hiérarchie des études de cas clarifiées, pages À propos et Expérience dédiées, header, menu mobile et CTA contextualisés.",
      ],
      [
        "Enrichir les études de cas",
        "Un standard éditorial commun pour SPF, Harmony, WellPack et Joga Aura, appuyé par de vrais wireframes, moodboards, sitemaps, interfaces finales et liens produit.",
      ],
      [
        "Construire avec l’IA",
        "Exploration visuelle, implémentation React et TypeScript, responsive, revue de code et résolution de problèmes assistés par IA, avec validation humaine de chaque décision importante.",
      ],
      [
        "S’adresser à une audience internationale",
        "Contenus français et anglais, sélecteur de langue persistant, CTA adaptés et cohérence renforcée entre les routes.",
      ],
      [
        "Amélioration continue",
        "Accessibilité, contrastes, responsive, performances, versionnage Git et GitHub, préparation du déploiement et connexion au nom de domaine.",
      ],
    ],
  },
} as const

function Evolution() {
  const { language } = useLanguage()
  const copy = COPY[language]
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="portfolio-evolution">
      <Container size="content">
        <SectionKicker>{copy.eyebrow}</SectionKicker>
        <h3 className="mt-8 max-w-3xl text-3xl leading-tight font-bold tracking-tight text-foreground md:text-4xl">
          {copy.title}
        </h3>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          {copy.intro}
        </p>

        <motion.ol
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={staggerContainer}
          className="relative mt-16 border-l border-border pl-8 md:ml-4 md:pl-12"
        >
          {copy.phases.map(([title, description], index) => (
            <motion.li
              key={title}
              variants={fadeUp}
              className="relative pb-14 last:pb-0"
            >
              <span className="absolute top-1 -left-[2.3rem] size-3 rounded-full border-2 border-brand bg-background md:-left-[3.3rem]" />
              <p className="font-mono text-2xs tracking-widest text-brand uppercase">
                Phase {formatNumeral(index)}
              </p>
              <h3 className="mt-2 text-xl font-bold text-foreground md:text-2xl">
                {title}
              </h3>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
                {description}
              </p>
            </motion.li>
          ))}
        </motion.ol>
      </Container>
    </Section>
  )
}

export { Evolution }
