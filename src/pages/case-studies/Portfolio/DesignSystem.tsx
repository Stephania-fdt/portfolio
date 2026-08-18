import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import {
  REVEAL,
  AssetFrame,
  SubsectionText,
} from "@/components/ui/case-study-capture"
import navCapture from "@/assets/case-studies/portfolio/nav.png"
import buttonsCapture from "@/assets/case-studies/portfolio/buttons.png"
import workCardCapture from "@/assets/case-studies/portfolio/work-card-detail.png"
import { LocalizedRichText } from "@/components/ui/localized-rich-text"
import { portfolioDesignSystemContent } from "@/content/case-studies/portfolio-design-system"
import { getLocalizedContent, useLanguage } from "@/i18n"

/** Real values, copied directly from `src/index.css` — nothing here is invented. */
const COLOR_TOKENS = [
  { name: "background", value: "#faf8f5" },
  { name: "foreground", value: "#141414" },
  { name: "brand", value: "#590f29" },
  { name: "secondary", value: "#e7ded3" },
  { name: "accent", value: "#92a8d1" },
  { name: "border", value: "#ece8e2" },
]

const TYPE_TOKENS = [
  { name: "--font-heading", value: "General Sans" },
  { name: "--font-sans", value: "Inter" },
  { name: "--font-mono", value: "IBM Plex Mono" },
]

const SPACING_TOKENS = [
  { name: "--spacing-container", value: "clamp(1.25rem, 4vw, 4rem)" },
  { name: "--spacing-section", value: "clamp(5rem, 10vw, 9rem)" },
  { name: "--spacing-section-sm", value: "clamp(2rem, 5vw, 4rem)" },
]

const MOTION_TOKENS = [
  { name: "--ease-standard", value: "cubic-bezier(0.22, 1, 0.36, 1)" },
  { name: "--duration-fast", value: "150ms" },
  { name: "--duration-standard", value: "250ms" },
  { name: "--duration-slow", value: "400ms" },
]

/**
 * Portfolio case study — Chapter 6, Design System. Real tokens, copied
 * verbatim from `src/index.css` — no invented values — paired with three
 * real screenshots of the implementation actually running (navigation,
 * buttons, a Selected Work project card). Layout/grid and responsive
 * behavior are named here but detailed in their own later chapters
 * (Front-end Implementation, Responsive Design) rather than repeated.
 */
function DesignSystem() {
  const { language } = useLanguage()
  const content = getLocalizedContent(portfolioDesignSystemContent, language)
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="portfolio-design-system">
      <Container size="content">
        <SectionKicker>{content.kicker}</SectionKicker>

        <motion.p
          {...(shouldReduceMotion ? { initial: false } : REVEAL())}
          className="mt-8 max-w-2xl text-xl leading-snug font-medium text-foreground md:text-2xl"
        >
          {content.introduction}
        </motion.p>

        {/* Typography */}
        <div className="mt-24">
          <p className="font-mono text-2xs tracking-widest text-brand uppercase">
            {content.typography.label}
          </p>
          <SubsectionText className="mt-4 max-w-2xl">
            <p>
              <LocalizedRichText text={content.typography.paragraph} />
            </p>
          </SubsectionText>
          <div className="mt-8 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-3">
            {TYPE_TOKENS.map((token) => (
              <div key={token.name} className="bg-background p-6">
                <p className="font-mono text-2xs text-muted-foreground">
                  {token.name}
                </p>
                <p className="mt-2 text-lg font-medium text-foreground">
                  {token.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Color system */}
        <div className="mt-24">
          <p className="font-mono text-2xs tracking-widest text-brand uppercase">
            {content.colors.label}
          </p>
          <SubsectionText className="mt-4 max-w-2xl">
            <p>
              <LocalizedRichText text={content.colors.paragraph} />
            </p>
          </SubsectionText>
          <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden border border-border bg-border sm:grid-cols-3 lg:grid-cols-6">
            {COLOR_TOKENS.map((token) => (
              <div key={token.name} className="bg-background p-4">
                <div
                  aria-hidden="true"
                  className="aspect-square w-full border border-border"
                  style={{ backgroundColor: token.value }}
                />
                <p className="mt-3 font-mono text-2xs text-muted-foreground">
                  {token.name}
                </p>
                <p className="font-mono text-2xs text-foreground">
                  {token.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Spacing */}
        <div className="mt-24 grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <p className="font-mono text-2xs tracking-widest text-brand uppercase">
              {content.spacing.label}
            </p>
            <SubsectionText className="mt-4">
              <p>
                <LocalizedRichText text={content.spacing.paragraph} />
              </p>
            </SubsectionText>
          </div>
          <div className="grid gap-px overflow-hidden border border-border bg-border">
            {SPACING_TOKENS.map((token) => (
              <div key={token.name} className="bg-background p-6">
                <p className="font-mono text-2xs text-muted-foreground">
                  {token.name}
                </p>
                <p className="mt-2 font-mono text-sm text-foreground">
                  {token.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Motion & interaction */}
        <div className="mt-24 grid gap-10 md:grid-cols-2 md:gap-16">
          <div className="grid gap-px overflow-hidden border border-border bg-border">
            {MOTION_TOKENS.map((token) => (
              <div key={token.name} className="bg-background p-6">
                <p className="font-mono text-2xs text-muted-foreground">
                  {token.name}
                </p>
                <p className="mt-2 font-mono text-sm text-foreground">
                  {token.value}
                </p>
              </div>
            ))}
          </div>
          <div>
            <p className="font-mono text-2xs tracking-widest text-brand uppercase">
              {content.motion.label}
            </p>
            <SubsectionText className="mt-4">
              <p>
                <LocalizedRichText text={content.motion.paragraph} />
              </p>
            </SubsectionText>
          </div>
        </div>

        {/* Components — real screenshots */}
        <div className="mt-24">
          <p className="font-mono text-2xs tracking-widest text-brand uppercase">
            {content.components.label}
          </p>
          <SubsectionText className="mt-4 max-w-2xl">
            <p>{content.components.paragraph}</p>
          </SubsectionText>

          <div className="mt-10 space-y-10">
            <div>
              <AssetFrame src={navCapture} alt={content.components.alts[0]} />
              <p className="mt-3 font-mono text-2xs tracking-widest text-muted-foreground uppercase">
                {content.components.captions[0]}
              </p>
            </div>

            <div>
              <AssetFrame
                src={buttonsCapture}
                alt={content.components.alts[1]}
                className="max-w-md"
              />
              <p className="mt-3 font-mono text-2xs tracking-widest text-muted-foreground uppercase">
                {content.components.captions[1]}
              </p>
            </div>

            <div>
              <AssetFrame
                src={workCardCapture}
                alt={content.components.alts[2]}
              />
              <p className="mt-3 font-mono text-2xs tracking-widest text-muted-foreground uppercase">
                {content.components.captions[2]}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export { DesignSystem }
