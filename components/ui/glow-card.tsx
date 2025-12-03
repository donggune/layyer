"use client"

import { HTMLAttributes, forwardRef } from "react"
import { cn } from "@/lib/utils"

export interface GlowCardProps extends HTMLAttributes<HTMLDivElement> {
    glowColor?: string
}

export const GlowCard = forwardRef<HTMLDivElement, GlowCardProps>(
    ({ className, glowColor = "from-green-500 to-teal-500", children, ...props }, ref) => {
        return (
            <div className="relative group">
                <div
                    className={cn(
                        "absolute -inset-0.5 rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500 bg-gradient-to-r",
                        glowColor
                    )}
                />
                <div
                    ref={ref}
                    className={cn(
                        "relative p-6 rounded-xl bg-black/80 border border-white/10 backdrop-blur-sm",
                        className
                    )}
                    {...props}
                >
                    {children}
                </div>
            </div>
        )
    }
)

GlowCard.displayName = "GlowCard"
