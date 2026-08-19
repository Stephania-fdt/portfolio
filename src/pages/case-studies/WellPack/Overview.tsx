import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import { fadeUp, staggerContainer } from "@/lib/motion"
import { wellPackPageContent } from "@/content/case-studies/wellpack-page"
import { getLocalizedContent, useLanguage } from "@/i18n"

/**
 * WellPack — Overview. The 45-second executive summary this case study
 * didn't have: problem, role, outcome, three short answers right after
 * the Hero. Same Problem/Role/Outcome pattern as Portfolio's and SPF's
 * own Overview chapters — not because the content matches theirs, but
 * because a reader who's already seen that pattern on this site
 * recognizes it instantly here too. Every sentence traces to what the
 * chapters after it already establish (Challenge, Method, Brief, Proof)
 * — no new claim, no metric invented for the outcome line.
 */
function Overview() {
  const { language } = useLanguage()
  const content = getLocalizedContent(wellPackPageContent, language).overview
  const shouldReduceMotion = useReducedMotion()

  const rows = [
    { label: content.problemLabel, statement: content.problem },
    { label: content.roleLabel, statement: content.role },
    { label: content.outcomeLabel, statement: content.outcome },
  ]

  return (
    <Section id="wellpack-overview">
      <Container size="content">
        <SectionKicker>{content.kicker}</SectionKicker>

        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={staggerContainer}
          className="mt-16 grid gap-x-12 gap-y-12 md:grid-cols-3"
        >
          {rows.map((row) => (
            <motion.div key={row.label} variants={fadeUp}>
              <p className="font-mono text-2xs tracking-widest text-brand uppercase">
                {row.label}
              </p>
              <p className="mt-4 text-lg leading-relaxed text-foreground">
                {row.statement}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}

export { Overview }
