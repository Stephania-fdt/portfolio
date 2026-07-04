import { Navigation } from "@/components/layout/Navigation/Navigation"
import { Hero } from "@/components/sections/Hero/Hero"
import { Work } from "@/components/sections/Work/Work"
import { EditorialQuote } from "@/components/sections/EditorialQuote/EditorialQuote"
import { DesignPrinciples } from "@/components/sections/DesignPrinciples/DesignPrinciples"
import { TheProcess } from "@/components/sections/Process/TheProcess"
import { SelectedThoughts } from "@/components/sections/SelectedThoughts/SelectedThoughts"

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <Work />
      <EditorialQuote />
      <DesignPrinciples />
      <TheProcess />
      <SelectedThoughts />
    </>
  )
}

export default App
