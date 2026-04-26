import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "sonner"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Denovan - AI Engineer & Software Engineer | Agentic Web Experiences",
  description:
    "Ogundu Okechukwu (Denovan) — Frontend Engineer & Product Designer crafting expressive web products that live between experimental aesthetics and obsessive usability.",
  keywords: [
    "Frontend Engineer",
    "Product Designer",
    "Next.js",
    "TypeScript",
    "React",
    "UI/UX",
    "Denovan",
    "Ogundu Okechukwu",
  ],
  authors: [{ name: "Ogundu Okechukwu", url: "https://denovan.dev" }],
  creator: "@denovan6k",
  openGraph: {
    title: "Denovan - AI Engineer & Software Engineer | Agentic Web Experiences",
    description:
      "Crafting expressive web products that live between experimental aesthetics and obsessive usability.",
    type: "website",
    images: ["/assets/og-home.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Denovan - AI Engineer & Software Engineer",
    description:
      "Crafting expressive web products that live between experimental aesthetics and obsessive usability.",
    creator: "@denovan6k",
    images: ["/assets/og-home.png"],
  },
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-black text-white">
        {children}
        <Toaster richColors position="top-right" />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
