import { ComponentInfo } from "./schema"

export const registry: Record<string, ComponentInfo> = {
    // Buttons
    "gradient-button": {
        name: "Gradient Button",
        description: "Button with animated gradient background",
        category: "buttons",
        file: "gradient-button.tsx",
        dependencies: ["framer-motion"],
        tags: ["interactive", "gradient", "animation"],
    },
    "glow-button": {
        name: "Glow Button",
        description: "Button with glow effect on hover",
        category: "buttons",
        file: "glow-button.tsx",
        dependencies: ["framer-motion"],
        tags: ["interactive", "glow"],
    },
    "loading-button": {
        name: "Loading Button",
        description: "Button with loading spinner state",
        category: "buttons",
        file: "loading-button.tsx",
        dependencies: ["framer-motion"],
        tags: ["interactive", "loading", "animation"],
    },
    "icon-button": {
        name: "Icon Button",
        description: "Circular button with icon and rotation effect",
        category: "buttons",
        file: "icon-button.tsx",
        dependencies: ["framer-motion"],
        tags: ["interactive", "icon", "animation"],
    },

    // Cards
    "tilt-card": {
        name: "Tilt Card",
        description: "Card with 3D tilt effect on hover",
        category: "cards",
        file: "tilt-card.tsx",
        dependencies: ["framer-motion"],
        tags: ["interactive", "3d", "tilt"],
    },
    "hover-card": {
        name: "Hover Card",
        description: "Card that scales and reveals content on hover",
        category: "cards",
        file: "hover-card.tsx",
        dependencies: ["framer-motion"],
        tags: ["interactive", "scale", "hover"],
    },
    "glow-card": {
        name: "Glow Card",
        description: "Card with animated gradient border glow",
        category: "cards",
        file: "glow-card.tsx",
        dependencies: [],
        tags: ["visual", "glow", "border"],
    },

    // Inputs
    "floating-input": {
        name: "Floating Input",
        description: "Input field with floating label animation",
        category: "inputs",
        file: "floating-input.tsx",
        dependencies: [],
        tags: ["form", "input", "animation"],
    },
    "animated-input": {
        name: "Animated Input",
        description: "Input with gradient border on focus",
        category: "inputs",
        file: "animated-input.tsx",
        dependencies: [],
        tags: ["form", "input", "gradient"],
    },
    "toggle-switch": {
        name: "Toggle Switch",
        description: "Animated toggle switch component",
        category: "inputs",
        file: "toggle-switch.tsx",
        dependencies: ["framer-motion"],
        tags: ["form", "toggle", "switch"],
    },

    // Modals
    "scale-modal": {
        name: "Scale Modal",
        description: "Modal with backdrop blur and scale animation",
        category: "modals",
        file: "scale-modal.tsx",
        dependencies: ["framer-motion"],
        tags: ["overlay", "modal", "animation"],
    },

    // Effects
    "animated-background": {
        name: "Animated Background",
        description: "Canvas-based starry background animation",
        category: "effects",
        file: "animated-background.tsx",
        dependencies: [],
        tags: ["visual", "background", "canvas"],
    },
    "gradient-text": {
        name: "Gradient Text",
        description: "Text with gradient fill",
        category: "effects",
        file: "gradient-text.tsx",
        dependencies: [],
        tags: ["visual", "text", "gradient"],
    },
}
