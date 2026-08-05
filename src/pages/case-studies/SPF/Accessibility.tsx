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

/**
 * Sprint 18.7. Replaces the Sprint 18.1 generic asset-checklist rendering
 * with a hand-authored chapter, matching Foundations/Tokens/Components/
 * Interfaces.
 *
 * No file in accessibility/ is used here directly — all three real exports
 * in that folder (Accent-colors.png, KeyColors-tones.png, TONES.png)
 * already appear in Foundations (Sprint 18.3). Showing them again would be
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
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="spf-accessibility">
      <Container size="content">
        <SectionKicker>Accessibility</SectionKicker>

        <motion.p
          {...(shouldReduceMotion ? { initial: false } : REVEAL())}
          className="mt-8 max-w-2xl text-xl leading-snug font-medium text-foreground md:text-2xl"
        >
          Every citizen filling out this system arrives with a different screen,
          a different input device, a different amount of patience.
          Accessibility wasn&rsquo;t a pass taken at the end — it was checked at
          the token, before a single screen existed.
        </motion.p>

        {/* Contrast — cross-referenced, now with real surface evidence too */}
        <div className="mt-24">
          <p className="font-mono text-2xs tracking-widest text-brand uppercase">
            Contrast, Checked at the Source
          </p>
          <SubsectionText className="mt-4 max-w-2xl">
            <p>
              The Design Tokens chapter already carries one piece of evidence: a
              background/text pairing checked inside Tokens Studio itself,
              reporting &ldquo;Level AA — Pass, Level AAA — Pass&rdquo; before a
              single component consumed the token. A second capture gives the
              surface layer the same treatment — Surface Dim, Surface, Surface
              Bright and five Surface Container steps, each a real resolved hex,
              with a dedicated On Surface and Outline built to sit on top of
              them. Nine roles, nine real values, not one "text color" asked to
              work everywhere.
            </p>
            <p>
              The same discipline shows up in Foundations&rsquo; tonal system:
              every feedback role — success, warning, information, error — ships
              with its own dedicated on-color, so a component asking for a
              feedback color never has to guess whether its own text will read
              against it.
            </p>
          </SubsectionText>
          <AssetFrame
            src={surfaceContrast}
            alt="SPF's surface and neutral color tokens documented with real hex values — Surface Dim, Surface, Surface Bright, five Surface Container steps, On Surface, On Surface Variant, Outline and Outline Variant — shown twice, once against a pale backdrop and once against near-black."
            className="mt-10 aspect-[3/1]"
          />
        </div>

        {/* States as decisions */}
        <div className="mt-24">
          <p className="font-mono text-2xs tracking-widest text-brand uppercase">
            States Aren&rsquo;t Cosmetic
          </p>
          <SubsectionText className="mt-4 max-w-2xl">
            <p>
              A disabled button that still reads as a button — dimmed enough to
              signal &ldquo;not now,&rdquo; legible enough not to disappear — is
              a decision, not whatever Angular Material happened to ship by
              default. Every variant in the system carries the same disabled
              treatment: primary, rounded, outlined, text, tile, each dimmed by
              the same amount rather than five separate guesses.
            </p>
            <p>
              That same discipline is what let the Component Library chapter
              show a dozen input states — default, focus, filled, error,
              validated, disabled, autocomplete — and a notification system
              built on roles a screen reader and a stressed citizen both need to
              tell apart at a glance.
            </p>
          </SubsectionText>
          <AssetFrame
            src={buttonStates}
            alt="A matrix of Angular Material button variants from the SPF component library — normal, primary, disabled and rounded — showing the disabled state applied consistently across every button style."
            className="mt-10 aspect-[11/2]"
          />
          <p className="mt-3 font-mono text-2xs tracking-widest text-muted-foreground uppercase">
            Normal, primary, disabled, rounded — the same treatment, not five
            separate guesses.
          </p>
        </div>

        {/* Honest gap */}
        <div className="mt-24 grid gap-10 md:grid-cols-2 md:gap-16">
          <AssetChecklist
            label="Keyboard Navigation"
            missing={[
              {
                filename: "keyboard-navigation.webp",
                description:
                  "No real capture of focus order or a keyboard-only flow exists yet — nothing shown rather than a fabricated diagram.",
              },
            ]}
          />
          <div>
            <p className="font-mono text-2xs tracking-widest text-brand uppercase">
              What Isn&rsquo;t Proven Yet
            </p>
            <SubsectionText className="mt-4">
              <p>
                A citizen filling out a visa form by keyboard alone, or by
                screen reader, deserves a system designed for that path, not one
                that merely tolerates it. That&rsquo;s the honest gap in this
                chapter: no file in the project documents a visible focus order
                or a keyboard-only walkthrough of the portal, so none is claimed
                here.
              </p>
            </SubsectionText>
          </div>
        </div>

        {/* Closing synthesis */}
        <motion.div
          {...(shouldReduceMotion ? { initial: false } : REVEAL())}
          className="mt-24 max-w-2xl"
        >
          <p className="text-xl leading-snug font-medium text-foreground md:text-2xl">
            None of this adds up to a claim that the system is fully accessible
            — three chapters of evidence aren&rsquo;t entitled to say that. What
            they can say is narrower and true: contrast was checked before a
            component existed, states were drawn on purpose, and where the
            evidence runs out, this chapter says so instead of filling the gap
            with a badge nobody earned.
          </p>
        </motion.div>
      </Container>
    </Section>
  )
}

export { Accessibility }
