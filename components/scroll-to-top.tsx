"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function ScrollToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  if (!show) return null

  return (
    <Button
      aria-label="Scroll to top"
      variant="outline"
      size="icon"
      className="fixed bottom-5 right-5 z-30 border-cyan-500/50 text-cyan-300 bg-black/50 backdrop-blur hover:bg-cyan-950/40"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <ArrowUp className="h-5 w-5" />
    </Button>
  )
}
