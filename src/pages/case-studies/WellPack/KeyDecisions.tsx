import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import {
  REVEAL,
  SubsectionText,
  AssetFrame,
  DecisionHeading,
} from "@/components/ui/case-study-capture"
import { CaseStudyImage } from "@/components/ui/case-study-image"
import portraitChinois from "@/assets/case-studies/wellpack/01-strategy/Strategy_portrait chinois.png"
import laMarque from "@/assets/case-studies/wellpack/01-strategy/Strategy_la marque.png"
import logoSheet from "@/assets/case-studies/wellpack/02-brand/logo/logo_fond.png"
import website from "@/assets/case-studies/wellpack/02-brand/supports/Declinaisaon_siteweb.png"
import { wellPackPageContent } from "@/content/case-studies/wellpack-page"
import { getLocalizedContent, useLanguage } from "@/i18n"

/**
 * Editorial restructure (chapter C of 5): two named decisions replace
 * the former Method, Brief and Brand chapters. The Method and the Brief
 * it produced were always one continuous decision (research → brief),
 * not two; applying that same discipline to WellPack's own brand is the
 * second. Positioning and logo sit side by side (two comparable
 * artifacts, read together), then the site application gets its own
 * balanced, zoomable composition — not a paragraph/image column.
 */
function KeyDecisions() {
  const { language } = useLanguage()
  const content = getLocalizedContent(wellPackPageContent, language).decisions
  const shouldReduceMotion = useReducedMotion()
  const { methodBrief, brand } = content

  return (
    <Section id="wellpack-decisions" spacing="sm">
      <Container size="content">
        <SectionKicker>{content.kicker}</SectionKicker>

        <motion.p
          {...(shouldReduceMotion ? { initial: false } : REVEAL())}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground"
        >
          {content.intro}
        </motion.p>

        {/* Decision 1 — the method, and the brief it produced */}
        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
          <div className="lg:col-span-7">
            <DecisionHeading index={1} title={methodBrief.label} />
            <SubsectionText className="mt-4 max-w-md">
              {methodBrief.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </SubsectionText>
          </div>
          <div className="lg:col-span-5">
            <AssetFrame src={portraitChinois} alt={methodBrief.alt} />
            <p className="mt-3 font-mono text-2xs tracking-widest text-muted-foreground uppercase">
              {methodBrief.caption}
            </p>
          </div>
        </div>

        {/* Decision 2 — applying it to the brand itself */}
        <div className="mt-16">
          <DecisionHeading index={2} title={brand.label} />
          <motion.p
            {...(shouldReduceMotion ? { initial: false } : REVEAL())}
            className="mt-4 max-w-2xl text-lg leading-relaxed text-foreground"
          >
            {brand.introduction}
          </motion.p>

          <SubsectionText className="mt-6 max-w-2xl">
            <p>{brand.paragraphs[0]}</p>
            <p>{brand.paragraphs[1]}</p>
          </SubsectionText>

          {/* Positioning and logo — two comparable artifacts, read side by side */}
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <AssetFrame src={laMarque} alt={brand.alts[0]} />
              <p className="mt-3 font-mono text-2xs tracking-widest text-muted-foreground uppercase">
                {brand.captions[0]}
              </p>
            </div>
            <div>
              <AssetFrame src={logoSheet} alt={brand.alts[1]} />
              <p className="mt-3 font-mono text-2xs tracking-widest text-muted-foreground uppercase">
                {brand.captions[1]}
              </p>
            </div>
          </div>

          {/* The application — text beside a balanced, zoomable crop */}
          <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <SubsectionText className="max-w-md">
                <p>{brand.paragraphs[2]}</p>
              </SubsectionText>
            </div>
            <div className="lg:col-span-8">
              <CaseStudyImage
                src={website}
                alt={brand.alts[2]}
                zoomable
                cropAspectClassName="aspect-[4/3]"
                cropZoomClassName="scale-100"
                cropPositionClassName="object-[2%_0%]"
              />
              <p className="mt-3 font-mono text-2xs tracking-widest text-muted-foreground uppercase">
                {brand.captions[2]}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}

export { KeyDecisions }
