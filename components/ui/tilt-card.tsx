"use client"

import { motion, HTMLMotionProps } from "framer-motion"
import { forwardRef } from "react"
import { cn } from "@/lib/utils"

export interface TiltCardProps extends HTMLMotionProps<"div"> {
    gradient?: string
}

export const TiltCard = forwardRef<HTMLDivElement, TiltCardProps>(
    ({ className, gradient = "from-blue-500/20 to-purple-500/20", children, ...props }, ref) => {
        return (
            <motion.div
                ref={ref}
                whileHover={{ rotateY: 5, rotateX: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={cn(
                    "relative p-6 rounded-xl border border-white/10 backdrop-blur-sm bg-gradient-to-br",
                    gradient,
                    className
                )}
                style={{ transformStyle: 'preserve-3d' }}
                {...props}
            >
                {children}
            </motion.div>
        )
    }
)

TiltCard.displayName = "TiltCard"
