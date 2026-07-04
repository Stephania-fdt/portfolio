import { useEffect, useState } from "react"

/**
 * Passive scroll listener collapsed to a single boolean. React bails out
 * of re-rendering when the value doesn't change, so this stays cheap
 * without needing rAF throttling or an IntersectionObserver sentinel.
 */
function useScrolled(threshold = 8) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [threshold])

  return scrolled
}

export { useScrolled }
