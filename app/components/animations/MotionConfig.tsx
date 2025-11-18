'use client'

import { MotionConfig as FramerMotionConfig } from 'framer-motion'
import { ReactNode } from 'react'

interface MotionConfigProps {
  children: ReactNode
}

/**
 * Global motion configuration wrapper
 * Automatically respects user's reduced motion preferences
 */
export const MotionConfig = ({ children }: MotionConfigProps) => {
  return (
    <FramerMotionConfig reducedMotion="user">
      {children}
    </FramerMotionConfig>
  )
}
