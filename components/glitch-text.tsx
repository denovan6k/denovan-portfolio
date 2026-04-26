"use client"

interface GlitchTextProps {
  text: string
  className?: string
  intervalMs?: number
  durationMs?: number
  ariaLabel?: string
}

export default function GlitchText({
  text,
  className = "",
  ariaLabel,
}: GlitchTextProps) {
  // Completely simplified per user request: static, no animation, no blur
  return (
    <div className={`font-orbitron ${className}`} aria-label={ariaLabel || text}>
      {text}
    </div>
  )
}
