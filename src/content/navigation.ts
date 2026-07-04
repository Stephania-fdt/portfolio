export type NavLink = {
  label: string
  href: string
}

export type NavigationContent = {
  /**
   * `about` and `experience` (and Work's own `contact`) are forward
   * declarations — no section with a matching id exists yet. Same gap
   * Hero's own secondary CTA already has for `#contact`.
   */
  links: NavLink[]
  cta: NavLink
}

export const navigationContent: NavigationContent = {
  links: [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
  cta: { label: "Let's talk", href: "#contact" },
}
