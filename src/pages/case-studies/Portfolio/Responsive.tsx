import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import { REVEAL, SubsectionText } from "@/components/ui/case-study-capture"
import desktopCapture from "@/assets/case-studies/portfolio/responsive-desktop.png"
import tabletCapture from "@/assets/case-studies/portfolio/responsive-tablet.png"
import mobileCapture from "@/assets/case-studies/portfolio/responsive-mobile.png"

/**
 * Portfolio case study — Chapter 10, Responsive Design. Three real
 * screenshots of the same section (Selected Work, chosen because it's
 * the site's most structurally complex one — asymmetric image/text
 * columns, a three-tier hierarchy) at desktop, tablet and mobile, not
 * illustrative mockups.
 */
function Responsive() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="portfolio-responsive">
      <Container size="content">
        <SectionKicker>Responsive Design</SectionKicker>

        <SubsectionText className="mt-8 max-w-2xl text-lg">
          <p>
            Desktop is where the asymmetric composition happens — a
            project&rsquo;s text and image columns sit side by side, mirrored
            every other row. Below the md breakpoint, every row collapses to a
            single column, image above text, in source order — no information
            hidden, nothing requiring horizontal scroll. Mobile also swaps the
            inline nav links for the INDEX dialog, visible in the capture below.
          </p>
        </SubsectionText>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          <motion.figure
            {...(shouldReduceMotion ? { initial: false } : REVEAL())}
            className="md:col-span-2"
          >
            <div className="w-full overflow-hidden border border-border bg-secondary/50">
              <img
                src={desktopCapture}
                alt="Selected Work at 1440px — SPF's lead entry with a wide two-column layout, image and text side by side."
                loading="lazy"
                className="h-full w-full object-cover object-top"
              />
            </div>
            <figcaption className="mt-3 font-mono text-2xs tracking-widest text-muted-foreground uppercase">
              1440px — asymmetric two-column composition.
            </figcaption>
          </motion.figure>

          <motion.figure
            {...(shouldReduceMotion ? { initial: false } : REVEAL(0.08))}
          >
            <div className="aspect-[3/4] w-full overflow-hidden border border-border bg-secondary/50">
              <img
                src={tabletCapture}
                alt="Selected Work at 768px — the same section, columns still side by side but narrower."
                loading="lazy"
                className="h-full w-full object-cover object-top"
              />
            </div>
            <figcaption className="mt-3 font-mono text-2xs tracking-widest text-muted-foreground uppercase">
              768px — tablet.
            </figcaption>
          </motion.figure>

          <motion.figure
            {...(shouldReduceMotion ? { initial: false } : REVEAL(0.16))}
          >
            <div className="aspect-[3/4] w-full overflow-hidden border border-border bg-secondary/50">
              <img
                src={mobileCapture}
                alt="Selected Work at 375px — a single stacked column, image above text, and the INDEX dialog trigger replacing the inline nav links."
                loading="lazy"
                className="h-full w-full object-cover object-top"
              />
            </div>
            <figcaption className="mt-3 font-mono text-2xs tracking-widest text-muted-foreground uppercase">
              375px — mobile, INDEX navigation visible.
            </figcaption>
          </motion.figure>
        </div>
      </Container>
    </Section>
  )
}

export { Responsive }
