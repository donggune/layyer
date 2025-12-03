"use client"

import { HTMLAttributes, forwardRef } from "react"
import { cn } from "@/lib/utils"

export interface GradientTextProps extends HTMLAttributes<HTMLSpanElement> {
  gradient?: string
}

export const GradientText = forwardRef<HTMLSpanElement, GradientTextProps>(
  ({ className, gradient = "from-blue-400 via-purple-400 to-pink-400", children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "bg-gradient-to-r bg-clip-text text-transparent",
          gradient,
          className
        )}
        {...props}
      >
        {children}
      </span>
    )
  }
)

GradientText.displayName = "GradientText"
