"use client"

import { useEffect, useRef } from "react"

export default function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Grid properties
    const gridSize = 50
    const gridLineWidth = 0.5

    // Animation
    let animationFrameId: number
    let time = 0

    const animate = () => {
      time += 0.005

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw grid
      ctx.beginPath()
      ctx.strokeStyle = "rgba(102, 90, 240, 0.15)"
      ctx.lineWidth = gridLineWidth

      // Vertical lines
      for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
      }

      // Horizontal lines
      for (let y = 0; y <= canvas.height; y += gridSize) {
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
      }

      ctx.stroke()

      // Draw pulsing nodes at intersections
      for (let x = 0; x <= canvas.width; x += gridSize) {
        for (let y = 0; y <= canvas.height; y += gridSize) {
          const distance = Math.sqrt(Math.pow(x - canvas.width / 2, 2) + Math.pow(y - canvas.height / 2, 2))

          const pulse = Math.sin(time + distance * 0.01) * 0.5 + 0.5
          const size = pulse * 1.5

          if (Math.random() > 0.99) {
            ctx.fillStyle = "rgba(102, 90, 240, 0.8)"
            ctx.beginPath()
            ctx.arc(x, y, size * 2, 0, Math.PI * 2)
            ctx.fill()

            // Draw glow
            const gradient = ctx.createRadialGradient(x, y, 0, x, y, size * 6)
            gradient.addColorStop(0, "rgba(102, 90, 240, 0.3)")
            gradient.addColorStop(1, "rgba(102, 90, 240, 0)")

            ctx.fillStyle = gradient
            ctx.beginPath()
            ctx.arc(x, y, size * 6, 0, Math.PI * 2)
            ctx.fill()
          } else {
            ctx.fillStyle = `rgba(102, 90, 240, ${pulse * 0.3})`
            ctx.beginPath()
            ctx.arc(x, y, size, 0, Math.PI * 2)
            ctx.fill()
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0 opacity-40 pointer-events-none" />
}
