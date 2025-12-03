"use client"

import { motion, HTMLMotionProps } from "framer-motion"
import { forwardRef } from "react"
import { cn } from "@/lib/utils"

export interface HoverCardProps extends HTMLMotionProps<"div"> {
    gradient?: string
}

export const HoverCard = forwardRef<HTMLDivElement, HoverCardProps>(
    ({ className, gradient = "from-purple-500/20 to-pink-500/20", children, ...props }, ref) => {
        return (
            <motion.div
                ref={ref}
                whileHover={{ scale: 1.02 }}
                className={cn(
                    "relative p-6 rounded-xl border border-white/10 backdrop-blur-sm overflow-hidden group bg-gradient-to-br",
                    gradient,
                    className
                )}
                {...props}
            >
                {children}
            </motion.div>
        )
    }
)

HoverCard.displayName = "HoverCard"
