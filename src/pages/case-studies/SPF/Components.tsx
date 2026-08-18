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
import { LocalizedRichText } from "@/components/ui/localized-rich-text"
import pickers from "@/assets/case-studies/spf/components/ANGULAR/mat-picker.png"
import header from "@/assets/case-studies/spf/components/CUSTOM/HEADER.png"
import sidebar from "@/assets/case-studies/spf/components/CUSTOM/Sidebar menu.png"
import footer from "@/assets/case-studies/spf/components/CUSTOM/Footers.png"
import notification from "@/assets/case-studies/spf/components/CUSTOM/Alert.png"
import radio from "@/assets/case-studies/spf/components/CUSTOM/RADIO.png"
import languageAsset from "@/assets/case-studies/spf/components/CUSTOM/LANGUAGE.png"
import inputs from "@/assets/case-studies/spf/components/CUSTOM/inputs.png"
import stepperZoom from "@/assets/case-studies/spf/components/CUSTOM/STEPPER-ZOOM.png"
import { spfComponentsContent } from "@/content/case-studies/spf-components"
import { getLocalizedContent, useLanguage } from "@/i18n"

function Paragraphs({ paragraphs }: { paragraphs: string[] }) {
  return (
    <>
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>
          <LocalizedRichText text={paragraph} />
        </p>
      ))}
    </>
  )
}

function Components() {
  const { language } = useLanguage()
  const content = getLocalizedContent(spfComponentsContent, language)
  const shouldReduceMotion = useReducedMotion()
  return (
    <Section id="spf-components">
      <Container size="content">
        <SectionKicker>{content.kicker}</SectionKicker>
        <motion.p
          {...(shouldReduceMotion ? { initial: false } : REVEAL())}
          className="mt-8 max-w-2xl text-xl leading-snug font-medium text-foreground md:text-2xl"
        >
          <LocalizedRichText text={content.introduction} />
        </motion.p>

        <div className="mt-24">
          <p className="font-mono text-2xs tracking-widest text-brand uppercase">
            {content.angular.label}
          </p>
          <SubsectionText className="mt-4">
            <Paragraphs paragraphs={content.angular.paragraphs} />
          </SubsectionText>
          <CroppedCapture
            src={pickers}
            alt={content.angular.alts?.[0] ?? ""}
            caption={content.angular.captions?.[0] ?? ""}
            className="mt-10"
            aspectClassName="aspect-[18/7]"
            zoomClassName="scale-[1.05]"
            positionClassName="object-[50%_50%]"
          />
        </div>

        <div className="mt-24 grid gap-10 md:grid-cols-2 md:gap-16">
          <CroppedCapture
            src={header}
            alt={content.custom.alts?.[0] ?? ""}
            caption={content.custom.captions?.[0] ?? ""}
            aspectClassName="aspect-[4/5]"
            zoomClassName="scale-[1.9]"
            positionClassName="object-[30%_25%]"
          />
          <div>
            <p className="font-mono text-2xs tracking-widest text-brand uppercase">
              {content.custom.label}
            </p>
            <SubsectionText className="mt-4">
              <Paragraphs paragraphs={content.custom.paragraphs} />
            </SubsectionText>
          </div>
        </div>
        <CroppedCapture
          src={sidebar}
          alt={content.custom.alts?.[1] ?? ""}
          caption={content.custom.captions?.[1] ?? ""}
          className="mt-10"
          aspectClassName="aspect-[10/3]"
          zoomClassName="scale-100"
          positionClassName="object-top"
        />
        <CroppedCapture
          src={footer}
          alt={content.custom.alts?.[2] ?? ""}
          caption={content.custom.captions?.[2] ?? ""}
          className="mt-10"
          aspectClassName="aspect-[8/1]"
          zoomClassName="scale-100"
          positionClassName="object-top"
        />

        <div className="mt-24">
          <p className="font-mono text-2xs tracking-widest text-brand uppercase">
            {content.atomic.label}
          </p>
          <SubsectionText className="mt-4">
            <Paragraphs paragraphs={content.atomic.paragraphs} />
          </SubsectionText>
          <AssetFrame
            src={notification}
            alt={content.atomic.alts?.[0] ?? ""}
            className="mt-10 aspect-[7/9] max-w-xl"
          />
          <p className="mt-3 max-w-xl font-mono text-2xs tracking-widest text-muted-foreground uppercase">
            {content.atomic.captions?.[0]}
          </p>
          <CroppedCapture
            src={radio}
            alt={content.atomic.alts?.[1] ?? ""}
            caption={content.atomic.captions?.[1] ?? ""}
            className="mt-8"
            aspectClassName="aspect-[7/2]"
            zoomClassName="scale-[3.26]"
            positionClassName="object-[50%_75%]"
          />
        </div>

        <div className="mt-24">
          <p className="font-mono text-2xs tracking-widest text-brand uppercase">
            {content.responsive.label}
          </p>
          <SubsectionText className="mt-4">
            <Paragraphs paragraphs={content.responsive.paragraphs} />
          </SubsectionText>
          <CroppedCapture
            src={languageAsset}
            alt={content.responsive.alts?.[0] ?? ""}
            caption={content.responsive.captions?.[0] ?? ""}
            className="mt-10 max-w-sm"
            aspectClassName="aspect-[5/12]"
            zoomClassName="scale-[1.23]"
            positionClassName="object-[53%_50%]"
          />
        </div>

        <div className="mt-24">
          <p className="font-mono text-2xs tracking-widest text-brand uppercase">
            {content.states.label}
          </p>
          <SubsectionText className="mt-4">
            <Paragraphs paragraphs={content.states.paragraphs} />
          </SubsectionText>
          <CroppedCapture
            src={inputs}
            alt={content.states.alts?.[0] ?? ""}
            caption={content.states.captions?.[0] ?? ""}
            className="mt-10"
            aspectClassName="aspect-[21/9]"
            zoomClassName="scale-[1.35]"
            positionClassName="object-[30%_15%]"
          />
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2 md:gap-16">
          <CroppedCapture
            src={stepperZoom}
            alt={content.vocabulary.alts?.[0] ?? ""}
            caption={content.vocabulary.captions?.[0] ?? ""}
            aspectClassName="aspect-[16/9]"
            zoomClassName="scale-[1.15]"
            positionClassName="object-[45%_35%]"
          />
          <div>
            <p className="font-mono text-2xs tracking-widest text-brand uppercase">
              {content.vocabulary.label}
            </p>
            <SubsectionText className="mt-4">
              <Paragraphs paragraphs={content.vocabulary.paragraphs} />
            </SubsectionText>
          </div>
        </div>

        <motion.div
          {...(shouldReduceMotion ? { initial: false } : REVEAL())}
          className="mt-24 max-w-2xl"
        >
          <p className="text-xl leading-snug font-medium text-foreground md:text-2xl">
            {content.conclusion}
          </p>
        </motion.div>
      </Container>
    </Section>
  )
}

export { Components }
