export interface Project {
  title: string
  description: string
  tags: string[]
  image: string
  color: string
  category: string
  liveUrl: string
  githubUrl?: string
}

export const allProjects: Project[] = [
  {
    title: "LudaCards",
    description:
      "LudaCards is an agile SaaS platform that empowers teams to collaborate, plan, and manage workflows using interactive card-based agile boards — streamlining sprints and boosting team productivity.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "ShadCN", "Zustand"],
    image: "/assets/ludacards.png",
    color: "from-emerald-500 to-blue-500",
    category: "SaaS",
    liveUrl: "https://ludacards.com/",
  },
  {
    title: "Yodelt",
    description:
      "Yodelt is a forward-thinking IT company specializing in building scalable, robust enterprise software solutions — delivering end-to-end development tailored to the complex needs of modern businesses.",
    tags: ["Next.js", "TypeScript", "Node.js", "Tailwind CSS", "ShadCN", "PostgreSQL"],
    image: "/assets/yodelt.png",
    color: "from-cyan-500 to-blue-500",
    category: "Enterprise",
    liveUrl: "https://yodelt.com/",
  },
  {
    title: "Hives",
    description:
      "Hives is an innovative EdTech Learning Management System (LMS) empowering African learners and professionals with accessible, high-quality digital education and career-ready skills.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "ShadCN", "Tanstack Query", "Paystack"],
    image: "/assets/hiveafrica.png",
    color: "from-green-500 to-teal-500",
    category: "EdTech",
    liveUrl: "https://www.hives.africa/",
  },

  {
    title: "Rescue-it",
    description:
      "Rescue-it is a service platform which utilizes advanced technology for rebuilding and recovering data from crashed and physically damaged hard drives.",
    tags: ["Next.js", "TypeScript", "Next Intl i18n", "Tanstack Query", "ShadCN", "Tailwind CSS"],
    image: "/assets/rescue-it.svg",
    color: "from-red-500 to-orange-500",
    category: "Service",
    liveUrl: "https://rescue-it.se/",
  },
  {
    title: "Bestdealnaija",
    description:
      "Bestdealnaija is a comprehensive e-commerce platform that connects buyers and sellers, offering a wide range of products and services tailored to the Nigerian market.",
    tags: ["Next.js", "TypeScript", "Tanstack Query", "Node.js", "ShadCN", "Tailwind CSS"],
    image: "/assets/bestdealnaija.svg",
    color: "from-yellow-500 to-green-500",
    category: "E-commerce",
    liveUrl: "https://www.bestdealnaija.com/",
  },
  {
    title: "Renergy Hub",
    description:
      "Renergy Hub is an innovative Cleantech web platform designed to address Nigeria's persistent electric power challenges by empowering users to buy and sell renewable energy products.",
    tags: ["React Vite", "TypeScript", "Zustand", "Node.js", "ShadCN", "Tailwind CSS"],
    image: "/assets/renergy.svg",
    color: "from-emerald-500 to-cyan-500",
    category: "Cleantech",
    liveUrl: "https://www.renergyhub.com.ng/",
    githubUrl: "https://github.com/InternPulse/renergy-hub-frontend",
  },
  {
    title: "Bootcamp 2025",
    description: "Master data skills without pausing your career.",
    tags: ["Next.js", "TypeScript", "Axios", "Tanstack Query", "Paystack", "ShadCN", "Tailwind CSS"],
    image: "/assets/hiveafrica2025.svg",
    color: "from-orange-500 to-yellow-500",
    category: "EdTech",
    liveUrl: "https://hiveafrica2025.vercel.app/",
  },
  {
    title: "Devlinks",
    description:
      "Link sharing app with Authentication, CRUD functionality, each user can create links and share with real-time updates.",
    tags: ["Next.js", "TypeScript", "useContext", "Firebase", "ShadCN", "Tailwind CSS", "Zod"],
    image: "/assets/devlink.svg",
    color: "from-blue-500 to-indigo-500",
    category: "Productivity",
    liveUrl: "https://devlinks-silk-beta.vercel.app/",
    githubUrl: "https://github.com/denovan6k/Devlinks",
  },
  {
    title: "Frontend Quiz",
    description:
      "Test your Frontend knowledge with our interactive quiz application designed with robust error validation and real-time updates.",
    tags: ["Next.js", "TypeScript", "Zustand", "ShadCN", "Zod", "React Hook Form"],
    image: "/assets/webquiz.svg",
    color: "from-pink-500 to-emerald-500",
    category: "Education",
    liveUrl: "https://web-quiz-app-pearl.vercel.app/",
    githubUrl: "https://github.com/denovan6k/Web-Quiz-app",
  },
  {
    title: "Upgrade (UI)",
    description: "A Fintech Landing page with responsive design.",
    tags: ["Next.js", "TypeScript", "ShadCN"],
    image: "/assets/upgrade.svg",
    color: "from-violet-500 to-emerald-500",
    category: "Fintech",
    liveUrl: "https://fintechpearl.vercel.app/",
    githubUrl: "https://github.com/denovan6k/Fintech",
  },
  {
    title: "Vitalsync (UI)",
    description: "A health fitness app dashboard with responsive design.",
    tags: ["Next.js", "TypeScript", "Chakra", "ShadCN"],
    image: "/assets/healthcare.svg",
    color: "from-teal-500 to-green-500",
    category: "Health",
    liveUrl: "https://vitalsync.vercel.app/",
    githubUrl: "https://github.com/denovan6k/Vitalsync",
  },
  {
    title: "CoinMarketCap Clone",
    description: "A Crypto listing app with real-time cryptocurrency updates and conversions.",
    tags: ["Next.js", "TypeScript", "Tanstack Table", "ShadCN"],
    image: "/assets/coinmarket.svg",
    color: "from-yellow-500 to-orange-500",
    category: "Crypto",
    liveUrl: "https://coin-market-cap-ashen.vercel.app/",
    githubUrl: "https://github.com/denovan6k/CoinMarketCap",
  },
]

export const featuredProjects: Project[] = allProjects.slice(0, 4)

export const designStudies: Project[] = [
  {
    title: "La Paquest",
    description:
      "Experience luxury and comfort with our modern hotel website design, crafted on Figma to deliver a visually stunning and user-friendly interface.",
    tags: ["Figma"],
    image: "/assets/lapaquest.svg",
    color: "from-amber-500 to-orange-500",
    category: "Design",
    liveUrl: "https://www.behance.net/gallery/184463097/Real-estate-landing-page",
  },
  {
    title: "HousePot",
    description:
      "Explore a new way of buying and selling property with our agent-free real estate platform designed for simplicity and transparency.",
    tags: ["Figma"],
    image: "/assets/housepot.svg",
    color: "from-blue-500 to-cyan-500",
    category: "Design",
    liveUrl: "https://www.behance.net/gallery/180549315/Housepot-20-full",
  },
  {
    title: "InfiCare",
    description:
      "Designed a cutting-edge hospital management system on Figma, combining sleek visuals with user-centric features.",
    tags: ["Figma"],
    image: "/assets/hms.svg",
    color: "from-green-500 to-teal-500",
    category: "Design",
    liveUrl: "https://www.behance.net/gallery/184463097/Real-estate-landing-page",
  },
]
