import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import { REVEAL, SubsectionText } from "@/components/ui/case-study-capture"
import desktopCapture from "@/assets/case-studies/portfolio/responsive-desktop.png"
import tabletCapture from "@/assets/case-studies/portfolio/responsive-tablet.png"
import mobileCapture from "@/assets/case-studies/portfolio/responsive-mobile.png"
import { portfolioPageContent } from "@/content/case-studies/portfolio-page"
import { getLocalizedContent, useLanguage } from "@/i18n"

/**
 * Portfolio case study — Chapter 10, Responsive Design. Three real
 * screenshots of the same section (Selected Work, chosen because it's
 * the site's most structurally complex one — asymmetric image/text
 * columns, a three-tier hierarchy) at desktop, tablet and mobile, not
 * illustrative mockups.
 */
function Responsive() {
  const { language } = useLanguage()
  const content = getLocalizedContent(portfolioPageContent, language).responsive
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="portfolio-responsive">
      <Container size="content">
        <SectionKicker>{content.kicker}</SectionKicker>

        <SubsectionText className="mt-8 max-w-2xl text-lg">
          <p>{content.paragraph}</p>
        </SubsectionText>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          <motion.figure
            {...(shouldReduceMotion ? { initial: false } : REVEAL())}
            className="md:col-span-2"
          >
            <div className="w-full overflow-hidden border border-border bg-secondary/50">
              <img
                src={desktopCapture}
                alt={content.alts[0]}
                loading="lazy"
                className="h-full w-full object-cover object-top"
              />
            </div>
            <figcaption className="mt-3 font-mono text-2xs tracking-widest text-muted-foreground uppercase">
              {content.captions[0]}
            </figcaption>
          </motion.figure>

          <motion.figure
            {...(shouldReduceMotion ? { initial: false } : REVEAL(0.08))}
          >
            <div className="aspect-[3/4] w-full overflow-hidden border border-border bg-secondary/50">
              <img
                src={tabletCapture}
                alt={content.alts[1]}
                loading="lazy"
                className="h-full w-full object-cover object-top"
              />
            </div>
            <figcaption className="mt-3 font-mono text-2xs tracking-widest text-muted-foreground uppercase">
              {content.captions[1]}
            </figcaption>
          </motion.figure>

          <motion.figure
            {...(shouldReduceMotion ? { initial: false } : REVEAL(0.16))}
          >
            <div className="aspect-[3/4] w-full overflow-hidden border border-border bg-secondary/50">
              <img
                src={mobileCapture}
                alt={content.alts[2]}
                loading="lazy"
                className="h-full w-full object-cover object-top"
              />
            </div>
            <figcaption className="mt-3 font-mono text-2xs tracking-widest text-muted-foreground uppercase">
              {content.captions[2]}
            </figcaption>
          </motion.figure>
        </div>
      </Container>
    </Section>
  )
}

export { Responsive }
