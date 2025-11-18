'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { skillData } from '../data/skilldata'

interface SkillCardItemProps {
  item: typeof skillData[0]
  index: number
}

const SkillCardItem = ({ item, index }: SkillCardItemProps) => {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <motion.div
      key={index}
            initial={{ opacity: 0, y: 20, rotateX: -10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.08,
              ease: [0.21, 0.47, 0.32, 0.98]
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ 
              y: -8,
              scale: 1.02,
              borderColor: 'rgba(199, 120, 221, 0.8)',
              boxShadow: '12px 12px 0px 0px rgba(199,120,221,0.3)',
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.98 }}
            className='group relative flex flex-col gap-4 rounded-[20px] border border-[#2C2F36] bg-[#181A23] p-5 text-white shadow-[6px_6px_0px_0px_rgba(199,120,221,0.16)] cursor-pointer'
          >
          <div className='flex items-center justify-between gap-3'>
            <motion.h4 
              className='text-lg font-semibold truncate flex-1 min-w-0'
              animate={isHovered ? { x: 2, color: '#C778DD' } : { x: 0, color: '#FFFFFF' }}
              transition={{ duration: 0.2 }}
            >
              {item.title}
            </motion.h4>
            <motion.span 
              className='rounded-full border border-[#C778DD]/60 bg-[#222430] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.4em] text-[#C778DD] whitespace-nowrap flex-shrink-0'
              animate={isHovered ? { 
                scale: 1.05,
                backgroundColor: 'rgba(199, 120, 221, 0.2)',
                borderColor: 'rgba(199, 120, 221, 1)'
              } : { 
                scale: 1,
                backgroundColor: 'rgba(34, 36, 48, 1)',
                borderColor: 'rgba(199, 120, 221, 0.6)'
              }}
              transition={{ duration: 0.2 }}
            >
              stack
            </motion.span>
          </div>
          <motion.p 
            className='text-sm leading-relaxed text-[#BFC5D4]'
            animate={isHovered ? { x: 2 } : { x: 0 }}
            transition={{ duration: 0.2, delay: 0.05 }}
          >
            {item.description}
          </motion.p>
          <motion.div 
            className='pointer-events-none absolute -right-3 -top-3 h-12 w-12 rotate-[18deg] border border-dashed border-[#C778DD]/50'
            initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
            animate={isHovered ? { 
              opacity: 1, 
              scale: 1, 
              rotate: [18, 28, 18],
            } : { 
              opacity: 0, 
              scale: 0.8,
              rotate: 18
            }}
            transition={{ duration: 0.3 }}
          />
          {/* Animated corner accent */}
          <motion.div
        className='pointer-events-none absolute -left-2 -bottom-2 h-8 w-8 rounded-full bg-[#C778DD]/20 blur-xl'
        initial={{ opacity: 0, scale: 0 }}
        animate={isHovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}

const SkillCard = () => {
  return (
    <>
      {skillData.map((item, index) => (
        <SkillCardItem key={index} item={item} index={index} />
      ))}
    </>
  )
}

export default SkillCard