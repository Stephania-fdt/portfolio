import { CaseStudyHero } from "@/components/ui/case-study-hero"
import heroCover from "@/assets/case-studies/spf/product/Desktop - 54.png"
import { spfPageContent } from "@/content/case-studies/spf-page"
import { getLocalizedContent, useLanguage } from "@/i18n"

/** The reference cover, now rendered by the shared case-study hero unchanged. */
function Hero() {
  const { language } = useLanguage()
  const content = getLocalizedContent(spfPageContent, language).hero

  return (
    <CaseStudyHero
      eyebrow={content.eyebrow}
      title={content.title}
      summary={content.summary}
      meta={content.meta}
      image={{
        src: heroCover,
        alt: content.alt,
      }}
    />
  )
}

export { Hero }
