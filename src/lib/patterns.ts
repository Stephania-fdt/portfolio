/**
 * The site's field-grid texture — coarse repeating hairlines, first used
 * in HeroBackground and WorkItem's "plate" placeholder. Shared here so
 * new placeholder surfaces (the SPF asset infrastructure) don't redefine
 * the same gradient string a third time.
 */
export const FIELD_GRID_PATTERN =
  "repeating-linear-gradient(to right, var(--color-border) 0, var(--color-border) 1px, transparent 1px, transparent 20%), repeating-linear-gradient(to bottom, var(--color-border) 0, var(--color-border) 1px, transparent 1px, transparent 25%)"
