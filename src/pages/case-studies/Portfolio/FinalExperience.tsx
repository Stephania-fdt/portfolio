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
import workCardCapture from "@/assets/case-studies/portfolio/work-card-detail.png"
import desktopCapture from "@/assets/case-studies/portfolio/responsive-desktop.png"
import tabletCapture from "@/assets/case-studies/portfolio/responsive-tablet.png"
import mobileCapture from "@/assets/case-studies/portfolio/responsive-mobile.png"
import { portfolioPageContent } from "@/content/case-studies/portfolio-page"
import { getLocalizedContent, useLanguage } from "@/i18n"

/**
 * Portfolio case study — Chapter 7, Final Experience. Replaces the
 * screenshot halves of two former chapters (Design System's component
 * captures, Responsive Design's viewport captures) with one gallery: the
 * real product, real captures, no mockups. Captions name the decision
 * each capture proves rather than describing what's already visible —
 * the reasoning already happened in Key Design Decisions above; this
 * section is where the reader checks it against the real thing.
 */
function FinalExperience() {
  const { language } = useLanguage()
  const content = getLocalizedContent(
    portfolioPageContent,
    language,
  ).finalExperience
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="portfolio-final-experience">
      <Container size="content">
        <SectionKicker>{content.kicker}</SectionKicker>

        <SubsectionText className="mt-8 max-w-2xl text-lg">
          <p>{content.introduction}</p>
        </SubsectionText>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          <div>
            <AssetFrame src={navCapture} alt={content.navAlt} />
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
              {content.navCaption}
            </p>
          </div>
          <div>
            <AssetFrame src={workCardCapture} alt={content.cardAlt} />
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
              {content.cardCaption}
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          <motion.figure
            {...(shouldReduceMotion ? { initial: false } : REVEAL())}
            className="md:col-span-2"
          >
            <div className="w-full overflow-hidden border border-border bg-secondary/50">
              <img
                src={desktopCapture}
                alt={content.desktopAlt}
                loading="lazy"
                className="h-full w-full object-cover object-top"
              />
            </div>
            <figcaption className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {content.desktopCaption}
            </figcaption>
          </motion.figure>

          <motion.figure
            {...(shouldReduceMotion ? { initial: false } : REVEAL(0.08))}
          >
            <div className="aspect-[3/4] w-full overflow-hidden border border-border bg-secondary/50">
              <img
                src={tabletCapture}
                alt={content.tabletAlt}
                loading="lazy"
                className="h-full w-full object-cover object-top"
              />
            </div>
            <figcaption className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {content.tabletCaption}
            </figcaption>
          </motion.figure>

          <motion.figure
            {...(shouldReduceMotion ? { initial: false } : REVEAL(0.16))}
          >
            <div className="aspect-[3/4] w-full overflow-hidden border border-border bg-secondary/50">
              <img
                src={mobileCapture}
                alt={content.mobileAlt}
                loading="lazy"
                className="h-full w-full object-cover object-top"
              />
            </div>
            <figcaption className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {content.mobileCaption}
            </figcaption>
          </motion.figure>
        </div>
      </Container>
    </Section>
  )
}

export { FinalExperience }
