import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
import { Container, type ContainerSize } from "@/components/ui/container"

const sectionVariants = cva("w-full", {
  variants: {
    spacing: {
      none: "",
      sm: "py-section-sm",
      md: "py-section",
    },
  },
  defaultVariants: {
    spacing: "md",
  },
})

type SectionProps = {
  className?: string
  children?: React.ReactNode
  /** Wraps children in `Container`. Pass `false` for full-bleed sections. Defaults to "content". */
  container?: ContainerSize | false
} & VariantProps<typeof sectionVariants> &
  Omit<React.ComponentPropsWithoutRef<"section">, "className" | "children">

function Section({
  className,
  spacing,
  container = "content",
  children,
  ...props
}: SectionProps) {
  return (
    <section
      data-slot="section"
      className={cn(sectionVariants({ spacing, className }))}
      {...props}
    >
      {container === false ? (
        children
      ) : (
        <Container size={container}>{children}</Container>
      )}
    </section>
  )
}

export { Section }
