"use client"

import { InputHTMLAttributes, forwardRef } from "react"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

export interface AnimatedInputProps extends InputHTMLAttributes<HTMLInputElement> {
    icon?: LucideIcon
    gradient?: string
}

export const AnimatedInput = forwardRef<HTMLInputElement, AnimatedInputProps>(
    ({ className, icon: Icon, gradient = "from-blue-500 to-purple-500", ...props }, ref) => {
        return (
            <div className="relative group">
                <div
                    className={cn(
                        "absolute -inset-0.5 rounded-lg opacity-0 group-focus-within:opacity-100 blur transition-opacity duration-300 bg-gradient-to-r",
                        gradient
                    )}
                />
                <div className="relative flex items-center">
                    {Icon && <Icon className="absolute left-3 w-4 h-4 text-zinc-400" />}
                    <input
                        ref={ref}
                        className={cn(
                            "w-full py-3 bg-black/80 border border-white/10 rounded-lg text-white placeholder-zinc-500 focus:outline-none",
                            Icon ? "pl-10 pr-4" : "px-4",
                            className
                        )}
                        {...props}
                    />
                </div>
            </div>
        )
    }
)

AnimatedInput.displayName = "AnimatedInput"
