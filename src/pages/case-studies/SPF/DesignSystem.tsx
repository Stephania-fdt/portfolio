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
import { CaseStudyDisclosure } from "@/components/ui/case-study-disclosure"
import typography from "@/assets/case-studies/spf/foundations/TYPOGRAPHY.png"
import icons from "@/assets/case-studies/spf/foundations/icons.png"
import accentColors from "@/assets/case-studies/spf/accessibility/Accent-colors.png"
import systemColors from "@/assets/case-studies/spf/accessibility/KeyColors-tones.png"
import tones from "@/assets/case-studies/spf/accessibility/TONES.png"
import elevationSteps from "@/assets/case-studies/spf/foundations/elevation.png"
import tokensStudio from "@/assets/case-studies/spf/tokens/tokens2.png"
import tokensCode from "@/assets/case-studies/spf/tokens/code_tokens-theme.png"
import palette from "@/assets/case-studies/spf/tokens/variables.png"
import schemes from "@/assets/case-studies/spf/tokens/variables2.png"
import { spfDesignSystemContent } from "@/content/case-studies/spf-design-system"
import { getLocalizedContent, useLanguage } from "@/i18n"

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
 * SPF case study — The Design System. Merges the former Foundations and
 * Tokens chapters: the problem (no shared visual language, tokens that
 * have to survive being used by someone else), the system decision
 * (role-based color, checked per contrast mode), one real proof in the
 * main flow — everything else behind "Design system reference," where
 * the original chapters' full asset set still lives, unchanged.
 */
function DesignSystem() {
  const { language } = useLanguage()
  const content = getLocalizedContent(spfDesignSystemContent, language)
  const { reference } = content
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="spf-design-system">
      <Container size="content">
        <SectionKicker>{content.kicker}</SectionKicker>

        <motion.p
          {...(shouldReduceMotion ? { initial: false } : REVEAL())}
          className="mt-8 max-w-2xl text-xl leading-snug font-medium text-foreground md:text-2xl"
        >
          {content.introduction}
        </motion.p>

        {/* Color, resolved by role — the one design-system proof in the main flow */}
        <div className="mt-24">
          <p className="font-mono text-2xs tracking-widest text-brand uppercase">
            {content.colorRoles.label}
          </p>
          <SubsectionText className="mt-4 max-w-2xl">
            <Paragraphs paragraphs={content.colorRoles.paragraphs} />
          </SubsectionText>
          <AssetFrame
            src={accentColors}
            alt={content.colorRoles.alt}
            className="mt-10 max-w-2xl"
          />
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {content.colorRoles.caption}
          </p>
        </div>

        {/* One system, four modes — the token architecture, told in numbers, no image needed */}
        <div className="mt-24 max-w-2xl">
          <p className="font-mono text-2xs tracking-widest text-brand uppercase">
            {content.system.label}
          </p>
          <SubsectionText className="mt-4">
            <Paragraphs paragraphs={content.system.paragraphs} />
          </SubsectionText>
        </div>

        <motion.p
          {...(shouldReduceMotion ? { initial: false } : REVEAL())}
          className="mt-16 max-w-2xl text-xl leading-snug font-medium text-foreground italic md:text-2xl"
        >
          {content.conclusion}
        </motion.p>

        <CaseStudyDisclosure summary={content.detailsSummary}>
          {/* Typography */}
          <div>
            <p className="font-mono text-2xs tracking-widest text-brand uppercase">
              {reference.typography.label}
            </p>
            <SubsectionText className="mt-4 max-w-2xl">
              <Paragraphs paragraphs={reference.typography.paragraphs} />
            </SubsectionText>
            <CroppedCapture
              src={typography}
              alt={reference.typography.alt}
              caption={reference.typography.caption ?? ""}
              className="mt-8 max-w-2xl"
              aspectClassName="aspect-[5/1]"
              zoomClassName="scale-[1.68]"
              positionClassName="object-[50%_0%]"
            />
          </div>

          {/* Full tonal system */}
          <div className="mt-14">
            <p className="font-mono text-2xs tracking-widest text-brand uppercase">
              {reference.fullColorSystem.label}
            </p>
            <SubsectionText className="mt-4 max-w-2xl">
              <Paragraphs paragraphs={reference.fullColorSystem.paragraphs} />
            </SubsectionText>
            <div className="mt-8 grid max-w-2xl gap-8">
              <AssetFrame
                src={systemColors}
                alt={reference.fullColorSystem.alts[0]}
              />
              <AssetFrame src={tones} alt={reference.fullColorSystem.alts[1]} />
            </div>
          </div>

          {/* Icons */}
          <div className="mt-14 grid max-w-2xl gap-8">
            <CroppedCapture
              src={icons}
              alt={reference.icons.alt}
              caption={reference.icons.caption ?? ""}
            />
            <div>
              <p className="font-mono text-2xs tracking-widest text-brand uppercase">
                {reference.icons.label}
              </p>
              <SubsectionText className="mt-4">
                <Paragraphs paragraphs={reference.icons.paragraphs} />
              </SubsectionText>
            </div>
          </div>

          {/* Layout & Grid — honest gap */}
          <div className="mt-14 grid max-w-2xl gap-8">
            <div>
              <p className="font-mono text-2xs tracking-widest text-brand uppercase">
                {reference.layout.label}
              </p>
              <SubsectionText className="mt-4">
                <Paragraphs paragraphs={reference.layout.paragraphs} />
              </SubsectionText>
            </div>
            <AssetChecklist
              label={reference.layout.label}
              status={reference.layout.assetStatus}
              missing={reference.layout.missingAssets.map((filename) => ({
                filename,
                description: reference.layout.missingDescription,
              }))}
            />
          </div>

          {/* Elevation */}
          <div className="mt-14 grid max-w-2xl gap-8">
            <AssetFrame
              src={elevationSteps}
              alt={reference.elevation.alt}
              className="aspect-[4/3]"
            />
            <div>
              <p className="font-mono text-2xs tracking-widest text-brand uppercase">
                {reference.elevation.label}
              </p>
              <SubsectionText className="mt-4">
                <Paragraphs paragraphs={reference.elevation.paragraphs} />
              </SubsectionText>
            </div>
          </div>

          {/* Token architecture: palette */}
          <div className="mt-14 grid max-w-2xl gap-8">
            <CroppedCapture
              src={palette}
              alt={reference.tokenPalette.alt}
              caption={reference.tokenPalette.caption ?? ""}
              aspectClassName="aspect-[3/2]"
              zoomClassName="scale-100"
              positionClassName="object-top"
            />
            <div>
              <p className="font-mono text-2xs tracking-widest text-brand uppercase">
                {reference.tokenPalette.label}
              </p>
              <SubsectionText className="mt-4">
                <Paragraphs paragraphs={reference.tokenPalette.paragraphs} />
              </SubsectionText>
            </div>
          </div>

          {/* Token architecture: schemes */}
          <div className="mt-14 grid max-w-2xl gap-8">
            <div>
              <p className="font-mono text-2xs tracking-widest text-brand uppercase">
                {reference.tokenSchemes.label}
              </p>
              <SubsectionText className="mt-4">
                <Paragraphs paragraphs={reference.tokenSchemes.paragraphs} />
              </SubsectionText>
            </div>
            <CroppedCapture
              src={schemes}
              alt={reference.tokenSchemes.alt}
              caption={reference.tokenSchemes.caption ?? ""}
              aspectClassName="aspect-[4/3]"
              zoomClassName="scale-100"
              positionClassName="object-top"
            />
          </div>

          {/* Token architecture: tooling */}
          <div className="mt-14 grid max-w-2xl gap-8">
            <CroppedCapture
              src={tokensStudio}
              alt={reference.tokenTooling.alt}
              caption={reference.tokenTooling.caption ?? ""}
              aspectClassName="aspect-[3/4]"
              zoomClassName="scale-[1.15]"
              positionClassName="object-[70%_35%]"
              className="max-w-sm"
            />
            <div>
              <p className="font-mono text-2xs tracking-widest text-brand uppercase">
                {reference.tokenTooling.label}
              </p>
              <SubsectionText className="mt-4">
                <Paragraphs paragraphs={reference.tokenTooling.paragraphs} />
              </SubsectionText>
            </div>
          </div>

          {/* Token architecture: exported code */}
          <div className="mt-14 max-w-2xl">
            <p className="font-mono text-2xs tracking-widest text-brand uppercase">
              {reference.tokenCode.label}
            </p>
            <SubsectionText className="mt-4">
              <Paragraphs paragraphs={reference.tokenCode.paragraphs} />
            </SubsectionText>
            <figure className="mt-8">
              <div className="aspect-[16/9] w-full overflow-hidden border border-border bg-secondary/50 md:aspect-[21/9]">
                <img
                  src={tokensCode}
                  alt={reference.tokenCode.alt}
                  loading="lazy"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <figcaption className="mt-3 font-mono text-2xs tracking-widest text-muted-foreground uppercase">
                {reference.tokenCode.caption}
              </figcaption>
            </figure>
          </div>
        </CaseStudyDisclosure>
      </Container>
    </Section>
  )
}

export { DesignSystem }
