"use client"

import { useState } from "react"
import { Mail, Search } from "lucide-react"
import { FloatingInput, AnimatedInput, ToggleSwitch } from "@/components/ui"

export function InputsDemo() {
    const [toggleOn, setToggleOn] = useState(false)

    return (
        <div className="flex flex-col gap-6">
            <FloatingInput
                label="Email Address"
                id="email-demo"
                icon={Mail}
            />

            <AnimatedInput
                placeholder="Search..."
                icon={Search}
            />

            <ToggleSwitch
                checked={toggleOn}
                onCheckedChange={setToggleOn}
                label="Enable notifications"
            />
        </div>
    )
}
