'use client'
import React from 'react'
import Aos from 'aos'
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Headline from '../../components/headline'
import SkillCard from '../../components/skillCard'
import Image from 'next/image'
const Skill = () => {

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
            <section className='flex flex-col gap-8' data-aos="fade-up">
                <Headline title='skills'  className='h-[4px] rounded-3xl bg-[#C778DD]  hidden md:flex max-w-[511px] w-full border-0'/>
                <div className='flex flex-col lg:flex-row justify-between gap-12'>
                    
                    <Image src='/assets/squiggle.svg' alt='' width={100} height={100} className='w-full max-w-[400px]' />
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-1 gap-4'>
                    <SkillCard/>
                    </div>
                    
                </div>
                
            </section>
    </>
  )
}

export default Skill