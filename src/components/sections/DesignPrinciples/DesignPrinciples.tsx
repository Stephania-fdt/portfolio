import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import { EditorialList } from "@/components/ui/editorial-list"
import { designPrinciples } from "@/content/principles"

/**
 * Pure typography, no image slot — the intentional counterpoint to
 * Selected Work's image-forward rhythm. No alternating sides (that's
 * Work's signature move only).
 */
function DesignPrinciples() {
  return (
    <Section id="principles" aria-label="Design Principles">
      <SectionKicker>Design Principles</SectionKicker>
      <EditorialList items={designPrinciples} />
    </Section>
  )
}

export { DesignPrinciples }
