import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import { REVEAL, SubsectionText } from "@/components/ui/case-study-capture"

/**
 * Portfolio case study — Chapter 2, The Challenge. Same structural
 * pattern as WellPack's Challenge.tsx: continuous prose, closing on one
 * designated pull-quote using the site's existing italic treatment —
 * reused, not invented, for the one chapter with no visual of its own.
 */
function Challenge() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="portfolio-challenge">
      <Container size="content">
        <SectionKicker>The Challenge</SectionKicker>

        <SubsectionText className="mt-8 max-w-2xl text-lg">
          <p>
            Most Product Designer portfolios are galleries — a grid of past
            projects, presented after the fact. That format proves you shipped
            things. It doesn&rsquo;t prove how you think, how you make
            trade-offs under real constraints, or how you actually work today,
            in a moment where &ldquo;how I work&rdquo; increasingly includes an
            AI-assisted workflow most portfolios don&rsquo;t mention at all.
          </p>
          <p>
            I needed something closer to a working demonstration than a gallery:
            a portfolio that communicated Product Design thinking, Design System
            expertise, accessibility, UX/UI craft, front-end understanding and
            an AI-assisted workflow — not as claims listed in a bio, but as the
            actual, inspectable structure of the site itself. It couldn&rsquo;t
            just describe that practice. It had to become an instance of it.
          </p>
        </SubsectionText>

        <motion.p
          {...(shouldReduceMotion ? { initial: false } : REVEAL())}
          className="mt-16 max-w-2xl text-xl leading-snug font-medium text-foreground italic md:text-2xl"
        >
          The portfolio itself became the product.
        </motion.p>
      </Container>
    </Section>
  )
}

export { Challenge }
