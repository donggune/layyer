import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

export function SiteHeader() {
    return (
        <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/20 backdrop-blur-xl supports-[backdrop-filter]:bg-black/20">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-2">
                    <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">React Bits</span>
                </Link>
                <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300/80">
                    <Link href="/components" className="hover:text-white transition-colors">Components</Link>
                    <Link href="/examples" className="hover:text-white transition-colors">Examples</Link>
                    <Link href="/docs" className="hover:text-white transition-colors">Docs</Link>
                    <Link href="/#about" className="hover:text-white transition-colors">About</Link>
                </nav>
                <div className="flex items-center gap-4">
                    <Link
                        href="https://github.com"
                        className="text-sm font-medium text-zinc-300 hover:text-white transition-colors hidden sm:flex items-center gap-2"
                        target="_blank"
                    >
                        <Github className="w-5 h-5" />
                        <span className="hidden lg:inline">GitHub</span>
                    </Link>
                    <Button className="rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90 font-medium px-6">
                        Get Started
                    </Button>
                </div>
            </div>
        </header>
    )
}
