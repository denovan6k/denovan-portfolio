'use client'

import React from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import HeroText from '../../components/text/herotext'
import { FadeIn } from '../../components/animations/FadeIn'
import { ScaleIn } from '../../components/animations/ScaleIn'
import { FloatingElement } from '../../components/animations/FloatingElement'
import { useRef } from 'react'

const Hero = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 100])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <FadeIn duration={0.6} className='w-full'>
      <section ref={ref} className='relative overflow-hidden rounded-[40px] border border-[#2C2F36] bg-[#13151C] px-6 py-12 text-white shadow-[12px_12px_0px_0px_rgba(199,120,221,0.18)] md:px-12'>
      <motion.div style={{ opacity }} className='pointer-events-none absolute inset-0'>
        <FloatingElement duration={4} yOffset={15}>
          <div className='absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[#C778DD]/25 blur-3xl' />
        </FloatingElement>
        <motion.div 
          style={{ y }}
          className='absolute -bottom-32 right-[-10%] h-[420px] w-[420px] rotate-[18deg] rounded-[120px] border border-[#2C2F36]/70 bg-gradient-to-tr from-[#11141A] via-[#222430] to-[#C778DD]/20' 
        />
        <div className='absolute inset-x-10 bottom-0 h-32 bg-gradient-to-t from-[#08090C] via-transparent' />
      </motion.div>
      <div className='relative z-10 grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr]'>
        <div className='space-y-10'>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className='inline-flex items-center gap-3 rounded-full border border-[#C778DD] bg-[#1F1B25] px-4 py-2 font-mono text-xs uppercase tracking-[0.3em] text-[#C778DD] shadow-[6px_6px_0px_0px_rgba(199,120,221,0.3)]'
          >
            currently open for collaboration
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <HeroText />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
            className='grid grid-cols-2 gap-4 pt-4 sm:max-w-[420px]'
          >
            <motion.div 
              whileHover={{ 
                y: -6, 
                scale: 1.02,
                boxShadow: '8px 8px 0px 0px rgba(199,120,221,0.35)',
                transition: { duration: 0.2 } 
              }}
              whileTap={{ scale: 0.98 }}
              className='rounded-2xl border border-[#2C2F36] bg-[#151821] p-4 shadow-[4px_4px_0px_0px_rgba(199,120,221,0.22)] cursor-pointer'
            >
              <motion.p 
                className='text-3xl font-semibold'
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1, color: '#C778DD' }}
                transition={{ duration: 0.2 }}
              >
                6+
              </motion.p>
              <p className='pt-2 text-xs font-mono uppercase tracking-[0.28em] text-[#ABB2BF]'>years crafting products</p>
            </motion.div>
            <motion.div 
              whileHover={{ 
                y: -6, 
                scale: 1.02,
                boxShadow: '8px 8px 0px 0px rgba(199,120,221,0.35)',
                transition: { duration: 0.2 } 
              }}
              whileTap={{ scale: 0.98 }}
              className='rounded-2xl border border-[#2C2F36] bg-[#151821] p-4 shadow-[4px_4px_0px_0px_rgba(199,120,221,0.22)] cursor-pointer'
            >
              <motion.p 
                className='text-3xl font-semibold'
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1, color: '#C778DD' }}
                transition={{ duration: 0.2 }}
              >
                18
              </motion.p>
              <p className='pt-2 text-xs font-mono uppercase tracking-[0.28em] text-[#ABB2BF]'>shipped case studies</p>
            </motion.div>
          </motion.div>
        </div>
        <ScaleIn delay={0.4} duration={0.7}>
          <motion.div 
            className='relative flex w-full justify-center'
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className='relative w-full max-w-[420px] overflow-hidden rounded-[36px] border border-[#2C2F36] bg-[#0D0E13] p-6 shadow-[12px_12px_0px_0px_rgba(199,120,221,0.24)]'>
              <FloatingElement duration={3} yOffset={8} delay={0.5}>
                <div className='absolute -left-6 -top-6 h-12 w-12 rounded-full border border-[#C778DD] bg-[#1F1B25]' />
              </FloatingElement>
              <FloatingElement duration={4} yOffset={12} delay={1}>
                <div className='absolute -bottom-8 -right-6 h-20 w-20 rotate-[22deg] border border-dashed border-[#C778DD]/60' />
              </FloatingElement>
              <motion.div
                whileHover={{ scale: 1.05, rotate: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src='/assets/laptop.svg'
                  alt='Illustration of Denovan crafting digital experiences on a laptop'
                  width={420}
                  height={420}
                  className='w-full'
                  priority
                />
              </motion.div>
              <motion.div 
                className='mt-6 grid gap-2 rounded-2xl border border-[#2C2F36] bg-[#13161D] p-4'
                whileHover={{ 
                  borderColor: 'rgba(199, 120, 221, 0.6)',
                  boxShadow: '0 0 20px rgba(199, 120, 221, 0.2)'
                }}
                transition={{ duration: 0.2 }}
              >
                <p className='font-mono text-xs uppercase tracking-[0.28em] text-[#C778DD]'>now crafting</p>
                <p className='text-lg text-white'>Retro futuristic product journeys</p>
              </motion.div>
            </div>
          </motion.div>
        </ScaleIn>
      </div>
      </section>
    </FadeIn>
  )
}

export default Hero