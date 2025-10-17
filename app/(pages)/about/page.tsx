import React from 'react'
import Image from 'next/image'
import BreadCrumbs from '@/app/components/breadCrumbs'
import Headline from '@/app/components/headline'
import SkillCard from '@/app/components/skillCard'
import AboutText from '@/app/components/text/aboutText'

const About = () => {
  return (
    <div className='relative flex flex-col gap-16 w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-20 py-16 motion-preset-slide-up'>
      <section className='relative overflow-hidden rounded-[36px] border border-[#2C2F36] bg-[#13151D] px-6 py-12 text-white shadow-[12px_12px_0px_0px_rgba(199,120,221,0.18)] md:px-12'>
        <div className='pointer-events-none absolute inset-0'>
          <div className='absolute -left-16 top-10 h-48 w-48 rounded-full bg-[#C778DD]/18 blur-3xl' />
          <div className='absolute -bottom-24 right-[-6%] h-60 w-60 rotate-[18deg] rounded-[36px] border border-[#2C2F36]/70 bg-[#1A1D24]/70' />
        </div>
        <div className='relative z-10 flex flex-col gap-8 text-white'>
          <BreadCrumbs
            path='about me'
            description='Designer-engineer crafting expressive, neo-brutalist experiences that balance experimentation with dependable systems.'
            eyebrow='biography'
          />
          <div className='grid gap-6 md:grid-cols-[1fr_auto] md:items-end'>
            <p className='max-w-[580px] text-sm leading-relaxed text-[#C7CCD9] md:text-base'>
              My practice blends storytelling, motion, and product strategy. Over the past six years I’ve collaborated with founders, agencies, and product teams to build standout digital experiences.
            </p>
            <div className='inline-flex items-center gap-2 rounded-full border border-[#C778DD]/60 bg-[#1F1B25] px-4 py-2 font-mono text-xs uppercase tracking-[0.3em] text-[#C778DD] shadow-[6px_6px_0px_0px_rgba(199,120,221,0.3)]'>
              currently available for select projects
            </div>
          </div>
        </div>
      </section>

      <section className='relative overflow-hidden rounded-[32px] border border-[#2C2F36] bg-[#13151D] px-6 py-12 text-white shadow-[10px_10px_0px_0px_rgba(199,120,221,0.16)] md:px-12'>
        <div className='pointer-events-none absolute inset-0'>
          <div className='absolute -top-16 left-10 h-44 w-44 rounded-full bg-[#C778DD]/18 blur-2xl' />
          <div className='absolute -bottom-24 right-12 h-52 w-52 rounded-[32px] border border-[#2C2F36]/70 bg-[#1A1D24]/60' />
        </div>
        <div className='relative z-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center'>
          <AboutText />
          <div className='relative flex justify-center'>
            <div className='relative w-full max-w-[420px] overflow-hidden rounded-[32px] border border-[#2C2F36] bg-[#0F1118] p-8 shadow-[10px_10px_0px_0px_rgba(199,120,221,0.2)]'>
              <div className='absolute -left-8 top-10 h-14 w-14 border border-dashed border-[#C778DD]/50' />
              <div className='absolute -bottom-10 right-6 h-20 w-20 rounded-full border border-[#C778DD]/60 opacity-70' />
              <Image src='/assets/sqit.svg' alt='Retro abstract illustration' width={360} height={360} className='w-full' />
              <div className='mt-8 grid gap-2 rounded-2xl border border-[#2C2F36] bg-[#151821] p-4'>
                <p className='font-mono text-xs uppercase tracking-[0.32em] text-[#C778DD]'>focus areas</p>
                <p className='text-sm text-[#C7CCD9]'>Product design systems, immersive web storytelling, creative tooling, accessibility, and motion.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='relative overflow-hidden rounded-[32px] border border-[#2C2F36] bg-[#11131A] px-6 py-12 text-white shadow-[10px_10px_0px_0px_rgba(199,120,221,0.16)] md:px-12'>
        <div className='pointer-events-none absolute inset-0'>
          <div className='absolute -top-20 right-16 h-36 w-36 rounded-full border border-dashed border-[#C778DD]/50' />
          <div className='absolute -bottom-16 left-12 h-44 w-44 rounded-[28px] border border-[#2C2F36]/70 bg-[#1A1D24]/60' />
        </div>
        <div className='relative z-10 flex flex-col gap-10'>
          <Headline title='toolkit' subTitle='view capabilities' className='hidden md:flex bg-transparent' />
          <div className='grid gap-4 md:grid-cols-2 xl:grid-cols-3'>
            <SkillCard />
          </div>
        </div>
      </section>
    </div>
  )
}

export default About