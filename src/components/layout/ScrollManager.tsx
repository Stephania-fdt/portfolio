import { useEffect } from "react"
import { useLocation } from "react-router-dom"

/**
 * React Router doesn't restore scroll position or honor a URL hash on
 * navigation the way a full page load does — this replaces both. A fresh
 * route (no hash) scrolls to top; a route with a hash (e.g. Navigation
 * linking back to "/#work" from a case-study page) scrolls to that section
 * once it's actually in the DOM.
 */
function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1))
      if (target) {
        target.scrollIntoView()
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

export { ScrollManager }
