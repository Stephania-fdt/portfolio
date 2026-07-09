import { harmonyCaseStudy } from "@/content/case-studies/harmony"
import { spfCaseStudy } from "@/content/case-studies/spf"
import type { CaseStudy } from "@/content/case-studies/types"
import { wellpackCaseStudy } from "@/content/case-studies/wellpack"

/**
 * Keyed by slug, not by array index — `WorkItem` checks this registry to
 * decide whether "Read Case Study" links anywhere real. Only add a project
 * here once its case study is actually written; an entry with no page to
 * go to is worse than no link at all.
 */
export const caseStudies: Record<string, CaseStudy> = {
  [spfCaseStudy.slug]: spfCaseStudy,
  [harmonyCaseStudy.slug]: harmonyCaseStudy,
  [wellpackCaseStudy.slug]: wellpackCaseStudy,
}

export type { CaseStudy, CaseStudySection } from "@/content/case-studies/types"
