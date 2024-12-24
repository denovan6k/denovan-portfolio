
import About from '@/app/section/home/about'
import Contact from '@/app/section/home/contact'

import Hero from '@/app/section/home/hero'
import Project from '@/app/section/home/project'

import Skill from '@/app/section/home/skill'
import React from 'react'

const Home = () => {

  return (
    <div className=' flex flex-col p-4 md:p-8 lg:p-12 gap-14'> 
   
      <Hero/>
      <Project/>
      <Skill/>
      <About/>
      <Contact/>
      
    </div>
  )
}

export default Home