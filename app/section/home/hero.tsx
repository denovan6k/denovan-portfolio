import React from 'react'
import Image from 'next/image'
import HeroText from '../../components/text/herotext'

const Hero = () => {
  return (
    <section className='relative overflow-hidden rounded-[40px] border border-[#2C2F36] bg-[#13151C] px-6 py-12 text-white shadow-[12px_12px_0px_0px_rgba(199,120,221,0.18)] motion-preset-slide-up md:px-12'>
      <div className='pointer-events-none absolute inset-0'>
        <div className='absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[#C778DD]/25 blur-3xl' />
        <div className='absolute -bottom-32 right-[-10%] h-[420px] w-[420px] rotate-[18deg] rounded-[120px] border border-[#2C2F36]/70 bg-gradient-to-tr from-[#11141A] via-[#222430] to-[#C778DD]/20' />
        <div className='absolute inset-x-10 bottom-0 h-32 bg-gradient-to-t from-[#08090C] via-transparent' />
      </div>
      <div className='relative z-10 grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr]'>
        <div className='space-y-10'>
          <div className='inline-flex items-center gap-3 rounded-full border border-[#C778DD] bg-[#1F1B25] px-4 py-2 font-mono text-xs uppercase tracking-[0.3em] text-[#C778DD] shadow-[6px_6px_0px_0px_rgba(199,120,221,0.3)]'>
            currently open for collaboration
          </div>
          <HeroText />
          <div className='grid grid-cols-2 gap-4 pt-4 sm:max-w-[420px]'>
            <div className='rounded-2xl border border-[#2C2F36] bg-[#151821] p-4 shadow-[4px_4px_0px_0px_rgba(199,120,221,0.22)]'>
              <p className='text-3xl font-semibold'>6+</p>
              <p className='pt-2 text-xs font-mono uppercase tracking-[0.28em] text-[#ABB2BF]'>years crafting products</p>
            </div>
            <div className='rounded-2xl border border-[#2C2F36] bg-[#151821] p-4 shadow-[4px_4px_0px_0px_rgba(199,120,221,0.22)]'>
              <p className='text-3xl font-semibold'>18</p>
              <p className='pt-2 text-xs font-mono uppercase tracking-[0.28em] text-[#ABB2BF]'>shipped case studies</p>
            </div>
          </div>
        </div>
        <div className='relative flex w-full justify-center'>
          <div className='relative w-full max-w-[420px] overflow-hidden rounded-[36px] border border-[#2C2F36] bg-[#0D0E13] p-6 shadow-[12px_12px_0px_0px_rgba(199,120,221,0.24)]'>
            <div className='absolute -left-6 -top-6 h-12 w-12 rounded-full border border-[#C778DD] bg-[#1F1B25]' />
            <div className='absolute -bottom-8 -right-6 h-20 w-20 rotate-[22deg] border border-dashed border-[#C778DD]/60' />
            <Image
              src='/assets/laptop.svg'
              alt='Illustration of Denovan crafting digital experiences on a laptop'
              width={420}
              height={420}
              className='w-full'
              priority
            />
            <div className='mt-6 grid gap-2 rounded-2xl border border-[#2C2F36] bg-[#13161D] p-4'>
              <p className='font-mono text-xs uppercase tracking-[0.28em] text-[#C778DD]'>now crafting</p>
              <p className='text-lg text-white'>Retro futuristic product journeys</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero