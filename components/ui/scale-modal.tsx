"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ReactNode } from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

export interface ScaleModalProps {
    isOpen: boolean
    onClose: () => void
    children: ReactNode
    className?: string
}

export function ScaleModal({ isOpen, onClose, children, className }: ScaleModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className={cn(
                            "fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-50",
                            className
                        )}
                    >
                        <div className="relative mx-4 p-6 rounded-2xl bg-black/90 border border-white/10 backdrop-blur-xl shadow-2xl">
                            {/* Glow effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-20 blur-xl" />

                            <div className="relative">
                                {/* Close button */}
                                <button
                                    onClick={onClose}
                                    className="absolute -top-2 -right-2 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                                >
                                    <X className="w-4 h-4 text-white" />
                                </button>

                                {children}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
