import { cn } from "@/lib/utils"
import { getSpfAsset } from "@/lib/case-study-assets"
import { spfAssetManifest } from "@/content/case-studies/spf-assets"
import { CaseStudyAsset } from "@/components/ui/case-study-asset"
import { AssetChecklist } from "@/components/ui/asset-checklist"

type CaseStudyAssetSectionProps = {
  /** Must match a `folder` entry in `spfAssetManifest`. */
  folder: string
  columns?: 1 | 2 | 3
  className?: string
}

/**
 * SPF infrastructure (Sprint 18.1). Looks up a section's expected assets
 * in the manifest, renders whichever ones actually exist as real images,
 * and renders a single checklist card for whatever's still missing.
 * Scoped to SPF on purpose — if a second case study needs the same
 * treatment later, generalize then, once a real second use case exists
 * to design the abstraction against.
 */
function CaseStudyAssetSection({
  folder,
  columns = 2,
  className,
}: CaseStudyAssetSectionProps) {
  const section = spfAssetManifest.find((s) => s.folder === folder)
  if (!section || section.assets.length === 0) return null

  const present = section.assets.filter((asset) =>
    getSpfAsset(folder, asset.filename),
  )
  const missing = section.assets.filter(
    (asset) => !getSpfAsset(folder, asset.filename),
  )

  return (
    <div className={className}>
      {present.length > 0 ? (
        <div
          className={cn(
            "grid gap-8",
            columns === 2 && "md:grid-cols-2",
            columns === 3 && "md:grid-cols-3",
          )}
        >
          {present.map((asset) => (
            <CaseStudyAsset
              key={asset.filename}
              src={getSpfAsset(folder, asset.filename)}
              filename={asset.filename}
              alt={asset.description}
              description={asset.description}
            />
          ))}
        </div>
      ) : null}
      <AssetChecklist
        label={section.label}
        missing={missing}
        className={present.length > 0 ? "mt-8" : undefined}
      />
    </div>
  )
}

export { CaseStudyAssetSection }
