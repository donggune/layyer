"use client"

import { motion } from 'framer-motion'
import { Download, ArrowRight, Sparkles, Zap } from 'lucide-react'
import { useState } from 'react'

export function ShowcaseButtons() {
    const [isLoading, setIsLoading] = useState(false)

    const handleLoadingClick = () => {
        setIsLoading(true)
        setTimeout(() => setIsLoading(false), 2000)
    }

    return (
        <div className="flex flex-col gap-4">
            {/* Gradient Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold overflow-hidden group"
            >
                <span className="relative z-10 flex items-center justify-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Gradient Magic
                </span>
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"
                    initial={{ x: '100%' }}
                    whileHover={{ x: '0%' }}
                    transition={{ duration: 0.3 }}
                />
            </motion.button>

            {/* Glow Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-6 py-3 rounded-full bg-blue-500 text-white font-semibold group"
            >
                <div className="absolute -inset-1 bg-blue-500 rounded-full blur-lg opacity-0 group-hover:opacity-75 transition-opacity duration-300" />
                <span className="relative z-10 flex items-center justify-center gap-2">
                    <Zap className="w-4 h-4" />
                    Glow Effect
                </span>
            </motion.button>

            {/* Loading Button */}
            <motion.button
                whileHover={{ scale: isLoading ? 1 : 1.05 }}
                whileTap={{ scale: isLoading ? 1 : 0.95 }}
                onClick={handleLoadingClick}
                disabled={isLoading}
                className="relative px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white font-semibold backdrop-blur-sm disabled:opacity-50"
            >
                {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        />
                        Loading...
                    </span>
                ) : (
                    <span className="flex items-center justify-center gap-2">
                        <Download className="w-4 h-4" />
                        Click Me
                    </span>
                )}
            </motion.button>

            {/* Icon Button */}
            <motion.button
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-lg"
            >
                <ArrowRight className="w-5 h-5" />
            </motion.button>
        </div>
    )
}
