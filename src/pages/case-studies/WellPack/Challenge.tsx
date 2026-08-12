import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import { REVEAL, SubsectionText } from "@/components/ui/case-study-capture"

/**
 * WellPack Sprint 1 (implementation pass 2) — Chapter 2, The Challenge.
 * Rebuilt from the approved editorial manuscript, not the earlier draft:
 * the manuscript's two paragraphs run as one continuous passage (no
 * invented sub-headings splitting it into fragments) to read like the
 * long-form piece it was written as, closing on the chapter's own
 * designated key sentence — the same `text-xl italic md:text-2xl`
 * treatment the site's generic `CaseStudy.tsx` template already uses for
 * its closing line, reused here rather than invented, as the "elegant
 * editorial layout instead of a placeholder" for the visual this chapter
 * doesn't have.
 *
 * Every sentence traces to "Where it started" and "The gap nobody had
 * systematized" in `content/case-studies/wellpack.ts` — no new claim.
 */
function Challenge() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="wellpack-challenge">
      <Container size="content">
        <SectionKicker>The Challenge</SectionKicker>

        <SubsectionText className="mt-8 max-w-2xl text-lg">
          <p>
            WellPack helps other businesses find local customers through SMS and
            RCS marketing — geo-targeted campaigns, real-time audience data, a
            platform called WeData that already did its job well. The product
            was never the problem. The landing pages built around it were: some
            had gone quiet, visually, the way anything does when nobody&rsquo;s
            had a reason to look at it twice. There was no fire to put out. Just
            a steady, ordinary need to keep the Marketing team&rsquo;s work from
            drifting.
          </p>
          <p>
            What made that drift possible wasn&rsquo;t a lack of effort. It was
            a lack of memory. Each client brief arrived complete, ready to hand
            to design — but nothing in that brief had been tested against an
            actual understanding of who the client&rsquo;s customers were. So
            each page started from the same blank page the last one had.
          </p>
        </SubsectionText>

        <motion.p
          {...(shouldReduceMotion ? { initial: false } : REVEAL())}
          className="mt-16 max-w-2xl text-xl leading-snug font-medium text-foreground italic md:text-2xl"
        >
          Not because anyone on the team was careless. Because nobody had ever
          built the thing that would have stopped it from happening again.
        </motion.p>
      </Container>
    </Section>
  )
}

export { Challenge }
