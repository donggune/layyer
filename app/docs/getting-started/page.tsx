import { GradientText } from "@/components/ui"
import { CodeBlock } from "@/components/layout"

export default function GettingStartedPage() {
    return (
        <div className="relative min-h-screen text-white pt-24 pb-16">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <h1 className="text-5xl font-bold mb-6">
                    <GradientText>Getting Started</GradientText>
                </h1>

                <div className="prose prose-invert max-w-none">
                    <p className="text-xl text-zinc-400 mb-12">
                        Welcome to React Bits! This guide will help you get started with our component library.
                    </p>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-white">What is React Bits?</h2>
                        <p className="text-zinc-400 mb-4">
                            React Bits is a collection of beautifully designed, animated UI components built with React, Framer Motion, and Tailwind CSS.
                            Each component is crafted with attention to detail and can be easily copied into your project.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-white">Quick Start</h2>
                        <p className="text-zinc-400 mb-4">
                            1. Browse the <a href="/components" className="text-blue-400 hover:text-blue-300">components page</a> to find what you need
                        </p>
                        <p className="text-zinc-400 mb-4">
                            2. Click on a component to see its live preview and code
                        </p>
                        <p className="text-zinc-400 mb-4">
                            3. Copy the component code into your project
                        </p>
                        <p className="text-zinc-400 mb-8">
                            4. Customize it to fit your needs!
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-white">Example Usage</h2>
                        <p className="text-zinc-400 mb-4">
                            Here's a simple example of using a Gradient Button:
                        </p>
                        <CodeBlock code={`import { GradientButton } from "@/components/ui"

export function MyComponent() {
  return (
    <GradientButton onClick={() => console.log("Clicked!")}>
      Click Me
    </GradientButton>
  )
}`} />
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-white">Next Steps</h2>
                        <ul className="space-y-3 text-zinc-400">
                            <li>• Check out the <a href="/docs/installation" className="text-blue-400 hover:text-blue-300">Installation Guide</a></li>
                            <li>• Browse <a href="/components" className="text-blue-400 hover:text-blue-300">All Components</a></li>
                            <li>• See <a href="/examples" className="text-blue-400 hover:text-blue-300">Real-world Examples</a></li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    )
}
