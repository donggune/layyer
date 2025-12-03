"use client"

import { useState } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"
import { Copy, Check } from "lucide-react"

interface CodeBlockProps {
    code: string
    language?: string
}

export function CodeBlock({ code, language = "tsx" }: CodeBlockProps) {
    const [copied, setCopied] = useState(false)

    const handleCopy = async () => {
        await navigator.clipboard.writeText(code)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="relative group">
            <button
                onClick={handleCopy}
                className="absolute top-4 right-4 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors z-10"
            >
                {copied ? (
                    <Check className="w-4 h-4 text-green-400" />
                ) : (
                    <Copy className="w-4 h-4 text-zinc-400" />
                )}
            </button>

            <SyntaxHighlighter
                language={language}
                style={vscDarkPlus}
                customStyle={{
                    margin: 0,
                    borderRadius: "0.75rem",
                    padding: "1.5rem",
                    fontSize: "0.875rem",
                }}
            >
                {code}
            </SyntaxHighlighter>
        </div>
    )
}
