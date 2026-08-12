import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import { REVEAL, SubsectionText } from "@/components/ui/case-study-capture"

/**
 * WellPack — Chapter 6, Reflection. Closes the case study, matching
 * every other case study on this site's own convention of ending in
 * words only. Same pattern as the preceding chapters: manuscript
 * paragraphs continuous, closing on the chapter's designated key
 * sentence — the exact line the Editorial Manuscript's self-review
 * recommended as the case study's final line (Q7).
 *
 * Every sentence traces to "What I took from it" in
 * `content/case-studies/wellpack.ts`.
 */
function Reflection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="wellpack-reflection">
      <Container size="content">
        <SectionKicker>Reflection</SectionKicker>

        <SubsectionText className="mt-8 max-w-2xl text-lg">
          <p>
            WellPack taught me something I still carry into every project since:
            research only creates value when it actually changes a decision.
            Understanding a client&rsquo;s audience was never the deliverable.
            The design brief was — and the brief was only ever as good as the
            evidence underneath it.
          </p>
          <p>
            My role wasn&rsquo;t to produce research as an artifact people
            admired and moved past. It was to make sure every creative decision
            that followed started from evidence instead of assumption.
            That&rsquo;s the discipline WellPack actually taught me — not
            something I already believed walking in, but a working practice I
            built because the system I&rsquo;d created demanded it of me, every
            time I used it.
          </p>
        </SubsectionText>

        <motion.p
          {...(shouldReduceMotion ? { initial: false } : REVEAL())}
          className="mt-16 max-w-2xl text-xl leading-snug font-medium text-foreground italic md:text-2xl"
        >
          My role wasn&rsquo;t to produce research as an artifact people admired
          and moved past. It was to make sure every creative decision that
          followed started from evidence instead of assumption.
        </motion.p>
      </Container>
    </Section>
  )
}

export { Reflection }
