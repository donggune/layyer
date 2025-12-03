import { ComponentCard, ComponentGrid, ComponentPreview } from "@/components/layout"
import { GradientText } from "@/components/ui"
import { ButtonsDemo } from "@/components/example/buttons-demo"
import { CardsDemo } from "@/components/example/cards-demo"
import { InputsDemo } from "@/components/example/inputs-demo"
import { ModalsDemo } from "@/components/example/modals-demo"

const examples = [
    {
        title: "Buttons",
        description: "Interactive button components with various effects",
        component: <ButtonsDemo />,
        code: `import { GradientButton, GlowButton, LoadingButton, IconButton } from "@/components/ui"

export function ButtonsDemo() {
  return (
    <div className="flex flex-col gap-4">
      <GradientButton>Gradient Magic</GradientButton>
      <GlowButton>Glow Effect</GlowButton>
      <LoadingButton isLoading>Loading...</LoadingButton>
      <IconButton><ArrowRight /></IconButton>
    </div>
  )
}`,
    },
    {
        title: "Cards",
        description: "Card components with tilt and hover effects",
        component: <CardsDemo />,
        code: `import { TiltCard, HoverCard, GlowCard } from "@/components/ui"

export function CardsDemo() {
  return (
    <div className="flex flex-col gap-4">
      <TiltCard>...</TiltCard>
      <HoverCard>...</HoverCard>
      <GlowCard>...</GlowCard>
    </div>
  )
}`,
    },
    {
        title: "Inputs",
        description: "Modern input fields with animations",
        component: <InputsDemo />,
        code: `import { FloatingInput, AnimatedInput, ToggleSwitch } from "@/components/ui"

export function InputsDemo() {
  return (
    <div className="flex flex-col gap-6">
      <FloatingInput label="Email" icon={Mail} />
      <AnimatedInput placeholder="Search..." icon={Search} />
      <ToggleSwitch checked={on} onCheckedChange={setOn} />
    </div>
  )
}`,
    },
    {
        title: "Modals",
        description: "Animated modal dialogs",
        component: <ModalsDemo />,
        code: `import { ScaleModal, GradientButton } from "@/components/ui"

export function ModalsDemo() {
  return (
    <>
      <GradientButton onClick={() => setOpen(true)}>
        Open Modal
      </GradientButton>
      <ScaleModal isOpen={open} onClose={() => setOpen(false)}>
        ...
      </ScaleModal>
    </>
  )
}`,
    },
]

export default function ExamplesPage() {
    return (
        <div className="relative min-h-screen text-white pt-24 pb-16">
            <div className="container mx-auto px-4 md:px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
                        <GradientText>Examples</GradientText>
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                        Real-world examples of how to use our components
                    </p>
                </div>

                {/* Examples */}
                <ComponentGrid>
                    {examples.map((example, index) => (
                        <ComponentCard
                            key={example.title}
                            title={example.title}
                            description={example.description}
                            delay={index * 0.1}
                        >
                            <ComponentPreview code={example.code}>
                                {example.component}
                            </ComponentPreview>
                        </ComponentCard>
                    ))}
                </ComponentGrid>
            </div>
        </div>
    )
}
