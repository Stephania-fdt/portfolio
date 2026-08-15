import { useEffect } from "react"

import { Hero } from "@/components/sections/Hero/Hero"
import { HeroExpertise } from "@/components/sections/Hero/HeroExpertise"
import { Positioning } from "@/components/sections/Positioning/Positioning"
import { Work } from "@/components/sections/Work/Work"
import { EditorialQuote } from "@/components/sections/EditorialQuote/EditorialQuote"
import { DesignPrinciples } from "@/components/sections/DesignPrinciples/DesignPrinciples"
import { TheProcess } from "@/components/sections/Process/TheProcess"
import { SelectedThoughts } from "@/components/sections/SelectedThoughts/SelectedThoughts"
import { Contact } from "@/components/sections/Contact/Contact"
import { getHeroContent } from "@/content/hero"
import { useLanguage } from "@/i18n"

/**
 * The single continuous scroll — everything App.tsx used to render
 * directly, before routing split "the homepage" from "a case-study page."
 * Navigation stays outside this component (shared across every route).
 */
function Home() {
  const { language } = useLanguage()
  const heroContent = getHeroContent(language)
  useEffect(() => {
    document.title = `${heroContent.name} — ${heroContent.title}`
  }, [heroContent.name, heroContent.title])

  return (
    <>
      <Hero />
      <HeroExpertise />
      <Work />
      <Positioning />
      <EditorialQuote />
      <DesignPrinciples />
      <TheProcess />
      <SelectedThoughts />
      <Contact />
    </>
  )
}

export { Home }
