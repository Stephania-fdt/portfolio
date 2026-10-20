import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import { REVEAL } from "@/components/ui/case-study-capture"
import { CaseStudyImage } from "@/components/ui/case-study-image"
import { AnnotationMark } from "@/pages/case-studies/SPF/illustrations"
import authDesktop from "@/assets/case-studies/spf/product/Desktop_WelcomeBack.png"
import authMobile from "@/assets/case-studies/spf/product/Mobile_authenticate.png"
import authTablet from "@/assets/case-studies/spf/product/Tablet_authenticate.png"
import portal from "@/assets/case-studies/spf/product/Wireframes.png"
import faq from "@/assets/case-studies/spf/product/Wireframes (2).png"
import { spfPageContent } from "@/content/case-studies/spf-page"
import { spfExecutionContent } from "@/content/case-studies/spf-execution"
import { getLocalizedContent, useLanguage } from "@/i18n"

/**
 * Editorial restructure (chapter D of 5): the assembled auth screen leads
 * full-width — the clearest single proof the system holds a real page
 * together — then a supporting gallery, then the FAQ closes the chapter
 * beside the outcome line instead of sitting disconnected below a flat
 * grid. Every image is zoomable (visual-composition pass). The auth
 * screens render whole, uncropped: desktop sign-in first, then the
 * authentication choice at phone and tablet widths side by side — column
 * widths proportional to each file's aspect ratio (428:908 vs 600:797) so
 * both frames share one height without letterboxing.
 */
function Result() {
  const { language } = useLanguage()
  const content = getLocalizedContent(spfPageContent, language).result
  const { product } = getLocalizedContent(spfExecutionContent, language)
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="spf-result" spacing="sm">
      <Container size="content">
        <SectionKicker>{content.kicker}</SectionKicker>

        <motion.p
          {...(shouldReduceMotion ? { initial: false } : REVEAL())}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground"
        >
          {content.intro}
        </motion.p>

        <motion.figure
          {...(shouldReduceMotion ? { initial: false } : REVEAL())}
          className="mt-10"
        >
          <div className="relative mx-auto max-w-2xl">
            <AnnotationMark
              flip
              className="absolute -top-3 -right-3 z-10 hidden sm:block"
            />
            <CaseStudyImage
              src={authDesktop}
              alt={product.authAlts[0]}
              zoomable
              width={905}
              height={680}
            />
          </div>
          <figcaption className="mt-3 font-mono text-2xs tracking-widest text-muted-foreground uppercase">
            {product.authCaptions[0]}
          </figcaption>
        </motion.figure>

        <motion.figure
          {...(shouldReduceMotion ? { initial: false } : REVEAL())}
          className="mx-auto mt-10 max-w-2xl"
        >
          <div className="grid items-start gap-6 sm:grid-cols-[471fr_753fr] sm:gap-4">
            <CaseStudyImage
              src={authMobile}
              alt={product.authAlts[1]}
              zoomable
              width={428}
              height={908}
              className="mx-auto w-full max-w-xs sm:max-w-none"
            />
            <CaseStudyImage
              src={authTablet}
              alt={product.authAlts[2]}
              zoomable
              width={600}
              height={797}
              className="mx-auto w-full max-w-sm sm:max-w-none"
            />
          </div>
          <figcaption className="mt-3 font-mono text-2xs tracking-widest text-muted-foreground uppercase">
            {product.authCaptions[1]}
          </figcaption>
        </motion.figure>

        <div className="mx-auto mt-10 max-w-2xl">
          <figure>
            <CaseStudyImage
              src={portal}
              alt={product.portalAlt}
              zoomable
              cropAspectClassName="aspect-[4/3]"
              cropZoomClassName="scale-100"
              cropPositionClassName="object-top"
            />
            <figcaption className="mt-3 font-mono text-2xs tracking-widest text-muted-foreground uppercase">
              {product.portalCaption}
            </figcaption>
          </figure>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <figure>
              <CaseStudyImage
                src={faq}
                alt={product.faqAlt}
                zoomable
                cropAspectClassName="aspect-[4/3]"
                cropZoomClassName="scale-100"
                cropPositionClassName="object-top"
              />
              <figcaption className="mt-3 font-mono text-2xs tracking-widest text-muted-foreground uppercase">
                {product.faqCaption}
              </figcaption>
            </figure>
          </div>
          <motion.p
            {...(shouldReduceMotion ? { initial: false } : REVEAL())}
            className="max-w-md self-center text-lg leading-relaxed text-foreground lg:col-span-7"
          >
            {content.outcome}
          </motion.p>
        </div>
      </Container>
    </Section>
  )
}

export { Result }
