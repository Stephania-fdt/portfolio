import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import {
  REVEAL,
  SubsectionText,
  DecisionHeading,
} from "@/components/ui/case-study-capture"
import { CaseStudyImage } from "@/components/ui/case-study-image"
import { CaseStudyFacts } from "@/components/ui/case-study-facts"
import { CaseStudyDisclosure } from "@/components/ui/case-study-disclosure"
import { SectionSubBlock } from "@/pages/CaseStudy/CaseStudy"
import researchOverview from "@/assets/images/harmony/harmony-research.webp.jpg"
import appOnboarding from "@/assets/images/harmony/harmony-app-onboarding.webp.jpg"
import appDashboard from "@/assets/images/harmony/harmony-app-dashboard.webp.jpg"
import communityGamification1 from "@/assets/images/harmony/harmony-community-gamification-1.webp.jpg"
import communityGamification2 from "@/assets/images/harmony/harmony-community-gamification-2.webp.jpg"
import { harmonyCaseStudy } from "@/content/case-studies/harmony"
import { translateCaseStudy } from "@/content/case-studies/translate"
import { useLanguage } from "@/i18n"

/**
 * Visual-composition pass: the three decisions now lead with a real
 * heading (`DecisionHeading`) instead of a mono caption, and each sits
 * beside its own cropped screen rather than the full A4 annotated sheet
 * rendered at full column width — the single largest driver of Harmony's
 * excess height versus SPF at an equal word count (a portrait composite
 * sheet, uncropped, in a 2-column grid, forced ~900px of height per
 * decision). Every sheet is still zoomable at full, uncropped resolution
 * — nothing shown here is hidden, only sized to the part the paragraph
 * beside it is actually about.
 */
function KeyDecisions() {
  const { language } = useLanguage()
  const [, decisions] = translateCaseStudy(harmonyCaseStudy, language).sections
  const shouldReduceMotion = useReducedMotion()
  const [onboarding, dashboard, community] = decisions.subsections ?? []
  const researchImage = decisions.images?.[0]

  return (
    <Section id="harmony-decisions" spacing="sm">
      <Container size="content">
        <SectionKicker>{decisions.heading}</SectionKicker>

        <motion.p
          {...(shouldReduceMotion ? { initial: false } : REVEAL())}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground"
        >
          {decisions.paragraphs[0]}
        </motion.p>

        {decisions.facts && decisions.facts.length > 0 ? (
          <CaseStudyFacts facts={decisions.facts} />
        ) : null}

        {/* The evidence the three decisions below answer to */}
        {researchImage ? (
          <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
            <div className="lg:col-span-5">
              <p className="font-mono text-2xs tracking-widest text-brand uppercase">
                {researchImage.label}
              </p>
              <p className="mt-3 max-w-sm text-base leading-relaxed text-muted-foreground">
                {researchImage.caption}
              </p>
            </div>
            <div className="lg:col-span-7">
              <CaseStudyImage
                src={researchOverview}
                alt={researchImage.alt}
                zoomable
                cropAspectClassName="aspect-[3/2]"
                cropZoomClassName="scale-100"
                cropPositionClassName="object-top"
              />
            </div>
          </div>
        ) : null}

        {/* Decision 1 — Personalized Onboarding */}
        {onboarding ? (
          <div className="mt-16 grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
            <div className="lg:col-span-5">
              <DecisionHeading index={1} title={onboarding.title ?? ""} />
              <SubsectionText className="mt-4 max-w-md">
                {onboarding.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </SubsectionText>
            </div>
            <div className="lg:col-span-7">
              <CaseStudyImage
                src={appOnboarding}
                alt={onboarding.images?.[0]?.alt ?? ""}
                zoomable
                cropAspectClassName="aspect-[4/3]"
                cropZoomClassName="scale-[2.1]"
                cropPositionClassName="object-[50%_67%]"
              />
            </div>
          </div>
        ) : null}

        {/* Decision 2 — Dashboard & Progress Tracking */}
        {dashboard ? (
          <div className="mt-16 grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-12">
            <div className="lg:order-2 lg:col-span-5">
              <DecisionHeading index={2} title={dashboard.title ?? ""} />
              <SubsectionText className="mt-4 max-w-md">
                {dashboard.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </SubsectionText>
            </div>
            <div className="lg:order-1 lg:col-span-7">
              <CaseStudyImage
                src={appDashboard}
                alt={dashboard.images?.[0]?.alt ?? ""}
                zoomable
                cropAspectClassName="aspect-[16/10]"
                cropZoomClassName="scale-[1.4]"
                cropPositionClassName="object-[50%_30%]"
              />
            </div>
          </div>
        ) : null}

        {/* Decision 3 — Community & Gamification */}
        {community ? (
          <div className="mt-16">
            <DecisionHeading index={3} title={community.title ?? ""} />
            <SubsectionText className="mt-4 max-w-2xl">
              {community.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </SubsectionText>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <figure>
                <CaseStudyImage
                  src={communityGamification1}
                  alt={community.images?.[0]?.alt ?? ""}
                  zoomable
                  cropAspectClassName="aspect-[3/4]"
                  cropZoomClassName="scale-[3.1]"
                  cropPositionClassName="object-[85%_28%]"
                />
                <figcaption className="mt-3 font-mono text-2xs tracking-widest text-muted-foreground uppercase">
                  {community.images?.[0]?.label}
                </figcaption>
              </figure>
              <figure>
                <CaseStudyImage
                  src={communityGamification2}
                  alt={community.images?.[1]?.alt ?? ""}
                  zoomable
                  cropAspectClassName="aspect-[3/4]"
                  cropZoomClassName="scale-[1.6]"
                  cropPositionClassName="object-[15%_100%]"
                />
                <figcaption className="mt-3 font-mono text-2xs tracking-widest text-muted-foreground uppercase">
                  {community.images?.[1]?.label}
                </figcaption>
              </figure>
            </div>
          </div>
        ) : null}

        {decisions.disclosure ? (
          <CaseStudyDisclosure
            summary={decisions.disclosure.summary}
            className="mt-16"
          >
            {decisions.disclosure.sections.map((sub, index) => (
              <SectionSubBlock
                key={sub.title ?? index}
                sub={sub}
                index={index}
              />
            ))}
          </CaseStudyDisclosure>
        ) : null}
      </Container>
    </Section>
  )
}

export { KeyDecisions }
