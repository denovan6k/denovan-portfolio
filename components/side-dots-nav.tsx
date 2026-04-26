"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects-section", label: "Projects" },
  { id: "contact", label: "Contact" },
]

export default function SideDotsNav() {
  const [active, setActive] = useState<string>("hero")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0.01 },
    )

    sections.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav
      aria-label="Section navigation"
      className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-30 flex-col gap-3"
    >
      {sections.map((s) => (
        <button
          key={s.id}
          aria-label={`Scroll to ${s.label}`}
          onClick={() => scrollTo(s.id)}
          className={cn(
            "relative h-3.5 w-3.5 rounded-full border border-emerald-500/40 bg-zinc-900/60 backdrop-blur hover:scale-110 transition",
            active === s.id && "bg-cyan-400 border-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]",
          )}
        >
          <span className="sr-only">{s.label}</span>
        </button>
      ))}
    </nav>
  )
}
