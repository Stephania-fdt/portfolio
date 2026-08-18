import { spfPageContent } from "@/content/case-studies/spf-page"
import { getLocalizedContent, useLanguage } from "@/i18n"
import { NarrativeChapter } from "@/pages/case-studies/SPF/NarrativeChapter"

function Research() {
  const { language } = useLanguage()
  return (
    <NarrativeChapter
      id="spf-research"
      content={getLocalizedContent(spfPageContent, language).research}
    />
  )
}
export { Research }
