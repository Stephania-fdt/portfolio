import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import { REVEAL, SubsectionText } from "@/components/ui/case-study-capture"

/**
 * WellPack — Chapter 4, From Method to Brief. Same pattern as
 * Challenge.tsx / Method.tsx: manuscript paragraphs run continuous, no
 * invented sub-headings, closing on the chapter's designated key
 * sentence via the site's existing italic pull-quote convention.
 *
 * Unlike Chapter 2's key sentence (the last clause of its paragraph,
 * cleanly extractable), this chapter's key sentence — "I owned the
 * thinking behind every brief. I didn't own the final pixels." — opens
 * paragraph 2, and paragraph 2 explicitly refers back to it ("That line
 * sounds small written down..."). Removing it from the body would break
 * the paragraph's own logic, so it stays in place and the pull-quote
 * restates it — the same precedent Chapter 3's pull-quote already set,
 * not a new pattern.
 *
 * Every sentence traces to "From research to brief" and "Testing before
 * publishing" in `content/case-studies/wellpack.ts`.
 */
function Brief() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="wellpack-brief">
      <Container size="content">
        <SectionKicker>From Method to Brief</SectionKicker>

        <SubsectionText className="mt-8 max-w-2xl text-lg">
          <p>
            My job was never to hand over a finished interface. What the method
            surfaced — the client&rsquo;s market, their actual customers, what
            mattered to the people who&rsquo;d eventually land on that page — I
            turned into research findings, a set of UX recommendations, and an
            art direction proposal. Then I handed all of it to our UI Designer
            to build.
          </p>
          <p>
            I owned the thinking behind every brief. I didn&rsquo;t own the
            final pixels. That line sounds small written down, but it changed
            how the work actually moved: the UI Designer could commit to a
            direction immediately, because that direction had already survived
            scrutiny before it reached them. Neither of us was guessing
            alongside the other. And before any of it reached a client, it was
            tested — not as a formality tacked onto the end of the process, but
            as the same discipline that started the brief, still holding at the
            finish.
          </p>
        </SubsectionText>

        <motion.p
          {...(shouldReduceMotion ? { initial: false } : REVEAL())}
          className="mt-16 max-w-2xl text-xl leading-snug font-medium text-foreground italic md:text-2xl"
        >
          I owned the thinking behind every brief. I didn&rsquo;t own the final
          pixels.
        </motion.p>
      </Container>
    </Section>
  )
}

export { Brief }
