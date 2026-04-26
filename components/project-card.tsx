"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ArrowUpRight, Code, ExternalLink, Github } from 'lucide-react'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image: string
  color: string
  liveUrl: string
  githubUrl?: string
}

export default function ProjectCard({ title, description, tags, image, color, liveUrl, githubUrl }: ProjectCardProps) {
  const [isAnimating, setIsAnimating] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const startAnimation = () => {
    setIsAnimating(true)
  }

  const stopAnimation = () => {
    setIsAnimating(false)
  }

  const getTagColor = (tag: string) => {
    const lowerTag = tag.toLowerCase()
    if (lowerTag.includes("react")) return "text-cyan-400 border-cyan-500/40 bg-cyan-950/30"
    if (lowerTag.includes("next")) return "text-white border-white/30 bg-white/5"
    if (lowerTag.includes("typescript") || lowerTag === "ts") return "text-blue-400 border-blue-500/40 bg-blue-950/30"
    if (lowerTag.includes("node")) return "text-green-400 border-green-500/40 bg-green-950/30"
    if (lowerTag.includes("tailwind")) return "text-sky-400 border-sky-500/40 bg-sky-950/30"
    if (lowerTag.includes("figma")) return "text-pink-400 border-pink-500/40 bg-pink-950/30"
    if (lowerTag.includes("firebase") || lowerTag.includes("supabase")) return "text-orange-400 border-orange-500/40 bg-orange-950/30"
    if (lowerTag.includes("mongo")) return "text-green-500 border-green-600/40 bg-green-950/40"
    return "text-emerald-300 border-emerald-500/40 bg-emerald-950/30"
  }

  return (
    <Dialog>
      <div className="relative group h-full">
        <DialogTrigger asChild>
          <Card
            ref={cardRef}
            className={`
              relative overflow-hidden border bg-black/70 backdrop-blur-md
              transition-all duration-500 cursor-pointer flex flex-col h-full text-left
              ${isAnimating
                ? "border-cyan-500/60 shadow-[0_0_20px_rgba(0,255,255,0.15),0_0_40px_rgba(16,185,129,0.1)]"
                : "border-emerald-900/40 hover:border-emerald-700/60"
              }
            `}
            onMouseEnter={startAnimation}
            onMouseLeave={stopAnimation}
            role="button"
            tabIndex={0}
            aria-label={`View details for ${title}`}
          >
        {/* Gradient border glow */}
        <div
          className={`
            absolute inset-0 bg-gradient-to-r ${color} opacity-0 -z-10 blur-xl
            transition-opacity duration-700
            ${isAnimating ? "opacity-20" : ""}
          `}
        />

        {/* Scanline overlay */}
        <div className="absolute inset-0 z-10 pointer-events-none"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)",
          }}
        />

        {/* Project image — fixed aspect ratio, not fixed height */}
        <div className="relative w-full aspect-video overflow-hidden flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70 z-10" />

          {/* Holographic overlay on hover */}
          <div
            className={`absolute inset-0 z-20 bg-gradient-to-br from-transparent via-cyan-500/10 to-emerald-500/10 transition-opacity duration-700 ${isAnimating ? "opacity-100" : "opacity-0"}`}
          />

          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className={`object-cover transition-transform duration-700 ${isAnimating ? "scale-105" : "scale-100"}`}
          />

          {/* Category badge */}
          <div className="absolute top-3 left-3 z-30">
            <span className={`text-xs font-mono px-2 py-0.5 rounded border ${isAnimating ? "bg-black/80 border-cyan-500/60 text-cyan-300" : "bg-black/60 border-emerald-500/30 text-emerald-300"} transition-all duration-300`}>
              {/* show first tag as category hint */}
              {tags[0]}
            </span>
          </div>

          {/* View icon on hover */}
          <div className={`absolute bottom-3 right-3 z-30 w-8 h-8 rounded-full bg-black/70 border border-cyan-500/40 flex items-center justify-center transition-all duration-300 ${isAnimating ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}>
            <ArrowUpRight className="w-4 h-4 text-cyan-400" />
          </div>
        </div>

        {/* Content — grows with text naturally */}
        <div className="p-5 flex flex-col gap-3 flex-1 relative z-20">
          {/* Title */}
          <h3
            className={`
              text-lg font-bold font-mono tracking-wide
              bg-gradient-to-r ${color} bg-clip-text text-transparent
              transition-all duration-300
            `}
            style={{ textShadow: "none" }}
          >
            {title}
          </h3>

          {/* Description */}
          <p className="text-sm text-zinc-400 leading-relaxed line-clamp-3 group-hover:text-zinc-300 transition-colors">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
            {tags.slice(0, 5).map((tag, index) => (
              <span
                key={index}
                className={`text-xs px-2 py-0.5 rounded border font-mono transition-all duration-300 ${getTagColor(tag)}`}
              >
                {tag}
              </span>
            ))}
            {tags.length > 5 && (
              <span className="text-xs px-2 py-0.5 rounded border border-zinc-700 text-zinc-500 font-mono">
                +{tags.length - 5}
              </span>
            )}
          </div>

          {/* Footer row */}
          <div className="flex items-center justify-between pt-2 border-t border-zinc-800/60 mt-1">
            <span className="text-xs text-zinc-500 font-mono">
              <span className="text-green-400 mr-1">►</span> VIEW_PROJECT
            </span>
            <div className="flex items-center gap-2">
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-zinc-500 hover:text-white transition-colors p-1"
                  aria-label={`GitHub for ${title}`}
                >
                  <Github className="w-3.5 h-3.5" />
                </a>
              )}
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-zinc-500 hover:text-cyan-400 transition-colors p-1"
                aria-label={`Live demo for ${title}`}
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
        </Card>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[700px] bg-[#0c0c16]/95 border-cyan-500/30 text-white backdrop-blur-xl shadow-[0_0_50px_rgba(0,255,255,0.1)] max-h-[90vh] overflow-y-auto custom-scrollbar p-0">
        <DialogHeader className="sticky top-0 z-20 px-6 py-4 bg-[#0c0c16]/95 border-b border-zinc-800/80 backdrop-blur-md">
          <DialogTitle className={`text-xl font-bold font-mono tracking-wider bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
            {title}
          </DialogTitle>
        </DialogHeader>

        <div className="p-6 space-y-6">
          <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
            <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-cyan-500/5 to-emerald-500/10 pointer-events-none" />
          </div>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className={`text-xs px-2.5 py-1 rounded-md border font-mono ${getTagColor(tag)}`}
                style={{ boxShadow: "0 0 6px rgba(0, 255, 255, 0.15)" }}
              >
                {tag}
              </span>
            ))}
          </div>

          <div>
            <h3 className="text-sm font-bold text-emerald-400 mb-2 font-mono">// PROJECT_OVERVIEW</h3>
            <p className="text-zinc-300 leading-relaxed text-sm lg:text-base">{description}</p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-emerald-400 mb-2 font-mono">// TECH_STACK</h3>
            <div className="font-mono text-sm p-4 bg-black/60 rounded-lg border border-emerald-500/20 overflow-x-auto shadow-inner custom-scrollbar">
              <code className="text-green-400">{tags.join(" • ")}</code>
            </div>
          </div>

          <div className="flex gap-3 flex-wrap pt-4">
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none">
              <Button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-mono text-sm shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </Button>
            </a>
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none">
                <Button variant="outline" className="w-full border-cyan-500/40 text-cyan-400 hover:bg-cyan-950/30 font-mono text-sm">
                  <Code className="mr-2 h-4 w-4" />
                  Source Code
                </Button>
              </a>
            )}
          </div>
        </div>
      </DialogContent>
      </div>
    </Dialog>
  )
}
