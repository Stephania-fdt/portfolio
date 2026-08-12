import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import {
  REVEAL,
  SubsectionText,
  AssetFrame,
} from "@/components/ui/case-study-capture"
import portraitChinois from "@/assets/case-studies/wellpack/01-strategy/Strategy_portrait chinois.png"

/**
 * WellPack Sprint 1 (implementation pass 2) — Chapter 3, The Method.
 * Replaces the pre-Blueprint "Research" chapter entirely — the approved
 * Editorial Blueprint renamed and re-scoped it: this chapter is
 * deliberately narrower than a generic "Research" chapter would be, and
 * only covers "Building the method" in `content/case-studies/wellpack.ts`.
 * "From research to brief" and "Testing before publishing" are held for
 * the future Chapter 4 (From Method to Brief) this sprint doesn't touch.
 *
 * Same structural pattern as Challenge.tsx: manuscript paragraphs run
 * continuous, chapter closes on its own designated key sentence using
 * the site's existing italic pull-quote treatment.
 *
 * Final Implementation pass: one real asset added,
 * `01-strategy/Strategy_portrait chinois.png` — a clean, complete deck
 * slide (no chrome to crop), shown via `AssetFrame`. Chosen deliberately
 * narrow: the paragraph above names the "portrait chinois" exercise
 * explicitly, and this is real, first-hand proof the technique existed,
 * not an invented illustration of it.
 *
 * Important scope note, confirmed by direct inspection: this specific
 * slide documents the exercise applied to WellPack's own brand, not a
 * client's. The manuscript's claim is about the technique and the
 * template it produced, not about any single client's output, so
 * showing this instance is honest — the caption below says exactly
 * that, and doesn't imply this was a client deliverable it wasn't.
 * A much larger body of real evidence also landed alongside this asset
 * — a complete WellPack brand identity guideline and website design —
 * documenting what looks like a separate, real body of work the
 * approved six-chapter manuscript doesn't currently claim. None of it
 * is used here. See the sprint report for why, and what I'm
 * recommending instead of guessing.
 */
function Method() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="wellpack-method">
      <Container size="content">
        <SectionKicker>The Method</SectionKicker>

        <SubsectionText className="mt-8 max-w-2xl text-lg">
          <p>
            The biggest thing I built at WellPack was never a landing page. It
            was a method — reusable templates for personas, for market analysis,
            for the kind of &ldquo;portrait chinois&rdquo; exercise that sounds
            like a game until you notice what it actually surfaces about a
            brand. Internal discovery documents that asked the same rigorous
            questions whether the client meeting had gone long or the week had
            gone short.
          </p>
          <p>
            That distinction matters more than it sounds like it should.
            Conducting good research for one client is a skill. Building a
            system that guarantees every client gets that same rigor, regardless
            of who&rsquo;s doing the work or how much time is left in the week,
            is a different thing entirely — closer to infrastructure than craft.
            I didn&rsquo;t just study each client&rsquo;s market. I built the
            mechanism that turned &ldquo;what does this client need&rdquo; into
            an evidence-based design brief, the same way, every time. That
            mechanism outlasted any single landing page. It was still running
            after I&rsquo;d moved on to the next client.
          </p>
        </SubsectionText>

        <AssetFrame
          src={portraitChinois}
          alt="A real 'portrait chinois' exercise slide — WellPack described through a lion, a black panther and a herd of elephants, the same projective-brand technique the paragraph above names, shown here as it was actually built."
          className="mt-10 max-w-2xl"
        />
        <p className="mt-3 max-w-2xl font-mono text-2xs tracking-widest text-muted-foreground uppercase">
          A real portrait chinois exercise, applied here to WellPack&rsquo;s own
          brand — the same technique, not an illustration of it.
        </p>

        <motion.p
          {...(shouldReduceMotion ? { initial: false } : REVEAL())}
          className="mt-16 max-w-2xl text-xl leading-snug font-medium text-foreground italic md:text-2xl"
        >
          Conducting good research for one client is a skill. Building a system
          that guarantees every client gets that same rigor is a different thing
          entirely.
        </motion.p>
      </Container>
    </Section>
  )
}

export { Method }
