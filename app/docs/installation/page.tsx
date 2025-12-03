import { GradientText } from "@/components/ui"
import { CodeBlock } from "@/components/layout"

export default function InstallationPage() {
    return (
        <div className="relative min-h-screen text-white pt-24 pb-16">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <h1 className="text-5xl font-bold mb-6">
                    <GradientText>Installation</GradientText>
                </h1>

                <div className="prose prose-invert max-w-none">
                    <p className="text-xl text-zinc-400 mb-12">
                        Learn how to install and configure React Bits in your Next.js project.
                    </p>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-white">Prerequisites</h2>
                        <p className="text-zinc-400 mb-4">
                            Make sure you have the following installed:
                        </p>
                        <ul className="space-y-2 text-zinc-400 mb-6">
                            <li>• Node.js 18+ and npm</li>
                            <li>• Next.js 14+ project</li>
                            <li>• Tailwind CSS configured</li>
                        </ul>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-white">Install Dependencies</h2>
                        <p className="text-zinc-400 mb-4">
                            Install the required dependencies:
                        </p>
                        <CodeBlock
                            code={`npm install framer-motion lucide-react class-variance-authority clsx tailwind-merge`}
                            language="bash"
                        />
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-white">Configure Tailwind</h2>
                        <p className="text-zinc-400 mb-4">
                            Make sure your <code className="px-2 py-1 bg-white/10 rounded text-sm">tailwind.config.js</code> includes:
                        </p>
                        <CodeBlock code={`/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      // Your custom theme
    },
  },
  plugins: [],
}`} language="javascript" />
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-white">Add Utility Function</h2>
                        <p className="text-zinc-400 mb-4">
                            Create <code className="px-2 py-1 bg-white/10 rounded text-sm">lib/utils.ts</code>:
                        </p>
                        <CodeBlock code={`import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}`} />
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-white">Copy Components</h2>
                        <p className="text-zinc-400 mb-4">
                            Now you're ready to copy components! Simply:
                        </p>
                        <ol className="space-y-3 text-zinc-400">
                            <li>1. Browse the <a href="/components" className="text-blue-400 hover:text-blue-300">components page</a></li>
                            <li>2. Click on a component you like</li>
                            <li>3. Copy the code from the "Code" tab</li>
                            <li>4. Paste it into your <code className="px-2 py-1 bg-white/10 rounded text-sm">components/ui/</code> folder</li>
                        </ol>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-white">That's It!</h2>
                        <p className="text-zinc-400 mb-4">
                            You're all set! Start building beautiful UIs with React Bits.
                        </p>
                        <p className="text-zinc-400">
                            Check out the <a href="/examples" className="text-blue-400 hover:text-blue-300">examples page</a> to see how to use the components.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    )
}
