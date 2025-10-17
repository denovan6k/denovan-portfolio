import React from 'react'

const AboutText = () => {
  return (
    <div className='space-y-8 text-[#C7CCD9]'>
      <p className='font-mono text-xs uppercase tracking-[0.35em] text-[#C778DD]'>biography</p>
      <div className='space-y-6 text-base leading-relaxed md:text-lg'>
        <p>
          I’m Ogundu Okechukwu most people call me Denovan. I craft expressive web products that live between experimental aesthetics and obsessive usability. My work spans design systems, web apps, and story driven interactions for founders, startups, and forward thinking teams.
        </p>
        <p>
          With roots in engineering and a love for brutalist-inspired art direction, I build experiences that feel tactile, bold, and future ready. Each collaboration is grounded in research, motion, and systems thinking so products scale without losing their soul.
        </p>
        <p>
          Currently designing and shipping digital experiences for global clients, while exploring new frontiers in creative tooling, accessibility, and immersive web narratives.
        </p>
      </div>
      <div className='grid gap-4 md:grid-cols-2'>
        <div className='rounded-2xl border border-[#2C2F36] bg-[#191B24] p-4 shadow-[6px_6px_0px_0px_rgba(199,120,221,0.16)]'>
          <p className='font-mono text-xs uppercase tracking-[0.32em] text-[#ABB2BF]'>working with</p>
          <p className='pt-2 text-sm text-white'>Design led startups, product studios, and ambitious founders building what’s next.</p>
        </div>
        <div className='rounded-2xl border border-[#2C2F36] bg-[#191B24] p-4 shadow-[6px_6px_0px_0px_rgba(199,120,221,0.16)]'>
          <p className='font-mono text-xs uppercase tracking-[0.32em] text-[#ABB2BF]'>based in</p>
          <p className='pt-2 text-sm text-white'>Abuja, Nigeria • collaborating remotely worldwide.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutText