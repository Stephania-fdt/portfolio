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
import { spfFoundationsContent } from "@/content/case-studies/spf-foundations"
import { getLocalizedContent, useLanguage } from "@/i18n"

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
  description,
}: {
  label: string
  missing: string[]
  description: string
}) {
  return (
    <AssetChecklist
      label={label}
      missing={missing.map((filename) => ({
        filename,
        description,
      }))}
    />
  )
}

function Foundations() {
  const { language } = useLanguage()
  const content = getLocalizedContent(spfFoundationsContent, language)
  const {
    typography: typeCopy,
    colors,
    icons: iconCopy,
    layout,
    elevation,
  } = content.sections
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="spf-foundations">
      <Container size="content">
        <SectionKicker>{content.kicker}</SectionKicker>

        <motion.p
          {...(shouldReduceMotion ? { initial: false } : REVEAL())}
          className="mt-8 max-w-2xl text-xl leading-snug font-medium text-foreground md:text-2xl"
        >
          {content.introduction}
        </motion.p>

        {/* Typography — full-width, the specimen text needs the room */}
        <div className="mt-24">
          <p className="font-mono text-2xs tracking-widest text-brand uppercase">
            {typeCopy.label}
          </p>
          <SubsectionText className="mt-4 max-w-2xl">
            {typeCopy.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </SubsectionText>
          <CroppedCapture
            src={typography}
            alt={typeCopy.alts?.[0] ?? ""}
            caption={typeCopy.captions?.[0] ?? ""}
            className="mt-10"
            aspectClassName="aspect-[5/1]"
            zoomClassName="scale-[1.68]"
            positionClassName="object-[50%_0%]"
          />
        </div>

        {/* Color System */}
        <div className="mt-24">
          <p className="font-mono text-2xs tracking-widest text-brand uppercase">
            {colors.label}
          </p>
          <SubsectionText className="mt-4">
            {colors.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </SubsectionText>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <AssetFrame src={accentColors} alt={colors.alts?.[0] ?? ""} />
            <AssetFrame src={systemColors} alt={colors.alts?.[1] ?? ""} />
          </div>
          <div className="mt-8">
            <AssetFrame src={tones} alt={colors.alts?.[2] ?? ""} />
          </div>
        </div>

        {/* Icons */}
        <div className="mt-24 grid gap-10 md:grid-cols-2 md:gap-16">
          <CroppedCapture
            src={icons}
            alt={iconCopy.alts?.[0] ?? ""}
            caption={iconCopy.captions?.[0] ?? ""}
          />
          <div>
            <p className="font-mono text-2xs tracking-widest text-brand uppercase">
              {iconCopy.label}
            </p>
            <SubsectionText className="mt-4">
              {iconCopy.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </SubsectionText>
          </div>
        </div>

        {/* Layout & Grid */}
        <div className="mt-24 grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <p className="font-mono text-2xs tracking-widest text-brand uppercase">
              {layout.label}
            </p>
            <SubsectionText className="mt-4">
              {layout.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </SubsectionText>
          </div>
          <EmptySubsection
            label={layout.label}
            missing={["spacing.webp", "grid.webp"]}
            description={content.missingDescription}
          />
        </div>

        {/* Elevation */}
        <div className="mt-24 grid gap-10 md:grid-cols-2 md:gap-16">
          <AssetFrame
            src={elevationSteps}
            alt={elevation.alts?.[0] ?? ""}
            className="aspect-[4/3]"
          />
          <div>
            <p className="font-mono text-2xs tracking-widest text-brand uppercase">
              {elevation.label}
            </p>
            <SubsectionText className="mt-4">
              {elevation.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </SubsectionText>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export { Foundations }
