import { notFound } from "next/navigation"
import { registry } from "@/registry"
import { ComponentPreview } from "@/components/layout"
import { GradientText } from "@/components/ui"
import {
    GradientButton,
    GlowButton,
    LoadingButton,
    IconButton,
    TiltCard,
    HoverCard,
    GlowCard,
    FloatingInput,
    AnimatedInput,
    ToggleSwitch,
    ScaleModal,
    AnimatedBackground
} from "@/components/ui"
import { Sparkles, Zap, ArrowRight, Star, Heart, TrendingUp, Mail, Search } from "lucide-react"

// Generate static params for all components
export async function generateStaticParams() {
    return Object.keys(registry).map((slug) => ({
        slug,
    }))
}

// Component examples mapping
const componentExamples: Record<string, { component: React.ReactNode; code: string }> = {
    "gradient-button": {
        component: (
            <GradientButton>
                <Sparkles className="w-4 h-4" />
                Gradient Magic
            </GradientButton>
        ),
        code: `<GradientButton>
  <Sparkles className="w-4 h-4" />
  Gradient Magic
</GradientButton>`,
    },
    "glow-button": {
        component: (
            <GlowButton>
                <Zap className="w-4 h-4" />
                Glow Effect
            </GlowButton>
        ),
        code: `<GlowButton>
  <Zap className="w-4 h-4" />
  Glow Effect
</GlowButton>`,
    },
    "loading-button": {
        component: <LoadingButton isLoading>Loading...</LoadingButton>,
        code: `<LoadingButton isLoading>Loading...</LoadingButton>`,
    },
    "icon-button": {
        component: (
            <IconButton>
                <ArrowRight className="w-5 h-5" />
            </IconButton>
        ),
        code: `<IconButton>
  <ArrowRight className="w-5 h-5" />
</IconButton>`,
    },
    "tilt-card": {
        component: (
            <TiltCard className="w-full max-w-sm">
                <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-blue-500/20">
                        <Star className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                        <h4 className="font-semibold text-white mb-1">Tilt Card</h4>
                        <p className="text-sm text-zinc-400">Hover for 3D effect</p>
                    </div>
                </div>
            </TiltCard>
        ),
        code: `<TiltCard>
  <div className="flex items-start gap-3">
    <div className="p-2 rounded-lg bg-blue-500/20">
      <Star className="w-5 h-5 text-blue-400" />
    </div>
    <div>
      <h4 className="font-semibold text-white mb-1">Tilt Card</h4>
      <p className="text-sm text-zinc-400">Hover for 3D effect</p>
    </div>
  </div>
</TiltCard>`,
    },
    "hover-card": {
        component: (
            <HoverCard className="w-full max-w-sm">
                <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-purple-500/20">
                        <Heart className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                        <h4 className="font-semibold text-white mb-1">Hover Card</h4>
                        <p className="text-sm text-zinc-400">Smooth scale effect</p>
                    </div>
                </div>
            </HoverCard>
        ),
        code: `<HoverCard>
  <div className="flex items-start gap-3">
    <div className="p-2 rounded-lg bg-purple-500/20">
      <Heart className="w-5 h-5 text-purple-400" />
    </div>
    <div>
      <h4 className="font-semibold text-white mb-1">Hover Card</h4>
      <p className="text-sm text-zinc-400">Smooth scale effect</p>
    </div>
  </div>
</HoverCard>`,
    },
    "glow-card": {
        component: (
            <GlowCard className="w-full max-w-sm">
                <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-green-500/20">
                        <TrendingUp className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                        <h4 className="font-semibold text-white mb-1">Glow Border</h4>
                        <p className="text-sm text-zinc-400">Animated border glow</p>
                    </div>
                </div>
            </GlowCard>
        ),
        code: `<GlowCard>
  <div className="flex items-start gap-3">
    <div className="p-2 rounded-lg bg-green-500/20">
      <TrendingUp className="w-5 h-5 text-green-400" />
    </div>
    <div>
      <h4 className="font-semibold text-white mb-1">Glow Border</h4>
      <p className="text-sm text-zinc-400">Animated border glow</p>
    </div>
  </div>
</GlowCard>`,
    },
    "floating-input": {
        component: <FloatingInput label="Email Address" id="email-example" icon={Mail} />,
        code: `<FloatingInput label="Email Address" id="email" icon={Mail} />`,
    },
    "animated-input": {
        component: <AnimatedInput placeholder="Search..." icon={Search} />,
        code: `<AnimatedInput placeholder="Search..." icon={Search} />`,
    },
    "toggle-switch": {
        component: <ToggleSwitch checked={true} onCheckedChange={() => { }} label="Enable notifications" />,
        code: `<ToggleSwitch 
  checked={toggleOn} 
  onCheckedChange={setToggleOn}
  label="Enable notifications"
/>`,
    },
    "gradient-text": {
        component: <GradientText className="text-4xl font-bold">Beautiful Gradient Text</GradientText>,
        code: `<GradientText className="text-4xl font-bold">
  Beautiful Gradient Text
</GradientText>`,
    },
}

export default function ComponentPage({ params }: { params: { slug: string } }) {
    const component = registry[params.slug]

    if (!component) {
        notFound()
    }

    const example = componentExamples[params.slug]

    return (
        <div className="relative min-h-screen text-white pt-24 pb-16">
            <div className="container mx-auto px-4 md:px-6 max-w-5xl">
                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                        <GradientText>{component.name}</GradientText>
                    </h1>
                    <p className="text-xl text-zinc-400 mb-6">{component.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                        {component.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 text-sm rounded-full bg-white/5 border border-white/10 text-zinc-400"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Preview */}
                {example && (
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold mb-4">Preview</h2>
                        <ComponentPreview code={example.code}>
                            {example.component}
                        </ComponentPreview>
                    </div>
                )}

                {/* Info */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Dependencies */}
                    {component.dependencies.length > 0 && (
                        <div className="p-6 rounded-xl border border-white/10 bg-white/5">
                            <h3 className="text-lg font-semibold mb-3">Dependencies</h3>
                            <ul className="space-y-2">
                                {component.dependencies.map((dep) => (
                                    <li key={dep} className="text-zinc-400 font-mono text-sm">
                                        {dep}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Category */}
                    <div className="p-6 rounded-xl border border-white/10 bg-white/5">
                        <h3 className="text-lg font-semibold mb-3">Category</h3>
                        <p className="text-zinc-400 capitalize">{component.category}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
