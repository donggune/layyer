import { registry } from "@/registry"
import { ComponentCategory, ComponentInfo } from "@/registry/schema"

export function getAllComponents(): ComponentInfo[] {
    return Object.values(registry)
}

export function getComponentsByCategory(category: ComponentCategory): ComponentInfo[] {
    return Object.values(registry).filter((component) => component.category === category)
}

export function getComponentBySlug(slug: string): ComponentInfo | undefined {
    return registry[slug]
}

export function getCategories(): ComponentCategory[] {
    return ["buttons", "cards", "inputs", "modals", "effects"]
}
