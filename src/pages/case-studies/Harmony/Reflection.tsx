import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import { REVEAL } from "@/components/ui/case-study-capture"
import { harmonyCaseStudy } from "@/content/case-studies/harmony"
import { translateCaseStudy } from "@/content/case-studies/translate"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/i18n"

/**
 * Visual-composition pass: same honest close as before (the A/B-test and
 * heatmap caveat, no real user base at scale, a still-partial WCAG pass)
 * — `spacing="sm"` and the closing line kept in the same emphasized
 * treatment the generic renderer gave every case study's last paragraph.
 */
function Reflection() {
  const { language } = useLanguage()
  const [, , , reflection] = translateCaseStudy(
    harmonyCaseStudy,
    language,
  ).sections
  const shouldReduceMotion = useReducedMotion()

  return (
    <Section id="harmony-reflection" spacing="sm">
      <Container size="content">
        <SectionKicker>{reflection.heading}</SectionKicker>

        <div className="mt-6 max-w-2xl space-y-4">
          {reflection.paragraphs.map((paragraph, index) => (
            <motion.p
              key={paragraph}
              {...(shouldReduceMotion
                ? { initial: false }
                : REVEAL(index * 0.08))}
              className={cn(
                "text-lg leading-relaxed text-foreground",
                index === reflection.paragraphs.length - 1 &&
                  "text-xl leading-snug font-medium italic md:text-2xl",
              )}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </Container>
    </Section>
  )
}

export { Reflection }
