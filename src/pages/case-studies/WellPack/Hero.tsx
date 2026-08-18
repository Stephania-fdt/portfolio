import { CaseStudyHero } from "@/components/ui/case-study-hero"
import website from "@/assets/case-studies/wellpack/02-brand/supports/Declinaisaon_siteweb.png"
import { wellPackPageContent } from "@/content/case-studies/wellpack-page"
import { getLocalizedContent, useLanguage } from "@/i18n"

/** WellPack uses the same project-cover sequence as SPF and Portfolio. */
function Hero() {
  const { language } = useLanguage()
  const content = getLocalizedContent(wellPackPageContent, language).hero
  return (
    <CaseStudyHero
      eyebrow={content.eyebrow}
      title={content.title}
      summary={content.summary}
      detail={content.detail}
      meta={content.meta}
      image={{
        src: website,
        alt: content.alt,
      }}
    />
  )
}

export { Hero }
