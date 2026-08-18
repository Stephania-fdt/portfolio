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
import { wellPackPageContent } from "@/content/case-studies/wellpack-page"
import { getLocalizedContent, useLanguage } from "@/i18n"

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
  const { language } = useLanguage()
  const content = getLocalizedContent(wellPackPageContent, language).method
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="wellpack-method">
      <Container size="content">
        <SectionKicker>{content.kicker}</SectionKicker>

        <SubsectionText className="mt-8 max-w-2xl text-lg">
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </SubsectionText>

        <AssetFrame
          src={portraitChinois}
          alt={content.alt}
          className="mt-10 max-w-2xl"
        />
        <p className="mt-3 max-w-2xl font-mono text-2xs tracking-widest text-muted-foreground uppercase">
          {content.caption}
        </p>

        <motion.p
          {...(shouldReduceMotion ? { initial: false } : REVEAL())}
          className="mt-16 max-w-2xl text-xl leading-snug font-medium text-foreground italic md:text-2xl"
        >
          {content.quote}
        </motion.p>
      </Container>
    </Section>
  )
}

export { Method }
