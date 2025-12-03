"use client"

import { useEffect, useRef } from 'react'

export function AnimatedBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        // Set canvas size
        const setCanvasSize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }
        setCanvasSize()
        window.addEventListener('resize', setCanvasSize)

        // Star properties
        interface Star {
            x: number
            y: number
            size: number
            speedY: number
            opacity: number
            twinkleSpeed: number
            twinklePhase: number
        }

        const stars: Star[] = []
        const starCount = 200

        // Initialize stars
        for (let i = 0; i < starCount; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 2,
                speedY: Math.random() * 0.2 + 0.05,
                opacity: Math.random(),
                twinkleSpeed: Math.random() * 0.02 + 0.005,
                twinklePhase: Math.random() * Math.PI * 2,
            })
        }

        // Animation loop
        let animationFrameId: number
        const animate = () => {
            ctx.fillStyle = '#060010'
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            // Draw stars
            stars.forEach((star) => {
                // Update twinkle
                star.twinklePhase += star.twinkleSpeed
                const twinkle = Math.sin(star.twinklePhase) * 0.5 + 0.5

                // Update position
                star.y += star.speedY
                if (star.y > canvas.height) {
                    star.y = 0
                    star.x = Math.random() * canvas.width
                }

                // Draw star
                ctx.beginPath()
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * twinkle})`
                ctx.fill()

                // Add glow for larger stars
                if (star.size > 1) {
                    const gradient = ctx.createRadialGradient(
                        star.x,
                        star.y,
                        0,
                        star.x,
                        star.y,
                        star.size * 3
                    )
                    gradient.addColorStop(0, `rgba(147, 197, 253, ${0.3 * twinkle})`)
                    gradient.addColorStop(1, 'rgba(147, 197, 253, 0)')
                    ctx.fillStyle = gradient
                    ctx.fill()
                }
            })

            animationFrameId = requestAnimationFrame(animate)
        }

        animate()

        return () => {
            window.removeEventListener('resize', setCanvasSize)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 -z-10"
            style={{ background: '#060010' }}
        />
    )
}
