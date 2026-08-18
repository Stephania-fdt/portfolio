import { motion, useReducedMotion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import { REVEAL, SubsectionText } from "@/components/ui/case-study-capture"
import type { NarrativeChapter as NarrativeChapterContent } from "@/content/case-studies/spf-page"

function NarrativeChapter({
  id,
  content,
}: {
  id: string
  content: NarrativeChapterContent
}) {
  const shouldReduceMotion = useReducedMotion()
  return (
    <Section id={id}>
      <Container size="content">
        <SectionKicker>{content.kicker}</SectionKicker>
        <motion.p
          {...(shouldReduceMotion ? { initial: false } : REVEAL())}
          className="mt-8 max-w-2xl text-xl leading-snug font-medium text-foreground md:text-2xl"
        >
          {content.introduction}
        </motion.p>
        {content.sections.map((section) => (
          <div key={section.label} className="mt-24">
            <p className="font-mono text-2xs tracking-widest text-brand uppercase">
              {section.label}
            </p>
            <SubsectionText className="mt-4 max-w-2xl">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </SubsectionText>
          </div>
        ))}
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

export { NarrativeChapter }
