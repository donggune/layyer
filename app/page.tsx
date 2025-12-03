import { HeroSection, ComponentCard, ComponentGrid } from "@/components/layout"
import { ButtonsDemo } from "@/components/example/buttons-demo"
import { CardsDemo } from "@/components/example/cards-demo"
import { InputsDemo } from "@/components/example/inputs-demo"
import { ModalsDemo } from "@/components/example/modals-demo"

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Component Showcase Section */}
      <section className="py-24 sm:py-32" id="components">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Interactive Components
              </span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Explore our collection of beautifully crafted, fully animated components
            </p>
          </div>

          <ComponentGrid>
            <ComponentCard
              title="Buttons"
              description="Gradient, glow, and loading button variations"
              delay={0}
            >
              <ButtonsDemo />
            </ComponentCard>

            <ComponentCard
              title="Cards"
              description="Interactive cards with tilt and hover effects"
              delay={0.1}
            >
              <CardsDemo />
            </ComponentCard>

            <ComponentCard
              title="Inputs"
              description="Modern input fields with smooth animations"
              delay={0.2}
            >
              <InputsDemo />
            </ComponentCard>

            <ComponentCard
              title="Modals"
              description="Elegant modals with backdrop blur"
              delay={0.3}
            >
              <ModalsDemo />
            </ComponentCard>

            <ComponentCard
              title="Animations"
              description="Smooth transitions and micro-interactions"
              delay={0.4}
            >
              <div className="flex flex-col gap-4 items-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 animate-pulse" />
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 animate-spin" style={{ animationDuration: '3s' }} />
                <div className="w-24 h-2 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse" />
              </div>
            </ComponentCard>

            <ComponentCard
              title="Gradients"
              description="Beautiful gradient combinations"
              delay={0.5}
            >
              <div className="w-full space-y-4">
                <div className="h-16 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
                <div className="h-16 rounded-xl bg-gradient-to-r from-green-400 via-teal-500 to-blue-500" />
                <div className="h-16 rounded-xl bg-gradient-to-r from-orange-500 via-red-500 to-pink-500" />
              </div>
            </ComponentCard>
          </ComponentGrid>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 text-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/10 to-transparent" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
            Ready to build something amazing?
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-zinc-400">
            Start creating beautiful, interactive interfaces with our component library.
          </p>
          <button className="inline-flex h-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-10 text-base font-semibold text-white transition-transform hover:scale-105">
            Get Started
          </button>
        </div>
      </section>
    </>
  );
}
