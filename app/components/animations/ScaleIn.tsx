'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, ReactNode } from 'react'

interface ScaleInProps {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
}

export const ScaleIn = ({ 
  children, 
  delay = 0, 
  duration = 0.4,
  className = ''
}: ScaleInProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0,
        scale: 0.95
      }}
      animate={isInView ? { 
        opacity: 1,
        scale: 1
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
