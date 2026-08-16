import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const containerVariants = cva("mx-auto w-full px-container", {
  variants: {
    size: {
      narrow: "max-w-narrow",
      content: "max-w-content",
      wide: "max-w-wide",
    },
  },
  defaultVariants: {
    size: "content",
  },
})

type ContainerSize = VariantProps<typeof containerVariants>["size"]

type ContainerProps<T extends React.ElementType> = {
  as?: T
  className?: string
  children?: React.ReactNode
} & VariantProps<typeof containerVariants> &
  Omit<React.ComponentPropsWithoutRef<T>, "as" | "className" | "children">

function Container<T extends React.ElementType = "div">({
  as,
  size,
  className,
  children,
  ...props
}: ContainerProps<T>) {
  const Comp = as ?? "div"

  return (
    <Comp
      data-slot="container"
      className={cn(containerVariants({ size, className }))}
      {...props}
    >
      {children}
    </Comp>
  )
}

export { Container }
export type { ContainerSize }
