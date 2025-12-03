"use client"

import { motion, HTMLMotionProps } from "framer-motion"
import { forwardRef } from "react"
import { cn } from "@/lib/utils"

export interface GradientButtonProps extends HTMLMotionProps<"button"> {
    gradient?: "blue-purple" | "purple-pink" | "pink-orange"
    size?: "sm" | "md" | "lg"
    children: React.ReactNode
}

export const GradientButton = forwardRef<HTMLButtonElement, GradientButtonProps>(
    ({ className, gradient = "blue-purple", size = "md", children, ...props }, ref) => {
        const gradients = {
            "blue-purple": "from-blue-500 via-purple-500 to-pink-500",
            "purple-pink": "from-purple-500 via-pink-500 to-orange-500",
            "pink-orange": "from-pink-500 via-orange-500 to-yellow-500",
        }

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
                    "relative rounded-full font-semibold text-white overflow-hidden group",
                    "bg-gradient-to-r",
                    gradients[gradient],
                    sizes[size],
                    className
                )}
                {...props}
            >
                <span className="relative z-10 flex items-center justify-center gap-2">
                    {children}
                </span>
                <motion.div
                    className={cn(
                        "absolute inset-0 bg-gradient-to-r",
                        gradient === "blue-purple" && "from-pink-500 via-purple-500 to-blue-500",
                        gradient === "purple-pink" && "from-orange-500 via-pink-500 to-purple-500",
                        gradient === "pink-orange" && "from-yellow-500 via-orange-500 to-pink-500"
                    )}
                    initial={{ x: "100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                />
            </motion.button>
        )
    }
)

GradientButton.displayName = "GradientButton"
