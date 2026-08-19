import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import {
  REVEAL,
  CroppedCapture,
  AssetFrame,
  SubsectionText,
} from "@/components/ui/case-study-capture"
import { CaseStudyDisclosure } from "@/components/ui/case-study-disclosure"
import pickers from "@/assets/case-studies/spf/components/ANGULAR/mat-picker.png"
import header from "@/assets/case-studies/spf/components/CUSTOM/HEADER.png"
import sidebar from "@/assets/case-studies/spf/components/CUSTOM/Sidebar menu.png"
import footer from "@/assets/case-studies/spf/components/CUSTOM/Footers.png"
import notification from "@/assets/case-studies/spf/components/CUSTOM/Alert.png"
import radio from "@/assets/case-studies/spf/components/CUSTOM/RADIO.png"
import languageAsset from "@/assets/case-studies/spf/components/CUSTOM/LANGUAGE.png"
import inputs from "@/assets/case-studies/spf/components/CUSTOM/inputs.png"
import stepperZoom from "@/assets/case-studies/spf/components/CUSTOM/STEPPER-ZOOM.png"
import authDesktop from "@/assets/case-studies/spf/product/Desktop - 45.png"
import authMobile from "@/assets/case-studies/spf/product/iPhone 17 - 2 (1).png"
import portal from "@/assets/case-studies/spf/product/Wireframes.png"
import faq from "@/assets/case-studies/spf/product/Wireframes (2).png"
import { spfExecutionContent } from "@/content/case-studies/spf-execution"
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
 * SPF case study — Execution. Merges the former Component Library and
 * Product Interfaces chapters: the Angular Material / custom split
 * decision, the same semantic roles reused component to component, then
 * the real product — auth, portal, FAQ — a citizen actually completing
 * a task. The ~13-image gallery both former chapters carried is curated
 * to the handful that prove a decision; the rest — Angular's picker
 * inventory, the sidebar/footer detail, the atomic layer, the full
 * responsive breakpoint set, the states matrix, the stepper — lives
 * unchanged behind "Component library reference."
 */
function Execution() {
  const { language } = useLanguage()
  const content = getLocalizedContent(spfExecutionContent, language)
  const { product, reference } = content
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="spf-execution">
      <Container size="content">
        <SectionKicker>{content.kicker}</SectionKicker>

        <motion.p
          {...(shouldReduceMotion ? { initial: false } : REVEAL())}
          className="mt-8 max-w-2xl text-xl leading-snug font-medium text-foreground md:text-2xl"
        >
          {content.introduction}
        </motion.p>

        {/* The Angular Material / custom split */}
        <div className="mt-24 grid gap-10 md:grid-cols-2 md:gap-16">
          <CroppedCapture
            src={header}
            alt={content.systemSplit.alt}
            caption={content.systemSplit.caption}
            aspectClassName="aspect-[4/5]"
            zoomClassName="scale-[1.9]"
            positionClassName="object-[30%_25%]"
          />
          <div>
            <p className="font-mono text-2xs tracking-widest text-brand uppercase">
              {content.systemSplit.label}
            </p>
            <SubsectionText className="mt-4">
              <Paragraphs paragraphs={content.systemSplit.paragraphs} />
            </SubsectionText>
          </div>
        </div>

        {/* The same roles, reused */}
        <div className="mt-24">
          <p className="font-mono text-2xs tracking-widest text-brand uppercase">
            {content.reuse.label}
          </p>
          <SubsectionText className="mt-4 max-w-2xl">
            <Paragraphs paragraphs={content.reuse.paragraphs} />
          </SubsectionText>
          <AssetFrame
            src={notification}
            alt={content.reuse.alt}
            className="mt-10 aspect-[7/9] max-w-xl"
          />
          <p className="mt-3 max-w-xl font-mono text-2xs tracking-widest text-muted-foreground uppercase">
            {content.reuse.caption}
          </p>
        </div>

        {/* The real product */}
        <div className="mt-24">
          <p className="font-mono text-2xs tracking-widest text-brand uppercase">
            {product.label}
          </p>

          <div className="mt-8 grid gap-10 md:grid-cols-[3fr_2fr] md:gap-16">
            <CroppedCapture
              src={authDesktop}
              alt={product.authAlts[0]}
              caption={product.authCaptions[0]}
              aspectClassName="aspect-[4/3]"
              zoomClassName="scale-100"
              positionClassName="object-top"
            />
            <CroppedCapture
              src={authMobile}
              alt={product.authAlts[1]}
              caption={product.authCaptions[1]}
              aspectClassName="aspect-[3/4]"
              zoomClassName="scale-100"
              positionClassName="object-top"
            />
          </div>
          <SubsectionText className="mt-8 max-w-2xl">
            <p>{product.authParagraph}</p>
          </SubsectionText>

          <div className="mt-16">
            <p className="font-mono text-2xs tracking-widest text-brand uppercase">
              {product.portalLabel}
            </p>
            <SubsectionText className="mt-4 max-w-2xl">
              <p>{product.portalParagraph}</p>
            </SubsectionText>
            <CroppedCapture
              src={portal}
              alt={product.portalAlt}
              caption={product.portalCaption}
              className="mt-8"
              aspectClassName="aspect-[16/9]"
              zoomClassName="scale-100"
              positionClassName="object-top"
            />
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <p className="font-mono text-2xs tracking-widest text-brand uppercase">
                {product.faqLabel}
              </p>
              <SubsectionText className="mt-4">
                <Paragraphs paragraphs={product.faqParagraphs} />
              </SubsectionText>
            </div>
            <CroppedCapture
              src={faq}
              alt={product.faqAlt}
              caption={product.faqCaption}
              aspectClassName="aspect-[4/5]"
              zoomClassName="scale-100"
              positionClassName="object-top"
            />
          </div>
        </div>

        <motion.p
          {...(shouldReduceMotion ? { initial: false } : REVEAL())}
          className="mt-24 max-w-2xl text-xl leading-snug font-medium text-foreground italic md:text-2xl"
        >
          {content.conclusion}
        </motion.p>

        <CaseStudyDisclosure summary={content.detailsSummary}>
          {/* Angular Material inventory */}
          <div>
            <p className="font-mono text-2xs tracking-widest text-brand uppercase">
              {reference.angularPickers.label}
            </p>
            <SubsectionText className="mt-4 max-w-2xl">
              <Paragraphs paragraphs={reference.angularPickers.paragraphs} />
            </SubsectionText>
            <CroppedCapture
              src={pickers}
              alt={reference.angularPickers.alt}
              caption={reference.angularPickers.caption}
              className="mt-8 max-w-2xl"
              aspectClassName="aspect-[18/7]"
              zoomClassName="scale-[1.05]"
              positionClassName="object-[50%_50%]"
            />
          </div>

          {/* Sidebar + footer */}
          <div className="mt-14">
            <p className="font-mono text-2xs tracking-widest text-brand uppercase">
              {reference.sidebarFooter.label}
            </p>
            <SubsectionText className="mt-4 max-w-2xl">
              <Paragraphs paragraphs={reference.sidebarFooter.paragraphs} />
            </SubsectionText>
            <CroppedCapture
              src={sidebar}
              alt={reference.sidebarFooter.sidebarAlt}
              caption={reference.sidebarFooter.sidebarCaption}
              className="mt-8 max-w-2xl"
              aspectClassName="aspect-[10/3]"
              zoomClassName="scale-100"
              positionClassName="object-top"
            />
            <CroppedCapture
              src={footer}
              alt={reference.sidebarFooter.footerAlt}
              caption={reference.sidebarFooter.footerCaption}
              className="mt-8 max-w-2xl"
              aspectClassName="aspect-[8/1]"
              zoomClassName="scale-100"
              positionClassName="object-top"
            />
          </div>

          {/* Atomic layer — radio */}
          <div className="mt-14">
            <p className="font-mono text-2xs tracking-widest text-brand uppercase">
              {reference.atomicRadio.label}
            </p>
            <SubsectionText className="mt-4 max-w-2xl">
              <Paragraphs paragraphs={reference.atomicRadio.paragraphs} />
            </SubsectionText>
            <CroppedCapture
              src={radio}
              alt={reference.atomicRadio.alt}
              caption={reference.atomicRadio.caption}
              className="mt-8 max-w-2xl"
              aspectClassName="aspect-[7/2]"
              zoomClassName="scale-[3.26]"
              positionClassName="object-[50%_75%]"
            />
          </div>

          {/* Responsive language selector */}
          <div className="mt-14">
            <p className="font-mono text-2xs tracking-widest text-brand uppercase">
              {reference.responsiveLanguage.label}
            </p>
            <SubsectionText className="mt-4 max-w-2xl">
              <Paragraphs
                paragraphs={reference.responsiveLanguage.paragraphs}
              />
            </SubsectionText>
            <CroppedCapture
              src={languageAsset}
              alt={reference.responsiveLanguage.alt}
              caption={reference.responsiveLanguage.caption}
              className="mt-8 max-w-sm"
              aspectClassName="aspect-[5/12]"
              zoomClassName="scale-[1.23]"
              positionClassName="object-[53%_50%]"
            />
          </div>

          {/* States matrix */}
          <div className="mt-14">
            <p className="font-mono text-2xs tracking-widest text-brand uppercase">
              {reference.statesInputs.label}
            </p>
            <SubsectionText className="mt-4 max-w-2xl">
              <Paragraphs paragraphs={reference.statesInputs.paragraphs} />
            </SubsectionText>
            <CroppedCapture
              src={inputs}
              alt={reference.statesInputs.alt}
              caption={reference.statesInputs.caption}
              className="mt-8 max-w-2xl"
              aspectClassName="aspect-[21/9]"
              zoomClassName="scale-[1.35]"
              positionClassName="object-[30%_15%]"
            />
          </div>

          {/* Vocabulary — stepper */}
          <div className="mt-14 grid max-w-2xl gap-8">
            <CroppedCapture
              src={stepperZoom}
              alt={reference.vocabularyStepper.alt}
              caption={reference.vocabularyStepper.caption}
              aspectClassName="aspect-[16/9]"
              zoomClassName="scale-[1.15]"
              positionClassName="object-[45%_35%]"
            />
            <div>
              <p className="font-mono text-2xs tracking-widest text-brand uppercase">
                {reference.vocabularyStepper.label}
              </p>
              <SubsectionText className="mt-4">
                <Paragraphs
                  paragraphs={reference.vocabularyStepper.paragraphs}
                />
              </SubsectionText>
            </div>
          </div>
        </CaseStudyDisclosure>
      </Container>
    </Section>
  )
}

export { Execution }
