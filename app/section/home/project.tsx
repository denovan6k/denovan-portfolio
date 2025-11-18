'use client'

import Headline from '../../components/headline'
import Card from '../../components/card'
import { FadeIn } from '../../components/animations/FadeIn'

const Project = () => {
  return (
    <FadeIn duration={0.6} direction='up'>
      <section className='relative overflow-hidden rounded-[32px] border border-[#2C2F36] bg-[#12131A] px-6 py-12 text-white shadow-[10px_10px_0px_0px_rgba(199,120,221,0.16)] md:px-12'>
      <div className='pointer-events-none absolute inset-0'>
        <div className='absolute -right-16 top-10 h-40 w-40 rounded-full border border-dashed border-[#C778DD]/50' />
        <div className='absolute -bottom-20 left-10 h-56 w-56 rounded-[32px] border border-[#2C2F36]/70 bg-[#1A1D24]/60' />
      </div>
      <div className='relative z-10 flex flex-col gap-10'>
        <div className='flex flex-col gap-6 md:flex-row md:items-end md:justify-between'>
          <div className='space-y-4'>
            <Headline title='projects' subTitle='view archive' className='hidden md:flex bg-transparent' />
            <p className='max-w-[520px] text-sm leading-relaxed text-[#ABB2BF] md:text-base'>
              A curated mix of product builds, design systems, and interface experiments engineered with obsessive detail. 
            </p>
            {/* and a neo-brutalist aura. */}
          </div>
          <div className='inline-flex items-center gap-2 self-start rounded-full border border-[#C778DD]/60 bg-[#1A1D24] px-4 py-2 font-mono text-xs uppercase tracking-[0.3em] text-[#C778DD] md:self-auto'>
            featured drops
          </div>
        </div>
        <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
          <Card />
        </div>
      </div>
      </section>
    </FadeIn>
  )
}

export default Project