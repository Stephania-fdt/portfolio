import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import { REVEAL, SubsectionText } from "@/components/ui/case-study-capture"
import { CaseStudyDisclosure } from "@/components/ui/case-study-disclosure"
import { formatNumeral } from "@/lib/numerals"
import { portfolioPageContent } from "@/content/case-studies/portfolio-page"
import { portfolioDetails } from "@/content/case-studies/portfolio-details"
import { getLocalizedContent, useLanguage } from "@/i18n"

/**
 * Portfolio case study — Chapter 5, Designing & Building. Replaces two
 * former parallel chapters (AI-Assisted Workflow, Front-end
 * Implementation) with one: a design → code chain where AI is named as
 * one step, not the subject. The five-step framework, the tool
 * relationships and everything that used to be its own Testing &
 * Validation chapter now live behind "How it was built" — the deep dive
 * a technical reader opens, not the thing every reader has to scroll
 * past.
 */
function DesigningAndBuilding() {
  const { language } = useLanguage()
  const content = getLocalizedContent(portfolioPageContent, language).building
  const details = getLocalizedContent(portfolioDetails, language)
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="portfolio-building">
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

        <div className="mt-16">
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

        <CaseStudyDisclosure summary={content.detailsSummary}>
          <div>
            <p className="font-mono text-2xs tracking-widest text-brand uppercase">
              {details.ai.subheading}
            </p>
            <div className="mt-6 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
              {details.ai.steps.map((step, index) => (
                <div key={step.label}>
                  <p className="font-mono text-2xs text-muted-foreground">
                    {formatNumeral(index)}
                  </p>
                  <p className="mt-2 text-base font-bold text-foreground">
                    {step.label}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.statement}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14">
            <p className="font-mono text-2xs tracking-widest text-brand uppercase">
              {details.frontend.subheading}
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {details.frontend.intro}
            </p>
            <dl className="mt-6 max-w-2xl divide-y divide-border border-y border-border">
              {details.frontend.relationships.map((item) => (
                <div
                  key={item.from}
                  className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-6"
                >
                  <dt className="font-mono text-sm font-medium text-foreground sm:w-52 sm:shrink-0">
                    {item.from}
                  </dt>
                  <dd className="flex items-baseline gap-3 text-sm text-muted-foreground">
                    <span aria-hidden="true" className="text-brand">
                      →
                    </span>
                    {item.to}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-14">
            <p className="font-mono text-2xs tracking-widest text-brand uppercase">
              {details.testing.subheading}
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {details.testing.introduction}
            </p>
            <div className="mt-6 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2">
              {details.testing.checks.map((check) => (
                <div key={check.label} className="bg-background p-6">
                  <p className="font-mono text-2xs tracking-widest text-muted-foreground uppercase">
                    {check.label}
                  </p>
                  <p className="mt-2 text-base font-medium text-foreground">
                    {check.value}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              <span className="font-mono text-2xs tracking-widest text-brand uppercase">
                {details.testing.infrastructureLabel}
                {" — "}
              </span>
              {details.testing.infrastructure}
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed font-medium text-foreground italic">
              {details.testing.conclusion}
            </p>
          </div>
        </CaseStudyDisclosure>
      </Container>
    </Section>
  )
}

export { DesigningAndBuilding }
