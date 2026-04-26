"use client"

import Link from "next/link"
import { ArrowLeft, Terminal, Briefcase, Code, BookOpen, User, Download, Mail, Github, Linkedin, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import SpaceBackground from "@/components/space-background"
import Navbar from "@/components/navbar"

export default function ResumePage() {
  return (
    <div className="relative min-h-screen bg-black text-zinc-300 font-mono">
      <SpaceBackground />
      <Navbar />

      <main className="relative z-10 max-w-4xl mx-auto px-4 pt-28 pb-20">
        <div className="flex items-center justify-between mb-8">
          <Link href="/">
            <Button variant="ghost" className="text-zinc-400 hover:text-cyan-400">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to System
            </Button>
          </Link>
          <a href="/files/resume.pdf" download>
            <Button variant="outline" className="border-cyan-500/40 text-cyan-400 hover:bg-cyan-950/30">
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
          </a>
        </div>

        <div className="bg-[#080810]/95 border border-emerald-900/40 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(52,211,153,0.1)]">
          {/* Header */}
          <div className="border-b border-emerald-900/40 bg-zinc-950/80 p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
              <Terminal className="w-48 h-48 text-cyan-500" />
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-2 uppercase">Okechukwu Ogundu</h1>
            <p className="text-xl text-cyan-400 mb-6 font-semibold">AI / Software Engineer</p>
            
            <div className="flex flex-wrap gap-4 text-sm text-zinc-400">
              <a href="mailto:hello@okechukwu.dev" className="flex items-center gap-2 hover:text-cyan-300 transition-colors">
                <Mail className="w-4 h-4 text-emerald-400" /> Email
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-cyan-300 transition-colors">
                <Linkedin className="w-4 h-4 text-emerald-400" /> LinkedIn
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-cyan-300 transition-colors">
                <Github className="w-4 h-4 text-emerald-400" /> GitHub
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-cyan-300 transition-colors">
                <ExternalLink className="w-4 h-4 text-emerald-400" /> Portfolio
              </a>
            </div>
          </div>

          <div className="p-8 sm:p-12 space-y-12">
            {/* Summary */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <User className="w-5 h-5 text-cyan-400" />
                <h2 className="text-lg font-bold text-white mb-0">// SUMMARY OF SKILLS AND QUALIFICATIONS</h2>
              </div>
              <p className="leading-relaxed text-zinc-300">
                Full Stack Engineer with over 5 years of production experience building scalable web platforms and, more recently, AI-powered agentic systems. Pursuing a Master of Engineering in Software Engineering at Concordia University. Proven track record shipping user-facing products that measurably improve performance and engagement and now focused on integrating LLM pipelines, autonomous agents, and AI-driven automation into modern software stacks. Comfortable owning technical decisions end-to-end, from architecture to deployment.
              </p>
            </section>

            {/* Technical Skills */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-5 h-5 text-emerald-400" />
                <h2 className="text-lg font-bold text-white mb-0">// TECHNICAL SKILLS</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-cyan-400 font-semibold mb-1 border-b border-zinc-800 pb-1">Languages</h3>
                    <p className="text-sm">TypeScript, Python, Java, C</p>
                  </div>
                  <div>
                    <h3 className="text-cyan-400 font-semibold mb-1 border-b border-zinc-800 pb-1">Frontend</h3>
                    <p className="text-sm">React (Vite / Next.js / Remix / TanStack Start), Vue, Tailwind CSS, Framer Motion, ShadCN UI</p>
                  </div>
                  <div>
                    <h3 className="text-cyan-400 font-semibold mb-1 border-b border-zinc-800 pb-1">Backend</h3>
                    <p className="text-sm">Node.js, Bun, Express.js, Hono, NestJS, Spring Boot, Better Auth</p>
                  </div>
                  <div>
                    <h3 className="text-cyan-400 font-semibold mb-1 border-b border-zinc-800 pb-1">AI & Agentic</h3>
                    <p className="text-sm">OpenAI API, Anthropic Claude API, LangChain, LangGraph, AI SDK (Vercel), RAG pipelines, vector databases, prompt engineering, tool-calling / function-calling, multi-agent orchestration</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-cyan-400 font-semibold mb-1 border-b border-zinc-800 pb-1">Automation</h3>
                    <p className="text-sm">n8n, Zapier, browser automation (Playwright / Puppeteer), scheduled task pipelines, webhook-driven workflows</p>
                  </div>
                  <div>
                    <h3 className="text-cyan-400 font-semibold mb-1 border-b border-zinc-800 pb-1">Data & Storage</h3>
                    <p className="text-sm">PostgreSQL, MongoDB, Redis, Firebase, Supabase, Prisma, AppWrite</p>
                  </div>
                  <div>
                    <h3 className="text-cyan-400 font-semibold mb-1 border-b border-zinc-800 pb-1">DevOps & Tooling</h3>
                    <p className="text-sm">Docker, Git, Postman, Vitest, Jest, Robot Framework (E2E)</p>
                  </div>
                  <div>
                    <h3 className="text-cyan-400 font-semibold mb-1 border-b border-zinc-800 pb-1">Certifications</h3>
                    <p className="text-sm">Internpulse finalist certificate • Build a website on Google Skill Badge • HNG Certificate of Proficiency in Frontend Development • Develop Serverless Apps with Firebase Skill Badge • Complete Web Developer • Javascript Programming foundation</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Education */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-5 h-5 text-green-400" />
                <h2 className="text-lg font-bold text-white mb-0">// EDUCATION</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                    <h3 className="text-white font-semibold text-base whitespace-normal">Master of Engineering – Software Engineering Co-op</h3>
                    <span className="text-green-400 text-sm whitespace-nowrap">2026 - Present</span>
                  </div>
                  <p className="text-zinc-400 text-sm">Concordia University, Montreal, QC.</p>
                </div>
                <div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                    <h3 className="text-white font-semibold text-base whitespace-normal">Bachelor of Engineering – Electronic Engineering</h3>
                    <span className="text-green-400 text-sm whitespace-nowrap">2017 - 2023</span>
                  </div>
                  <p className="text-zinc-400 text-sm">University of Nigeria, Enugu, Nigeria.</p>
                </div>
              </div>
            </section>

            {/* Experience */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="w-5 h-5 text-pink-400" />
                <h2 className="text-lg font-bold text-white mb-0">// WORK EXPERIENCE</h2>
              </div>
              
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-emerald-900/50 before:to-transparent">
                
                {/* Luday */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-pink-500 bg-zinc-950 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_10px_rgba(236,72,153,0.5)] z-10" />
                  <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-1.5rem)] bg-zinc-900/40 p-5 rounded-lg border border-emerald-900/30">
                    <div className="flex flex-col mb-2">
                      <h3 className="font-bold text-white text-base">Full Stack Developer</h3>
                      <div className="text-cyan-400 text-sm font-semibold">Luday, Sweden (Remote)</div>
                      <div className="text-zinc-500 text-xs">Jan 2025 - Dec 2025</div>
                    </div>
                    <ul className="list-disc pl-4 space-y-1.5 text-sm text-zinc-300">
                      <li>Developed a personalized AI story generator that adapts tone, genre, and context per user input, improving session engagement by 20% and reducing reliance on manual content creation by ~60%.</li>
                      <li>Developed an AI-powered retrospective analysis tool that processes team retrospective data, leveraging LLM-based classification to identify bottlenecks, surface recurring issues, and recommend improvements, reducing triage time by 40%.</li>
                      <li>Refactored a legacy ecommerce platform: implemented lazy loading, route-level code splitting, and TanStack Query for server state, reducing page load times by 35% and eliminating redundant API calls.</li>
                      <li>Enhanced a Kanban board application with real-time updates via WebSockets and optimistic UI patterns, improving task completion rates by 15%.</li>
                      <li>Introduced i18n (internationalization) with locale switching using the react-i18next library across client-facing surfaces.</li>
                    </ul>
                  </div>
                </div>

                {/* SkillHat */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-cyan-500 bg-zinc-950 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_10px_rgba(6,182,212,0.5)] z-10" />
                  <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-1.5rem)] bg-zinc-900/40 p-5 rounded-lg border border-emerald-900/30">
                    <div className="flex flex-col mb-2">
                      <h3 className="font-bold text-white text-base">Frontend Team Lead</h3>
                      <div className="text-cyan-400 text-sm font-semibold">SkillHat, Toronto, Canada (Remote)</div>
                      <div className="text-zinc-500 text-xs">Nov 2024 - Feb 2025</div>
                    </div>
                    <ul className="list-disc pl-4 space-y-1.5 text-sm text-zinc-300">
                      <li>Led a distributed team of 5 frontend engineers building a subscription management app in Next.js, establishing code review workflows, component architecture standards, and CI/CD conventions that improved delivery speed by 30%.</li>
                      <li>Prototyped an AI-assisted onboarding flow using the Vercel AI SDK to generate personalized course recommendations based on user skill assessments, reducing user drop-off at sign-up by 22%.</li>
                      <li>Drove a 25% uplift in user engagement through mobile-first responsive design and targeted Lighthouse-informed performance optimizations.</li>
                      <li>Implemented compound component patterns and custom React hooks library shared across 3 product areas, cutting duplicated UI code by 40%.</li>
                    </ul>
                  </div>
                </div>

                {/* Freelance */}
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-emerald-500 bg-zinc-950 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10" />
                  <div className="w-[calc(100%-2.5rem)] md:w-[calc(50%-1.5rem)] bg-zinc-900/40 p-5 rounded-lg border border-emerald-900/30">
                    <div className="flex flex-col mb-2">
                      <h3 className="font-bold text-white text-base">Frontend Engineer</h3>
                      <div className="text-cyan-400 text-sm font-semibold">Freelance, Abuja, Nigeria (Remote)</div>
                      <div className="text-zinc-500 text-xs">Jul 2020 - Feb 2024</div>
                    </div>
                    <ul className="list-disc pl-4 space-y-1.5 text-sm text-zinc-300">
                      <li>Translated UI designs into mobile-friendly, accessible, and interactive interfaces using Tailwind CSS, improving user engagement metrics by 15% and enhancing cross-device compatibility.</li>
                      <li>Developed restaurant service website integrating authentication and database management with Firebase, improving performance and security by 25% while ensuring data integrity.</li>
                    </ul>
                  </div>
                </div>

              </div>
            </section>

            {/* Projects */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Terminal className="w-5 h-5 text-yellow-400" />
                <h2 className="text-lg font-bold text-white mb-0">// KEY PROJECTS</h2>
              </div>
              <div className="bg-zinc-900/40 p-5 rounded-lg border border-yellow-900/40">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                  <h3 className="text-white font-bold text-base">Next Hive (AI Edtech LMS)</h3>
                  <span className="text-yellow-400 text-xs mt-1 sm:mt-0 font-semibold">Next.js, Hono, TypeScript, Tailwind CSS, PostgreSQL</span>
                </div>
                <p className="text-sm text-zinc-400 font-semibold mb-2">Co-built NextHive, scaling to builders across Africa with localized learning tracks.</p>
                <ul className="list-disc pl-4 space-y-1.5 text-sm text-zinc-300">
                  <li>Designed and deployed a full-featured Learning Management System (LMS) supporting multiple concurrent users, enabling structured course delivery, progress tracking, and low-latency content access ({'<'}300ms average page load).</li>
                  <li>Architected core backend systems handling course enrollments and submissions, including payment integrations, cryptographically verifiable portfolios, and a real-time leaderboard engine ({'<'}200ms update latency).</li>
                  <li>Built a Signal Graph social feed processing thousands of events/day, prioritizing verified project submissions over passive engagement, improving signal quality and discovery relevance.</li>
                  <li>Achieved 99.9% uptime through efficient API design, database indexing (PostgreSQL), and optimized frontend rendering (Next.js SSR/ISR).</li>
                </ul>
              </div>
            </section>

            {/* Volunteer & Leadership */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <User className="w-5 h-5 text-emerald-400" />
                <h2 className="text-lg font-bold text-white mb-0">// VOLUNTEER & LEADERSHIP</h2>
              </div>
              <div className="bg-zinc-900/40 p-5 rounded-lg border border-emerald-900/40">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
                  <h3 className="text-white font-bold text-base">Frontend Team Lead</h3>
                  <div className="text-right">
                    <span className="text-emerald-400 text-sm font-semibold block">Analytix Hive</span>
                    <span className="text-zinc-500 text-xs">Feb 2025 – Present</span>
                  </div>
                </div>
                <ul className="list-disc pl-4 space-y-1.5 text-sm text-zinc-300">
                  <li>Architected a scalable course delivery system with real-time rating aggregation, enrollment tracking, and payment and AI integration.</li>
                  <li>Built a shared React component library and relational database schema used across 4 internal products.</li>
                </ul>
              </div>
            </section>

          </div>
        </div>
      </main>
    </div>
  )
}
