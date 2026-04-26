"use client"

import { Quote } from 'lucide-react'

interface TestimonialCardProps {
  quote: string
  author: string
  role?: string
}

export default function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <div className="relative rounded-lg border border-cyan-500/20 bg-black/50 backdrop-blur-md p-6">
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-500/5 to-emerald-500/5" />
      <Quote className="h-6 w-6 text-cyan-400" />
      <p className="mt-3 text-zinc-300">{quote}</p>
      <div className="mt-4">
        <div className="text-white font-medium">{author}</div>
        {role && <div className="text-xs text-zinc-400">{role}</div>}
      </div>
    </div>
  )
}
