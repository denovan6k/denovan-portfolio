'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface RevealTextProps {
  text: string
  className?: string
  delay?: number
}

export const RevealText = ({ text, className = '', delay = 0 }: RevealTextProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  
  const words = text.split(' ')

  return (
    <motion.span ref={ref} className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
          animate={isInView ? { 
            opacity: 1, 
            y: 0,
            filter: 'blur(0px)'
          } : {}}
          transition={{
            duration: 0.5,
            delay: delay + i * 0.05,
            ease: [0.21, 0.47, 0.32, 0.98]
          }}
          style={{ display: 'inline-block', marginRight: '0.25em' }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  )
}
