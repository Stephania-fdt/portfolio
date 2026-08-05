import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import { REVEAL, SubsectionText } from "@/components/ui/case-study-capture"

/**
 * RC1. Replaces the Sprint 18.1 "awaiting assets" placeholder with real
 * narrative — no image folder for this section, matching Overview and
 * Reflection: `challenge/` has no real exports (confirmed against the
 * filesystem, README only), and Sprint 18's own manifest comment already
 * treats text-only sections as a normal, intentional pattern on this
 * site, not a gap.
 *
 * Every claim here is a trimmed, faithful condensation of "The actual
 * problem" in `content/case-studies/spf.ts` — no new claim introduced.
 * The opening context sentence deliberately doesn't repeat Overview's
 * "Context" point verbatim; it's the same fact, kept brief, so this
 * chapter can spend its length on what Overview didn't have room for.
 */
function Challenge() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="spf-challenge">
      <Container size="content">
        <SectionKicker>The Challenge</SectionKicker>

        <motion.p
          {...(shouldReduceMotion ? { initial: false } : REVEAL())}
          className="mt-8 max-w-2xl text-xl leading-snug font-medium text-foreground md:text-2xl"
        >
          A citizen moving between the applications could reasonably assume each
          one had been built by a different company. Nothing about them said the
          same government was behind all four.
        </motion.p>

        <div className="mt-24">
          <p className="font-mono text-2xs tracking-widest text-brand uppercase">
            Four Applications, Built Like Strangers
          </p>
          <SubsectionText className="mt-4 max-w-2xl">
            <p>
              Travel Web, Visa on Web, Visanet and the other applications the
              Belgian Federal Public Service Foreign Affairs runs had each been
              designed according to its own team&rsquo;s habits and its own
              business needs. No Product Designer had ever worked alongside any
              of them. There was no shared UX methodology, no design system, and
              no visual consistency between applications a single citizen might
              use in the same week.
            </p>
          </SubsectionText>
        </div>

        <div className="mt-24">
          <p className="font-mono text-2xs tracking-widest text-brand uppercase">
            The Cost Nobody Was Tracking
          </p>
          <SubsectionText className="mt-4 max-w-2xl">
            <p>
              Developers were losing real time recreating the same UI decisions
              project after project — the same buttons, the same form patterns,
              reinvented from scratch every time because nothing existed to
              reuse. Accessibility had never been a design priority; the bar had
              simply been &ldquo;functional.&rdquo;
            </p>
          </SubsectionText>
        </div>

        <motion.div
          {...(shouldReduceMotion ? { initial: false } : REVEAL())}
          className="mt-24 max-w-2xl"
        >
          <p className="text-xl leading-snug font-medium text-foreground md:text-2xl">
            That was the actual brief, once it was named plainly — not another
            feature, but a shared visual language four separate teams could stop
            reinventing.
          </p>
        </motion.div>
      </Container>
    </Section>
  )
}

export { Challenge }
