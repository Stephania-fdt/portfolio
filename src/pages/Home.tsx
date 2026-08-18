import { useEffect } from "react"

import { Hero } from "@/components/sections/Hero/Hero"
import { HeroExpertise } from "@/components/sections/Hero/HeroExpertise"
import { Work } from "@/components/sections/Work/Work"
import { HomeProfile } from "@/components/sections/HomeProfile/HomeProfile"
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
      <Work />
      <HeroExpertise />
      <HomeProfile />
      <Contact homepage />
    </>
  )
}

export { Home }
