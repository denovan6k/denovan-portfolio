"use client"

import GlitchText from "@/components/glitch-text"
import { cn } from "@/lib/utils"

interface SectionHeaderProps {
  id?: string
  title: string
  subtitle?: string
  gradientFrom?: string
  gradientTo?: string
  className?: string
  align?: "center" | "left"
  // New: control glitch timing
  glitchIntervalMs?: number
  glitchDurationMs?: number
}

export default function SectionHeader({
  id,
  title,
  subtitle,
  gradientFrom = "from-cyan-400",
  gradientTo = "to-pink-500",
  className,
  align = "center",
  glitchIntervalMs,
  glitchDurationMs,
}: SectionHeaderProps) {
  const isCenter = align === "center"
  return (
    <header id={id} className={cn("w-full", className)}>
      <div className={cn("text-center", !isCenter && "text-left")}>
        <GlitchText
          text={title}
          className={cn(
            "text-3xl md:text-4xl font-bold tracking-tighter",
            "bg-gradient-to-r bg-clip-text text-transparent",
            gradientFrom,
            gradientTo,
          )}
          intervalMs={glitchIntervalMs}
          durationMs={glitchDurationMs}
        />
        {subtitle && (
          <p className={cn("mt-3 text-zinc-400 max-w-3xl", isCenter ? "mx-auto" : "")}>{subtitle}</p>
        )}
        <div
          className={cn(
            "mt-5 h-1 w-24 bg-gradient-to-r",
            gradientFrom,
            gradientTo,
            isCenter ? "mx-auto" : "ml-0",
          )}
          aria-hidden="true"
        />
      </div>
    </header>
  )
}
