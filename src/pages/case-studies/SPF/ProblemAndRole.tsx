import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { REVEAL } from "@/components/ui/case-study-capture"
import { DecenteredEllipses } from "@/pages/case-studies/SPF/illustrations"
import { spfPageContent } from "@/content/case-studies/spf-page"
import { getLocalizedContent, useLanguage } from "@/i18n"

/**
 * Magazine-editorial pass (SPF pilot): the former compact single-column
 * block becomes an asymmetric composition — a narrow numbered label
 * beside a real headline (compressed from the challenge paragraph's own
 * first sentence, not a new claim), then the challenge and contribution
 * as two short, named blocks instead of two anonymous paragraphs. Every
 * sentence is unchanged; only the framing around it is new.
 */
function ProblemAndRole() {
  const { language } = useLanguage()
  const content = getLocalizedContent(spfPageContent, language).problem
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="spf-problem" spacing="sm">
      <Container size="content">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-3">
            <div className="flex items-baseline gap-3 lg:flex-col lg:items-start lg:gap-2">
              <span className="font-mono text-sm text-brand tabular-nums">
                01
              </span>
              <h2 className="font-mono text-xs tracking-widest text-brand uppercase">
                {content.kicker}
              </h2>
            </div>
            <span
              aria-hidden="true"
              className="mt-4 hidden h-px w-12 bg-border lg:block"
            />
            <DecenteredEllipses className="mt-6 w-16 sm:w-20" />
          </div>

          <div className="lg:col-span-9">
            <motion.p
              {...(shouldReduceMotion ? { initial: false } : REVEAL())}
              className="max-w-3xl text-3xl leading-tight font-bold tracking-tight text-foreground md:text-4xl"
            >
              {content.headline}
            </motion.p>

            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <motion.div
                {...(shouldReduceMotion ? { initial: false } : REVEAL(0.08))}
              >
                <p className="font-mono text-2xs tracking-widest text-muted-foreground uppercase">
                  {content.challengeLabel}
                </p>
                <p className="mt-3 text-base leading-relaxed text-foreground">
                  {content.challenge}
                </p>
              </motion.div>
              <motion.div
                {...(shouldReduceMotion ? { initial: false } : REVEAL(0.16))}
              >
                <p className="font-mono text-2xs tracking-widest text-muted-foreground uppercase">
                  {content.contributionLabel}
                </p>
                <p className="mt-3 text-base leading-relaxed text-foreground">
                  {content.contribution}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export { ProblemAndRole }
