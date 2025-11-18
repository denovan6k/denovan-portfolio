'use client'

import React from 'react'
import Headline from '../../components/headline'
import SkillCard from '../../components/skillCard'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FadeIn } from '../../components/animations/FadeIn'
import { ScaleIn } from '../../components/animations/ScaleIn'
import { FloatingElement } from '../../components/animations/FloatingElement'
import { useRef } from 'react'

const Skill = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <FadeIn duration={0.6} direction='up'>
      <section ref={ref} className='relative overflow-hidden rounded-[32px] border border-[#2C2F36] bg-[#11131A] px-6 py-12 text-white shadow-[10px_10px_0px_0px_rgba(199,120,221,0.16)] md:px-12'>
      <div className='pointer-events-none absolute inset-0'>
        <FloatingElement duration={5} yOffset={20}>
          <div className='absolute -top-10 left-4 h-28 w-28 rounded-full bg-[#C778DD]/20 blur-2xl' />
        </FloatingElement>
        <motion.div 
          style={{ y }}
          className='absolute -bottom-24 right-12 h-52 w-52 rounded-[32px] border border-[#2C2F36]/60 bg-[#1A1D24]/70' 
        />
      </div>
      <div className='relative z-10 flex flex-col gap-10'>
        <div className='flex flex-col gap-6 md:flex-row md:items-center md:justify-between'>
          <Headline title='skills' className='hidden md:flex bg-transparent' />
          <p className='max-w-[520px] text-sm leading-relaxed text-[#ABB2BF] md:text-base'>
            An evolving toolkit shaped by storytelling, motion, and systems thinking—balancing experimental aesthetics with dependable engineering.
          </p>
        </div>
        <div className='grid gap-10 lg:grid-cols-[0.85fr_1.15fr]'>
          <ScaleIn delay={0.2} duration={0.6}>
            <motion.div 
              className='relative flex items-center justify-center'
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className='relative w-full max-w-[360px] rounded-[28px] border border-[#2C2F36] bg-[#181A22] p-8 shadow-[8px_8px_0px_0px_rgba(199,120,221,0.2)]'>
                <FloatingElement duration={3.5} yOffset={10} delay={0.3}>
                  <div className='absolute -left-6 top-6 h-12 w-12 rounded-full border border-[#C778DD]/60' />
                </FloatingElement>
                <FloatingElement duration={4.5} yOffset={12} delay={0.8}>
                  <div className='absolute -bottom-8 right-6 h-16 w-16 border border-dashed border-[#C778DD]/50' />
                </FloatingElement>
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image src='/assets/squiggle.svg' alt='Hand-drawn squiggle accent' width={320} height={320} className='w-full' />
                </motion.div>
                <motion.div 
                  className='mt-6 space-y-2'
                  whileHover={{ 
                    backgroundColor: 'rgba(199, 120, 221, 0.05)',
                    borderRadius: '12px',
                    padding: '8px'
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <p className='font-mono text-xs uppercase tracking-[0.3em] text-[#C778DD]'>design x code</p>
                  <p className='text-base text-[#ABB2BF]'>Where brutalist edges collide with buttery interactions.</p>
                </motion.div>
              </div>
            </motion.div>
          </ScaleIn>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3'>
            <SkillCard />
          </div>
        </div>
      </div>
      </section>
    </FadeIn>
  )
}

export default Skill