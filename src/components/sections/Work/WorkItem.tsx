import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

import { cn } from "@/lib/utils"
import { formatNumeral } from "@/lib/numerals"
import { EditorialEntry } from "@/components/ui/editorial-entry"
import { caseStudies } from "@/content/case-studies"
import type { WorkProject } from "@/content/work"

type WorkItemProps = {
  project: WorkProject
  index: number
  /** Mirrors the image to the opposite side — Work's one alternating-rhythm device. */
  reverse?: boolean
}

function WorkItem({ project, index, reverse }: WorkItemProps) {
  // A project only links to a case study once one has actually been
  // written — a promised page that doesn't exist is worse than no link.
  const slug = project.href.replace("/work/", "")
  const hasCaseStudy = slug in caseStudies

  return (
    <div
      className={cn(
        "flex flex-col gap-10 md:flex-row md:items-center md:gap-16",
        reverse && "md:flex-row-reverse",
      )}
    >
      <div className="md:basis-2/5">
        <EditorialEntry
          index={index}
          eyebrow={`${project.category} · ${project.year}`}
          title={project.title}
          sentence={project.sentence}
        >
          <p className="mt-6 font-mono text-xs tracking-wide text-muted-foreground">
            {project.technologies.map((tech, i) => (
              <span key={tech}>
                {i > 0 && " · "}
                <span
                  className={cn(
                    project.signalTechnologies?.includes(tech) &&
                      "font-medium text-foreground",
                  )}
                >
                  {tech}
                </span>
              </span>
            ))}
          </p>

          {hasCaseStudy ? (
            <Link
              to={project.href}
              className="group mt-8 inline-flex items-center gap-2 text-sm font-medium tracking-tight text-brand"
            >
              Read Case Study
              <ArrowRight
                aria-hidden="true"
                className="size-4 transition-transform duration-(--duration-fast) ease-standard group-hover:translate-x-0.5"
              />
            </Link>
          ) : null}
        </EditorialEntry>
      </div>

      <div className="md:basis-3/5">
        <div className="flex aspect-[4/3] w-full items-center justify-center border border-border bg-secondary/50">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            Fig. {formatNumeral(index)}
          </span>
        </div>
      </div>
    </div>
  )
}

export { WorkItem }
