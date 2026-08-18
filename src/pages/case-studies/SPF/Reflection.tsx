import { spfPageContent } from "@/content/case-studies/spf-page"
import { getLocalizedContent, useLanguage } from "@/i18n"
import { NarrativeChapter } from "@/pages/case-studies/SPF/NarrativeChapter"

function Reflection() {
  const { language } = useLanguage()
  return (
    <NarrativeChapter
      id="spf-reflection"
      content={getLocalizedContent(spfPageContent, language).reflection}
    />
  )
}
export { Reflection }
