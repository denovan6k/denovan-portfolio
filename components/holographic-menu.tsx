"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Home, User, Briefcase, Code, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HolographicMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Toggle button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-6 right-6 z-50 bg-black/20 backdrop-blur-md border border-emerald-900/30 text-white hover:bg-emerald-950/30"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>

      {/* Holographic menu */}
      <div
        className={`fixed inset-y-0 right-0 z-40 w-64 bg-black/40 backdrop-blur-xl border-l border-emerald-900/30 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Holographic effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-blue-500/5 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5 pointer-events-none"></div>

        {/* Menu content */}
        <div className="flex flex-col h-full justify-center p-6 relative">
          <nav className="space-y-6">
            <MenuItem icon={<Home />} text="HOME" href="#" />
            <MenuItem icon={<User />} text="ABOUT" href="#" />
            <MenuItem icon={<Briefcase />} text="PROJECTS" href="#" />
            <MenuItem icon={<Code />} text="SKILLS" href="#" />
            <MenuItem icon={<Send />} text="CONTACT" href="#" />
          </nav>

          {/* Decorative elements */}
          <div className="absolute top-10 left-6 w-12 h-12 border border-cyan-500/30 rounded-full flex items-center justify-center">
            <div className="w-8 h-8 bg-cyan-500/10 rounded-full animate-pulse"></div>
          </div>

          <div className="absolute bottom-10 right-6 w-16 h-16 border border-emerald-500/30 rounded-full flex items-center justify-center">
            <div className="w-10 h-10 bg-emerald-500/10 rounded-full animate-pulse-slow"></div>
          </div>
        </div>
      </div>

      {/* Overlay for closing menu on mobile */}
      {isOpen && (
        <div className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm md:hidden" onClick={() => setIsOpen(false)} />
      )}
    </>
  )
}

interface MenuItemProps {
  icon: React.ReactNode
  text: string
  href: string
}

function MenuItem({ icon, text, href }: MenuItemProps) {
  return (
    <Link href={href} className="flex items-center space-x-3 text-zinc-400 hover:text-white group transition-colors">
      <div className="p-2 rounded-md bg-zinc-800/50 group-hover:bg-emerald-900/30 transition-colors">{icon}</div>
      <span className="font-medium tracking-wider">{text}</span>
      <div className="h-px flex-grow bg-gradient-to-r from-emerald-500/30 to-transparent max-w-16 opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </Link>
  )
}
