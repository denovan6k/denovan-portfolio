'use client'
import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { skillData } from '../data/skilldata'

const SkillCard = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    })
  }, [])

  return (
    <>
      {skillData.map((item, index) => (
        <div
          key={index}
          className='group relative flex flex-col gap-4 rounded-[20px] border border-[#2C2F36] bg-[#181A23] p-5 text-white shadow-[6px_6px_0px_0px_rgba(199,120,221,0.16)] transition duration-300 hover:-translate-y-2 hover:border-[#C778DD] hover:shadow-[12px_12px_0px_0px_rgba(199,120,221,0.24)]'
          data-aos='fade-up'
        >
          <div className='flex items-center justify-between'>
            <h4 className='text-lg font-semibold'>{item.title}</h4>
            <span className='rounded-full border border-[#C778DD]/60 bg-[#222430] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.4em] text-[#C778DD]'>stack</span>
          </div>
          <p className='text-sm leading-relaxed text-[#BFC5D4]'>{item.description}</p>
          <div className='pointer-events-none absolute -right-3 -top-3 h-12 w-12 rotate-[18deg] border border-dashed border-[#C778DD]/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
        </div>
      ))}
    </>
  )
}

export default SkillCard