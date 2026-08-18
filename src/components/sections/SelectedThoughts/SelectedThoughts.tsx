import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import { EditorialList } from "@/components/ui/editorial-list"
import { getSelectedThoughts } from "@/content/thoughts"
import { useLanguage } from "@/i18n"

/**
 * A collection of essays, not a numbered sequence — numeral suppressed
 * (per EditorialEntry's numeral={false}). Category stands in for the
 * eyebrow, headline for the title, one or two paragraphs for the body.
 * Same rhythm as Design Principles and The Process, no new pattern.
 */
function SelectedThoughts() {
  const { language, copy } = useLanguage()
  const selectedThoughts = getSelectedThoughts(language)
  const items = selectedThoughts.map((thought) => ({
    eyebrow: thought.category,
    title: thought.headline,
    sentence: thought.paragraphs,
  }))

  return (
    <Section id="thoughts" aria-label={copy.common.selectedThoughts}>
      <SectionKicker>{copy.common.selectedThoughts}</SectionKicker>
      <EditorialList items={items} numeral={false} />
    </Section>
  )
}

export { SelectedThoughts }
