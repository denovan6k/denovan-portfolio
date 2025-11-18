'use client'

import React from 'react'
import Headline from '../../components/headline'
import CopyToClipboard from '@/components/ui/copy-to-clipboard'
import EditForm from '@/app/components/editForm'
import { FadeIn } from '../../components/animations/FadeIn'

const Contact = () => {
  return (
    <FadeIn duration={0.6} direction='up'>
      <section className='relative overflow-hidden rounded-[32px] border border-[#2C2F36] bg-[#11131A] px-6 py-12 text-white shadow-[10px_10px_0px_0px_rgba(199,120,221,0.16)] md:px-12'>
      <div className='pointer-events-none absolute inset-0'>
        <div className='absolute -left-12 bottom-10 h-48 w-48 rounded-[24px] border border-[#2C2F36]/70 bg-[#1A1D24]/70' />
        <div className='absolute -top-14 right-14 h-40 w-40 rounded-full bg-[#C778DD]/20 blur-2xl' />
      </div>
      <div className='relative z-10 flex flex-col gap-10'>
        <Headline title='contact' subTitle='say hello' className='hidden md:flex bg-transparent' />
        <div className='grid gap-10 lg:grid-cols-[0.85fr_1.15fr]'>
          <div className='space-y-6'>
            <p className='max-w-[440px] text-sm leading-relaxed text-[#ABB2BF] md:text-base'>
              Interested in partnerships, mentorship, design system builds, or a quick audit? I’m available for freelance collaborations and product design sprints.
            </p>
            <div className='rounded-[24px] border border-[#2C2F36] bg-[#181A23] p-6 shadow-[8px_8px_0px_0px_rgba(199,120,221,0.18)]'>
              <p className='font-mono text-xs uppercase tracking-[0.35em] text-[#C778DD]'>message me directly</p>
              <ul className='mt-6 space-y-4 text-[#C7CCD9]'>
                <li className='flex flex-col gap-2'>
                  <span className='text-sm uppercase tracking-[0.28em] text-[#ABB2BF]'>discord</span>
                  <span className='flex items-center gap-2 text-lg text-white'>
                    denovan6k
                    <CopyToClipboard text='denovan6k' />
                  </span>
                </li>
                <li className='flex flex-col gap-2'>
                  <span className='text-sm uppercase tracking-[0.28em] text-[#ABB2BF]'>email</span>
                  <span className='flex items-center gap-2 text-lg text-white'>
                    denovanrex@gmail.com
                    <CopyToClipboard text='denovanrex@gmail.com' />
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className='rounded-[24px] border border-[#2C2F36] bg-[#181A23] p-6 shadow-[8px_8px_0px_0px_rgba(199,120,221,0.18)]'>
            <div className='mb-6 space-y-2'>
              <p className='font-mono text-xs uppercase tracking-[0.35em] text-[#C778DD]'>send a note</p>
              <p className='text-sm text-[#ABB2BF]'>Drop a quick brief or introduction—let’s build something memorable.</p>
            </div>
            <EditForm />
          </div>
        </div>
      </div>
      </section>
    </FadeIn>
  )
}

export default Contact