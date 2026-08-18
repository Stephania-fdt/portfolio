import { CaseStudyHero } from "@/components/ui/case-study-hero"
import heroCover from "@/assets/case-studies/portfolio/hero-preview.png"
import { portfolioPageContent } from "@/content/case-studies/portfolio-page"
import { getLocalizedContent, useLanguage } from "@/i18n"

/** The reference cover, now rendered by the shared case-study hero unchanged. */
function Hero() {
  const { language } = useLanguage()
  const content = getLocalizedContent(portfolioPageContent, language).hero
  return (
    <CaseStudyHero
      eyebrow={content.eyebrow}
      title={content.title}
      summary={content.summary}
      detail={content.detail}
      meta={content.meta}
      image={{
        src: heroCover,
        alt: content.alt,
      }}
    />
  )
}

export { Hero }
