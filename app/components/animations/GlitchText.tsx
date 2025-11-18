'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface GlitchTextProps {
  text: string
  className?: string
}

export const GlitchText = ({ text, className = '' }: GlitchTextProps) => {
  const [isGlitching, setIsGlitching] = useState(false)

  const glitchVariants = {
    normal: { x: 0, y: 0, opacity: 1 },
    glitch1: { x: -2, y: 1, opacity: 0.8 },
    glitch2: { x: 2, y: -1, opacity: 0.8 },
  }

  return (
    <motion.span
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsGlitching(true)}
      onMouseLeave={() => setIsGlitching(false)}
    >
      <motion.span
        animate={isGlitching ? ['glitch1', 'glitch2', 'normal'] : 'normal'}
        variants={glitchVariants}
        transition={{ duration: 0.3, times: [0, 0.5, 1] }}
      >
        {text}
      </motion.span>
      {isGlitching && (
        <>
          <motion.span
            className="absolute inset-0 text-[#C778DD] opacity-70"
            initial={{ x: -2, y: 0 }}
            animate={{ x: [-2, 2, -2], y: [0, 1, 0] }}
            transition={{ duration: 0.2, repeat: 2 }}
          >
            {text}
          </motion.span>
          <motion.span
            className="absolute inset-0 text-cyan-400 opacity-70"
            initial={{ x: 2, y: 0 }}
            animate={{ x: [2, -2, 2], y: [0, -1, 0] }}
            transition={{ duration: 0.2, repeat: 2 }}
          >
            {text}
          </motion.span>
        </>
      )}
    </motion.span>
  )
}
