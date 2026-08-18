import { motion, useReducedMotion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import {
  REVEAL,
  CroppedCapture,
  SubsectionText,
} from "@/components/ui/case-study-capture"
import { LocalizedRichText } from "@/components/ui/localized-rich-text"
import tokensStudio from "@/assets/case-studies/spf/tokens/tokens2.png"
import tokensCode from "@/assets/case-studies/spf/tokens/code_tokens-theme.png"
import palette from "@/assets/case-studies/spf/tokens/variables.png"
import schemes from "@/assets/case-studies/spf/tokens/variables2.png"
import { spfTokensContent } from "@/content/case-studies/spf-tokens"
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

function Tokens() {
  const { language } = useLanguage()
  const content = getLocalizedContent(spfTokensContent, language)
  const shouldReduceMotion = useReducedMotion()
  return (
    <Section id="spf-tokens">
      <Container size="content">
        <SectionKicker>{content.kicker}</SectionKicker>
        <motion.p
          {...(shouldReduceMotion ? { initial: false } : REVEAL())}
          className="mt-8 max-w-2xl text-xl leading-snug font-medium text-foreground md:text-2xl"
        >
          {content.introduction}
        </motion.p>

        <div className="mt-24 grid gap-10 md:grid-cols-2 md:gap-16">
          <CroppedCapture
            src={palette}
            alt={content.palette.alt ?? ""}
            caption={content.palette.caption ?? ""}
            aspectClassName="aspect-[3/2]"
            zoomClassName="scale-100"
            positionClassName="object-top"
          />
          <div>
            <p className="font-mono text-2xs tracking-widest text-brand uppercase">
              {content.palette.label}
            </p>
            <SubsectionText className="mt-4">
              <Paragraphs paragraphs={content.palette.paragraphs} />
            </SubsectionText>
          </div>
        </div>

        <div className="mt-24 grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <p className="font-mono text-2xs tracking-widest text-brand uppercase">
              {content.schemes.label}
            </p>
            <SubsectionText className="mt-4">
              <Paragraphs paragraphs={content.schemes.paragraphs} />
            </SubsectionText>
          </div>
          <CroppedCapture
            src={schemes}
            alt={content.schemes.alt ?? ""}
            caption={content.schemes.caption ?? ""}
            aspectClassName="aspect-[4/3]"
            zoomClassName="scale-100"
            positionClassName="object-top"
          />
        </div>

        <div className="mt-24 grid gap-10 md:grid-cols-2 md:gap-16">
          <CroppedCapture
            src={tokensStudio}
            alt={content.tooling.alt ?? ""}
            caption={content.tooling.caption ?? ""}
            aspectClassName="aspect-[3/4]"
            zoomClassName="scale-[1.15]"
            positionClassName="object-[70%_35%]"
          />
          <div>
            <p className="font-mono text-2xs tracking-widest text-brand uppercase">
              {content.tooling.label}
            </p>
            <SubsectionText className="mt-4">
              <Paragraphs paragraphs={content.tooling.paragraphs} />
            </SubsectionText>
          </div>
        </div>

        <div className="mt-24">
          <motion.div
            {...(shouldReduceMotion ? { initial: false } : REVEAL())}
            className="max-w-2xl"
          >
            <p className="font-mono text-2xs tracking-widest text-brand uppercase">
              {content.code.label}
            </p>
            <SubsectionText className="mt-4">
              <Paragraphs paragraphs={content.code.paragraphs} />
            </SubsectionText>
          </motion.div>
          <motion.figure
            {...(shouldReduceMotion ? { initial: false } : REVEAL(0.1))}
            className="mt-10 w-full"
          >
            <div className="aspect-[16/9] w-full overflow-hidden border border-border bg-secondary/50 md:aspect-[21/9]">
              <img
                src={tokensCode}
                alt={content.code.alt ?? ""}
                loading="lazy"
                className="h-full w-full object-cover object-top"
              />
            </div>
            <figcaption className="mt-3 font-mono text-2xs tracking-widest text-muted-foreground uppercase">
              {content.code.caption}
            </figcaption>
          </motion.figure>
        </div>
      </Container>
    </Section>
  )
}

export { Tokens }
