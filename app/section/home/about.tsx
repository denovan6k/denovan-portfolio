'use client'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Headline from '../../components/headline'

import Image from 'next/image'
import AboutText from '../../components/text/aboutText'

const About = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    })
  }, [])

  return (
    <section className='relative overflow-hidden rounded-[32px] border border-[#2C2F36] bg-[#13151D] px-6 py-12 text-white shadow-[10px_10px_0px_0px_rgba(199,120,221,0.16)] md:px-12' data-aos='fade-up'>
      <div className='pointer-events-none absolute inset-0'>
        <div className='absolute -left-10 top-6 h-36 w-36 rounded-full bg-[#C778DD]/20 blur-2xl' />
        <div className='absolute -bottom-24 right-0 h-44 w-44 rotate-[24deg] rounded-[28px] border border-[#2C2F36]/70 bg-[#1A1D24]/60' />
      </div>
      <div className='relative z-10 flex flex-col gap-10'>
        <Headline title='about' subTitle='read cv' className='hidden md:flex bg-transparent' />
        <div className='grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center'>
          <AboutText />
          <div className='relative flex justify-center'>
            <div className='relative w-full max-w-[420px] overflow-hidden rounded-[32px] border border-[#2C2F36] bg-[#0F1118] p-8 shadow-[10px_10px_0px_0px_rgba(199,120,221,0.2)]'>
              <div className='absolute -left-8 top-10 h-14 w-14 border border-dashed border-[#C778DD]/50' />
              <div className='absolute -bottom-10 right-6 h-20 w-20 rounded-full border border-[#C778DD]/60 opacity-70' />
              <Image src='/assets/sqit.svg' alt='Retro abstract illustration' width={360} height={360} className='w-full' />
              <div className='mt-8 grid gap-2 rounded-2xl border border-[#2C2F36] bg-[#151821] p-4'>
                <p className='font-mono text-xs uppercase tracking-[0.32em] text-[#C778DD]'>design philosophy</p>
                <p className='text-sm text-[#C7CCD9]'>Bold shapes, muted palettes, generous whitespace, and micro-interactions that feel tactile.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

