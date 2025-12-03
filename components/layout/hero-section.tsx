"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
    return (
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden text-center px-4">
            {/* Massive Background Gradient Effects */}
            <div className="absolute top-1/4 -left-1/4 h-[800px] w-[800px] rounded-full bg-blue-600/30 blur-[160px]" />
            <div className="absolute bottom-1/4 -right-1/4 h-[800px] w-[800px] rounded-full bg-purple-600/30 blur-[160px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-pink-600/20 blur-[140px]" />

            <div className="container mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mx-auto max-w-6xl space-y-8"
                >
                    {/* Main Title */}
                    <motion.h1
                        className="text-7xl font-bold tracking-tight sm:text-8xl md:text-9xl lg:text-[10rem] leading-none"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="block text-white mb-4">React</span>
                        <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                            Components
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        className="mx-auto max-w-3xl text-xl text-zinc-400 sm:text-2xl md:text-3xl leading-relaxed font-light"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        A collection of high quality, animated, interactive components
                        <br />
                        <span className="text-zinc-500">for building stunning user interfaces</span>
                    </motion.p>

                    {/* Floating Elements */}
                    <motion.div
                        className="flex items-center justify-center gap-8 pt-12"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        {[...Array(3)].map((_, i) => (
                            <motion.div
                                key={i}
                                animate={{
                                    y: [0, -20, 0],
                                    rotate: [0, 5, -5, 0],
                                }}
                                transition={{
                                    duration: 3,
                                    delay: i * 0.2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 backdrop-blur-sm"
                            />
                        ))}
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-12 left-1/2 -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <div className="flex flex-col items-center gap-2 text-zinc-500">
                        <span className="text-sm font-medium">Scroll to explore</span>
                        <ArrowDown className="w-5 h-5" />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
