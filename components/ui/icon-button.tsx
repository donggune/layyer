"use client"

import { motion, HTMLMotionProps } from "framer-motion"
import { forwardRef } from "react"
import { cn } from "@/lib/utils"

export interface IconButtonProps extends HTMLMotionProps<"button"> {
    size?: "sm" | "md" | "lg"
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
    ({ className, size = "md", children, ...props }, ref) => {
        const sizes = {
            sm: "w-8 h-8",
            md: "w-12 h-12",
            lg: "w-16 h-16",
        }

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className={cn(
                    "rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-lg",
                    sizes[size],
                    className
                )}
                {...props}
            >
                {children}
            </motion.button>
        )
    }
)

IconButton.displayName = "IconButton"
