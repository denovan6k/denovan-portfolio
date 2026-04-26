"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Home, User, Briefcase, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Check if the link is active
  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  // Scroll to section function for homepage
  const scrollToSection = (sectionId: string) => {
    setIsMobileMenuOpen(false)

    if (pathname !== "/") {
      // If not on homepage, navigate to homepage with hash
      window.location.href = `/#${sectionId}`
      return
    }

    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`
          fixed top-0 left-0 right-0 z-40 transition-all duration-300
          ${isScrolled ? "bg-black/80 backdrop-blur-md shadow-lg shadow-emerald-900/10" : "bg-transparent"}
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-white font-bold text-xl font-mono">
                <span className="text-cyan-400">&gt;</span> Denovan
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                <NavItem icon={<Home className="w-4 h-4 mr-1" />} text="HOME" path="/" isActive={isActive("/")} />
                <NavItem icon={<User className="w-4 h-4 mr-1" />} text="ABOUT" path="/about" isActive={isActive("/about")} />
                <NavItem
                  icon={<Briefcase className="w-4 h-4 mr-1" />}
                  text="PROJECTS"
                  path="/projects"
                  isActive={isActive("/projects")}
                />
                <NavItem
                  icon={<Send className="w-4 h-4 mr-1" />}
                  text="CONTACT"
                  path="/contact"
                  isActive={isActive("/contact")}
                />
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-emerald-900/20"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Background overlay */}
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md" onClick={() => setIsMobileMenuOpen(false)}></div>

          {/* Menu panel */}
          <div className="fixed inset-y-0 right-0 w-64 bg-zinc-900/90 border-l border-emerald-900/30 shadow-xl transform transition-all">
            {/* Close button */}
            <div className="p-4 flex justify-end">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-emerald-900/20"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            {/* Mobile menu items */}
            <div className="px-4 py-6 space-y-6">
                <MobileNavItem
                  icon={<Home className="w-5 h-5 mr-2" />}
                  text="HOME"
                  path="/"
                  isActive={isActive("/")}
                />
                <MobileNavItem
                  icon={<User className="w-5 h-5 mr-2" />}
                  text="ABOUT"
                  path="/about"
                  isActive={isActive("/about")}
                />
                <MobileNavItem
                  icon={<Briefcase className="w-5 h-5 mr-2" />}
                  text="PROJECTS"
                  path="/projects"
                  isActive={isActive("/projects")}
                />
                <MobileNavItem
                  icon={<Send className="w-5 h-5 mr-2" />}
                  text="CONTACT"
                  path="/contact"
                  isActive={isActive("/contact")}
                />
            </div>

            {/* Decorative elements */}
            <div className="absolute bottom-10 left-0 right-0 flex justify-center">
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent"></div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

// Desktop Navigation Item with Link
interface NavItemProps {
  icon: React.ReactNode
  text: string
  path: string
  isActive: boolean
}

function NavItem({ icon, text, path, isActive }: NavItemProps) {
  return (
    <Link
      href={path}
      className={`
        px-3 py-2 rounded-md text-sm font-medium flex items-center group transition-colors
        ${isActive ? "text-white" : "text-zinc-400 hover:text-white"}
      `}
    >
      {icon}
      {text}
      <div
        className={`h-px bg-gradient-to-r from-cyan-500 to-emerald-500 transition-all duration-300 mt-0.5 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
      ></div>
    </Link>
  )
}

// Desktop Navigation Item with Scroll
interface NavItemScrollProps {
  icon: React.ReactNode
  text: string
  sectionId: string
  onClick: (sectionId: string) => void
}

function NavItemScroll({ icon, text, sectionId, onClick }: NavItemScrollProps) {
  return (
    <button
      onClick={() => onClick(sectionId)}
      className="text-zinc-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center group transition-colors"
    >
      {icon}
      {text}
      <div className="h-px w-0 group-hover:w-full bg-gradient-to-r from-cyan-500 to-emerald-500 transition-all duration-300 mt-0.5"></div>
    </button>
  )
}

// Mobile Navigation Item with Link
function MobileNavItem({ icon, text, path, isActive }: NavItemProps) {
  return (
    <Link
      href={path}
      className={`
        flex items-center w-full py-2 px-3 rounded-md transition-colors
        ${isActive ? "text-white bg-emerald-900/30" : "text-zinc-400 hover:text-white hover:bg-emerald-900/20"}
      `}
    >
      {icon}
      <span className="font-medium">{text}</span>
    </Link>
  )
}

// Mobile Navigation Item with Scroll
function MobileNavItemScroll({ icon, text, sectionId, onClick }: NavItemScrollProps) {
  return (
    <button
      onClick={() => onClick(sectionId)}
      className="text-zinc-400 hover:text-white flex items-center w-full py-2 px-3 rounded-md hover:bg-emerald-900/20 transition-colors"
    >
      {icon}
      <span className="font-medium">{text}</span>
    </button>
  )
}
