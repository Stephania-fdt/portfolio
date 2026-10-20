import { motion, useReducedMotion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import { REVEAL } from "@/components/ui/case-study-capture"
import {
  CollaborationIcon,
  DividerAccent,
} from "@/pages/case-studies/SPF/illustrations"
import type { ReflectionContent } from "@/content/case-studies/spf-page"

/**
 * Illustration pass 3: the large workspace scene is gone — a small
 * collaboration icon (64–80px) sits beside the label instead, and a
 * fine divider-with-accent ornament introduces the chapter, the second
 * and last of exactly two ornaments on the page (the other is in
 * ProblemAndRole). Content unchanged from the previous trim: one
 * concise paragraph (École 42, condensed, not cut) and one closing line.
 */
function NarrativeChapter({
  id,
  content,
}: {
  id: string
  content: ReflectionContent
}) {
  const shouldReduceMotion = useReducedMotion()
  return (
    <Section id={id} spacing="sm">
      <Container size="content">
        <SectionKicker>{content.kicker}</SectionKicker>

        <DividerAccent className="mt-8 max-w-xs" />

        <div className="mt-8 flex items-start gap-5">
          <CollaborationIcon className="w-20 shrink-0 sm:w-24" />
          <div className="max-w-2xl min-w-0 flex-1 pt-2">
            <p className="font-mono text-2xs tracking-widest text-brand uppercase">
              {content.label}
            </p>
            <motion.p
              {...(shouldReduceMotion ? { initial: false } : REVEAL())}
              className="mt-4 text-lg leading-relaxed text-foreground"
            >
              {content.paragraph}
            </motion.p>
          </div>
        </div>

        <motion.div
          {...(shouldReduceMotion ? { initial: false } : REVEAL())}
          className="mt-8 max-w-2xl"
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
