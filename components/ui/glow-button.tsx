"use client"

import { motion, HTMLMotionProps } from "framer-motion"
import { forwardRef } from "react"
import { cn } from "@/lib/utils"

export interface GlowButtonProps extends HTMLMotionProps<"button"> {
    glowColor?: string
    size?: "sm" | "md" | "lg"
    children: React.ReactNode
}

export const GlowButton = forwardRef<HTMLButtonElement, GlowButtonProps>(
    ({ className, glowColor = "#3b82f6", size = "md", children, ...props }, ref) => {
        const sizes = {
            sm: "px-4 py-2 text-sm",
            md: "px-6 py-3 text-base",
            lg: "px-8 py-4 text-lg",
        }

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                    "relative rounded-full bg-blue-500 text-white font-semibold group",
                    sizes[size],
                    className
                )}
                style={{ backgroundColor: glowColor }}
                {...props}
            >
                <div
                    className="absolute -inset-1 rounded-full blur-lg opacity-0 group-hover:opacity-75 transition-opacity duration-300"
                    style={{ backgroundColor: glowColor }}
                />
                <span className="relative z-10 flex items-center justify-center gap-2">
                    {children}
                </span>
            </motion.button>
        )
    }
)

GlowButton.displayName = "GlowButton"
