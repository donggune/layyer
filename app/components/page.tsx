import Link from "next/link"
import { getCategories, getComponentsByCategory } from "@/lib/registry"
import { ComponentCard, ComponentGrid } from "@/components/layout"
import { GradientText } from "@/components/ui"

export default function ComponentsPage() {
    const categories = getCategories()

    return (
        <div className="relative min-h-screen text-white pt-24 pb-16">
            <div className="container mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
                        <GradientText>Components</GradientText>
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                        Browse our collection of beautifully crafted, animated components
                    </p>
                </div>

                {/* Components by Category */}
                {categories.map((category) => {
                    const components = getComponentsByCategory(category)

                    return (
                        <section key={category} className="mb-20">
                            <h2 className="text-3xl font-bold mb-8 capitalize">
                                {category}
                            </h2>

                            <ComponentGrid>
                                {components.map((component, index) => (
                                    <Link
                                        key={component.file}
                                        href={`/components/${component.file.replace('.tsx', '')}`}
                                    >
                                        <ComponentCard
                                            title={component.name}
                                            description={component.description}
                                            delay={index * 0.1}
                                        >
                                            <div className="flex flex-wrap gap-2">
                                                {component.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-zinc-400"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </ComponentCard>
                                    </Link>
                                ))}
                            </ComponentGrid>
                        </section>
                    )
                })}
            </div>
        </div>
    )
}
