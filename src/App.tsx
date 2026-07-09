import { Route, Routes } from "react-router-dom"

import { Navigation } from "@/components/layout/Navigation/Navigation"
import { ScrollManager } from "@/components/layout/ScrollManager"
import { Home } from "@/pages/Home"
import { CaseStudy } from "@/pages/CaseStudy/CaseStudy"

function App() {
  return (
    <>
      <ScrollManager />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/:slug" element={<CaseStudy />} />
      </Routes>
    </>
  )
}

export default App
