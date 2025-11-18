'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { SmallCardData } from '../data/smallData'

interface SmallCardItemProps {
  item: typeof SmallCardData[0]
  index: number
}

const SmallCardItem = ({ item, index }: SmallCardItemProps) => {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <motion.article
      key={index}
            initial={{ opacity: 0, y: 20, rotateY: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ 
              duration: 0.6, 
              delay: index * 0.1,
              ease: [0.21, 0.47, 0.32, 0.98]
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ 
              y: -10,
              scale: 1.02,
              boxShadow: '14px 14px 0px 0px rgba(199,120,221,0.28)',
              transition: { duration: 0.3 }
            }}
            className='group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-[#2C2F36] bg-[#161821] text-white shadow-[8px_8px_0px_0px_rgba(199,120,221,0.18)]'
          >
          <div className='relative overflow-hidden'>
            <motion.div 
              className='absolute inset-0 bg-gradient-to-tr from-[#C778DD]/10 via-transparent to-[#C778DD]/20 z-10'
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 0.3 : 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              style={{ scale: isHovered ? 1.12 : 1 }}
              transition={{ duration: 0.4 }}
            >
              <Image src={item.image} alt={`${item.title} preview`} width={720} height={480} className='h-full w-full object-cover' />
            </motion.div>
            <motion.div 
              className='pointer-events-none absolute left-4 top-4 inline-flex rounded-full border border-[#C778DD]/60 bg-[#1A1D24]/70 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.4em] text-[#C778DD] z-20'
              initial={{ scale: 1, rotate: 0 }}
              animate={isHovered ? { 
                scale: 1.08, 
                rotate: -2,
                backgroundColor: 'rgba(199, 120, 221, 0.25)'
              } : { 
                scale: 1, 
                rotate: 0,
                backgroundColor: 'rgba(26, 29, 36, 0.7)'
              }}
              transition={{ duration: 0.2 }}
            >
              design study
            </motion.div>
          </div>
          <div className='flex flex-1 flex-col gap-6 p-6'>
            <div className='space-y-3'>
              <motion.p 
                className='font-mono text-xs uppercase tracking-[0.3em] text-[#ABB2BF]'
                animate={isHovered ? { x: 2, color: '#C778DD' } : { x: 0, color: '#ABB2BF' }}
                transition={{ duration: 0.2 }}
              >
                {item.language}
              </motion.p>
              <motion.h3 
                className='text-2xl font-semibold'
                animate={isHovered ? { x: 2 } : { x: 0 }}
                transition={{ duration: 0.2, delay: 0.05 }}
              >
                {item.title}
              </motion.h3>
              <motion.p 
                className='text-sm leading-relaxed text-[#BFC5D4]'
                animate={isHovered ? { x: 2 } : { x: 0 }}
                transition={{ duration: 0.2, delay: 0.1 }}
              >
                {item.description}
              </motion.p>
            </div>
            <div className='mt-auto flex flex-wrap items-center gap-3 pt-2'>
              <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href={item.link}
                  className='inline-flex items-center gap-2 rounded-full border border-[#C778DD] bg-[#1A1D24] px-4 py-2 font-mono text-xs uppercase tracking-[0.3em] text-[#C778DD] transition-colors duration-200 hover:bg-[#C778DD] hover:text-[#08090C]'
                >
                  view case study <motion.span 
                    className='text-base inline-block'
                    animate={{ rotate: [0, 15, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
                  >↗</motion.span>
                </Link>
              </motion.div>
            </div>
          </div>
          <motion.div 
            className='pointer-events-none absolute -right-6 bottom-6 h-14 w-14 rotate-[28deg] border border-dashed border-[#C778DD]/50'
            animate={isHovered ? { 
          rotate: [28, 40, 28],
          scale: [1, 1.15, 1]
        } : { rotate: 28, scale: 1 }}
        transition={{ duration: 0.5 }}
      />
    </motion.article>
  )
}

const SmallCard = () => {
  return (
    <>
      {SmallCardData.map((item, index) => (
        <SmallCardItem key={index} item={item} index={index} />
      ))}
    </>
  )
}

export default SmallCard