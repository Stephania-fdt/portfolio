import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group inline-flex shrink-0 items-center justify-center gap-2 rounded-sm text-sm font-medium tracking-tight whitespace-nowrap transition-[background-color,border-color,box-shadow] duration-(--duration-standard) ease-standard outline-none select-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Filled/bordered surfaces get the warm-shadow lift — light
        // gathering on an actual surface, not a flat color swap. Ghost
        // and link stay shadowless: a shadow under transparent geometry
        // reads as a rendering bug, not "light."
        primary:
          "bg-brand text-brand-foreground shadow-xs hover:bg-brand-hover hover:shadow-md",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/70 hover:shadow-md",
        outline:
          "border border-border bg-transparent text-foreground shadow-xs hover:bg-muted hover:shadow-sm",
        ghost: "bg-transparent text-foreground hover:bg-muted",
        link: "bg-transparent text-foreground underline-offset-4 hover:underline",
        destructive:
          "bg-destructive text-destructive-foreground shadow-xs hover:bg-destructive/90 hover:shadow-md",
      },
      size: {
        sm: "h-8 px-4 text-xs",
        md: "h-10 px-5 text-sm",
        lg: "h-12 px-7 text-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
)

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
