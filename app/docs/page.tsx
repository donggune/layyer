import Link from "next/link"
import { GradientText } from "@/components/ui"
import { Book, Rocket, Package, Code } from "lucide-react"

const docSections = [
    {
        title: "Getting Started",
        description: "Learn how to get started with React Bits",
        icon: Rocket,
        href: "/docs/getting-started",
    },
    {
        title: "Installation",
        description: "Install and configure React Bits in your project",
        icon: Package,
        href: "/docs/installation",
    },
    {
        title: "Components",
        description: "Browse all available components",
        icon: Code,
        href: "/components",
    },
    {
        title: "Examples",
        description: "See real-world usage examples",
        icon: Book,
        href: "/examples",
    },
]

export default function DocsPage() {
    return (
        <div className="relative min-h-screen text-white pt-24 pb-16">
            <div className="container mx-auto px-4 md:px-6 max-w-5xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
                        <GradientText>Documentation</GradientText>
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                        Everything you need to know about React Bits
                    </p>
                </div>

                {/* Doc Sections */}
                <div className="grid md:grid-cols-2 gap-6">
                    {docSections.map((section) => {
                        const Icon = section.icon
                        return (
                            <Link
                                key={section.href}
                                href={section.href}
                                className="group relative p-8 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all"
                            >
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity" />

                                <div className="relative">
                                    <div className="mb-4 p-3 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 w-fit">
                                        <Icon className="w-6 h-6 text-blue-400" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-2">{section.title}</h3>
                                    <p className="text-zinc-400">{section.description}</p>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
