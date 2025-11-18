import React from 'react'
import type { Metadata } from 'next'
import BreadCrumbs from '@/app/components/breadCrumbs'
import Headline from '@/app/components/headline'
import MainCard from '@/app/components/mainCard'
import SmallCard from '@/app/components/small'
import { FadeIn } from '@/app/components/animations/FadeIn'

export const metadata: Metadata = {
  title: 'Projects & Work - Denovan | Frontend Engineer & Product Designer',
  description: 'Explore a curated collection of web applications, design systems, and digital products crafted by Denovan. Featuring brutalist-inspired interfaces and immersive user experiences.',
  keywords: ['portfolio', 'web development', 'frontend engineer', 'product design', 'UI/UX', 'React', 'Next.js', 'design systems', 'Denovan projects'],
  authors: [{ name: 'Ogundu Okechukwu (Denovan)' }],
  openGraph: {
    title: 'Projects & Work - Denovan',
    description: 'A living archive of crafted products, design experiments, and collaborative builds.',
    url: 'https://denovanport.vercel.app/work',
    siteName: 'Denovan Portfolio',
    images: [
      {
        url: '/assets/og-work.png',
        width: 1200,
        height: 630,
        alt: 'Denovan Projects Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects & Work - Denovan',
    description: 'A living archive of crafted products, design experiments, and collaborative builds.',
    images: ['/assets/og-work.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

const Work = () => {
  return (
    <div className='relative flex flex-col gap-16 w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-20 py-16'>
      <FadeIn duration={0.6} direction='up'>
        <section className='relative overflow-hidden rounded-[36px] border border-[#2C2F36] bg-[#13151D] px-6 py-12 text-white shadow-[12px_12px_0px_0px_rgba(199,120,221,0.18)] md:px-12'>
        <div className='pointer-events-none absolute inset-0'>
          <div className='absolute -left-16 top-10 h-48 w-48 rounded-full bg-[#C778DD]/18 blur-3xl' />
          <div className='absolute -bottom-24 right-[-6%] h-60 w-60 rotate-[18deg] rounded-[36px] border border-[#2C2F36]/70 bg-[#1A1D24]/70' />
        </div>
        <div className='relative z-10 flex flex-col gap-8 text-white'>
          <BreadCrumbs path='projects' description='A living archive of crafted products, design experiments, and collaborative builds.' />
          <div className='grid gap-6 md:grid-cols-[1fr_auto] md:items-end'>
            <p className='max-w-[560px] text-sm leading-relaxed text-[#C7CCD9] md:text-base'>
              Each project is engineered with brutalist silhouettes, soft gradients, and interaction systems that scale. Here’s a curated snapshot of apps and product design pieces shaping my current practice.
            </p>
            <div className='inline-flex items-center gap-2 rounded-full border border-[#C778DD]/60 bg-[#1F1B25] px-4 py-2 font-mono text-xs uppercase tracking-[0.3em] text-[#C778DD] shadow-[6px_6px_0px_0px_rgba(199,120,221,0.3)]'>
              featured releases
            </div>
          </div>
        </div>
        </section>
      </FadeIn>

      <FadeIn duration={0.6} direction='up' delay={0.2}>
        <section className='relative overflow-hidden rounded-[32px] border border-[#2C2F36] bg-[#11131A] px-6 py-12 text-white shadow-[10px_10px_0px_0px_rgba(199,120,221,0.16)] md:px-12'>
        <div className='pointer-events-none absolute inset-0'>
          <div className='absolute -top-20 right-16 h-36 w-36 rounded-full border border-dashed border-[#C778DD]/50' />
          <div className='absolute -bottom-16 left-12 h-44 w-44 rounded-[28px] border border-[#2C2F36]/70 bg-[#1A1D24]/60' />
        </div>
        <div className='relative z-10 flex flex-col gap-10'>
          <Headline title='apps' subTitle='view live work' className='hidden md:flex bg-transparent' />
          <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
            <MainCard />
          </div>
        </div>
        </section>
      </FadeIn>

      <FadeIn duration={0.6} direction='up' delay={0.3}>
        <section className='relative overflow-hidden rounded-[32px] border border-[#2C2F36] bg-[#11131A] px-6 py-12 text-white shadow-[10px_10px_0px_0px_rgba(199,120,221,0.16)] md:px-12'>
        <div className='pointer-events-none absolute inset-0'>
          <div className='absolute -left-10 top-6 h-36 w-36 rounded-full bg-[#C778DD]/18 blur-2xl' />
          <div className='absolute -bottom-20 right-10 h-48 w-48 rounded-[28px] border border-[#2C2F36]/70 bg-[#1A1D24]/60' />
        </div>
        <div className='relative z-10 flex flex-col gap-10'>
          <Headline title='design studies' subTitle='view design drops' className='hidden md:flex bg-transparent' />
          <div className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
            <SmallCard />
          </div>
        </div>
        </section>
      </FadeIn>
    </div>
  )
}

export default Work