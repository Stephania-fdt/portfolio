import { Fragment } from "react"

function LocalizedRichText({ text }: { text: string }) {
  return text.split(/(`[^`]+`)/g).map((part, index) =>
    part.startsWith("`") && part.endsWith("`") ? (
      <code key={`${part}-${index}`} className="font-mono text-base">
        {part.slice(1, -1)}
      </code>
    ) : (
      <Fragment key={`${part}-${index}`}>{part}</Fragment>
    ),
  )
}

export { LocalizedRichText }
