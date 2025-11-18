'use client'

import Headline from '../../components/headline'
import Image from 'next/image'
import AboutText from '../../components/text/aboutText'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FadeIn } from '../../components/animations/FadeIn'
import { ScaleIn } from '../../components/animations/ScaleIn'
import { FloatingElement } from '../../components/animations/FloatingElement'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [60, -60])
  const rotate = useTransform(scrollYProgress, [0, 1], [24, 34])

  return (
    <FadeIn duration={0.6} direction='up'>
      <section ref={ref} className='relative overflow-hidden rounded-[32px] border border-[#2C2F36] bg-[#13151D] px-6 py-12 text-white shadow-[10px_10px_0px_0px_rgba(199,120,221,0.16)] md:px-12'>
      <div className='pointer-events-none absolute inset-0'>
        <FloatingElement duration={6} yOffset={18}>
          <div className='absolute -left-10 top-6 h-36 w-36 rounded-full bg-[#C778DD]/20 blur-2xl' />
        </FloatingElement>
        <motion.div 
          style={{ y, rotate }}
          className='absolute -bottom-24 right-0 h-44 w-44 rounded-[28px] border border-[#2C2F36]/70 bg-[#1A1D24]/60' 
        />
      </div>
      <div className='relative z-10 flex flex-col gap-10'>
        <Headline title='about' subTitle='read cv' className='hidden md:flex bg-transparent' />
        <div className='grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center'>
          <AboutText />
          <ScaleIn delay={0.2} duration={0.6}>
            <motion.div 
              className='relative flex justify-center'
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className='relative w-full max-w-[420px] overflow-hidden rounded-[32px] border border-[#2C2F36] bg-[#0F1118] p-8 shadow-[10px_10px_0px_0px_rgba(199,120,221,0.2)]'>
                <FloatingElement duration={4} yOffset={12} delay={0.5}>
                  <div className='absolute -left-8 top-10 h-14 w-14 border border-dashed border-[#C778DD]/50' />
                </FloatingElement>
                <FloatingElement duration={5} yOffset={15} delay={1}>
                  <div className='absolute -bottom-10 right-6 h-20 w-20 rounded-full border border-[#C778DD]/60 opacity-70' />
                </FloatingElement>
                <motion.div
                  whileHover={{ rotate: -3, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image src='/assets/sqit.svg' alt='Retro abstract illustration' width={360} height={360} className='w-full' />
                </motion.div>
                <motion.div 
                  className='mt-8 grid gap-2 rounded-2xl border border-[#2C2F36] bg-[#151821] p-4'
                  whileHover={{ 
                    borderColor: 'rgba(199, 120, 221, 0.6)',
                    backgroundColor: 'rgba(199, 120, 221, 0.05)',
                    boxShadow: '0 0 20px rgba(199, 120, 221, 0.15)'
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <p className='font-mono text-xs uppercase tracking-[0.32em] text-[#C778DD]'>design philosophy</p>
                  <p className='text-sm text-[#C7CCD9]'>Bold shapes, muted palettes, generous whitespace, and micro-interactions that feel tactile.</p>
                </motion.div>
              </div>
            </motion.div>
          </ScaleIn>
        </div>
      </div>
      </section>
    </FadeIn>
  )
}

export default About

