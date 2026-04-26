"use client"

import { Briefcase } from 'lucide-react'

export interface TimelineItem {
  company: string
  role: string
  period: string
  points: string[]
}

interface TimelineProps {
  items: TimelineItem[]
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <ol className="relative border-l border-emerald-900/30 pl-4 md:pl-6">
      {items.map((item, idx) => (
        <li key={idx} className="mb-8 ml-2">
          <div className="absolute -left-[11px] h-5 w-5 rounded-full bg-zinc-900 border border-cyan-500/40 flex items-center justify-center">
            <Briefcase className="h-3.5 w-3.5 text-cyan-400" />
          </div>
          <div className="rounded-lg border border-emerald-900/40 bg-black/50 backdrop-blur-md p-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
              <h3 className="text-white font-semibold">{item.role}</h3>
              <span className="text-xs text-zinc-400">{item.period}</span>
            </div>
            <p className="text-cyan-300 text-sm">{item.company}</p>
            <ul className="mt-3 list-disc pl-5 space-y-1 text-zinc-300 text-sm">
              {item.points.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  )
}
