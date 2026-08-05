import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import { AssetChecklist } from "@/components/ui/asset-checklist"
import {
  REVEAL,
  CroppedCapture,
  AssetFrame,
  SubsectionText,
} from "@/components/ui/case-study-capture"
import typography from "@/assets/case-studies/spf/foundations/TYPOGRAPHY.png"
import icons from "@/assets/case-studies/spf/foundations/icons.png"
import accentColors from "@/assets/case-studies/spf/accessibility/Accent-colors.png"
import systemColors from "@/assets/case-studies/spf/accessibility/KeyColors-tones.png"
import tones from "@/assets/case-studies/spf/accessibility/TONES.png"
import elevationSteps from "@/assets/case-studies/spf/foundations/elevation.png"

/**
 * Sprint 18.3. Two different asset treatments in this chapter, on
 * purpose:
 *
 * - The three color sheets (accessibility/) are already clean, exported
 *   documentation frames — no Figma chrome. They render `object-contain`
 *   inside a bordered frame so every hex value and label stays legible;
 *   cropping them would delete real information, not just tidy the view.
 * - TYPOGRAPHY.png and icons.png (foundations/) are raw screen captures
 *   of the Figma window itself — sidebar, properties panel, toolbar all
 *   included. Fabricating cleaner exports isn't an option ("do not
 *   invent new visuals"), so instead they're cropped in the browser via
 *   a narrow aspect ratio + object-position tuned to frame the canvas
 *   content and push the surrounding UI chrome out of view.
 *
 * `buttons.png` (also in foundations/) is real, but it's a button
 * variant/state sheet — Component Library material, not foundational
 * visual language. It isn't used here on purpose; it belongs in the
 * Components chapter later, not stretched into this one because of
 * which folder it happened to land in.
 *
 * Layout & Grid still has no real asset and keeps the honest "awaiting
 * assets" treatment. Two candidates landed in a later QA pass —
 * `components/CUSTOM/Grid • Team site.png` and `Layouts.png` — but both
 * document a Microsoft SharePoint "Communication site" / "Team site" web
 * part grid (confirmed by reading the frames directly: "web part content
 * area," "web part property pane" are SharePoint's own vocabulary, and
 * neither image carries the crest or teal/burgundy language documented
 * everywhere else in this project). That's someone else's system, not
 * SPF's — using it here would be the same misattribution the Product
 * Interfaces chapter already caught once with
 * `Elegalisation-PROTOTYPE.png`. Excluded for the same reason; see
 * `Components.tsx` for the fuller note, and flagged for Stéphania to
 * confirm whether it belongs to this case study before it's used
 * anywhere. Elevation, meanwhile, did get real evidence — `elevation.png`
 * landed in an earlier QA pass: five swatches (Super Light through Dark),
 * a clean exported documentation frame with no Figma chrome, so it
 * renders with `AssetFrame` like the accessibility color sheets rather
 * than cropped.
 *
 * That same later pass reviewed two more new files in this folder —
 * `Key color & tones.png` and `Key color & tones (1).png`. Both are
 * skipped on purpose: `(1)` is pixel-for-pixel the same "System color"
 * sheet as `accessibility/KeyColors-tones.png`, already shown below, and
 * the un-numbered one is a lower-detail overview of the same primary/
 * secondary/tertiary values `accessibility/Accent-colors.png` already
 * covers in more depth. Showing either would duplicate evidence already
 * on the page, not add to it.
 */

function EmptySubsection({
  label,
  missing,
}: {
  label: string
  missing: string[]
}) {
  return (
    <AssetChecklist
      label={label}
      missing={missing.map((filename) => ({
        filename,
        description:
          "No real export exists yet — nothing shown rather than a fabricated diagram.",
      }))}
    />
  )
}

function Foundations() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="spf-foundations">
      <Container size="content">
        <SectionKicker>Foundations</SectionKicker>

        <motion.p
          {...(shouldReduceMotion ? { initial: false } : REVEAL())}
          className="mt-8 max-w-2xl text-xl leading-snug font-medium text-foreground md:text-2xl"
        >
          Before a single component existed, the system needed a shared visual
          language — the colors, type and icons every component would later draw
          from, not improvise.
        </motion.p>

        {/* Typography — full-width, the specimen text needs the room */}
        <div className="mt-24">
          <p className="font-mono text-2xs tracking-widest text-brand uppercase">
            Typography
          </p>
          <SubsectionText className="mt-4 max-w-2xl">
            <p>
              A citizen filling out a visa application and a developer reading
              the documentation are looking at the same typographic system, at
              different moments, under different pressure. Hierarchy is what
              lets both of them find what matters first.
            </p>
            <p>
              Travel Web, Visa on Web, Visanet — three different products, one
              typographic voice: Roboto for interface text, Lora reserved for
              moments that need to read as editorial rather than functional. The
              same heading means the same thing, at the same weight, everywhere
              a citizen might land.
            </p>
            <p>
              Sizes, line-heights and contrast were set against WCAG's actual
              thresholds, not a visual guess — the same requirement both
              typefaces had to pass before either made it into the system.
            </p>
          </SubsectionText>
          <CroppedCapture
            src={typography}
            alt="The SPF typography scale in Figma — the Roboto and Lora heading specimens side by side, H1 through H6, regular and bold."
            caption="The type scale — Roboto for interface, Lora reserved for editorial moments."
            className="mt-10"
            aspectClassName="aspect-[5/1]"
            zoomClassName="scale-[1.68]"
            positionClassName="object-[50%_0%]"
          />
        </div>

        {/* Color System */}
        <div className="mt-24">
          <p className="font-mono text-2xs tracking-widest text-brand uppercase">
            Color System
          </p>
          <SubsectionText className="mt-4">
            <p>
              Every color resolves to a role before it resolves to a hex value —
              primary, secondary and tertiary key colors, plus a dedicated
              feedback set for success, warning, information and error, each
              paired with its own "on-color" so text never has to guess its own
              contrast.
            </p>
            <p>
              Underneath the roles sits a full tonal system — ten steps per
              color, light mode and dark mode built from the same scale rather
              than two separate palettes. Semantic naming means a component
              asking for "error" gets the correct red whichever mode it's
              rendered in, and contrast holds at every step, not just the ones
              someone remembered to check.
            </p>
          </SubsectionText>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <AssetFrame
              src={accentColors}
              alt="SPF accent color documentation — primary, secondary and tertiary key colors with hex values and usage notes."
            />
            <AssetFrame
              src={systemColors}
              alt="SPF system feedback colors — green success, yellow warning, blue information and error, each with its container and on-color pairing."
            />
          </div>
          <div className="mt-8">
            <AssetFrame
              src={tones}
              alt="The full SPF tonal color system in light and dark mode, from P-10 through P-100 for every color role."
            />
          </div>
        </div>

        {/* Icons */}
        <div className="mt-24 grid gap-10 md:grid-cols-2 md:gap-16">
          <CroppedCapture
            src={icons}
            alt="The SPF icon library in Figma, built on Font Awesome's conventions, showing the full set at a shared stroke weight and grid."
            caption="The icon library — Font Awesome's conventions, not a new metaphor."
          />
          <div>
            <p className="font-mono text-2xs tracking-widest text-brand uppercase">
              Icons
            </p>
            <SubsectionText className="mt-4">
              <p>
                Recognition has to survive translation — SPF serves citizens in
                four languages, and an icon has to mean the same thing before a
                single word is read. The library draws from Font Awesome's
                established conventions rather than inventing new metaphors,
                because familiarity was worth more here than originality.
              </p>
              <p>
                Every icon shares the same stroke weight and grid, so a system
                icon and a custom one sit next to each other without either
                reading as an afterthought — scalable enough to cover a
                government-sized surface area, and reusable enough that no team
                has to draw its own.
              </p>
            </SubsectionText>
          </div>
        </div>

        {/* Layout & Grid */}
        <div className="mt-24 grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <p className="font-mono text-2xs tracking-widest text-brand uppercase">
              Layout &amp; Grid
            </p>
            <SubsectionText className="mt-4">
              <p>
                A responsive grid is what lets "consistent across applications"
                survive contact with a phone screen — the same spacing scale and
                alignment logic, whether a citizen is filling out a form on a
                laptop in an office or on a phone in a waiting room.
              </p>
              <p>
                Predictable spacing does quiet work: it's what makes a page feel
                considered rather than assembled, without a visitor ever
                consciously noticing the rhythm doing it.
              </p>
            </SubsectionText>
          </div>
          <EmptySubsection
            label="Layout & Grid"
            missing={["spacing.webp", "grid.webp"]}
          />
        </div>

        {/* Elevation */}
        <div className="mt-24 grid gap-10 md:grid-cols-2 md:gap-16">
          <AssetFrame
            src={elevationSteps}
            alt="Five SPF elevation steps — Super Light, Light, Medium, Medium Dark and Dark — shown as swatches with progressively deeper shadow."
            className="aspect-[4/3]"
          />
          <div>
            <p className="font-mono text-2xs tracking-widest text-brand uppercase">
              Elevation
            </p>
            <SubsectionText className="mt-4">
              <p>
                Five steps, named by weight rather than a pixel value — Super
                Light through Dark — each one a slightly deeper shadow than the
                last. Elevation had to do real work without ever feeling
                decorative — a government interface earns trust through
                restraint, so shadow exists here to separate a modal from its
                background, not to make anything look expensive.
              </p>
            </SubsectionText>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export { Foundations }
