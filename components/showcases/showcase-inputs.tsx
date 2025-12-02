"use client"

import { motion } from 'framer-motion'
import { Search, Mail, Lock } from 'lucide-react'
import { useState } from 'react'

export function ShowcaseInputs() {
    const [focused, setFocused] = useState<string | null>(null)
    const [toggleOn, setToggleOn] = useState(false)

    return (
        <div className="flex flex-col gap-6">
            {/* Floating Label Input */}
            <div className="relative">
                <input
                    type="text"
                    id="email"
                    onFocus={() => setFocused('email')}
                    onBlur={(e) => !e.target.value && setFocused(null)}
                    className="peer w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-transparent focus:border-blue-500 focus:outline-none transition-colors"
                    placeholder="Email"
                />
                <label
                    htmlFor="email"
                    className="absolute left-4 -top-2.5 px-1 bg-[#060010] text-sm text-zinc-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-400"
                >
                    <Mail className="w-3 h-3 inline mr-1" />
                    Email Address
                </label>
            </div>

            {/* Animated Border Input */}
            <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg opacity-0 group-focus-within:opacity-100 blur transition-opacity duration-300" />
                <div className="relative flex items-center">
                    <Search className="absolute left-3 w-4 h-4 text-zinc-400" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full pl-10 pr-4 py-3 bg-black/80 border border-white/10 rounded-lg text-white placeholder-zinc-500 focus:outline-none"
                    />
                </div>
            </div>

            {/* Toggle Switch */}
            <div className="flex items-center justify-between">
                <span className="text-sm text-zinc-400">Enable notifications</span>
                <motion.button
                    onClick={() => setToggleOn(!toggleOn)}
                    className={`relative w-14 h-7 rounded-full transition-colors ${toggleOn ? 'bg-blue-500' : 'bg-white/10'
                        }`}
                >
                    <motion.div
                        animate={{ x: toggleOn ? 28 : 2 }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        className="absolute top-1 w-5 h-5 rounded-full bg-white shadow-lg"
                    />
                </motion.button>
            </div>
        </div>
    )
}
