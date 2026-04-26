"use client"

import Link from "next/link"
import SpaceBackground from "@/components/space-background"
import GridBackground from "@/components/grid-background"
import BinaryRain from "@/components/binary-rain"
import CustomCursor from "@/components/custom-cursor"
import Navbar from "@/components/navbar"
import SectionHeader from "@/components/section-header"
import SkillMeter from "@/components/skill-meter"
import { timeline, testimonials } from "@/data/experience"
import { skillMeters, skillCategories } from "@/data/skills"
import { ArrowRight, Github, MapPin, Calendar, Briefcase, GraduationCap, Award, Terminal, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      <SpaceBackground />
      <Navbar />
      <main className="relative z-10 pt-16">
        <GridBackground />
        <BinaryRain />
        <CustomCursor />

        {/* Hero intro */}
        <section className="py-20 px-4 relative">
          <div className="max-w-6xl mx-auto">
            <SectionHeader
              title="ABOUT_SYSTEM"
              subtitle="Engineering excellence at the intersection of design and performance."
              gradientFrom="from-blue-400"
              gradientTo="to-emerald-500"
              className="mb-16"
              align="left"
            />

            {/* Profile card + quick stats */}
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {/* Profile */}
              <div className="lg:col-span-1">
                <div className="rounded-xl border border-emerald-900/50 bg-black/60 p-6 backdrop-blur-md h-full flex flex-col gap-5">
                  {/* Avatar placeholder — glowing hex */}
                  <div className="flex justify-center">
                    <div className="relative w-28 h-28">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500 via-emerald-500 to-pink-500 blur-md opacity-60 animate-pulse" />
                      <div className="relative w-28 h-28 rounded-full bg-zinc-900 border-2 border-cyan-500/50 flex items-center justify-center overflow-hidden">
                        <span className="text-4xl font-bold font-mono bg-gradient-to-br from-cyan-400 to-emerald-500 bg-clip-text text-transparent">O</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <h2 className="text-xl font-bold text-white font-mono">Okechukwu Ogundu</h2>
                    <p className="text-sm text-cyan-400 mt-0.5">AI & Software Engineer</p>
                  </div>

                  <div className="space-y-2.5 text-sm">
                    <div className="flex items-center gap-2.5 text-zinc-400">
                      <MapPin className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                      Montreal, Canada · Remote Worldwide
                    </div>
                    <div className="flex items-center gap-2.5 text-zinc-400">
                      <Calendar className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      5+ Years Experience
                    </div>
                    <div className="flex items-center gap-2.5 text-zinc-400">
                      <Briefcase className="w-4 h-4 text-pink-500 flex-shrink-0" />
                      Open to Engagements
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs text-green-400 font-mono">Available for hire</span>
                  </div>

                  {/* Quick links */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-800">
                    <a
                      href="https://github.com/denovan6k"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors px-2 py-1 rounded border border-zinc-800 hover:border-zinc-600"
                    >
                      <Github className="w-3.5 h-3.5" /> GitHub
                    </a>
                    <a
                      href="https://www.behance.net/denovanrex"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-blue-400 transition-colors px-2 py-1 rounded border border-zinc-800 hover:border-blue-800"
                    >
                      <ExternalLink className="w-3.5 h-3.5" /> Behance
                    </a>
                  </div>
                </div>
              </div>

              {/* Bio + Stats */}
              <div className="lg:col-span-2 space-y-6">
                <div className="rounded-xl border border-emerald-900/50 bg-black/60 p-6 backdrop-blur-md">
                  <div className="flex items-center gap-2 mb-4">
                    <Terminal className="w-4 h-4 text-cyan-400" />
                    <h3 className="text-sm font-bold text-cyan-300 font-mono">// DEVELOPER_PROFILE</h3>
                  </div>
                  <div className="space-y-3 text-zinc-300 text-sm leading-relaxed">
                    <p>
                      Okechukwu Ogundu is a Full Stack Engineer with over 5 years of production experience building scalable web platforms and, more recently, AI-powered agentic systems.
                    </p>
                    <p>
                      Currently pursuing a Master of Engineering in Software Engineering at Concordia University.
                      With a proven track record shipping products that measurably improve performance and engagement, he is focused on integrating LLM pipelines, autonomous agents, and AI-driven automation into modern software stacks.
                    </p>
                    <p className="text-zinc-500 text-xs font-mono">
                      {">"} Comfortable owning technical decisions end-to-end, from architecture to deployment.
                    </p>
                  </div>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { value: "5+", label: "Years Experience", color: "text-cyan-400", border: "border-cyan-500/30" },
                    { value: "15+", label: "Projects Shipped", color: "text-emerald-400", border: "border-emerald-500/30" },
                    { value: "3+", label: "Companies", color: "text-pink-400", border: "border-pink-500/30" },
                    { value: "∞", label: "Coffee Consumed", color: "text-green-400", border: "border-green-500/30" },
                  ].map(({ value, label, color, border }) => (
                    <div key={label} className={`rounded-lg border ${border} bg-zinc-900/50 p-4 text-center`}>
                      <p className={`text-2xl font-bold font-mono ${color}`}>{value}</p>
                      <p className="text-xs text-zinc-500 mt-1">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Work Timeline */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <Briefcase className="w-5 h-5 text-emerald-400" />
                <h2 className="text-xl font-bold text-emerald-300 font-mono">WORK_EXPERIENCE</h2>
                <div className="flex-1 h-px bg-gradient-to-r from-emerald-500/40 to-transparent" />
              </div>

              <div className="relative">
                {/* Timeline spine */}
                <div className="absolute left-0 top-4 bottom-4 w-px bg-gradient-to-b from-cyan-500 via-emerald-500 to-pink-500 opacity-30 ml-4" />

                <div className="space-y-6 pl-12">
                  {timeline.map((item, i) => (
                    <div
                      key={i}
                      className="relative rounded-xl border border-emerald-900/40 bg-black/60 backdrop-blur-md p-6 hover:border-cyan-500/40 transition-all duration-300 group"
                    >
                      {/* Dot */}
                      <div className="absolute -left-9 top-6 w-3.5 h-3.5 rounded-full bg-gradient-to-br from-cyan-400 to-emerald-500 border-2 border-black shadow-[0_0_8px_rgba(0,255,255,0.4)]" />

                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                        <div>
                          <h3 className="font-bold text-white font-mono group-hover:text-cyan-300 transition-colors">{item.company}</h3>
                          <p className="text-sm text-emerald-400 mt-0.5">{item.role}</p>
                        </div>
                        <span className="text-xs text-zinc-500 font-mono whitespace-nowrap border border-zinc-800 px-2 py-1 rounded">
                          {item.period}
                        </span>
                      </div>

                      <ul className="space-y-1.5">
                        {item.points.map((point, j) => (
                          <li key={j} className="text-sm text-zinc-400 flex items-start gap-2">
                            <span className="text-cyan-500 mt-0.5 flex-shrink-0">›</span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tech Categories */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <Terminal className="w-5 h-5 text-cyan-400" />
                <h2 className="text-xl font-bold text-cyan-300 font-mono">TECH_ARSENAL</h2>
                <div className="flex-1 h-px bg-gradient-to-r from-cyan-500/40 to-transparent" />
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {skillCategories.map((cat) => (
                  <div
                    key={cat.title}
                    className="rounded-lg border border-emerald-900/40 bg-black/50 backdrop-blur-md p-5 hover:border-cyan-500/50 transition-all duration-300 group"
                  >
                    <h3 className="text-sm font-bold text-cyan-300 mb-2 group-hover:text-cyan-200 transition-colors font-mono">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">{cat.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Skill Meters */}
            <div className="mb-16">
              <div className="rounded-xl border border-emerald-900/50 bg-black/60 p-8 backdrop-blur-md">
                <div className="flex items-center gap-3 mb-8">
                  <Award className="w-5 h-5 text-pink-400" />
                  <h2 className="text-xl font-bold text-emerald-300 font-mono">SKILL_MATRIX</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {skillMeters.map((s) => (
                    <SkillMeter key={s.name} name={s.name} value={s.value} color={s.color} />
                  ))}
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-8">
                <GraduationCap className="w-5 h-5 text-pink-400" />
                <h2 className="text-xl font-bold text-pink-300 font-mono">CLIENT_SIGNALS</h2>
                <div className="flex-1 h-px bg-gradient-to-r from-pink-500/40 to-transparent" />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {testimonials.map((t, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-pink-900/30 bg-black/60 p-6 backdrop-blur-md relative overflow-hidden"
                  >
                    {/* Quote mark */}
                    <div className="absolute top-4 right-5 text-6xl text-pink-900/20 font-serif leading-none select-none">"</div>
                    <p className="text-zinc-300 text-sm leading-relaxed mb-4 relative z-10">"{t.quote}"</p>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-emerald-500 flex items-center justify-center text-xs font-bold text-white">
                        {t.author[0]}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">{t.author}</p>
                        <p className="text-xs text-zinc-500">{t.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center py-8 border-t border-zinc-800/60">
              <p className="text-zinc-400 mb-4">Ready to build something extraordinary?</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-emerald-600 to-blue-500 hover:from-emerald-700 hover:to-blue-600 text-white border-0 group">
                    Get in Touch
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/projects">
                  <Button variant="outline" className="border-cyan-500/40 text-cyan-400 hover:bg-cyan-950/30">
                    View Projects
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-zinc-800 py-6 backdrop-blur-sm bg-black/40">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-500 text-sm">
          <p>© 2026. Made by Okechukwu Ogundu</p>
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
            <Link href="/projects" className="hover:text-cyan-400 transition-colors">Projects</Link>
            <Link href="/contact" className="hover:text-cyan-400 transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
