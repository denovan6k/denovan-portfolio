"use client"

import type React from "react"
import { useState, useEffect, useRef, useCallback } from "react"
import { ChevronRight, Terminal as TerminalIcon } from "lucide-react"

interface Command {
  input: string
  output: React.ReactNode
  timestamp: string
}

const getTimestamp = () => new Date().toLocaleTimeString("en-US", { hour12: false })

const COMMANDS = [
  "help", "who am i", "about", "skills", "skills --list", "projects",
  "contact", "status", "clear", "echo", "date", "github", "linkedin",
  "work", "education", "ls", "pwd", "theme",
]

export default function Terminal() {
  const [input, setInput] = useState("")
  const [history, setHistory] = useState<Command[]>([])
  const [isMinimized, setIsMinimized] = useState(false)
  const [isMaximized, setIsMaximized] = useState(false)
  const [cursorVisible, setCursorVisible] = useState(true)
  const [cmdHistory, setCmdHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [suggestionIdx, setSuggestionIdx] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const introRan = useRef(false)

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight
    }
  }, [history])

  useEffect(() => {
    const id = window.setInterval(() => setCursorVisible((v) => !v), 530)
    return () => window.clearInterval(id)
  }, [])

  // Tab-completion logic
  const updateSuggestions = useCallback((val: string) => {
    if (!val.trim()) {
      setSuggestions([])
      return
    }
    const matches = COMMANDS.filter((c) => c.startsWith(val.toLowerCase()))
    setSuggestions(matches)
    setSuggestionIdx(-1)
  }, [])

  // Intro sequence
  useEffect(() => {
    if (introRan.current) return
    introRan.current = true

    const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms))
    const typeCmd = async (cmd: string, speed = 65) => {
      setInput("")
      for (const ch of cmd) {
        setInput((p) => p + ch)
        await sleep(speed)
      }
    }

    const run = async () => {
      await sleep(800)

      await typeCmd("status")
      await sleep(250)
      setHistory([{
        input: "status",
        timestamp: getTimestamp(),
        output: (
          <div className="space-y-1">
            <p className="text-green-400 font-bold">◉ SYSTEM ONLINE — All subsystems nominal</p>
            <p className="text-xs text-zinc-500 mt-1">// Type <span className="text-cyan-400">help</span> to explore available commands</p>
          </div>
        ),
      }])
      setInput("")

      await sleep(900)
      await typeCmd("who am i")
      await sleep(250)
      setHistory((prev) => [...prev, {
        input: "who am i",
        timestamp: getTimestamp(),
        output: (
          <div className="space-y-1.5">
            <p className="font-bold text-cyan-300 text-base">Okechukwu Ogundu — AI & Software Engineer</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-0.5 text-xs mt-2">
              <p><span className="text-zinc-500">email:</span> <span className="text-zinc-300">hello@okechukwu.dev</span></p>
              <p><span className="text-zinc-500">linkedin:</span> <span className="text-zinc-300">in/okechukwu</span></p>
              <p><span className="text-zinc-500">github:</span> <span className="text-zinc-300">github.com/okechukwu</span></p>
              <p><span className="text-zinc-500">location:</span> <span className="text-zinc-300">Montreal, CA</span></p>
            </div>
          </div>
        ),
      }])
      setInput("")

      await sleep(900)
      await typeCmd("skills --list")
      await sleep(250)
      setHistory((prev) => [...prev, {
        input: "skills --list",
        timestamp: getTimestamp(),
        output: (
          <div className="grid grid-cols-2 gap-x-6 gap-y-1 mt-1">
            {[
              { color: "bg-cyan-500", text: "text-cyan-400", name: "Next.js / TS" },
              { color: "bg-emerald-500", text: "text-emerald-400", name: "Vercel AI SDK" },
              { color: "bg-green-500", text: "text-green-400", name: "Python / LangChain" },
              { color: "bg-blue-500", text: "text-blue-400", name: "Node.js / Hono" },
              { color: "bg-yellow-400", text: "text-yellow-400", name: "n8n / Automations" },
              { color: "bg-pink-500", text: "text-pink-400", name: "Java" },
            ].map(({ color, text, name }) => (
              <div key={name} className="flex items-center gap-2">
                <div className={`w-1.5 h-1.5 rounded-full ${color} flex-shrink-0`} />
                <span className={`text-sm ${text}`}>{name}</span>
              </div>
            ))}
          </div>
        ),
      }])
      setInput("")
    }

    run()
  }, [])

  const addToHistory = (cmd: string, output: React.ReactNode) => {
    setHistory((prev) => [...prev, { input: cmd, output, timestamp: getTimestamp() }])
    setCmdHistory((prev) => [cmd, ...prev.slice(0, 49)])
    setHistoryIndex(-1)
    setSuggestions([])
    setInput("")
  }

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  const executeCommand = (cmd: string) => {
    const raw = cmd.trim()
    if (!raw) return
    const command = raw.toLowerCase()

    // echo command
    if (command.startsWith("echo ")) {
      const msg = raw.slice(5)
      addToHistory(raw, <p className="text-zinc-300">{">"} {msg}</p>)
      return
    }

    let output: React.ReactNode

    switch (command) {
      case "help":
        output = (
          <div>
            <p className="text-emerald-400 font-bold mb-2 text-sm">// Available Commands</p>
            <div className="grid grid-cols-1 gap-0.5 text-sm">
              {[
                ["who am i", "Identity & contact info"],
                ["about", "Developer background"],
                ["skills", "Technical skill breakdown"],
                ["skills --list", "Quick skill overview"],
                ["work", "Work experience"],
                ["education", "Education background"],
                ["projects", "Browse portfolio projects"],
                ["contact", "Contact channels"],
                ["github", "Navigate to GitHub"],
                ["linkedin", "Navigate to LinkedIn"],
                ["status", "System status check"],
                ["ls", "List available sections"],
                ["pwd", "Current location"],
                ["date", "Current date & time"],
                ["echo [text]", "Echo text to terminal"],
                ["clear", "Clear terminal output"],
              ].map(([c, desc]) => (
                <div key={c} className="flex gap-0 group">
                  <span className="text-green-400 font-mono w-36 flex-shrink-0 group-hover:text-cyan-300 transition-colors">{c}</span>
                  <span className="text-zinc-500">— {desc}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-zinc-600 mt-2">Tip: Press <span className="text-cyan-400">Tab</span> to autocomplete commands</p>
          </div>
        )
        break

      case "who am i":
        output = (
          <div className="space-y-1.5">
            <p className="font-bold text-cyan-300 text-base">Okechukwu Ogundu — AI & Software Engineer</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-0.5 text-xs mt-2">
              <p><span className="text-zinc-500">email:</span> <span className="text-zinc-300">hello@okechukwu.dev</span></p>
              <p><span className="text-zinc-500">linkedin:</span> <span className="text-zinc-300">in/okechukwu</span></p>
              <p><span className="text-zinc-500">github:</span> <span className="text-zinc-300">github.com/okechukwu</span></p>
              <p><span className="text-zinc-500">location:</span> <span className="text-zinc-300">Montreal, Canada</span></p>
            </div>
          </div>
        )
        break

      case "about":
        output = (
          <div className="space-y-2 text-sm">
            <p className="text-cyan-400 font-bold">// DEVELOPER PROFILE</p>
            <p className="text-zinc-300 leading-relaxed">
              Okechukwu Ogundu is a Full Stack Engineer with over 5 years of production experience building scalable web platforms and AI-powered agentic systems. He is currently pursuing a Master of Engineering in Software Engineering at Concordia University, Canada.
            </p>
            <p className="text-zinc-400 text-xs">Based in Montreal, Canada. Operating at the intersection of complex scalable LLM pipelines, autonomous agents, and AI-driven automation.</p>
          </div>
        )
        break

      case "skills":
        output = (
          <div className="space-y-3 text-sm">
            <p className="text-emerald-400 font-bold">// TECH MATRIX</p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "AI & Agentic", color: "text-cyan-400", items: ["OpenAI API", "LangChain", "Vercel AI SDK", "Tool-Calling"] },
                { label: "Frontend & Full Stack", color: "text-blue-400", items: ["React & Next.js", "TypeScript", "Tailwind CSS"] },
                { label: "Backend Core", color: "text-pink-400", items: ["Node.js / Hono", "Python", "NestJS"] },
                { label: "Data & DevOps", color: "text-green-400", items: ["MongoDB / Redis", "Docker", "CI/CD / Vitest"] },
              ].map(({ label, color, items }) => (
                <div key={label}>
                  <p className={`${color} text-xs mb-1 font-semibold`}>{label}</p>
                  <ul className="space-y-0.5 text-zinc-300">
                    {items.map((item) => (
                      <li key={item} className="flex items-center gap-1.5">
                        <span className="text-zinc-600">›</span>{item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )
        break

      case "skills --list":
        output = (
          <div className="grid grid-cols-2 gap-x-6 gap-y-1 mt-1">
            {[
              { color: "bg-cyan-500", text: "text-cyan-400", name: "Next.js / TS" },
              { color: "bg-emerald-500", text: "text-emerald-400", name: "Vercel AI SDK" },
              { color: "bg-green-500", text: "text-green-400", name: "Python / LangChain" },
              { color: "bg-blue-500", text: "text-blue-400", name: "Node.js / Hono" },
              { color: "bg-yellow-400", text: "text-yellow-400", name: "n8n / Automations" },
              { color: "bg-pink-500", text: "text-pink-400", name: "Java" },
            ].map(({ color, text, name }) => (
              <div key={name} className="flex items-center gap-2">
                <div className={`w-1.5 h-1.5 rounded-full ${color} flex-shrink-0`} />
                <span className={`text-sm ${text}`}>{name}</span>
              </div>
            ))}
          </div>
        )
        break

      case "work":
        output = (
          <div className="space-y-3 text-sm">
            <p className="text-emerald-400 font-bold">// WORK EXPERIENCE</p>
            {[
              { co: "Luday", role: "Full Stack Developer", period: "Jan 2025 — Dec 2025", color: "text-green-400" },
              { co: "SkillHat", role: "Frontend Team Lead", period: "Nov 2024 — Feb 2025", color: "text-cyan-400" },
              { co: "Analytix Hive", role: "Frontend Team Lead", period: "Feb 2025 — Present", color: "text-emerald-400" },
            ].map(({ co, role, period, color }) => (
              <div key={co} className="pl-3 border-l border-zinc-700">
                <p className={`${color} font-semibold`}>{co}</p>
                <p className="text-zinc-300 text-xs">{role} · {period}</p>
              </div>
            ))}
            <p className="text-xs text-zinc-500">// Visit <span className="text-cyan-400">/about</span> for full timeline</p>
          </div>
        )
        break

      case "education":
        output = (
          <div className="space-y-2 text-sm">
            <p className="text-emerald-400 font-bold">// EDUCATION</p>
            <div className="pl-3 border-l border-zinc-700">
              <p className="text-cyan-400 font-semibold">MEng Software Engineering</p>
              <p className="text-zinc-400 text-xs">Concordia University · 2026 — Present</p>
            </div>
            <div className="pl-3 border-l border-zinc-700 mt-2">
              <p className="text-cyan-400 font-semibold">BEng Electronic Engineering</p>
              <p className="text-zinc-400 text-xs">University of Nigeria · 2017 — 2023</p>
            </div>
            <p className="text-zinc-500 text-xs">// Continuous learning through Scrimba, FEM, and open-source</p>
          </div>
        )
        break

      case "projects":
        output = (
          <div className="space-y-2 text-sm">
            <p className="text-cyan-400 font-bold">// FEATURED PROJECTS</p>
            {[
              { name: "LudaCards", color: "text-emerald-400", desc: "Agile SaaS team collaboration platform." },
              { name: "Hives Africa", color: "text-green-400", desc: "EdTech LMS for African learners." },
              { name: "Renergy Hub", color: "text-emerald-400", desc: "Cleantech energy marketplace." },
              { name: "Bestdealnaija", color: "text-yellow-400", desc: "E-commerce for Nigerian market." },
            ].map(({ name, color, desc }) => (
              <div key={name} className="flex gap-2">
                <span className="text-zinc-600 flex-shrink-0">›</span>
                <p><span className={`${color} font-medium`}>{name}</span> <span className="text-zinc-500">— {desc}</span></p>
              </div>
            ))}
            <p className="text-xs text-zinc-500 mt-1">// Navigate to <span className="text-cyan-400 cursor-pointer hover:underline" onClick={() => scrollToSection("projects-section")}>#projects</span> for the full archive</p>
          </div>
        )
        break

      case "contact":
        output = (
          <div className="space-y-1.5 text-sm">
            <p className="text-emerald-400 font-bold mb-1">// CONTACT CHANNELS</p>
            {[
              { label: "Email", value: "hello@okechukwu.dev", color: "text-pink-400" },
              { label: "GitHub", value: "github.com/okechukwu", color: "text-zinc-300" },
              { label: "LinkedIn", value: "linkedin.com/in/okechukwu", color: "text-sky-400" },
            ].map(({ label, value, color }) => (
              <p key={label}><span className="text-zinc-500">{label}:</span> <span className={color}>{value}</span></p>
            ))}
          </div>
        )
        break

      case "github":
        output = <p className="text-zinc-400">↗ Opening <span className="text-cyan-400">github.com/okechukwu</span> ...</p>
        window.open("https://github.com/okechukwu", "_blank", "noopener noreferrer")
        break

      case "linkedin":
        output = <p className="text-zinc-400">↗ Opening <span className="text-cyan-400">linkedin.com/in/okechukwu</span> ...</p>
        window.open("https://www.linkedin.com/in/okechukwu", "_blank", "noopener noreferrer")
        break

      case "status":
        output = (
          <div className="space-y-1 text-sm">
            <p className="text-green-400 font-bold">◉ SYSTEM ONLINE — All subsystems nominal</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-0.5 text-xs mt-1">
              <p><span className="text-zinc-500">kernel:</span> <span className="text-zinc-300">portfolio v2.0</span></p>
              <p><span className="text-zinc-500">mode:</span> <span className="text-cyan-400">open-to-work</span></p>
              <p><span className="text-zinc-500">uptime:</span> <span className="text-zinc-300">∞ cycles</span></p>
              <p><span className="text-zinc-500">status:</span> <span className="text-green-400">accepting engagements</span></p>
            </div>
            <p className="text-xs text-zinc-600 mt-1">// Type <span className="text-cyan-400">help</span> to see all commands</p>
          </div>
        )
        break

      case "ls":
        output = (
          <div className="grid grid-cols-3 gap-x-6 gap-y-0.5 text-sm">
            {["hero/", "about/", "skills/", "projects/", "contact/", "terminal/"].map((item) => (
              <span key={item} className={item.endsWith("/") ? "text-cyan-400" : "text-zinc-300"}>{item}</span>
            ))}
          </div>
        )
        break

      case "pwd":
        output = <p className="text-green-400 font-mono">/portfolio/~okechukwu</p>
        break

      case "date":
        output = (
          <div className="text-sm space-y-0.5">
            <p className="text-cyan-400">{new Date().toLocaleString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</p>
            <p className="text-zinc-500 text-xs font-mono">{new Date().toISOString()}</p>
          </div>
        )
        break

      case "theme":
        output = <p className="text-zinc-400 text-sm">Current theme: <span className="text-cyan-400">CYBERPUNK MATRIX DARK</span> — no other themes available</p>
        break

      case "clear":
        setHistory([])
        setInput("")
        setSuggestions([])
        return

      default:
        output = (
          <div className="text-sm space-y-0.5">
            <p className="text-red-400">Command not found: <span className="text-red-300 font-mono">{command}</span></p>
            <p className="text-xs text-zinc-600">Type <span className="text-cyan-400">help</span> for available commands or press <span className="text-cyan-400">Tab</span> to autocomplete</p>
          </div>
        )
    }

    addToHistory(raw, output)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault()
      const idx = Math.min(historyIndex + 1, cmdHistory.length - 1)
      setHistoryIndex(idx)
      setInput(cmdHistory[idx] ?? "")
      setSuggestions([])
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      const idx = Math.max(historyIndex - 1, -1)
      setHistoryIndex(idx)
      setInput(idx === -1 ? "" : cmdHistory[idx])
      setSuggestions([])
    } else if (e.key === "Tab") {
      e.preventDefault()
      if (suggestions.length === 1) {
        setInput(suggestions[0])
        setSuggestions([])
      } else if (suggestions.length > 1) {
        const next = (suggestionIdx + 1) % suggestions.length
        setSuggestionIdx(next)
        setInput(suggestions[next])
      }
    } else if (e.key === "Escape") {
      setSuggestions([])
      setSuggestionIdx(-1)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    executeCommand(input)
  }

  if (isMinimized) {
    return (
      <div
        className="fixed bottom-6 right-6 bg-black/90 backdrop-blur-md border border-cyan-500/40 rounded-lg px-4 py-3 cursor-pointer z-50 hover:border-cyan-400 transition-all duration-300 shadow-[0_0_20px_rgba(0,255,255,0.1)]"
        onClick={() => setIsMinimized(false)}
      >
        <div className="flex items-center gap-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
          <TerminalIcon className="w-4 h-4 text-cyan-400" />
          <span className="text-cyan-400 text-sm font-mono">terminal</span>
        </div>
      </div>
    )
  }

  return (
    <div
      className={`
        bg-[#080810]/98 backdrop-blur-xl border border-emerald-900/60
        shadow-[0_0_40px_rgba(52,211,153,0.15),0_0_80px_rgba(0,255,255,0.05)]
        flex flex-col transition-all duration-300
        ${isMaximized
          ? "fixed inset-0 z-[9999] rounded-none"
          : "w-full md:w-[580px] h-[420px] rounded-xl overflow-hidden"
        }
      `}
      onClick={() => inputRef.current?.focus({ preventScroll: true })}
    >
      {/* Terminal title bar */}
      <div
        className="flex items-center justify-between px-4 py-2.5 bg-zinc-900/90 border-b border-emerald-900/30 flex-shrink-0 relative"
        style={{ zIndex: 1 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Traffic lights — hidden */}
        {/* <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500 opacity-70" />
          <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-70" />
          <div className="w-3 h-3 rounded-full bg-green-500 opacity-70" />
        </div> */}
        <div className="w-16" />

        {/* Title */}
        <div className="flex items-center gap-2 absolute left-1/2 -translate-x-1/2 pointer-events-none">
          <TerminalIcon className="w-3.5 h-3.5 text-zinc-500" />
          <span className="text-zinc-400 text-xs font-mono">@okechukwu-space:~</span>
        </div>

        <div className="w-16" />
      </div>

      {/* Tab bar — hidden */}
      {/* <div className="flex items-center gap-0 bg-zinc-950/80 border-b border-zinc-800/50 px-3 flex-shrink-0">
        <div className="px-3 py-1.5 text-xs font-mono text-cyan-400 border-b-2 border-cyan-500 bg-zinc-900/60">
          bash
        </div>
        <div className="px-3 py-1.5 text-xs font-mono text-zinc-600 hover:text-zinc-400 cursor-pointer transition-colors">
          +
        </div>
      </div> */}

      {/* Content */}
      <div ref={contentRef} className="p-4 flex-1 overflow-y-auto font-mono text-sm custom-scrollbar space-y-0">
        {history.map((item, i) => (
          <div key={i} className="mb-3 animate-[fadeIn_0.15s_ease]">
            <div className="flex items-baseline gap-1 text-sm">
              <span className="text-emerald-500 flex-shrink-0">okechukwu</span>
              <span className="text-zinc-600 flex-shrink-0">@portfolio</span>
              <span className="text-zinc-800 flex-shrink-0">:</span>
              <span className="text-cyan-500 flex-shrink-0">~</span>
              <ChevronRight className="w-3.5 h-3.5 text-green-400 flex-shrink-0 inline-block" />
              <span className="text-green-300 break-all">{item.input}</span>
              <span className="text-zinc-800 text-xs ml-auto flex-shrink-0 hidden sm:block">{item.timestamp}</span>
            </div>
            <div className="ml-5 mt-1.5 text-white">{item.output}</div>
          </div>
        ))}

        {/* Autocomplete suggestions */}
        {suggestions.length > 1 && (
          <div className="flex flex-wrap gap-2 mb-2 ml-5 text-xs">
            {suggestions.map((s, i) => (
              <span
                key={s}
                className={`font-mono px-1.5 py-0.5 rounded cursor-pointer transition-colors ${i === suggestionIdx ? "bg-cyan-900/60 text-cyan-300 border border-cyan-500/40" : "text-zinc-500 hover:text-zinc-300"}`}
                onClick={() => { setInput(s); setSuggestions([]); inputRef.current?.focus({ preventScroll: true }) }}
              >
                {s}
              </span>
            ))}
          </div>
        )}

        {/* Input line */}
        <form onSubmit={handleSubmit} className="flex items-baseline gap-1 text-sm">
          <span className="text-emerald-500 flex-shrink-0">okechukwu</span>
          <span className="text-zinc-600 flex-shrink-0">@portfolio</span>
          <span className="text-zinc-800 flex-shrink-0">:</span>
          <span className="text-cyan-500 flex-shrink-0">~</span>
          <ChevronRight className="w-3.5 h-3.5 text-green-400 flex-shrink-0 inline-block" />
          <div className="flex-1 flex items-baseline">
            <span className="text-green-300 break-all">{input}</span>
            <span
              className={`w-2 h-4 bg-green-400 ml-0.5 inline-block flex-shrink-0 ${cursorVisible ? "opacity-100" : "opacity-0"}`}
              style={{ transition: "opacity 0.1s" }}
            />
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => {
                setInput(e.target.value)
                updateSuggestions(e.target.value)
              }}
              onKeyDown={handleKeyDown}
              className="opacity-0 absolute w-0 h-0"
              autoFocus
              autoComplete="off"
              autoCorrect="off"
              spellCheck={false}
              aria-label="Terminal input"
            />
          </div>
        </form>
      </div>
    </div>
  )
}
