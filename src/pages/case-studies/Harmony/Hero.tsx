import { CaseStudyHero } from "@/components/ui/case-study-hero"
import { harmonyCaseStudy } from "@/content/case-studies/harmony"
import { translateCaseStudy } from "@/content/case-studies/translate"
import { getWorkProjects } from "@/content/work"
import { useLanguage } from "@/i18n"

/** Same real product cover as before — a complete screen, nothing to crop. */
function Hero() {
  const { language, copy } = useLanguage()
  const project = getWorkProjects(language).find(
    (item) => item.href === "/work/harmony",
  )
  const caseStudy = translateCaseStudy(harmonyCaseStudy, language)
  if (!project) return null

  const meta: Array<{ label: string; value: string } | null> = [
    project.roleContext
      ? { label: copy.common.role, value: project.roleContext }
      : null,
    { label: copy.common.year, value: project.year },
    project.technologies.length > 0
      ? { label: copy.common.tools, value: project.technologies.join(" · ") }
      : null,
  ]
  const filteredMeta = meta.filter(
    (item): item is { label: string; value: string } => item !== null,
  )

  return (
    <CaseStudyHero
      eyebrow={project.category}
      title={project.title}
      summary={project.sentence}
      meta={filteredMeta}
      image={caseStudy.heroImage}
    />
  )
}

export { Hero }
