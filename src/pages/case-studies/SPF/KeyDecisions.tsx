import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import { AssetChecklist } from "@/components/ui/asset-checklist"
import {
  REVEAL,
  CroppedCapture,
  AssetFrame,
  DecisionHeading,
} from "@/components/ui/case-study-capture"
import { CaseStudyDisclosure } from "@/components/ui/case-study-disclosure"
import { CaseStudyImage } from "@/components/ui/case-study-image"
import {
  AnnotationMark,
  TokensIcon,
  AccessibilityIcon,
} from "@/pages/case-studies/SPF/illustrations"
import header from "@/assets/case-studies/spf/components/CUSTOM/HEADER.png"
import accentColors from "@/assets/case-studies/spf/accessibility/Accent-colors.png"
import typography from "@/assets/case-studies/spf/foundations/TYPOGRAPHY.png"
import icons from "@/assets/case-studies/spf/foundations/icons.png"
import systemColors from "@/assets/case-studies/spf/accessibility/KeyColors-tones.png"
import tones from "@/assets/case-studies/spf/accessibility/TONES.png"
import elevationSteps from "@/assets/case-studies/spf/foundations/elevation.png"
import tokensStudio from "@/assets/case-studies/spf/tokens/tokens2.png"
import tokensCode from "@/assets/case-studies/spf/tokens/code_tokens-theme.png"
import palette from "@/assets/case-studies/spf/tokens/variables.png"
import schemes from "@/assets/case-studies/spf/tokens/variables2.png"
import pickers from "@/assets/case-studies/spf/components/ANGULAR/date pickers.png"
import fabSheet from "@/assets/case-studies/spf/components/ANGULAR/buttons.png"
import cardsSheet from "@/assets/case-studies/spf/components/ANGULAR/cards.png"
import textFieldsSheet from "@/assets/case-studies/spf/components/ANGULAR/text fields.png"
import sidebar from "@/assets/case-studies/spf/components/CUSTOM/Sidebar menu.png"
import footer from "@/assets/case-studies/spf/components/CUSTOM/Footers.png"
import radio from "@/assets/case-studies/spf/components/CUSTOM/RADIO.png"
import languageAsset from "@/assets/case-studies/spf/components/CUSTOM/LANGUAGE.png"
import inputs from "@/assets/case-studies/spf/components/CUSTOM/inputs.png"
import stepperZoom from "@/assets/case-studies/spf/components/CUSTOM/STEPPER-ZOOM.png"
import { spfPageContent } from "@/content/case-studies/spf-page"
import { spfDesignSystemContent } from "@/content/case-studies/spf-design-system"
import { spfExecutionContent } from "@/content/case-studies/spf-execution"
import { getLocalizedContent, useLanguage } from "@/i18n"

/** Real pixel sizes; order matches `reference.angularSheets.items`. */
const ANGULAR_SHEETS = [
  { src: fabSheet, width: 1575, height: 3436 },
  { src: cardsSheet, width: 1396, height: 3912 },
  { src: textFieldsSheet, width: 1366, height: 3071 },
]

function Paragraphs({ paragraphs }: { paragraphs: string[] }) {
  return (
    <>
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </>
  )
}

/**
 * Editorial restructure (chapter C of 5): three named decisions, each a
 * constraint → choice, one real proof beside it. Replaces the former
 * Design System, Execution and Accessibility chapters — their exhaustive
 * inventories (typography, icons, elevation, full token architecture,
 * the component library) are unchanged in substance but now live behind
 * two "reference" disclosures on the decisions that earned them, not
 * forced into the main scroll. The honest accessibility gap (no keyboard
 * walkthrough documented yet) stays in the visible text — a limit isn't
 * something to fold away.
 */
function KeyDecisions() {
  const { language } = useLanguage()
  const content = getLocalizedContent(spfPageContent, language).decisions
  const designSystem = getLocalizedContent(spfDesignSystemContent, language)
  const execution = getLocalizedContent(spfExecutionContent, language)
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="spf-decisions" spacing="sm">
      <Container size="content">
        <SectionKicker>{content.kicker}</SectionKicker>

        <motion.p
          {...(shouldReduceMotion ? { initial: false } : REVEAL())}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground"
        >
          {content.intro}
        </motion.p>

        {/* Decision 1 — Angular Material as the base, custom where it counts */}
        <div className="mt-20">
          <DecisionHeading
            index={1}
            title={content.items[0].label}
            size="lg"
            className="max-w-3xl"
          />
          <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <div className="space-y-4 text-base leading-relaxed text-foreground">
                <Paragraphs paragraphs={content.items[0].paragraphs} />
              </div>
            </div>
            <div className="relative lg:col-span-8">
              <AnnotationMark className="absolute -top-3 -left-3 z-10 hidden sm:block" />
              <CroppedCapture
                src={header}
                alt="The custom SPF header component carrying the Kingdom of Belgium's crest."
                caption="The header — built from nothing, exactly where Angular Material stops carrying an identity."
                aspectClassName="aspect-[4/3]"
                zoomClassName="scale-[1.9]"
                positionClassName="object-[30%_25%]"
              />
            </div>
          </div>
        </div>

        {/* Decision 2 — tokens before screens. Composition deliberately varies
            from decisions 1 and 3: one wide visual, then two short
            explanations side by side, instead of a text/image column pair. */}
        <div className="mt-20">
          <div className="flex items-center gap-5">
            <TokensIcon className="w-14 shrink-0 sm:w-16 lg:w-[68px]" />
            <DecisionHeading
              index={2}
              title={content.items[1].label}
              size="lg"
              className="max-w-3xl"
            />
          </div>
          <div className="mt-8 max-w-4xl">
            <AssetFrame src={accentColors} alt={designSystem.colorRoles.alt} />
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {designSystem.colorRoles.caption}
            </p>
          </div>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            {content.items[1].paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="max-w-md text-base leading-relaxed text-foreground"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Decision 3 — accessibility checked at the token, honest gap stays visible */}
        <div className="mt-20">
          <div className="flex items-center gap-5">
            <AccessibilityIcon className="w-14 shrink-0 sm:w-16 lg:w-[68px]" />
            <DecisionHeading
              index={3}
              title={content.items[2].label}
              size="lg"
              className="max-w-3xl"
            />
          </div>
          <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <div className="space-y-4 text-base leading-relaxed text-foreground">
                <Paragraphs paragraphs={content.items[2].paragraphs} />
              </div>
            </div>
            <div className="lg:col-span-8">
              <CaseStudyImage
                src={tokensStudio}
                alt={designSystem.reference.tokenTooling.alt}
                zoomable
                cropAspectClassName="aspect-[4/3]"
                cropZoomClassName="scale-100"
                cropPositionClassName="object-[50%_62%]"
              />
              <p className="mt-3 font-mono text-2xs tracking-widest text-muted-foreground uppercase">
                {designSystem.reference.tokenTooling.caption}
              </p>
            </div>
          </div>
        </div>

        <CaseStudyDisclosure
          summary={designSystem.detailsSummary}
          className="mt-12"
        >
          <div>
            <p className="font-mono text-2xs tracking-widest text-brand uppercase">
              {designSystem.reference.typography.label}
            </p>
            <div className="mt-4 max-w-2xl space-y-4 text-base leading-relaxed text-muted-foreground">
              <Paragraphs
                paragraphs={designSystem.reference.typography.paragraphs}
              />
            </div>
            <CroppedCapture
              src={typography}
              alt={designSystem.reference.typography.alt}
              caption={designSystem.reference.typography.caption ?? ""}
              className="mt-6 max-w-2xl"
              aspectClassName="aspect-[5/1]"
              zoomClassName="scale-[1.68]"
              positionClassName="object-[50%_0%]"
            />
          </div>

          <div className="mt-10">
            <p className="font-mono text-2xs tracking-widest text-brand uppercase">
              {designSystem.reference.fullColorSystem.label}
            </p>
            <div className="mt-4 max-w-2xl space-y-4 text-base leading-relaxed text-muted-foreground">
              <Paragraphs
                paragraphs={designSystem.reference.fullColorSystem.paragraphs}
              />
            </div>
            <div className="mt-6 grid max-w-2xl gap-6">
              <AssetFrame
                src={systemColors}
                alt={designSystem.reference.fullColorSystem.alts[0]}
              />
              <AssetFrame
                src={tones}
                alt={designSystem.reference.fullColorSystem.alts[1]}
              />
            </div>
          </div>

          <div className="mt-10 grid max-w-2xl gap-6">
            <CroppedCapture
              src={icons}
              alt={designSystem.reference.icons.alt}
              caption={designSystem.reference.icons.caption ?? ""}
            />
            <div>
              <p className="font-mono text-2xs tracking-widest text-brand uppercase">
                {designSystem.reference.icons.label}
              </p>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
                <Paragraphs
                  paragraphs={designSystem.reference.icons.paragraphs}
                />
              </div>
            </div>
          </div>

          <div className="mt-10 grid max-w-2xl gap-6">
            <div>
              <p className="font-mono text-2xs tracking-widest text-brand uppercase">
                {designSystem.reference.layout.label}
              </p>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
                <Paragraphs
                  paragraphs={designSystem.reference.layout.paragraphs}
                />
              </div>
            </div>
            <AssetChecklist
              label={designSystem.reference.layout.label}
              status={designSystem.reference.layout.assetStatus}
              missing={designSystem.reference.layout.missingAssets.map(
                (filename) => ({
                  filename,
                  description: designSystem.reference.layout.missingDescription,
                }),
              )}
            />
          </div>

          <div className="mt-10 grid max-w-2xl gap-6">
            <AssetFrame
              src={elevationSteps}
              alt={designSystem.reference.elevation.alt}
              className="aspect-[4/3]"
            />
            <div>
              <p className="font-mono text-2xs tracking-widest text-brand uppercase">
                {designSystem.reference.elevation.label}
              </p>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
                <Paragraphs
                  paragraphs={designSystem.reference.elevation.paragraphs}
                />
              </div>
            </div>
          </div>

          <div className="mt-10 grid max-w-2xl gap-6">
            <CroppedCapture
              src={palette}
              alt={designSystem.reference.tokenPalette.alt}
              caption={designSystem.reference.tokenPalette.caption ?? ""}
              aspectClassName="aspect-[3/2]"
              zoomClassName="scale-100"
              positionClassName="object-top"
            />
            <div>
              <p className="font-mono text-2xs tracking-widest text-brand uppercase">
                {designSystem.reference.tokenPalette.label}
              </p>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
                <Paragraphs
                  paragraphs={designSystem.reference.tokenPalette.paragraphs}
                />
              </div>
            </div>
          </div>

          <div className="mt-10 grid max-w-2xl gap-6">
            <div>
              <p className="font-mono text-2xs tracking-widest text-brand uppercase">
                {designSystem.reference.tokenSchemes.label}
              </p>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
                <Paragraphs
                  paragraphs={designSystem.reference.tokenSchemes.paragraphs}
                />
              </div>
            </div>
            <CroppedCapture
              src={schemes}
              alt={designSystem.reference.tokenSchemes.alt}
              caption={designSystem.reference.tokenSchemes.caption ?? ""}
              aspectClassName="aspect-[4/3]"
              zoomClassName="scale-100"
              positionClassName="object-top"
            />
          </div>

          <div className="mt-10 grid max-w-2xl gap-6">
            <CroppedCapture
              src={tokensStudio}
              alt={designSystem.reference.tokenTooling.alt}
              caption={designSystem.reference.tokenTooling.caption ?? ""}
              aspectClassName="aspect-[3/4]"
              zoomClassName="scale-[1.15]"
              positionClassName="object-[70%_35%]"
              className="max-w-sm"
            />
            <div>
              <p className="font-mono text-2xs tracking-widest text-brand uppercase">
                {designSystem.reference.tokenTooling.label}
              </p>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
                <Paragraphs
                  paragraphs={designSystem.reference.tokenTooling.paragraphs}
                />
              </div>
            </div>
          </div>

          <div className="mt-10 max-w-2xl">
            <p className="font-mono text-2xs tracking-widest text-brand uppercase">
              {designSystem.reference.tokenCode.label}
            </p>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
              <Paragraphs
                paragraphs={designSystem.reference.tokenCode.paragraphs}
              />
            </div>
            <figure className="mt-6">
              <div className="aspect-[16/9] w-full overflow-hidden border border-border bg-secondary/50 md:aspect-[21/9]">
                <img
                  src={tokensCode}
                  alt={designSystem.reference.tokenCode.alt}
                  loading="lazy"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <figcaption className="mt-3 font-mono text-2xs tracking-widest text-muted-foreground uppercase">
                {designSystem.reference.tokenCode.caption}
              </figcaption>
            </figure>
          </div>
        </CaseStudyDisclosure>

        <CaseStudyDisclosure
          summary={execution.detailsSummary}
          className="mt-8"
        >
          <div>
            <p className="font-mono text-2xs tracking-widest text-brand uppercase">
              {execution.reference.angularPickers.label}
            </p>
            <div className="mt-4 max-w-2xl space-y-4 text-base leading-relaxed text-muted-foreground">
              <Paragraphs
                paragraphs={execution.reference.angularPickers.paragraphs}
              />
            </div>
            {/* Full documentation sheet (1328×2858), shown whole rather
                than cropped; narrow column keeps its height in check and
                the zoom makes the building-block states legible. */}
            <motion.figure
              {...(shouldReduceMotion ? { initial: false } : REVEAL())}
              className="mt-6 max-w-sm"
            >
              <CaseStudyImage
                src={pickers}
                alt={execution.reference.angularPickers.alt}
                zoomable
                width={1328}
                height={2858}
              />
              <figcaption className="mt-3 font-mono text-2xs tracking-widest text-muted-foreground uppercase">
                {execution.reference.angularPickers.caption}
              </figcaption>
            </motion.figure>
          </div>

          <div className="mt-10">
            <p className="font-mono text-2xs tracking-widest text-brand uppercase">
              {execution.reference.angularSheets.label}
            </p>
            <div className="mt-4 max-w-2xl space-y-4 text-base leading-relaxed text-muted-foreground">
              <Paragraphs
                paragraphs={execution.reference.angularSheets.paragraphs}
              />
            </div>
            {/* Three tall documentation sheets, shown whole. From `sm`, column
                widths follow each file's width/height ratio so all three share one
                height; below it they stack, capped so none runs endlessly. */}
            <div className="mt-6 grid max-w-2xl items-start gap-8 sm:grid-cols-[4584fr_3569fr_4448fr] sm:gap-4">
              {ANGULAR_SHEETS.map((sheet, index) => {
                const item = execution.reference.angularSheets.items[index]
                return (
                  <motion.figure
                    key={sheet.src}
                    {...(shouldReduceMotion
                      ? { initial: false }
                      : REVEAL(index * 0.08))}
                    className="mx-auto w-full max-w-xs sm:max-w-none"
                  >
                    <CaseStudyImage
                      src={sheet.src}
                      alt={item.alt}
                      zoomable
                      width={sheet.width}
                      height={sheet.height}
                    />
                    <figcaption className="mt-3 font-mono text-2xs tracking-widest text-muted-foreground uppercase">
                      {item.caption}
                    </figcaption>
                  </motion.figure>
                )
              })}
            </div>
          </div>

          <div className="mt-10">
            <p className="font-mono text-2xs tracking-widest text-brand uppercase">
              {execution.reference.sidebarFooter.label}
            </p>
            <div className="mt-4 max-w-2xl space-y-4 text-base leading-relaxed text-muted-foreground">
              <Paragraphs
                paragraphs={execution.reference.sidebarFooter.paragraphs}
              />
            </div>
            <CroppedCapture
              src={sidebar}
              alt={execution.reference.sidebarFooter.sidebarAlt}
              caption={execution.reference.sidebarFooter.sidebarCaption}
              className="mt-6 max-w-2xl"
              aspectClassName="aspect-[10/3]"
              zoomClassName="scale-100"
              positionClassName="object-top"
            />
            <CroppedCapture
              src={footer}
              alt={execution.reference.sidebarFooter.footerAlt}
              caption={execution.reference.sidebarFooter.footerCaption}
              className="mt-6 max-w-2xl"
              aspectClassName="aspect-[8/1]"
              zoomClassName="scale-100"
              positionClassName="object-top"
            />
          </div>

          <div className="mt-10">
            <p className="font-mono text-2xs tracking-widest text-brand uppercase">
              {execution.reference.atomicRadio.label}
            </p>
            <div className="mt-4 max-w-2xl space-y-4 text-base leading-relaxed text-muted-foreground">
              <Paragraphs
                paragraphs={execution.reference.atomicRadio.paragraphs}
              />
            </div>
            <CroppedCapture
              src={radio}
              alt={execution.reference.atomicRadio.alt}
              caption={execution.reference.atomicRadio.caption}
              className="mt-6 max-w-2xl"
              aspectClassName="aspect-[7/2]"
              zoomClassName="scale-[3.26]"
              positionClassName="object-[50%_75%]"
            />
          </div>

          <div className="mt-10">
            <p className="font-mono text-2xs tracking-widest text-brand uppercase">
              {execution.reference.responsiveLanguage.label}
            </p>
            <div className="mt-4 max-w-2xl space-y-4 text-base leading-relaxed text-muted-foreground">
              <Paragraphs
                paragraphs={execution.reference.responsiveLanguage.paragraphs}
              />
            </div>
            <CroppedCapture
              src={languageAsset}
              alt={execution.reference.responsiveLanguage.alt}
              caption={execution.reference.responsiveLanguage.caption}
              className="mt-6 max-w-sm"
              aspectClassName="aspect-[5/12]"
              zoomClassName="scale-[1.23]"
              positionClassName="object-[53%_50%]"
            />
          </div>

          <div className="mt-10">
            <p className="font-mono text-2xs tracking-widest text-brand uppercase">
              {execution.reference.statesInputs.label}
            </p>
            <div className="mt-4 max-w-2xl space-y-4 text-base leading-relaxed text-muted-foreground">
              <Paragraphs
                paragraphs={execution.reference.statesInputs.paragraphs}
              />
            </div>
            <CroppedCapture
              src={inputs}
              alt={execution.reference.statesInputs.alt}
              caption={execution.reference.statesInputs.caption}
              className="mt-6 max-w-2xl"
              aspectClassName="aspect-[21/9]"
              zoomClassName="scale-[1.35]"
              positionClassName="object-[30%_15%]"
            />
          </div>

          <div className="mt-10 grid max-w-2xl gap-6">
            <CroppedCapture
              src={stepperZoom}
              alt={execution.reference.vocabularyStepper.alt}
              caption={execution.reference.vocabularyStepper.caption}
              aspectClassName="aspect-[16/9]"
              zoomClassName="scale-[1.15]"
              positionClassName="object-[45%_35%]"
            />
            <div>
              <p className="font-mono text-2xs tracking-widest text-brand uppercase">
                {execution.reference.vocabularyStepper.label}
              </p>
              <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
                <Paragraphs
                  paragraphs={execution.reference.vocabularyStepper.paragraphs}
                />
              </div>
            </div>
          </div>
        </CaseStudyDisclosure>
      </Container>
    </Section>
  )
}

export { KeyDecisions }
