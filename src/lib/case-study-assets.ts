/**
 * `import.meta.glob` resolves at build time against whatever files
 * actually exist on disk — a filename the glob pattern would match but
 * that hasn't been created yet simply isn't a key in the result object;
 * Vite doesn't error on it. That's the whole mechanism behind "drop an
 * image into the folder, no code changes required": the next dev-server
 * reload or production build picks it up automatically because the glob
 * re-scans the filesystem, not a hardcoded list.
 *
 * `eager: true` keeps lookups synchronous — the number of images here
 * will never be large enough to justify code-splitting them.
 */
const spfAssetModules = import.meta.glob<{ default: string }>(
  "/src/assets/case-studies/spf/**/*.{webp,png,jpg,jpeg}",
  { eager: true },
)

/**
 * Returns the resolved asset URL for `folder/filename` if that file
 * exists under `src/assets/case-studies/spf/`, or `undefined` if it
 * hasn't been added yet. Components branch on this to show the real
 * image or the "awaiting assets" placeholder.
 */
export function getSpfAsset(
  folder: string,
  filename: string,
): string | undefined {
  const key = `/src/assets/case-studies/spf/${folder}/${filename}`
  return spfAssetModules[key]?.default
}
