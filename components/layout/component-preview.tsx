"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Code, Eye } from "lucide-react"
import { CodeBlock } from "./code-block"

interface ComponentPreviewProps {
    children: React.ReactNode
    code: string
}

export function ComponentPreview({ children, code }: ComponentPreviewProps) {
    const [activeTab, setActiveTab] = useState<"preview" | "code">("preview")

    return (
        <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl overflow-hidden">
            {/* Tabs */}
            <div className="flex border-b border-white/10">
                <button
                    onClick={() => setActiveTab("preview")}
                    className={`flex items-center gap-2 px-6 py-3 text-sm font-medium transition-colors relative ${activeTab === "preview" ? "text-white" : "text-zinc-400 hover:text-white"
                        }`}
                >
                    <Eye className="w-4 h-4" />
                    Preview
                    {activeTab === "preview" && (
                        <motion.div
                            layoutId="activeTab"
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                        />
                    )}
                </button>
                <button
                    onClick={() => setActiveTab("code")}
                    className={`flex items-center gap-2 px-6 py-3 text-sm font-medium transition-colors relative ${activeTab === "code" ? "text-white" : "text-zinc-400 hover:text-white"
                        }`}
                >
                    <Code className="w-4 h-4" />
                    Code
                    {activeTab === "code" && (
                        <motion.div
                            layoutId="activeTab"
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                        />
                    )}
                </button>
            </div>

            {/* Content */}
            <div className="p-8">
                {activeTab === "preview" ? (
                    <div className="flex items-center justify-center min-h-[200px]">
                        {children}
                    </div>
                ) : (
                    <CodeBlock code={code} />
                )}
            </div>
        </div>
    )
}
