"use client"

import { useEffect, useRef } from "react"

export default function BinaryRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      // Re-init drops on resize
      initDrops()
    }

    // Matrix characters — mix of katakana, digits, latin for cyberpunk feel
    const chars =
      "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF<>{}[]()$#@!?"

    const fontSize = 14
    let columns = Math.floor(window.innerWidth / fontSize)
    let drops: number[] = []

    const initDrops = () => {
      columns = Math.floor(canvas.width / fontSize)
      drops = []
      for (let i = 0; i < columns; i++) {
        drops[i] = (Math.random() * -canvas.height) / fontSize
      }
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Speed: lower = slower. Target ~15fps to keep it atmospheric
    const targetFps = 14
    const interval = 1000 / targetFps
    let lastTime = 0
    let animationFrameId: number

    const animate = (timestamp: number) => {
      animationFrameId = requestAnimationFrame(animate)
      const elapsed = timestamp - lastTime
      if (elapsed < interval) return
      lastTime = timestamp - (elapsed % interval)

      // Fade trail
      ctx.fillStyle = "rgba(0, 0, 0, 0.06)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.font = `${fontSize}px 'Courier New', monospace`

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)]
        const x = i * fontSize
        const y = drops[i] * fontSize

        // Head character — bright white/cyan
        if (drops[i] >= 0 && drops[i] < canvas.height / fontSize) {
          ctx.fillStyle = "#e0ffff"
          ctx.fillText(char, x, y)

          // Slight glow behind the head
          ctx.fillStyle = "rgba(0,255,200,0.15)"
          ctx.fillText(char, x - 1, y)
        }

        // Body character — varying greens with cyan tint
        const bodyY = (drops[i] - 1) * fontSize
        if (bodyY >= 0) {
          const decay = Math.max(0.2, 1 - (drops[i] * fontSize) / canvas.height * 0.4)
          ctx.fillStyle = `rgba(0, ${Math.floor(200 * decay)}, ${Math.floor(100 * decay)}, 0.9)`
          ctx.fillText(chars[Math.floor(Math.random() * chars.length)], x, bodyY)
        }

        // Reset drop
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.97) {
          drops[i] = 0
        }

        drops[i] += 0.5 + Math.random() * 0.3
      }
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
      style={{ opacity: 0.18 }}
    />
  )
}
