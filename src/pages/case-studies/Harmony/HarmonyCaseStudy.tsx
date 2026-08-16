import { CaseStudy } from "@/pages/CaseStudy/CaseStudy"
import { harmonyCaseStudy } from "@/content/case-studies/harmony"
import { translateCaseStudy } from "@/content/case-studies/translate"
import { useLanguage } from "@/i18n"

function HarmonyCaseStudy() {
  const { language } = useLanguage()
  return (
    <CaseStudy
      slug="harmony"
      caseStudy={translateCaseStudy(harmonyCaseStudy, language)}
    />
  )
}

export { HarmonyCaseStudy }
