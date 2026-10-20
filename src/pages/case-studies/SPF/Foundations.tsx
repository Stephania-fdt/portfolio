import { motion, useReducedMotion } from "framer-motion"

import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { CaseStudyImage } from "@/components/ui/case-study-image"
import { REVEAL } from "@/components/ui/case-study-capture"
import typography from "@/assets/case-studies/spf/foundations/Typography.png"
import pickers from "@/assets/case-studies/spf/components/ANGULAR/date pickers.png"
import { spfDesignSystemContent } from "@/content/case-studies/spf-design-system"
import { spfExecutionContent } from "@/content/case-studies/spf-execution"
import { getLocalizedContent, useLanguage } from "@/i18n"

/** Whole, zoomable foundation sheets, stacked for readable embedded text. */
function Foundations() {
  const { language } = useLanguage()
  const designSystem = getLocalizedContent(spfDesignSystemContent, language)
  const execution = getLocalizedContent(spfExecutionContent, language)
  const shouldReduceMotion = useReducedMotion()

  const panels = [
    {
      src: typography,
      alt: designSystem.reference.typography.alt,
      caption: designSystem.reference.typography.caption ?? "",
    },
    {
      src: pickers,
      alt: execution.reference.angularPickers.alt,
      caption: execution.reference.angularPickers.caption,
      // Tall documentation sheet (1328×2858): capped in height and
      // centered so it stays whole without towering over its row
      // neighbours; the zoom shows it at full resolution.
      imgClassName: "mx-auto max-h-[28rem] w-auto",
    },
  ]

  return (
    <Section id="spf-foundations" spacing="sm">
      <Container size="content">
        <div className="flex items-center gap-6">
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            {language === "fr"
              ? "SPF Design System — fondations"
              : "SPF Design System — Foundations"}
          </p>
          <span aria-hidden="true" className="h-px flex-1 bg-border" />
        </div>

        <div className="mt-8 grid gap-8">
          {panels.map((panel, index) => (
            <motion.figure
              key={panel.src}
              {...(shouldReduceMotion
                ? { initial: false }
                : REVEAL(index * 0.08))}
            >
              <CaseStudyImage
                src={panel.src}
                alt={panel.alt}
                contain
                zoomable
                imgClassName={panel.imgClassName}
              />
              <figcaption className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {panel.caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </Container>
    </Section>
  )
}

export { Foundations }
