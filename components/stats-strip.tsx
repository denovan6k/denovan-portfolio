"use client"

import { Activity, Rocket, Sparkles, Trophy } from 'lucide-react'

const items = [
  { icon: Rocket, label: "Years Crafting", value: "6+" },
  { icon: Trophy, label: "Case Studies", value: "18" },
  { icon: Sparkles, label: "Tech Stack", value: "30+" },
  { icon: Activity, label: "Uptime", value: "99.9%" },
]

export default function StatsStrip() {
  return (
    <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
      {items.map(({ icon: Icon, label, value }) => (
        <div
          key={label}
          className="relative overflow-hidden rounded-lg border border-emerald-900/40 bg-black/50 backdrop-blur-md p-4 sm:p-5 flex flex-col items-center justify-center text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-cyan-500/5 to-emerald-500/5" />
          <div className="relative flex flex-col items-center gap-3 w-full">
            <div className="p-2 sm:p-3 rounded-full bg-zinc-900/70 border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
              <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-400" />
            </div>
            <div className="flex flex-col items-center justify-center space-y-1">
              <div className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-none">{value}</div>
              <div className="text-xs sm:text-sm text-zinc-400 font-medium whitespace-nowrap">{label}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
