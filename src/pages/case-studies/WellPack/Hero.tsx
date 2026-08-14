import { CaseStudyHero } from "@/components/ui/case-study-hero"
import website from "@/assets/case-studies/wellpack/02-brand/supports/Declinaisaon_siteweb.png"

const META = [
  { label: "Role", value: "UX Researcher" },
  { label: "Timeline", value: "2021 – 2023" },
  {
    label: "Stakeholders",
    value: "CEO · Co-founder · Marketing · Sales · Key Accounts",
  },
  { label: "Focus", value: "UX Research · Personas · Market Analysis" },
]

/** WellPack uses the same project-cover sequence as SPF and Portfolio. */
function Hero() {
  return (
    <CaseStudyHero
      eyebrow="Marketing Design · WellPack"
      title="WellPack"
      summary="For two years, every landing page my team at WellPack shipped had already survived contact with evidence about the client’s actual market — not my best guess, and not the brief I’d been handed."
      detail="I designed the system that made sure nobody had to guess: a repeatable research method that turned client requests into evidence-based landing-page briefs."
      meta={META}
      image={{
        src: website,
        alt: "WellPack's completed website, showing the brand identity applied to a real digital product experience.",
      }}
    />
  )
}

export { Hero }
