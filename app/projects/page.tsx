"use client"

import Link from "next/link"
import SpaceBackground from "@/components/space-background"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import ProjectCard from "@/components/project-card"
import GridBackground from "@/components/grid-background"
import BinaryRain from "@/components/binary-rain"
import CustomCursor from "@/components/custom-cursor"
import Navbar from "@/components/navbar"
import SectionHeader from "@/components/section-header"
import ProjectFilter, { type Project } from "@/components/project-filter"
import { useEffect, useMemo, useState } from "react"
import { ArrowLeft, ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight, Github, Home, Folder, Mail } from 'lucide-react'
import { allProjects } from "@/data/projects"

// Cast to ProjectFilter's Project type (compatible shape)
const projects: Project[] = allProjects as Project[]

export default function ProjectsPage() {
  const [filtered, setFiltered] = useState<Project[]>(projects)
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(4)

  useEffect(() => {
    setPage(1)
  }, [filtered])

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize))

  const currentItems = useMemo(() => {
    const start = (page - 1) * pageSize
    return filtered.slice(start, start + pageSize)
  }, [filtered, page, pageSize])

  const count = filtered.length

  const gotoPage = (p: number) => {
    setPage(Math.min(Math.max(p, 1), totalPages))
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      <SpaceBackground />
      <Navbar />

      <main className="relative z-10 pt-16">
        <GridBackground />
        <BinaryRain />
        <CustomCursor />

        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              title="PROJECT_ARCHIVE"
              subtitle="Search, filter, and paginate through selected work."
              gradientFrom="from-cyan-400"
              gradientTo="to-pink-500"
              className="mb-8"
              align="left"
              glitchIntervalMs={2500}
              glitchDurationMs={300}
            />

            <ProjectFilter projects={projects} onChange={setFiltered} />

            {filtered.length === 0 && (
              <div className="text-center py-16 text-zinc-400">
                <p className="text-lg">No projects match your filter.</p>
                <p className="text-sm mt-2">Try adjusting your search or clearing the filters.</p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
              <div className="text-sm text-zinc-400">
                {count} result{count !== 1 ? "s" : ""} • Page {page} of {totalPages}
              </div>

              <div className="flex items-center gap-2">
                <label htmlFor="pageSize" className="text-xs text-zinc-400">Per page</label>
                <Select value={pageSize.toString()} onValueChange={(val) => setPageSize(Number(val))}>
                  <SelectTrigger id="pageSize" className="w-[70px] h-9 rounded-md bg-zinc-900/60 border-cyan-500/30 text-zinc-200">
                    <SelectValue placeholder="Size" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#080810]/95 backdrop-blur-xl border-cyan-500/30 text-white shadow-[0_0_20px_rgba(0,255,255,0.1)] min-w-[70px]">
                    {[4, 6, 8, 12].map((n) => (
                      <SelectItem key={n} value={n.toString()} className="hover:bg-cyan-900/30 focus:bg-cyan-900/30">
                        {n}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <div className="flex items-center gap-1">
                  <Button variant="outline" size="icon" aria-label="First page" disabled={page === 1} onClick={() => gotoPage(1)} className="border-cyan-500/40 text-cyan-300 disabled:opacity-40">
                    <ChevronsLeft className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" aria-label="Previous page" disabled={page === 1} onClick={() => gotoPage(page - 1)} className="border-cyan-500/40 text-cyan-300 disabled:opacity-40">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  {Array.from({ length: Math.min(5, totalPages) }).map((_, idx) => {
                    const base = Math.max(1, Math.min(page - 2, totalPages - 4))
                    const num = base + idx
                    return (
                      <Button
                        key={num}
                        variant={num === page ? "default" : "outline"}
                        onClick={() => gotoPage(num)}
                        className={num === page ? "bg-cyan-600 text-white" : "border-cyan-500/40 text-cyan-300 hover:bg-cyan-950/30"}
                      >
                        {num}
                      </Button>
                    )
                  })}
                  <Button variant="outline" size="icon" aria-label="Next page" disabled={page === totalPages} onClick={() => gotoPage(page + 1)} className="border-cyan-500/40 text-cyan-300 disabled:opacity-40">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" aria-label="Last page" disabled={page === totalPages} onClick={() => gotoPage(totalPages)} className="border-cyan-500/40 text-cyan-300 disabled:opacity-40">
                    <ChevronsRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {currentItems.map((p) => (
                <ProjectCard
                  key={p.title}
                  title={p.title}
                  description={p.description}
                  tags={p.tags}
                  image={p.image}
                  color={p.color}
                  liveUrl={(p as typeof allProjects[0]).liveUrl}
                  githubUrl={(p as typeof allProjects[0]).githubUrl}
                />
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/">
                <Button variant="outline" className="border-emerald-500 text-emerald-400 hover:bg-emerald-950/30">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-zinc-800 py-10 backdrop-blur-sm bg-black/40">
        <div className="max-w-6xl mx-auto px-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
              <Folder className="h-4 w-4 text-cyan-400" /> Projects
            </h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li><Link className="hover:text-cyan-300" href="/projects">Archive</Link></li>
              <li>
                <a className="hover:text-cyan-300" href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                  Back to top
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
              <Home className="h-4 w-4 text-cyan-400" /> Site
            </h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li><Link className="hover:text-cyan-300" href="/">Home</Link></li>
              <li><Link className="hover:text-cyan-300" href="/about">About</Link></li>
              <li><Link className="hover:text-cyan-300" href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
              <Github className="h-4 w-4 text-cyan-400" /> Social
            </h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li><Link className="hover:text-cyan-300" href="https://github.com/denovan6k" target="_blank" rel="noopener noreferrer">GitHub</Link></li>
              <li><Link className="hover:text-cyan-300" href="https://www.behance.net/denovanrex" target="_blank" rel="noopener noreferrer">Behance</Link></li>
              <li><Link className="hover:text-cyan-300" href="https://discord.com/users/denovan6k" target="_blank" rel="noopener noreferrer">Discord</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
              <Mail className="h-4 w-4 text-cyan-400" /> Contact
            </h4>
            <p className="text-sm text-zinc-400">denovanrex@gmail.com</p>
            <p className="text-sm text-zinc-500 mt-2">© 2026. Made by Denovan</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
