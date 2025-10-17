'use client'
import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { CardData } from '../data/cardData'

const MainCard = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    })
  }, [])

  return (
    <>
      {CardData.map((item, index) => (
        <article
          key={index}
          className='group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-[#2C2F36] bg-[#161821] text-white shadow-[8px_8px_0px_0px_rgba(199,120,221,0.18)] transition duration-300 hover:-translate-y-2 hover:shadow-[16px_16px_0px_0px_rgba(199,120,221,0.25)]'
          data-aos='fade-up'
        >
          <div className='relative overflow-hidden'>
            <div className='absolute inset-0 bg-gradient-to-tr from-[#10121A] via-transparent to-[#C778DD]/30 opacity-0 transition-opacity duration-300 group-hover:opacity-60' />
            <Image src={item.image} alt={`${item.title} preview`} width={720} height={480} className='h-full w-full object-cover' />
            <div className='pointer-events-none absolute left-4 top-4 inline-flex rounded-full border border-[#C778DD]/60 bg-[#1A1D24]/70 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.4em] text-[#C778DD]'>
              product build
            </div>
          </div>
          <div className='flex flex-1 flex-col gap-6 p-6'>
            <div className='space-y-3'>
              <p className='font-mono text-xs uppercase tracking-[0.3em] text-[#ABB2BF]'>{item.language}</p>
              <h3 className='text-2xl font-semibold'>{item.title}</h3>
              <p className='text-sm leading-relaxed text-[#BFC5D4]'>{item.description}</p>
            </div>
            <div className='mt-auto flex flex-wrap items-center gap-3 pt-2'>
              <Link
                href={item.link}
                className='inline-flex items-center gap-2 rounded-full border border-[#C778DD] bg-[#1A1D24] px-4 py-2 font-mono text-xs uppercase tracking-[0.3em] text-[#C778DD] transition-colors duration-200 hover:bg-[#C778DD] hover:text-[#08090C]'
              >
                live project <span className='text-base'>↗</span>
              </Link>
              {item.github && (        <Link
                href={item.github || ""}
                className='inline-flex items-center gap-2 rounded-full border border-[#2C2F36] bg-[#1A1D24] px-4 py-2 font-mono text-xs uppercase tracking-[0.3em] text-[#ABB2BF] transition-colors duration-200 hover:border-[#C778DD] hover:text-white'
              >
                repo <span className='text-base'>⌘</span>
              </Link>)}
      
            </div>
          </div>
          <div className='pointer-events-none absolute -right-6 bottom-6 h-14 w-14 rotate-[28deg] border border-dashed border-[#C778DD]/50' />
        </article>
      ))}
    </>
  )
}

export default MainCard