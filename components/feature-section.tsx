import { cn } from "@/lib/utils"
import { Check } from "lucide-react"

interface FeatureSectionProps {
    title: string
    description: string
    features: string[]
    align?: "left" | "right"
    children?: React.ReactNode
}

export function FeatureSection({
    title,
    description,
    features,
    align = "left",
    children,
}: FeatureSectionProps) {
    return (
        <section className="relative overflow-hidden py-24 sm:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className={cn(
                    "grid gap-12 lg:grid-cols-2 lg:gap-8 items-center",
                    align === "right" && "lg:grid-flow-dense"
                )}>
                    <div className={cn(align === "right" && "lg:col-start-2")}>
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                            {title}
                        </h2>
                        <p className="text-lg text-zinc-400 mb-8">
                            {description}
                        </p>
                        <ul className="space-y-4">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                                        <Check className="h-4 w-4" />
                                    </div>
                                    <span className="text-zinc-300">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={cn(
                        "relative lg:col-start-2",
                        align === "right" && "lg:col-start-1"
                    )}>
                        <div className="relative rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-sm">
                            <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-50 blur-lg" />
                            <div className="relative rounded-xl bg-black/40 p-6 shadow-2xl">
                                {children || (
                                    <div className="h-[300px] w-full flex items-center justify-center text-zinc-500">
                                        Feature Visual Placeholder
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
