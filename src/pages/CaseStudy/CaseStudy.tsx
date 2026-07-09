import { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

import { cn } from "@/lib/utils"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { caseStudies } from "@/content/case-studies"
import { workProjects } from "@/content/work"

/**
 * `/work/:slug`. Only reachable, in normal use, via a `WorkItem` link that
 * already confirmed a case study exists for this slug (see WorkItem.tsx) —
 * the not-found branch below exists for direct/typed URLs, not the happy path.
 */
function CaseStudy() {
  const { slug } = useParams<{ slug: string }>()
  const caseStudy = slug ? caseStudies[slug] : undefined
  const project = workProjects.find((p) => p.href === `/work/${slug}`)

  useEffect(() => {
    document.title = project
      ? `${project.title} — Stéphania`
      : "Case study — Stéphania"
  }, [project])

  if (!caseStudy || !project) {
    return (
      <Section spacing="md">
        <Container size="narrow">
          <p className="text-lg text-foreground">
            This case study doesn't exist yet.
          </p>
          <Link
            to="/#work"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium tracking-tight text-brand"
          >
            <ArrowLeft aria-hidden="true" className="size-4" />
            Back to Selected Work
          </Link>
        </Container>
      </Section>
    )
  }

  return (
    <article>
      <Section spacing="md">
        <Container size="narrow">
          <Link
            to="/#work"
            className="group inline-flex items-center gap-2 text-sm font-medium tracking-tight text-muted-foreground transition-colors duration-(--duration-fast) ease-standard hover:text-brand"
          >
            <ArrowLeft
              aria-hidden="true"
              className="size-4 transition-transform duration-(--duration-fast) ease-standard group-hover:-translate-x-0.5"
            />
            Selected Work
          </Link>

          <p className="mt-10 font-sans text-xs tracking-widest text-brand uppercase">
            {project.category} · {project.year}
          </p>

          <h1 className="mt-4 text-5xl font-bold md:text-6xl">
            {project.title}
          </h1>

          <div className="mt-16 space-y-16">
            {caseStudy.sections.map((section, sectionIndex) => {
              // The closing section's last paragraph is where every case
              // study lands on its own version of the same belief the
              // Hero states once, in different words each time (Sprint
              // 11.4) — never the Hero's exact sentence, same voice.
              const isClosingSection =
                sectionIndex === caseStudy.sections.length - 1

              return (
                <section key={section.heading}>
                  <div className="max-w-xl">
                    <h2 className="text-2xl font-bold md:text-3xl">
                      {section.heading}
                    </h2>
                    <div className="mt-4 space-y-4">
                      {section.paragraphs.map((paragraph, paragraphIndex) => {
                        const isReflection =
                          isClosingSection &&
                          paragraphIndex === section.paragraphs.length - 1

                        return (
                          <p
                            key={paragraph}
                            className={cn(
                              "text-lg leading-relaxed text-foreground",
                              isReflection && "text-xl italic md:text-2xl",
                            )}
                          >
                            {paragraph}
                          </p>
                        )
                      })}
                    </div>
                  </div>

                  {/* Images get the full (narrow) container width, not the
                      text column's max-w-xl — a cramped multi-page screenshot
                      is illegible; body text at that width is not. */}
                  {section.images && section.images.length > 0 ? (
                    <div className="mt-8 space-y-8">
                      {section.images.map((image) => (
                        <figure key={image.src}>
                          <img
                            src={image.src}
                            alt={image.alt}
                            loading="lazy"
                            className="w-full border border-border"
                          />
                          {image.caption ? (
                            <figcaption className="mt-3 font-mono text-xs tracking-widest text-muted-foreground uppercase">
                              {image.caption}
                            </figcaption>
                          ) : null}
                        </figure>
                      ))}
                    </div>
                  ) : null}
                </section>
              )
            })}
          </div>
        </Container>
      </Section>
    </article>
  )
}

export { CaseStudy }
