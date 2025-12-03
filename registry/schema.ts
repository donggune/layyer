export type ComponentCategory =
    | "buttons"
    | "cards"
    | "inputs"
    | "modals"
    | "effects"

export interface ComponentInfo {
    name: string
    description: string
    category: ComponentCategory
    file: string
    dependencies: string[]
    tags: string[]
}
