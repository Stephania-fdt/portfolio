import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import { EditorialList } from "@/components/ui/editorial-list"
import { processStages } from "@/content/process"

/**
 * An editorial passage, not a diagram — no arrows, no circles, no
 * progress bar. Roman numerals are its one deliberate distinction from
 * Design Principles' arabic ones, per EDITORIAL_OS §3.
 */
function TheProcess() {
  return (
    <Section id="process" aria-label="The Process">
      <SectionKicker>The Process</SectionKicker>
      <EditorialList items={processStages} numeral="roman" />
    </Section>
  )
}

export { TheProcess }
