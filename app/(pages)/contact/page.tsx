import React from 'react'
import type { Metadata } from 'next'
import BreadCrumbs from '@/app/components/breadCrumbs'
import EditForm from '@/app/components/editForm'
import Headline from '@/app/components/headline'
import CopyToClipboard from '@/components/ui/copy-to-clipboard'
import { FadeIn } from '@/app/components/animations/FadeIn'

export const metadata: Metadata = {
  title: 'Contact - Denovan | Let\'s Build Something Memorable',
  description: 'Get in touch with Denovan for freelance partnerships, design system consulting, and creative technology engagements. Available for select projects and collaborations.',
  keywords: ['contact Denovan', 'hire frontend engineer', 'freelance developer', 'design system consultant', 'web development services', 'product design services', 'collaboration'],
  authors: [{ name: 'Ogundu Okechukwu (Denovan)' }],
  openGraph: {
    title: 'Contact Denovan - Available for Collaborations',
    description: 'Let\'s prototype ideas, refine digital products, or build interaction systems that feel like art direction in motion.',
    url: 'https://denovanport.vercel.app/contact',
    siteName: 'Denovan Portfolio',
    images: [
      {
        url: '/assets/og-contact.png',
        width: 1200,
        height: 630,
        alt: 'Contact Denovan',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Denovan - Available for Collaborations',
    description: 'Let\'s prototype ideas, refine digital products, or build interaction systems that feel like art direction in motion.',
    images: ['/assets/og-contact.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

const Contact = () => {
  return (
    <div className='relative flex flex-col gap-16 w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-20 py-16'>
      <FadeIn duration={0.6} direction='up'>
        <section className='relative overflow-hidden rounded-[36px] border border-[#2C2F36] bg-[#13151D] px-6 py-12 text-white shadow-[12px_12px_0px_0px_rgba(199,120,221,0.18)] md:px-12'>
        <div className='pointer-events-none absolute inset-0'>
          <div className='absolute -left-16 top-10 h-48 w-48 rounded-full bg-[#C778DD]/18 blur-3xl' />
          <div className='absolute -bottom-24 right-[-6%] h-60 w-60 rotate-[18deg] rounded-[36px] border border-[#2C2F36]/70 bg-[#1A1D24]/70' />
        </div>
        <div className='relative z-10 flex flex-col gap-8 text-white'>
          <BreadCrumbs
            path='contact'
            description='Let’s prototype ideas, refine digital products, or build interaction systems that feel like art direction in motion.'
            eyebrow='collaborations'
          />
          <p className='max-w-[580px] text-sm leading-relaxed text-[#C7CCD9] md:text-base'>
            Open to freelance partnerships, design system consulting, and creative technology engagements. Share a quick brief and I’ll reply within 48 hours.
          </p>
        </div>
        </section>
      </FadeIn>

      <FadeIn duration={0.6} direction='up' delay={0.2}>
        <section className='relative overflow-hidden rounded-[32px] border border-[#2C2F36] bg-[#11131A] px-6 py-12 text-white shadow-[10px_10px_0px_0px_rgba(199,120,221,0.16)] md:px-12'>
        <div className='pointer-events-none absolute inset-0'>
          <div className='absolute -top-14 right-16 h-36 w-36 rounded-full border border-dashed border-[#C778DD]/50' />
          <div className='absolute -bottom-20 left-10 h-48 w-48 rounded-[28px] border border-[#2C2F36]/70 bg-[#1A1D24]/60' />
        </div>
        <div className='relative z-10 grid gap-12 lg:grid-cols-[0.85fr_1.15fr]'>
          <div className='space-y-6'>
            <Headline title='reach out' subTitle='book a call' className='hidden md:flex bg-transparent' />
            <div className='rounded-[24px] border border-[#2C2F36] bg-[#181A23] p-6 shadow-[8px_8px_0px_0px_rgba(199,120,221,0.18)]'>
              <p className='font-mono text-xs uppercase tracking-[0.35em] text-[#C778DD]'>direct lines</p>
              <ul className='mt-6 space-y-5 text-[#C7CCD9]'>
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
              <p className='text-sm text-[#ABB2BF]'>Tell me about the project, timelines, or the problem we’re solving together.</p>
            </div>
            <EditForm />
          </div>
        </div>
        </section>
      </FadeIn>
    </div>
  )
}

export default Contact