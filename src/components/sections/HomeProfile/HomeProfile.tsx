import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

import { Button } from "@/components/ui/button"
import { Section } from "@/components/ui/section"
import { SectionKicker } from "@/components/ui/section-kicker"
import { homeProfileContent } from "@/content/home-profile"
import { getLocalizedContent, useLanguage } from "@/i18n"

function HomeProfile() {
  const { language } = useLanguage()
  const content = getLocalizedContent(homeProfileContent, language)

  return (
    <Section
      id="home-profile"
      spacing="none"
      className="scroll-mt-20 pt-10 pb-10 md:scroll-mt-24 md:pt-12 md:pb-12 lg:pt-14 lg:pb-14"
    >
      <SectionKicker>{content.kicker}</SectionKicker>
      <h2 className="mt-8 max-w-3xl text-3xl leading-tight font-bold tracking-tight md:text-4xl">
        {content.title}
      </h2>
      <div className="mt-6 max-w-2xl space-y-3 text-lg leading-relaxed text-muted-foreground">
        {content.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button asChild size="lg">
          <Link to="/experience">
            {content.experienceCta}
            <ArrowRight aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </Section>
  )
}

export { HomeProfile }
