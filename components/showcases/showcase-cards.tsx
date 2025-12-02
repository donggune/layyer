"use client"

import { motion } from 'framer-motion'
import { Heart, Star, TrendingUp } from 'lucide-react'

export function ShowcaseCards() {
    return (
        <div className="flex flex-col gap-4">
            {/* Tilt Card */}
            <motion.div
                whileHover={{ rotateY: 5, rotateX: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative p-6 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 backdrop-blur-sm"
                style={{ transformStyle: 'preserve-3d' }}
            >
                <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-blue-500/20">
                        <Star className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                        <h4 className="font-semibold text-white mb-1">Tilt Card</h4>
                        <p className="text-sm text-zinc-400">Hover for 3D effect</p>
                    </div>
                </div>
            </motion.div>

            {/* Expandable Card */}
            <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative p-6 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-white/10 backdrop-blur-sm overflow-hidden group"
            >
                <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-purple-500/20">
                        <Heart className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                        <h4 className="font-semibold text-white mb-1">Hover Card</h4>
                        <p className="text-sm text-zinc-400">Smooth scale effect</p>
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    whileHover={{ opacity: 1, height: 'auto' }}
                    className="mt-4 pt-4 border-t border-white/10"
                >
                    <p className="text-xs text-zinc-500">Additional content appears on hover!</p>
                </motion.div>
            </motion.div>

            {/* Glow Border Card */}
            <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />
                <div className="relative p-6 rounded-xl bg-black/80 border border-white/10 backdrop-blur-sm">
                    <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-green-500/20">
                            <TrendingUp className="w-5 h-5 text-green-400" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-white mb-1">Glow Border</h4>
                            <p className="text-sm text-zinc-400">Animated border glow</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
