"use client"

import { motion } from "framer-motion"
import { forwardRef } from "react"
import { cn } from "@/lib/utils"

export interface ToggleSwitchProps {
    checked: boolean
    onCheckedChange: (checked: boolean) => void
    label?: string
    className?: string
}

export const ToggleSwitch = forwardRef<HTMLButtonElement, ToggleSwitchProps>(
    ({ checked, onCheckedChange, label, className }, ref) => {
        return (
            <div className={cn("flex items-center justify-between gap-4", className)}>
                {label && <span className="text-sm text-zinc-400">{label}</span>}
                <motion.button
                    ref={ref}
                    onClick={() => onCheckedChange(!checked)}
                    className={cn(
                        "relative w-14 h-7 rounded-full transition-colors",
                        checked ? "bg-blue-500" : "bg-white/10"
                    )}
                    type="button"
                >
                    <motion.div
                        animate={{ x: checked ? 28 : 2 }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        className="absolute top-1 w-5 h-5 rounded-full bg-white shadow-lg"
                    />
                </motion.button>
            </div>
        )
    }
)

ToggleSwitch.displayName = "ToggleSwitch"
