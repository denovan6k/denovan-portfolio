"use client"

export default function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-black/80 focus:text-white focus:border focus:border-cyan-500/50 focus:px-3 focus:py-2 rounded"
    >
      Skip to main content
    </a>
  )
}
