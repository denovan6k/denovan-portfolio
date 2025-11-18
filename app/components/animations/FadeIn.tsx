'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  className?: string
}

export const FadeIn = ({ 
  children, 
  delay = 0, 
  duration = 0.5,
  direction = 'up',
  className = ''
}: FadeInProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const directionOffset = {
    up: { y: 24, x: 0 },
    down: { y: -24, x: 0 },
    left: { y: 0, x: 24 },
    right: { y: 0, x: -24 },
    none: { y: 0, x: 0 }
  }

  const offset = directionOffset[direction]

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0,
        y: offset.y,
        x: offset.x
      }}
      animate={isInView ? { 
        opacity: 1,
        y: 0,
        x: 0
      } : {}}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
