import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import { AssetChecklist } from "@/components/ui/asset-checklist"
import {
  REVEAL,
  AssetFrame,
  SubsectionText,
} from "@/components/ui/case-study-capture"
import buttonStates from "@/assets/case-studies/spf/components/ANGULAR/mat-btn.png"
import surfaceContrast from "@/assets/case-studies/spf/foundations/contrast.png"
import { spfAccessibilityContent } from "@/content/case-studies/spf-accessibility"
import { getLocalizedContent, useLanguage } from "@/i18n"

/**
 * Sprint 18.7. Replaces the Sprint 18.1 generic asset-checklist rendering
 * with a hand-authored chapter, matching the other narrative chapters.
 *
 * No file in accessibility/ is used here directly — all three real exports
 * in that folder (Accent-colors.png, KeyColors-tones.png, TONES.png)
 * already appear in The Design System chapter. Showing them again would be
 * a duplicated visual, not new evidence, so this chapter instead:
 *
 * - Cross-references two claims already proven with real evidence
 *   elsewhere (Tokens' "Level AA — Pass, Level AAA — Pass" tooltip;
 *   Foundations' on-color pairing) rather than re-displaying either image
 *   — the same cross-chapter-citation pattern Tokens already established
 *   for Foundations' TONES.png.
 * - Introduces exactly one real, previously-unused capture:
 *   components/ANGULAR/buttons.png, showing the disabled state applied
 *   consistently across every button variant (primary, rounded, outlined,
 *   text, tile) — confirmed by direct inspection, not assumed from the
 *   filename.
 *
 * Final QA pass: `buttons.png` (the raw Figma capture, editor chrome
 * included) is replaced here by `mat-btn.png` — the same "mat-btn" frame,
 * confirmed pixel-for-pixel identical content, but exported clean with no
 * chrome to crop around. Same evidence, no invented claim; it moves from
 * `CroppedCapture` (a narrow aspect ratio + zoom hiding the sidebar and
 * properties panel) to `AssetFrame` (shown whole), because there's
 * nothing left to hide.
 * - Is honest about the one real gap: nothing in the ~20 real SPF files
 *   documents a visible focus order or keyboard-only flow. Rather than
 *   stretch the button-states capture to cover that too, it gets the same
 *   "awaiting assets" treatment Foundations already used for Layout & Grid
 *   and Elevation — no fabricated diagram standing in for evidence that
 *   doesn't exist.
 *
 * QA pass, same sprint: `foundations/contrast.png` landed (a clean,
 * chrome-free documentation frame, not a raw Figma capture), giving the
 * "Contrast, Checked at the Source" section its first real image instead
 * of pure cross-reference. Both halves of that capture show the same
 * Light Mode surface/neutral hex values — confirmed by reading them
 * directly — so the copy describes it as one token set shown against two
 * backdrops, not a light/dark theme comparison the image doesn't
 * actually make.
 */
function Accessibility() {
  const { language } = useLanguage()
  const content = getLocalizedContent(spfAccessibilityContent, language)
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="spf-accessibility">
      <Container size="content">
        <SectionKicker>{content.kicker}</SectionKicker>

        <motion.p
          {...(shouldReduceMotion ? { initial: false } : REVEAL())}
          className="mt-8 max-w-2xl text-xl leading-snug font-medium text-foreground md:text-2xl"
        >
          {content.introduction}
        </motion.p>

        {/* Contrast — cross-referenced, now with real surface evidence too */}
        <div className="mt-24">
          <p className="font-mono text-2xs tracking-widest text-brand uppercase">
            {content.contrast.label}
          </p>
          <SubsectionText className="mt-4 max-w-2xl">
            {content.contrast.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </SubsectionText>
          <AssetFrame
            src={surfaceContrast}
            alt={content.contrast.alt}
            className="mt-10 aspect-[3/1]"
          />
        </div>

        {/* States as decisions */}
        <div className="mt-24">
          <p className="font-mono text-2xs tracking-widest text-brand uppercase">
            {content.states.label}
          </p>
          <SubsectionText className="mt-4 max-w-2xl">
            {content.states.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </SubsectionText>
          <AssetFrame
            src={buttonStates}
            alt={content.states.alt}
            className="mt-10 aspect-[11/2]"
          />
          <p className="mt-3 font-mono text-2xs tracking-widest text-muted-foreground uppercase">
            {content.states.caption}
          </p>
        </div>

        {/* Honest gap */}
        <div className="mt-24 grid gap-10 md:grid-cols-2 md:gap-16">
          <AssetChecklist
            label={content.gap.checklist}
            status={content.assetStatus}
            missing={[
              {
                filename: content.gap.filename,
                description: content.gap.description,
              },
            ]}
          />
          <div>
            <p className="font-mono text-2xs tracking-widest text-brand uppercase">
              {content.gap.label}
            </p>
            <SubsectionText className="mt-4">
              <p>{content.gap.paragraph}</p>
            </SubsectionText>
          </div>
        </div>

        {/* Closing synthesis */}
        <motion.div
          {...(shouldReduceMotion ? { initial: false } : REVEAL())}
          className="mt-24 max-w-2xl"
        >
          <p className="text-xl leading-snug font-medium text-foreground md:text-2xl">
            {content.conclusion}
          </p>
        </motion.div>
      </Container>
    </Section>
  )
}

export { Accessibility }
