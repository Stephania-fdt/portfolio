import { spfPageContent } from "@/content/case-studies/spf-page"
import { getLocalizedContent, useLanguage } from "@/i18n"
import { NarrativeChapter } from "@/pages/case-studies/SPF/NarrativeChapter"

function Challenge() {
  const { language } = useLanguage()
  return (
    <NarrativeChapter
      id="spf-challenge"
      content={getLocalizedContent(spfPageContent, language).challenge}
    />
  )
}
export { Challenge }
