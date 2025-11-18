'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { CardData } from '../data/cardData'

interface CardItemProps {
  item: typeof CardData[0]
  index: number
}

const CardItem = ({ item, index }: CardItemProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 })
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [5, -5])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-5, 5])

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  return (
    <motion.article
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d'
      }}
      whileHover={{ 
        y: -12,
        scale: 1.02,
        boxShadow: '16px 16px 0px 0px rgba(199,120,221,0.3)',
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
          style={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.4 }}
        >
          <Image src={item.image} alt={`${item.title} preview`} width={600} height={420} className='h-full w-full object-cover' />
        </motion.div>
        <motion.div 
          className='pointer-events-none absolute left-4 top-4 inline-flex rounded-full border border-[#C778DD]/60 bg-[#1A1D24]/70 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.4em] text-[#C778DD] z-20'
          initial={{ scale: 1, y: 0 }}
          animate={isHovered ? { scale: 1.05, y: -2 } : { scale: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          featured
        </motion.div>
      </div>
      <div className='flex flex-1 flex-col gap-6 p-6'>
        <div className='space-y-3'>
          <p className='font-mono text-xs uppercase tracking-[0.3em] text-[#ABB2BF]'>{item.language}</p>
          <h3 className='text-2xl font-semibold'>{item.title}</h3>
          <p className='text-sm leading-relaxed text-[#BFC5D4]'>{item.description}</p>
        </div>
        <div className='mt-auto flex flex-wrap items-center gap-3 pt-2'>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href={item.link}
              className='inline-flex items-center gap-2 rounded-full border border-[#C778DD] bg-[#1A1D24] px-4 py-2 font-mono text-xs uppercase tracking-[0.3em] text-[#C778DD] transition-colors duration-200 hover:bg-[#C778DD] hover:text-[#08090C]'
            >
              live build <motion.span 
                className='text-base inline-block'
                animate={{ rotate: [0, 15, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
              >↗</motion.span>
            </Link>
          </motion.div>
          {item.github && (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href={item.github ||""}
                className='inline-flex items-center gap-2 rounded-full border border-[#2C2F36] bg-[#1A1D24] px-4 py-2 font-mono text-xs uppercase tracking-[0.3em] text-[#ABB2BF] transition-colors duration-200 hover:border-[#C778DD] hover:text-white'
              >
                repo <span className='text-base'>⌘</span>
              </Link>
            </motion.div>
          )}
        </div>
      </div>
      <motion.div 
        className='pointer-events-none absolute -right-6 bottom-6 h-14 w-14 rotate-[28deg] border border-dashed border-[#C778DD]/50'
        animate={isHovered ? { 
          rotate: [28, 38, 28],
          scale: [1, 1.1, 1]
        } : { rotate: 28, scale: 1 }}
        transition={{ duration: 0.5 }}
      />
    </motion.article>
  )
}

const Card = () => {
  return (
    <>
      {CardData.map((item, index) => (
        <CardItem key={index} item={item} index={index} />
      ))}
    </>
  )
}

export default Card