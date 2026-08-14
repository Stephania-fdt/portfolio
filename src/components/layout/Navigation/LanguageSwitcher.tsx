import { cn } from "@/lib/utils"
import { useLanguage } from "@/i18n"

function LanguageSwitcher({ className }: { className?: string }) {
  const { language, setLanguage, copy } = useLanguage()

  return (
    <div
      className={cn(
        "flex min-h-11 items-center font-mono text-2xs tracking-widest",
        className,
      )}
      aria-label="Language"
    >
      {(["en", "fr"] as const).map((option, index) => {
        const active = language === option
        const label = option.toUpperCase()
        const ariaLabel =
          option === "en"
            ? copy.controls.switchToEnglish
            : copy.controls.switchToFrench

        return (
          <span key={option} className="flex items-center">
            {index > 0 ? (
              <span aria-hidden="true" className="px-1.5 text-muted-foreground">
                /
              </span>
            ) : null}
            <button
              type="button"
              onClick={() => setLanguage(option)}
              aria-label={ariaLabel}
              aria-pressed={active}
              className={cn(
                "min-h-11 px-0.5 transition-colors duration-(--duration-fast) ease-standard focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
                active
                  ? "font-medium text-brand"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {label}
            </button>
          </span>
        )
      })}
    </div>
  )
}

export { LanguageSwitcher }
