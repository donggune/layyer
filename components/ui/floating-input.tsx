"use client"

import { InputHTMLAttributes, forwardRef } from "react"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

export interface FloatingInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string
    icon?: LucideIcon
}

export const FloatingInput = forwardRef<HTMLInputElement, FloatingInputProps>(
    ({ className, label, icon: Icon, id, ...props }, ref) => {
        return (
            <div className="relative">
                <input
                    ref={ref}
                    id={id}
                    className={cn(
                        "peer w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-transparent focus:border-blue-500 focus:outline-none transition-colors",
                        className
                    )}
                    placeholder={label}
                    {...props}
                />
                <label
                    htmlFor={id}
                    className="absolute left-4 -top-2.5 px-1 bg-[#060010] text-sm text-zinc-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-400 flex items-center gap-1"
                >
                    {Icon && <Icon className="w-3 h-3" />}
                    {label}
                </label>
            </div>
        )
    }
)

FloatingInput.displayName = "FloatingInput"
