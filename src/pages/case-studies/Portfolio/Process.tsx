import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import { formatNumeral } from "@/lib/numerals"
import { REVEAL } from "@/components/ui/case-study-capture"
import { fadeUp, staggerContainer } from "@/lib/motion"
import { portfolioPageContent } from "@/content/case-studies/portfolio-page"
import { getLocalizedContent, useLanguage } from "@/i18n"

/**
 * Portfolio case study — Chapter 4, Process. A numbered sequence that
 * reads left-to-right like the site's other numbered lists (Design
 * Principles, The Process on the homepage), but the last connector
 * points back to the first step instead of ending — the loop is the
 * point: this wasn't a single linear pass through six stages, it was
 * several passes through the same six.
 */
function Process() {
  const { language } = useLanguage()
  const content = getLocalizedContent(portfolioPageContent, language).process
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="portfolio-process">
      <Container size="content">
        <SectionKicker>{content.kicker}</SectionKicker>

        <motion.p
          {...(shouldReduceMotion ? { initial: false } : REVEAL())}
          className="mt-8 max-w-2xl text-xl leading-snug font-medium text-foreground md:text-2xl"
        >
          {content.introduction}
        </motion.p>

        <motion.div
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={staggerContainer}
          className="mt-16 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-6"
        >
          {content.steps.map((step, index) => (
            <motion.div key={step.label} variants={fadeUp} className="relative">
              <p className="font-mono text-2xs text-muted-foreground">
                {formatNumeral(index)}
              </p>
              <p className="mt-2 text-lg font-bold text-foreground">
                {step.label}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.statement}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          {...(shouldReduceMotion ? { initial: false } : REVEAL(0.1))}
          className="mt-12 flex items-center gap-3 border-t border-border pt-6"
        >
          <span aria-hidden="true" className="font-mono text-lg text-brand">
            ↻
          </span>
          <p className="font-mono text-2xs tracking-widest text-muted-foreground uppercase">
            {content.loop}
          </p>
        </motion.div>
      </Container>
    </Section>
  )
}

export { Process }
