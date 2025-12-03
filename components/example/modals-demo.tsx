"use client"

import { useState } from "react"
import { AlertCircle, Check } from "lucide-react"
import { ScaleModal, GradientButton } from "@/components/ui"

export function ModalsDemo() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="space-y-4">
            <GradientButton
                onClick={() => setIsOpen(true)}
                className="w-full"
            >
                Open Modal
            </GradientButton>

            <ScaleModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-full bg-purple-500/20">
                        <AlertCircle className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-white mb-2">
                            Animated Modal
                        </h3>
                        <p className="text-sm text-zinc-400">
                            This modal features smooth scale and fade animations with a beautiful backdrop blur effect.
                        </p>
                    </div>
                </div>

                <div className="flex gap-3 mt-6">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="flex-1 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium"
                    >
                        <span className="flex items-center justify-center gap-1">
                            <Check className="w-4 h-4" />
                            Confirm
                        </span>
                    </button>
                </div>
            </ScaleModal>
        </div>
    )
}
