"use client"

import Link from "next/link"
import { ArrowRight, Github, Send, FileDown } from 'lucide-react'
import SpaceBackground from "@/components/space-background"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import SkillMeter from "@/components/skill-meter"
import GridBackground from "@/components/grid-background"
import BinaryRain from "@/components/binary-rain"
import Terminal from "@/components/terminal"
import GlitchText from "@/components/glitch-text"
import CustomCursor from "@/components/custom-cursor"
import Navbar from "@/components/navbar"
import SectionHeader from "@/components/section-header"
import StatsStrip from "@/components/stats-strip"
import SideDotsNav from "@/components/side-dots-nav"
import ScrollToTop from "@/components/scroll-to-top"
import SkipLink from "@/components/skip-link"
import ContactForm from "@/components/contact-form"
import CopyToClipboard from "@/components/copy-to-clipboard"
import { featuredProjects } from "@/data/projects"
import { skillMeters, skillCategories } from "@/data/skills"

export default function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      <SkipLink />
      <SpaceBackground />
      <Navbar />
      <SideDotsNav />
      <ScrollToTop />

      <main id="main" className="relative z-10">
        {/* Hero */}
        <section
          id="hero"
          aria-label="Hero"
          className="flex min-h-screen flex-col items-center justify-center px-4 text-center relative overflow-hidden pt-16"
        >
          <GridBackground />
          <BinaryRain />
          <CustomCursor />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto gap-8">
            <div className="space-y-6 text-left md:w-1/2">
              <div className="space-y-2">
                <p className="text-sm md:text-base text-cyan-400 font-mono">&gt; initializing system...</p>
                {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/40 bg-cyan-500/10 text-cyan-400 text-xs font-mono mb-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                  currently open for collaboration
                </div> */}
                <GlitchText
                  text="AI & SOFTWARE ENGINEER"
                  className="text-4xl md:text-6xl font-bold tracking-tighter bg-gradient-to-r from-cyan-400 via-emerald-500 to-pink-500 bg-clip-text text-transparent"
                />
              </div>

              <p className="text-lg md:text-xl text-zinc-400 max-w-xl text-balance">
                Building scalable web platforms, LLM pipelines, and autonomous AI-powered agentic systems.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Button
                  className="bg-gradient-to-r from-emerald-600 to-blue-500 hover:from-emerald-700 hover:to-blue-600 text-white border-0 group"
                  onClick={() => document.getElementById("projects-section")?.scrollIntoView({ behavior: "smooth" })}
                >
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="outline"
                  className="border-emerald-500 text-emerald-400 hover:bg-emerald-950/30"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Contact Me
                </Button>
                <Link href="/resume" aria-label="View Resume">
                  <Button variant="ghost" className="text-zinc-400 hover:text-cyan-400">
                    <FileDown className="mr-2 h-4 w-4" />
                    Resume
                  </Button>
                </Link>
              </div>

              <StatsStrip />
            </div>

            <div className="md:w-1/2 flex justify-center">
              <Terminal />
            </div>
          </div>


        </section>

        {/* About */}
        <section id="about" className="py-20 px-4 backdrop-blur-sm bg-black/40">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              title="ABOUT_SYSTEM"
              subtitle="Human-focused, system-driven engineering with an eye for immersive design."
              gradientFrom="from-blue-400"
              gradientTo="to-emerald-500"
              className="mb-10"
            />

            <div className="mt-0 grid lg:grid-cols-2 gap-10">
              <div className="rounded-lg border border-emerald-900/50 bg-black/60 p-8 backdrop-blur-md">
                <h3 className="text-xl font-bold text-emerald-300 mb-4">DEVELOPER_PROFILE</h3>
                <div className="space-y-4 text-zinc-300">
                  <p>
                    Okechukwu Ogundu is a Full Stack Engineer with over 5 years of production experience building scalable web platforms and AI-powered agentic systems.
                  </p>
                  <p>
                    Currently focused on integrating LLM pipelines, autonomous agents, and AI-driven automation into modern software stacks. Operating comfortably from architecture to deployment.
                  </p>
                </div>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <div className="rounded border border-cyan-500/30 bg-zinc-900/50 p-3 text-cyan-300">
                    <span className="text-zinc-500 block text-xs mb-1">based in</span>
                    Montreal, Canada • collaborating remotely worldwide
                  </div>
                  <div className="rounded border border-emerald-500/30 bg-zinc-900/50 p-3 text-emerald-300">
                    <span className="text-zinc-500 block text-xs mb-1">working with</span>
                    Design-led startups, product studios, and ambitious founders
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-emerald-900/50 bg-black/60 p-8 backdrop-blur-md">
                <h3 className="text-xl font-bold text-emerald-300 mb-4">SKILL_MATRIX</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {skillMeters.map((s) => (
                    <SkillMeter key={s.name} name={s.name} value={s.value} color={s.color} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-20 px-4 backdrop-blur-sm bg-black/60">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              title="TECH_STACK"
              subtitle="Technologies and tools I use to build production-grade products."
              gradientFrom="from-emerald-400"
              gradientTo="to-cyan-500"
              className="mb-12"
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {skillCategories.map((cat) => (
                <div
                  key={cat.title}
                  className="rounded-lg border border-emerald-900/40 bg-black/50 backdrop-blur-md p-5 hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <h3 className="text-sm font-bold text-cyan-300 mb-2 group-hover:text-cyan-200 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">{cat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects-section" className="py-20 px-4 backdrop-blur-sm bg-black/40">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              title="FEATURED_PROJECTS"
              subtitle="Production-grade work across dashboards, commerce, and immersive interfaces."
              gradientFrom="from-cyan-400"
              gradientTo="to-pink-500"
              className="mb-12"
            />

            <div className="grid md:grid-cols-2 gap-8">
              {featuredProjects.map((p) => (
                <ProjectCard
                  key={p.title}
                  title={p.title}
                  description={p.description}
                  tags={p.tags}
                  image={p.image}
                  color={p.color}
                  liveUrl={p.liveUrl}
                  githubUrl={p.githubUrl}
                />
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/projects">
                <Button className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white border-0">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeader
              title="INITIATE_CONTACT"
              subtitle="Ready to collaborate on your next mission? Send a secure transmission."
              gradientFrom="from-pink-400"
              gradientTo="to-emerald-500"
              className="mb-10"
            />

            <div className="bg-black/60 border border-emerald-900/50 p-8 backdrop-blur-md rounded-lg text-left mb-8">
              <ContactForm />

              <div className="mt-8 grid sm:grid-cols-3 gap-4 text-sm">
                <div className="rounded border border-cyan-500/30 bg-zinc-900/50 p-4 text-zinc-300 flex items-center justify-between">
                  <div>
                    <div className="text-zinc-400 text-xs mb-1">Email</div>
                    hello@okechukwu.dev
                  </div>
                  <CopyToClipboard text="denovanrex@gmail.com" label="email" />
                </div>
                <div className="rounded border border-cyan-500/30 bg-zinc-900/50 p-4 text-zinc-300 flex items-center justify-between">
                  <div>
                    <div className="text-zinc-400 text-xs mb-1">LinkedIn</div>
                    in/okechukwu
                  </div>
                  <CopyToClipboard text="in/okechukwu" label="LinkedIn handle" />
                </div>
                <div className="rounded border border-cyan-500/30 bg-zinc-900/50 p-4 text-zinc-300">
                  <div className="text-zinc-400 text-xs mb-1">Status</div>
                  Currently accepting new engagements
                </div>
              </div>

              <div className="mt-10 flex justify-center gap-6">
                <Link href="#" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-emerald-400 transition-colors" aria-label="GitHub">
                  <Github className="h-6 w-6" />
                </Link>
                <Link
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-cyan-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-zinc-800 py-6 backdrop-blur-sm bg-black/40">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-500 text-sm">
          <p>© 2026. Made by Denovan</p>
          <div className="flex items-center gap-5">
            <Link href="https://github.com/denovan6k" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </Link>
            <Link href="https://www.behance.net/denovanrex" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors" aria-label="Behance">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 1.202.791 1.86 1.81 1.86.7 0 1.233-.303 1.498-.749l2.448-.082zm-7.18-3.31h3.08c-.064-1.14-.73-1.79-1.52-1.79-.85 0-1.47.67-1.56 1.79zM9.25 12.5c0 1.38-.56 2.5-2.5 2.5H3V9h3.75c1.94 0 2.5 1.12 2.5 2.5zm-4.5 1h1.5c.69 0 1-.31 1-1s-.31-1-1-1H4.75v2zm0-3.5h1.25c.69 0 1-.31 1-1s-.31-1-1-1H4.75v2zM3 7h5.5c2.5 0 4 1.5 4 3.5 0 1.38-.75 2.5-2 3 1.5.5 2.5 1.62 2.5 3.5 0 2.5-1.5 4-4.5 4H3V7z"/>
              </svg>
            </Link>
            <Link href="https://discord.com/users/denovan6k" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors" aria-label="Discord">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.033.055a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
