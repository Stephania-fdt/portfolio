import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import { REVEAL, SubsectionText } from "@/components/ui/case-study-capture"
import { formatNumeral } from "@/lib/numerals"
import { fadeUp, staggerContainer } from "@/lib/motion"
import { portfolioDetails } from "@/content/case-studies/portfolio-details"
import { getLocalizedContent, useLanguage } from "@/i18n"

/**
 * Portfolio case study — Chapter 8, AI-Assisted Workflow. The five-step
 * loop is presented as the actual framework used, then grounded in one
 * real, specific example (the Joga Aura project card) rather than a
 * hypothetical — direction, exploration, review, correction and
 * validation all really happened, in that order, on this repository.
 */
function AIWorkflow() {
  const { language } = useLanguage()
  const content = getLocalizedContent(portfolioDetails, language).ai
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="portfolio-ai-workflow">
      <Container size="content">
        <SectionKicker>{content.kicker}</SectionKicker>

        <motion.h3
          {...(shouldReduceMotion ? { initial: false } : REVEAL())}
          className="mt-8 max-w-2xl text-3xl leading-snug font-bold text-foreground md:text-4xl"
        >
          {content.title}
        </motion.h3>

        <SubsectionText className="mt-8 max-w-2xl text-lg">
          <p>{content.intro}</p>
        </SubsectionText>

        <motion.ol
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          variants={staggerContainer}
          className="mt-16 divide-y divide-border border-y border-border"
        >
          {content.steps.map((step, index) => (
            <motion.li
              key={step.label}
              variants={fadeUp}
              className="flex flex-col gap-2 py-8 sm:flex-row sm:items-baseline sm:gap-8"
            >
              <span className="font-mono text-sm text-muted-foreground sm:w-10 sm:shrink-0">
                {formatNumeral(index)}
              </span>
              <span className="text-lg font-bold text-foreground sm:w-56 sm:shrink-0">
                {step.label}
              </span>
              <span className="max-w-xl text-base leading-relaxed text-muted-foreground">
                {step.statement}
              </span>
            </motion.li>
          ))}
        </motion.ol>

        {/* One real, specific example — not a hypothetical. No fabricated AI visual is used. */}
        <div className="mt-24">
          <p className="font-mono text-2xs tracking-widest text-brand uppercase">
            {content.exampleLabel}
          </p>
          <SubsectionText className="mt-4 max-w-2xl">
            <p>{content.example}</p>
          </SubsectionText>

          <motion.div
            {...(shouldReduceMotion ? { initial: false } : REVEAL(0.1))}
            className="mt-8 max-w-2xl overflow-hidden border border-border bg-secondary/50 p-6"
          >
            <pre
              tabIndex={0}
              aria-label={content.codeLabel}
              className="overflow-x-auto font-mono text-xs leading-relaxed text-foreground focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand"
            >
              <code>{content.code}</code>
            </pre>
          </motion.div>
        </div>

        <motion.p
          {...(shouldReduceMotion ? { initial: false } : REVEAL(0.15))}
          className="mt-16 max-w-2xl text-xl leading-snug font-medium text-foreground italic md:text-2xl"
        >
          {content.conclusion}
        </motion.p>
      </Container>
    </Section>
  )
}

export { AIWorkflow }
