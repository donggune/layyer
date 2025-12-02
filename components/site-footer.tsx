import Link from "next/link"

export function SiteFooter() {
    return (
        <footer className="border-t border-white/10 bg-black py-12">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <span className="text-lg font-bold tracking-tight text-white">Google Antigravity</span>
                        </Link>
                        <p className="text-sm text-zinc-400">
                            The next-generation IDE for building the future of software.
                        </p>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold text-white">Product</h3>
                        <ul className="space-y-2 text-sm text-zinc-400">
                            <li><Link href="#" className="hover:text-white">Features</Link></li>
                            <li><Link href="#" className="hover:text-white">Integrations</Link></li>
                            <li><Link href="#" className="hover:text-white">Pricing</Link></li>
                            <li><Link href="#" className="hover:text-white">Changelog</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold text-white">Resources</h3>
                        <ul className="space-y-2 text-sm text-zinc-400">
                            <li><Link href="#" className="hover:text-white">Documentation</Link></li>
                            <li><Link href="#" className="hover:text-white">API Reference</Link></li>
                            <li><Link href="#" className="hover:text-white">Community</Link></li>
                            <li><Link href="#" className="hover:text-white">Blog</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold text-white">Company</h3>
                        <ul className="space-y-2 text-sm text-zinc-400">
                            <li><Link href="#" className="hover:text-white">About</Link></li>
                            <li><Link href="#" className="hover:text-white">Careers</Link></li>
                            <li><Link href="#" className="hover:text-white">Legal</Link></li>
                            <li><Link href="#" className="hover:text-white">Contact</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-zinc-500">
                    © {new Date().getFullYear()} Antigravity Inc. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
