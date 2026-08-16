import { CaseStudy } from "@/pages/CaseStudy/CaseStudy"
import { jogaAuraCaseStudy } from "@/content/case-studies/joga-aura"
import { translateCaseStudy } from "@/content/case-studies/translate"
import { useLanguage } from "@/i18n"

function JogaAuraCaseStudy() {
  const { language } = useLanguage()
  return (
    <CaseStudy
      slug="joga-aura"
      caseStudy={translateCaseStudy(jogaAuraCaseStudy, language)}
    />
  )
}

export { JogaAuraCaseStudy }
