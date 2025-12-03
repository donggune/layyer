"use client"

import { Star, Heart, TrendingUp } from "lucide-react"
import { TiltCard, HoverCard, GlowCard } from "@/components/ui"

export function CardsDemo() {
    return (
        <div className="flex flex-col gap-4">
            <TiltCard>
                <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-blue-500/20">
                        <Star className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                        <h4 className="font-semibold text-white mb-1">Tilt Card</h4>
                        <p className="text-sm text-zinc-400">Hover for 3D effect</p>
                    </div>
                </div>
            </TiltCard>

            <HoverCard>
                <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-purple-500/20">
                        <Heart className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                        <h4 className="font-semibold text-white mb-1">Hover Card</h4>
                        <p className="text-sm text-zinc-400">Smooth scale effect</p>
                    </div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/10">
                    <p className="text-xs text-zinc-500">Additional content appears on hover!</p>
                </div>
            </HoverCard>

            <GlowCard>
                <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-green-500/20">
                        <TrendingUp className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                        <h4 className="font-semibold text-white mb-1">Glow Border</h4>
                        <p className="text-sm text-zinc-400">Animated border glow</p>
                    </div>
                </div>
            </GlowCard>
        </div>
    )
}
