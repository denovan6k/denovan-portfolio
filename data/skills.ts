export interface SkillCategory {
  title: string
  description: string
}

export interface SkillMeterEntry {
  name: string
  value: number
  color: string
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    description: "TypeScript, Python, Java, C",
  },
  {
    title: "AI & Agentic",
    description: "OpenAI API, Anthropic, LangChain, LangGraph, Vercel AI SDK, RAG, Tool-calling",
  },
  {
    title: "Frontend Stack",
    description: "React, Next.js, Remix, TanStack Start, Vue, Tailwind CSS, ShadCN UI",
  },
  {
    title: "Backend Core",
    description: "Node.js, Bun, Express.js, Hono, NestJS, Spring Boot, Better Auth",
  },
  {
    title: "Data & Storage",
    description: "MongoDB, Redis, Supabase, Prisma, AppWrite",
  },
  {
    title: "Automation Workflows",
    description: "n8n, Zapier, Playwright, Puppeteer, Webhook workflows",
  },
  {
    title: "DevOps",
    description: "Docker, Git, CI/CD, Vitest, Jest",
  },
]

export const skillMeters: SkillMeterEntry[] = [
  { name: "TypeScript", value: 94, color: "blue" },
  { name: "Next.js / React", value: 95, color: "cyan" },
  { name: "AI Orchestration", value: 92, color: "emerald" },
  { name: "Python", value: 90, color: "green" },
  { name: "Node.js / Hono", value: 93, color: "orange" },
  { name: "Java", value: 91, color: "pink" },
  { name: "Automation (n8n)", value: 90, color: "yellow" },
  { name: "Docker", value: 90, color: "red" },
]
