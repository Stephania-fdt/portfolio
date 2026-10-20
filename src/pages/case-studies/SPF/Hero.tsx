import { CaseStudyHero } from "@/components/ui/case-study-hero"
import { DesignSystemIcon } from "@/pages/case-studies/SPF/illustrations"
import heroCover from "@/assets/case-studies/spf/product/Desktop_authenticate.png"
import { spfPageContent } from "@/content/case-studies/spf-page"
import { getWorkProjects } from "@/content/work"
import { getLocalizedContent, useLanguage } from "@/i18n"

/** The reference cover, now rendered by the shared case-study hero, with the SPF pilot's "01 / 05" position marker computed from the real, ordered project list. */
function Hero() {
  const { language } = useLanguage()
  const content = getLocalizedContent(spfPageContent, language).hero
  const projects = getWorkProjects(language)
  const position = projects.findIndex(
    (project) => project.href === "/work/spf-design-system",
  )

  return (
    <CaseStudyHero
      eyebrow={content.eyebrow}
      title={content.title}
      summary={content.summary}
      meta={content.meta}
      index={
        position >= 0
          ? { current: position + 1, total: projects.length }
          : undefined
      }
      illustration={<DesignSystemIcon />}
      image={{
        src: heroCover,
        alt: content.alt,
        width: 905,
        height: 680,
        // Frame matches the file's own 905:680 ratio so the whole screen
        // shows uncropped; capped near its native width instead of a
        // full-bleed 4:3 that would run taller than the viewport.
        cropAspectClassName: "mx-auto aspect-[905/680] max-w-4xl md:border-x",
        cropPositionClassName: "object-center",
      }}
    />
  )
}

export { Hero }
