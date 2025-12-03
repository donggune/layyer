"use client"

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ComponentCardProps {
    title: string
    description: string
    children: ReactNode
    delay?: number
}

export function ComponentCard({ title, description, children, delay = 0 }: ComponentCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay }}
            whileHover={{ scale: 1.02 }}
            className="group relative"
        >
            {/* Glow effect on hover */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500" />

            {/* Card content */}
            <div className="relative h-full rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl p-6 overflow-hidden">
                {/* Inner gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        {title}
                    </h3>
                    <p className="text-sm text-zinc-400 mb-6">
                        {description}
                    </p>

                    {/* Component preview area */}
                    <div className="rounded-xl bg-white/5 border border-white/5 p-8 min-h-[200px] flex items-center justify-center">
                        {children}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
