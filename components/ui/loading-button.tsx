"use client"

import { motion, HTMLMotionProps } from "framer-motion"
import { forwardRef } from "react"
import { cn } from "@/lib/utils"

export interface LoadingButtonProps extends HTMLMotionProps<"button"> {
    isLoading?: boolean
    loadingText?: string
    size?: "sm" | "md" | "lg"
    children: React.ReactNode
}

export const LoadingButton = forwardRef<HTMLButtonElement, LoadingButtonProps>(
    ({ className, isLoading = false, loadingText = "Loading...", size = "md", children, ...props }, ref) => {
        const sizes = {
            sm: "px-4 py-2 text-sm",
            md: "px-6 py-3 text-base",
            lg: "px-8 py-4 text-lg",
        }

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: isLoading ? 1 : 1.05 }}
                whileTap={{ scale: isLoading ? 1 : 0.95 }}
                disabled={isLoading}
                className={cn(
                    "relative rounded-full bg-white/10 border border-white/20 text-white font-semibold backdrop-blur-sm disabled:opacity-50",
                    sizes[size],
                    className
                )}
                {...props}
            >
                {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        />
                        {loadingText}
                    </span>
                ) : (
                    <span className="flex items-center justify-center gap-2">
                        {children}
                    </span>
                )}
            </motion.button>
        )
    }
)

LoadingButton.displayName = "LoadingButton"
