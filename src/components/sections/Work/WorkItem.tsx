import { ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { formatNumeral } from "@/lib/numerals"
import { EditorialEntry } from "@/components/ui/editorial-entry"
import type { WorkProject } from "@/content/work"

type WorkItemProps = {
  project: WorkProject
  index: number
  /** Mirrors the image to the opposite side — Work's one alternating-rhythm device. */
  reverse?: boolean
}

function WorkItem({ project, index, reverse }: WorkItemProps) {
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
            {project.technologies.join(" · ")}
          </p>

          <a
            href={project.href}
            className="group mt-8 inline-flex items-center gap-2 text-sm font-medium tracking-tight text-foreground"
          >
            Read Case Study
            <ArrowRight
              aria-hidden="true"
              className="size-4 transition-transform duration-(--duration-fast) ease-standard group-hover:translate-x-0.5"
            />
          </a>
        </EditorialEntry>
      </div>

      <div className="md:basis-3/5">
        <div className="flex aspect-[4/3] w-full items-center justify-center border border-border bg-secondary/50">
          <span className="font-mono text-xs tracking-widest text-muted-foreground/70 uppercase">
            Fig. {formatNumeral(index)}
          </span>
        </div>
      </div>
    </div>
  )
}

export { WorkItem }
