import { useEffect } from "react"
import { ArrowLeft, ExternalLink, FileText } from "lucide-react"
import { Link, useParams } from "react-router-dom"

import { CaseStudyFacts } from "@/components/ui/case-study-facts"
import { CaseStudyHero } from "@/components/ui/case-study-hero"
import { CaseStudyImage } from "@/components/ui/case-study-image"
import { CaseStudyVideo } from "@/components/ui/case-study-video"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import { getCaseStudies } from "@/content/case-studies"
import { getWorkProjects } from "@/content/work"
import { formatNumeral } from "@/lib/numerals"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/i18n"

/** Canonical generic case-study route, assembled from the shared editorial system. */
function CaseStudy() {
  const { language, copy } = useLanguage()
  const { slug } = useParams<{ slug: string }>()
  const caseStudies = getCaseStudies(language)
  const workProjects = getWorkProjects(language)
  const caseStudy = slug ? caseStudies[slug] : undefined
  const project = workProjects.find(
    (project) => project.href === `/work/${slug}`,
  )

  useEffect(() => {
    document.title = project
      ? `${project.title} — Stéphania`
      : "Case study — Stéphania"
  }, [project, copy.meta.caseFallbackTitle])

  if (!caseStudy || !project) {
    return (
      <Section spacing="md">
        <Container size="narrow">
          <p className="text-lg text-foreground">{copy.meta.missingCase}</p>
          <Link
            to="/work"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium tracking-tight text-brand"
          >
            <ArrowLeft aria-hidden="true" className="size-4" />
            {copy.common.backToWork}
          </Link>
        </Container>
      </Section>
    )
  }

  const heroMeta: Array<{ label: string; value: string } | null> = [
    project.roleContext
      ? { label: copy.common.role, value: project.roleContext }
      : null,
    { label: copy.common.year, value: project.year },
    project.technologies.length > 0
      ? { label: copy.common.tools, value: project.technologies.join(" · ") }
      : null,
  ]
  const filteredHeroMeta = heroMeta.filter(
    (item): item is { label: string; value: string } => item !== null,
  )

  return (
    <article>
      <Container size="content" className="pt-8">
        <Link
          to="/work"
          className="group inline-flex items-center gap-2 text-sm font-medium tracking-tight text-muted-foreground transition-colors duration-(--duration-fast) ease-standard hover:text-brand"
        >
          <ArrowLeft
            aria-hidden="true"
            className="size-4 transition-transform duration-(--duration-fast) ease-standard group-hover:-translate-x-0.5"
          />
          {copy.common.backToWork}
        </Link>
      </Container>

      <CaseStudyHero
        eyebrow={project.category}
        title={project.title}
        summary={project.sentence}
        meta={filteredHeroMeta}
        image={caseStudy.heroImage}
        action={caseStudy.liveSite}
      />

      {caseStudy.sections.map((section, sectionIndex) => {
        const isClosingSection = sectionIndex === caseStudy.sections.length - 1
        const processColumns =
          section.processSteps && section.processSteps.length <= 4
            ? "lg:grid-cols-4"
            : "lg:grid-cols-5"

        return (
          <Section key={section.heading} id={`${slug}-${sectionIndex}`}>
            <Container size="content">
              <SectionKicker>{section.heading}</SectionKicker>

              <div className="mt-8 max-w-2xl space-y-4">
                {section.title ? (
                  <h3 className="text-3xl leading-tight font-bold tracking-tight text-foreground md:text-4xl">
                    {section.title}
                  </h3>
                ) : null}
                {section.paragraphs.map((paragraph, paragraphIndex) => {
                  const isReflection =
                    isClosingSection &&
                    paragraphIndex === section.paragraphs.length - 1

                  return (
                    <p
                      key={paragraph}
                      className={cn(
                        "text-lg leading-relaxed text-foreground",
                        isReflection &&
                          "text-xl leading-snug font-medium italic md:text-2xl",
                      )}
                    >
                      {paragraph}
                    </p>
                  )
                })}
              </div>

              {section.facts && section.facts.length > 0 ? (
                <CaseStudyFacts facts={section.facts} />
              ) : null}

              {section.images && section.images.length > 0 ? (
                <div
                  className={cn(
                    "mt-10",
                    section.imageLayout === "two-up" ||
                      section.imageLayout === "comparison"
                      ? "grid gap-8 md:grid-cols-2"
                      : section.imageLayout === "editorial"
                        ? "grid gap-8 md:grid-cols-2"
                        : section.imageLayout === "three-up"
                          ? "grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
                          : "space-y-10",
                  )}
                >
                  {section.images.map((image) => (
                    <figure
                      key={`${image.src}-${image.label ?? image.caption}`}
                      className={cn(
                        image.featured && "md:col-span-2",
                        image.portrait &&
                          "w-full max-w-sm justify-self-center md:col-span-2",
                        image.displayWidth === "reference" &&
                          "mx-auto w-full max-w-[720px]",
                        image.displayWidth === "wide" &&
                          "mx-auto w-full max-w-[880px]",
                      )}
                    >
                      <CaseStudyImage
                        src={image.src}
                        alt={image.alt}
                        contain={image.contain}
                        zoomable={image.zoomable}
                        selected={image.selected}
                        width={image.width}
                        height={image.height}
                      />
                      {image.label || image.caption ? (
                        <figcaption className="mt-3 font-mono text-2xs tracking-widest text-muted-foreground uppercase">
                          {image.label ? <span>{image.label}</span> : null}
                          {image.label && image.caption ? " — " : null}
                          {image.caption ? <span>{image.caption}</span> : null}
                        </figcaption>
                      ) : null}
                    </figure>
                  ))}
                </div>
              ) : null}

              {section.videos && section.videos.length > 0 ? (
                <div
                  className={cn(
                    "mt-10 gap-8",
                    section.videos.length > 1
                      ? "grid sm:grid-cols-2"
                      : "space-y-10",
                  )}
                >
                  {section.videos.map((video) => (
                    <CaseStudyVideo
                      key={video.src}
                      src={video.src}
                      poster={video.poster}
                      posterAlt={video.posterAlt}
                      label={video.label}
                      caption={video.caption}
                      sizeNote={video.sizeNote}
                      width={video.width}
                      height={video.height}
                      className={cn(
                        "mx-auto w-full",
                        video.displayWidth === "website" && "max-w-[880px]",
                        video.displayWidth === "mobile" && "max-w-[680px]",
                      )}
                    />
                  ))}
                </div>
              ) : null}

              {section.document ? (
                <a
                  href={section.document.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-10 inline-flex items-center gap-3 border border-border px-5 py-4 text-sm font-medium text-foreground transition-colors duration-(--duration-fast) ease-standard hover:border-brand hover:text-brand"
                >
                  <FileText aria-hidden="true" className="size-5 shrink-0" />
                  <span>
                    {language === "fr"
                      ? section.document.frenchLabel
                      : section.document.label}
                    {section.document.sizeNote ? (
                      <span className="ml-2 font-mono text-2xs tracking-widest text-muted-foreground uppercase">
                        {section.document.sizeNote}
                      </span>
                    ) : null}
                  </span>
                  <ExternalLink
                    aria-hidden="true"
                    className="size-4 shrink-0 opacity-60 transition-transform duration-(--duration-fast) ease-standard group-hover:translate-x-0.5"
                  />
                </a>
              ) : null}

              {section.processSteps && section.processSteps.length > 0 ? (
                <ol
                  data-case-study-process
                  className={cn(
                    "mt-10 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2",
                    processColumns,
                  )}
                >
                  {section.processSteps.map((step, stepIndex) => (
                    <li key={step.title} className="bg-background p-6 md:p-8">
                      <p className="font-mono text-2xs tracking-widest text-brand uppercase">
                        {formatNumeral(stepIndex)}
                      </p>
                      <p className="mt-3 text-lg font-bold text-foreground">
                        {step.title}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                    </li>
                  ))}
                </ol>
              ) : null}
            </Container>
          </Section>
        )
      })}
    </article>
  )
}

export { CaseStudy }
