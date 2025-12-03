"use client"

import { useState } from "react"
import { Sparkles, Zap, Download, ArrowRight } from "lucide-react"
import { GradientButton, GlowButton, LoadingButton, IconButton } from "@/components/ui"

export function ButtonsDemo() {
    const [isLoading, setIsLoading] = useState(false)

    const handleLoadingClick = () => {
        setIsLoading(true)
        setTimeout(() => setIsLoading(false), 2000)
    }

    return (
        <div className="flex flex-col gap-4">
            <GradientButton gradient="blue-purple">
                <Sparkles className="w-4 h-4" />
                Gradient Magic
            </GradientButton>

            <GlowButton>
                <Zap className="w-4 h-4" />
                Glow Effect
            </GlowButton>

            <LoadingButton
                isLoading={isLoading}
                onClick={handleLoadingClick}
            >
                <Download className="w-4 h-4" />
                Click Me
            </LoadingButton>

            <IconButton>
                <ArrowRight className="w-5 h-5" />
            </IconButton>
        </div>
    )
}
