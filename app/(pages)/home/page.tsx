
import About from '@/app/section/home/about'
import Contact from '@/app/section/home/contact'

import Hero from '@/app/section/home/hero'
import Project from '@/app/section/home/project'

import Skill from '@/app/section/home/skill'
import React from 'react'

const Home = () => {
  return (
    <div className='relative flex flex-col gap-20 md:gap-24 w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-20 pt-12 pb-24'>
      <Hero />
      <Project />
      <Skill />
      <About />
      <Contact />
    </div>
  )
}

export default Home