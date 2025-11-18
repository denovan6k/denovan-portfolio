import React from 'react'
import Link from 'next/link'
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'

const words = `He shapes digital spaces where expressive aesthetics meet meticulous, user-centered systems.`

const HeroText = () => {
  return (
    <div className='space-y-6 md:space-y-8'>
      <div className='space-y-3'>
        <p className='font-mono text-xs uppercase tracking-[0.35em] text-[#ABB2BF]/70'>frontend engineer • product designer</p>
        <h1 className='text-4xl font-semibold leading-[1.05] text-white md:text-5xl lg:text-6xl'>
          Okechukwu builds <span className='underline decoration-[#C778DD] decoration-[8px] underline-offset-8'>distinctive web worlds</span> for future facing brands.
        </h1>
      </div>
      <div className='max-w-[560px] text-base leading-relaxed text-[#ABB2BF] md:text-lg'>
        <TextGenerateEffect duration={2} filter={false} words={words} className='text-[#ABB2BF] font-normal' />
      </div>
      <div className='flex flex-wrap items-center gap-4'>
        <Link href='/contact'>
          <HoverBorderGradient
            containerClassName='rounded-full border-[#C778DD]'
            as='button'
            className='rounded-full bg-[#282C33] px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition-colors duration-200 hover:text-white'
          >
            start a project
          </HoverBorderGradient>
        </Link>
        <Link
          href='/work'
          className='inline-flex items-center gap-2 rounded-full border border-[#C778DD]/60 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#C778DD] transition-colors duration-200 hover:bg-[#C778DD] hover:text-[#08090C]'
        >
          view work <span className='text-base'>↗</span>
        </Link>
      </div>
    </div>
  )
}

export default HeroText