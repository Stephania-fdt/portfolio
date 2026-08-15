import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import { REVEAL, SubsectionText } from "@/components/ui/case-study-capture"
import { useLanguage } from "@/i18n"

const COPY = {
  en: {
    eyebrow: "The Challenge",
    paragraphs: [
      "The project began as a mainly visual portfolio, then became a structured professional platform, and finally a living, bilingual personal product built through an AI-assisted workflow.",
      "The challenge was to express my Product Designer identity, make six years of experience credible and legible, and demonstrate how I turn complex problems into simple, accessible and scalable experiences — through the product itself, not claims in a biography.",
    ],
    quote: "The portfolio itself became the product.",
  },
  fr: {
    eyebrow: "Le défi",
    paragraphs: [
      "Le projet a commencé comme un portfolio principalement visuel, avant de devenir une plateforme professionnelle structurée, puis un produit personnel vivant, bilingue et construit avec une approche assistée par l’IA.",
      "Le défi consistait à traduire mon identité de Product Designer, rendre six années d’expérience crédibles et lisibles, et démontrer ma capacité à transformer des problématiques complexes en expériences simples, accessibles et évolutives — à travers le produit lui-même.",
    ],
    quote: "Le portfolio lui-même est devenu le produit.",
  },
} as const

/**
 * Portfolio case study — Chapter 2, The Challenge. Same structural
 * pattern as WellPack's Challenge.tsx: continuous prose, closing on one
 * designated pull-quote using the site's existing italic treatment —
 * reused, not invented, for the one chapter with no visual of its own.
 */
function Challenge() {
  const { language } = useLanguage()
  const copy = COPY[language]
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="portfolio-challenge">
      <Container size="content">
        <SectionKicker>{copy.eyebrow}</SectionKicker>

        <SubsectionText className="mt-8 max-w-2xl text-lg">
          {copy.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </SubsectionText>

        <motion.p
          {...(shouldReduceMotion ? { initial: false } : REVEAL())}
          className="mt-16 max-w-2xl text-xl leading-snug font-medium text-foreground italic md:text-2xl"
        >
          {copy.quote}
        </motion.p>
      </Container>
    </Section>
  )
}

export { Challenge }
