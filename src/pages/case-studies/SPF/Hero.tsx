import { CaseStudyHero } from "@/components/ui/case-study-hero"
import heroCover from "@/assets/case-studies/spf/product/Desktop - 54.png"

const META = [
  { label: "Role", value: "Product Designer" },
  { label: "Timeline", value: "2023 — Present" },
  { label: "Team", value: "4–10+ developers" },
  { label: "Tools", value: "Figma · Angular Material · Zeroheight" },
]

/** The reference cover, now rendered by the shared case-study hero unchanged. */
function Hero() {
  return (
    <CaseStudyHero
      eyebrow="Design System · Federal Public Service Foreign Affairs"
      title="Building a Scalable Government Design System"
      summary="Designing a modular, accessible and scalable design system for Belgium’s Federal Public Service Foreign Affairs."
      meta={META}
      image={{
        src: heroCover,
        alt: "The SPF citizen portal's authentication screen — the government's architecture as backdrop, the sign-in flow as the one deliberate object in frame.",
      }}
    />
  )
}

export { Hero }
