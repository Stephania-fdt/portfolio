export type NavLink = {
  label: string
  href: string
}

export type NavigationContent = {
  links: NavLink[]
  cta: NavLink
}

/**
 * Every link resolves to a real destination — no forward declarations.
 * "About" is a real, standalone route (`/about`, `pages/About/About.tsx`).
 * "Experience" still reuses The Process, the closest existing stand-in
 * for a timeline until real chronology content exists — an honest reuse
 * of real content, not a fake anchor. `href` values starting with "#" are
 * hash anchors resolved against the home page; anything starting with
 * "/" is a real route — see `resolveNavHref` (`Navigation.tsx`,
 * `IndexNavigation.tsx`) for how each is turned into a `Link`'s `to`.
 */
export const navigationContent: NavigationContent = {
  links: [
    { label: "Work", href: "#work" },
    { label: "About", href: "/about" },
    { label: "Experience", href: "#process" },
    { label: "Contact", href: "#contact" },
  ],
  cta: { label: "Let's talk", href: "#contact" },
}

/**
 * A hash href (e.g. "#work") means "that section, on the home page" —
 * resolved to "/#work" so it works from any route. A path href (e.g.
 * "/about") is already a real, complete route. Naively prefixing every
 * `href` with "/" (the previous, hash-only approach) would turn "/about"
 * into "//about".
 */
function resolveNavHref(href: string): string {
  return href.startsWith("#") ? `/${href}` : href
}

/** True when this link's destination is the current page — a real route
 *  match for path hrefs, a section-in-view match (via `activeId`, from
 *  `useActiveSection`) for hash hrefs. Same `isActive` boolean either way,
 *  so the existing active styling needs no new states. */
function isNavLinkActive(
  href: string,
  pathname: string,
  activeId: string | null,
): boolean {
  return href.startsWith("#") ? activeId === href.slice(1) : pathname === href
}

export { resolveNavHref, isNavLinkActive }
