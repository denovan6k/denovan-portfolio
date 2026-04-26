"use client"

import { useEffect, useRef, useState } from "react"

interface SkillMeterProps {
  name: string
  value: number
  color: string
}

export default function SkillMeter({ name, value, color }: SkillMeterProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [progress, setProgress] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  // Map color names to gradient values
  const colorMap: Record<string, string> = {
    blue: "rgba(59, 130, 246, 1)",
    cyan: "rgba(6, 182, 212, 1)",
    emerald: "rgba(168, 85, 247, 1)",
    pink: "rgba(236, 72, 153, 1)",
    green: "rgba(16, 185, 129, 1)",
    orange: "rgba(249, 115, 22, 1)",
    red: "rgba(239, 68, 68, 1)",
    yellow: "rgba(234, 179, 8, 1)",
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (isVisible) {
      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev < value) {
            return prev + 1
          }
          clearInterval(timer)
          return prev
        })
      }, 15)

      return () => clearInterval(timer)
    }
  }, [isVisible, value])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const size = 120
    canvas.width = size
    canvas.height = size

    // Clear canvas
    ctx.clearRect(0, 0, size, size)

    // Draw background circle
    ctx.beginPath()
    ctx.arc(size / 2, size / 2, size / 2 - 10, 0, Math.PI * 2)
    ctx.strokeStyle = "rgba(255, 255, 255, 0.1)"
    ctx.lineWidth = 4
    ctx.stroke()

    // Draw progress arc
    const startAngle = -Math.PI / 2
    const endAngle = startAngle + (progress / 100) * (Math.PI * 2)

    ctx.beginPath()
    ctx.arc(size / 2, size / 2, size / 2 - 10, startAngle, endAngle)

    // Create gradient
    const gradient = ctx.createLinearGradient(0, 0, size, size)
    gradient.addColorStop(0, colorMap[color] || colorMap.blue)
    gradient.addColorStop(1, "rgba(255, 255, 255, 0.8)")

    ctx.strokeStyle = gradient
    ctx.lineWidth = 4
    ctx.lineCap = "round"
    ctx.stroke()

    // Draw glowing effect
    ctx.beginPath()
    ctx.arc(size / 2, size / 2, size / 2 - 10, startAngle, endAngle)
    ctx.strokeStyle = colorMap[color] || colorMap.blue
    ctx.lineWidth = 6
    ctx.globalAlpha = 0.2
    ctx.filter = "blur(4px)"
    ctx.stroke()

    // Reset context properties
    ctx.globalAlpha = 1
    ctx.filter = "none"

    // Draw percentage text
    ctx.font = "bold 24px 'Orbitron', sans-serif"
    ctx.fillStyle = "white"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText(`${progress}%`, size / 2, size / 2)
  }, [progress, color])

  return (
    <div ref={containerRef} className="flex flex-col items-center">
      <div className="relative mb-2">
        <canvas ref={canvasRef} width="120" height="120" className="w-24 h-24"></canvas>
        <div className="absolute inset-0 rounded-full bg-transparent border-4 border-transparent opacity-20 animate-pulse-slow"></div>
      </div>
      <h3 className="text-center font-medium text-zinc-300">{name}</h3>
    </div>
  )
}
