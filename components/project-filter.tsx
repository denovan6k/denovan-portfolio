"use client"

import { useEffect, useMemo, useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"

export interface Project {
  title: string
  description: string
  tags: string[]
  image: string
  color: string
  category?: string
}

interface ProjectFilterProps {
  projects: Project[]
  onChange: (filtered: Project[]) => void
}

export default function ProjectFilter({ projects, onChange }: ProjectFilterProps) {
  const [query, setQuery] = useState("")
  const [activeTags, setActiveTags] = useState<string[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>("All")

  const allTags = useMemo(() => {
    const set = new Set<string>()
    projects.forEach((p) => p.tags.forEach((t) => set.add(t)))
    return Array.from(set).sort()
  }, [projects])

  const allCategories = useMemo(() => {
    const set = new Set<string>()
    projects.forEach((p) => p.category && set.add(p.category))
    return ["All", ...Array.from(set).sort()]
  }, [projects])

  const toggleTag = (tag: string) => {
    const next = activeTags.includes(tag) ? activeTags.filter((t) => t !== tag) : [...activeTags, tag]
    setActiveTags(next)
  }

  useEffect(() => {
    const q = query.trim().toLowerCase()
    const filtered = projects.filter((p) => {
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))

      const matchesTags = activeTags.length === 0 || activeTags.every((t) => p.tags.includes(t))
      const matchesCategory = selectedCategory === "All" || p.category === selectedCategory

      return matchesQuery && matchesTags && matchesCategory
    })

    onChange(filtered)
  }, [projects, query, activeTags, selectedCategory, onChange])

  return (
    <div className="mb-6 space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <Input
          aria-label="Search projects"
          placeholder="Search projects by title, tech, or description..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="bg-zinc-900/60 border-cyan-500/20 text-white"
        />

        <div className="md:col-span-2 flex flex-wrap gap-2 items-stretch">
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger aria-label="Filter by category" className="w-[180px] h-10 rounded-md bg-zinc-900/60 border border-cyan-500/30 text-zinc-200 px-3">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent className="bg-[#080810]/95 backdrop-blur-xl border-cyan-500/30 text-white shadow-[0_0_20px_rgba(0,255,255,0.1)]">
              {allCategories.map((c) => (
                <SelectItem key={c} value={c} className="hover:bg-cyan-900/30 focus:bg-cyan-900/30">
                  {c}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <Button
                key={tag}
                type="button"
                size="sm"
                variant="outline"
                onClick={() => toggleTag(tag)}
                className={cn(
                  "border-cyan-500/30 text-zinc-300 hover:bg-cyan-950/30",
                  activeTags.includes(tag) && "bg-cyan-900/40 text-cyan-300 border-cyan-500/60",
                )}
              >
                {tag}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {(activeTags.length > 0 || selectedCategory !== "All" || query.trim().length > 0) && (
        <div className="text-xs text-zinc-400">
          {query.trim().length > 0 && <span>Query: “{query.trim()}” • </span>}
          <span>Category: {selectedCategory}</span>
          {activeTags.length > 0 && <span> • Tags: {activeTags.join(", ")}</span>}
        </div>
      )}
    </div>
  )
}
