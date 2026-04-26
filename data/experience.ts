export interface TimelineItem {
  company: string
  role: string
  period: string
  points: string[]
}

export interface Testimonial {
  quote: string
  author: string
  role: string
}

export const timeline: TimelineItem[] = [
  {
    company: "Luday",
    role: "Full Stack Developer",
    period: "Jan 2025 — Dec 2025",
    points: [
      "Developed a personalized AI story generator adapting tone and context per user input, improving session engagement by 20%.",
      "Built an AI-powered retrospective analysis tool leveraging LLM classification to identify bottlenecks, reducing triage time by 40%.",
      "Refactored a legacy ecommerce platform: implemented lazy loading, route-level code splitting, and TanStack Query, reducing load times by 35%.",
      "Enhanced a Kanban board with real-time WebSocket updates and optimistic UI patterns.",
    ],
  },
  {
    company: "SkillHat",
    role: "Frontend Team Lead",
    period: "Nov 2024 — Feb 2025",
    points: [
      "Led a distributed team of 5 frontend engineers building a subscription management app in Next.js, improving delivery speed by 30%.",
      "Prototyped an AI-assisted onboarding flow using the Vercel AI SDK to generate personalized course recommendations, reducing sign-up drop-off by 22%.",
      "Drove a 25% uplift in user engagement through mobile-first responsive design and Lighthouse-informed optimizations.",
      "Implemented compound component patterns and a custom React hooks library shared across 3 product areas.",
    ],
  },
  {
    company: "Freelance",
    role: "Frontend Engineer",
    period: "Jul 2020 — Feb 2024",
    points: [
      "Translated UI designs into mobile-friendly, accessible interfaces using Tailwind CSS, improving engagement metrics by 15%.",
      "Developed restaurant service applications integrating authentication and database management with Firebase, improving performance and security by 25%.",
      "Ensured multi-platform data integrity and cross-device interface compatibility.",
    ],
  },
  {
    company: "Analytix Hive",
    role: "Frontend Team Lead / Volunteer",
    period: "Feb 2025 — Present",
    points: [
      "Architected a scalable course delivery system with real-time rating aggregation, enrollment tracking, and AI integration.",
      "Built a shared React component library and relational database schema used across 4 internal products.",
    ],
  },
]

export const testimonials: Testimonial[] = [
  {
    quote:
      "Okechukwu's transition of our platform to agentic workflows completely transformed our product metrics. The reduction in triage time and boost in engagement was exactly what we needed.",
    author: "Technical Director",
    role: "Bestsales",
  },
  {
    quote:
      "A phenomenal team lead and engineer. Okechukwu successfully architected our onboarding flow using the Vercel AI SDK, which directly decreased our drop-off rates.",
    author: "Engineering Manager",
    role: "Denobyte",
  },
]
