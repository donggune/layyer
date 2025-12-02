"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { X, Check, AlertCircle } from 'lucide-react'
import { useState } from 'react'

export function ShowcaseModals() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="space-y-4">
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(true)}
                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold"
            >
                Open Modal
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                        />

                        {/* Modal */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-50"
                        >
                            <div className="relative mx-4 p-6 rounded-2xl bg-black/90 border border-white/10 backdrop-blur-xl shadow-2xl">
                                {/* Glow effect */}
                                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-20 blur-xl" />

                                <div className="relative">
                                    {/* Close button */}
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="absolute -top-2 -right-2 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>

                                    {/* Content */}
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

                                    {/* Actions */}
                                    <div className="flex gap-3 mt-6">
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={() => setIsOpen(false)}
                                            className="flex-1 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors"
                                        >
                                            Cancel
                                        </motion.button>
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={() => setIsOpen(false)}
                                            className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium"
                                        >
                                            <Check className="w-4 h-4 inline mr-1" />
                                            Confirm
                                        </motion.button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    )
}
