import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import { REVEAL } from "@/components/ui/case-study-capture"
import { useLanguage } from "@/i18n"

const COPY = {
  en: {
    eyebrow: "Outcome",
    statement:
      "The result is a clearer professional identity and a more credible presentation for Senior Product Designer opportunities: a bilingual portfolio that documents design decisions, demonstrates process, and rests on a reusable technical foundation that can continue to evolve for French and international audiences.",
  },
  fr: {
    eyebrow: "Résultats",
    statement:
      "Le résultat est une identité professionnelle plus claire et une présentation plus crédible pour des opportunités de Senior Product Designer : un portfolio bilingue qui documente les décisions, démontre le processus de conception et repose sur un socle technique réutilisable, capable d’évoluer pour une audience française et internationale.",
  },
} as const

/**
 * Portfolio case study — Chapter 13, Outcome. The exact closing statement
 * specified for this chapter — no quantitative results added, because
 * none exist to report.
 */
function Outcome() {
  const { language } = useLanguage()
  const copy = COPY[language]
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="portfolio-outcome">
      <Container size="content">
        <SectionKicker>{copy.eyebrow}</SectionKicker>

        <motion.p
          {...(shouldReduceMotion ? { initial: false } : REVEAL())}
          className="mt-8 max-w-2xl text-xl leading-snug font-medium text-foreground md:text-2xl"
        >
          {copy.statement}
        </motion.p>
      </Container>
    </Section>
  )
}

export { Outcome }
