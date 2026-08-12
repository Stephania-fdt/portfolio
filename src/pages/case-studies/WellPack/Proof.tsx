import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import { REVEAL, SubsectionText } from "@/components/ui/case-study-capture"

/**
 * WellPack — Chapter 5, Proof Without a Metric. Same pattern as the
 * chapters before it. This is the chapter the Editorial Blueprint
 * flagged as the manuscript's strongest passage (self-review Q1/Q5): the
 * refusal to invent a business metric, replaced with a real argument for
 * what should count as evidence instead. No visual is expected or
 * needed here — the argument is the evidence.
 *
 * Every sentence traces to "What this proved, without a metric" in
 * `content/case-studies/wellpack.ts`.
 */
function Proof() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="wellpack-proof">
      <Container size="content">
        <SectionKicker>Proof Without a Metric</SectionKicker>

        <SubsectionText className="mt-8 max-w-2xl text-lg">
          <p>
            I don&rsquo;t have a business metric to point to here, and I&rsquo;m
            not going to invent one. That data belonged to Customer
            Administration, and it never reached Marketing while I was there. I
            could soften that, or I could just say it plainly: I don&rsquo;t
            have the number.
          </p>
          <p>
            What I have instead is this. I worked in this role for around two
            years, collaborating directly with the CEO, the Co-founder, the
            Marketing Manager, our Sales team, and Key Account Managers, the
            entire way through. Nobody keeps bringing the same person back to
            the same table for two years because a methodology looked good on
            paper once. That&rsquo;s not a number. It&rsquo;s still evidence —
            just a different kind than a dashboard gives you.
          </p>
        </SubsectionText>

        <motion.p
          {...(shouldReduceMotion ? { initial: false } : REVEAL())}
          className="mt-16 max-w-2xl text-xl leading-snug font-medium text-foreground italic md:text-2xl"
        >
          That&rsquo;s not a number. It&rsquo;s still evidence — just a
          different kind than a dashboard gives you.
        </motion.p>
      </Container>
    </Section>
  )
}

export { Proof }
