import BreadCrumbs from '@/app/components/breadCrumbs'

import Headline from '@/app/components/headline'

import React from 'react'


import SkillCard from '@/app/components/skillCard'

import Image from 'next/image'

const About = () => {
  return (
    <>

    <div className='flex flex-col p-4 md:p-8 motion-preset-slide-up bg-[#282C33] gap-14 '>

        <BreadCrumbs path='about-me' description='Who am i?'/>
        <section className='flex flex-col gap-8'>
               
               <div className='flex flex-col lg:flex-row justify-between lg:items-center  gap-4'>
                            <ul className='flex flex-col gap-8 text-[#ABB2BF] max-w-[600px]'>
                        <li>
                        Hello, i’m Ogundu Okechukwu!
                        </li>
                        <li>
                        I’m a self-taught Software Engineer based in Abuja, Nigeria. I  Develop responsive websites and transform them into modern user-friendly web experiences.
                        </li>
                        <li>
                        Transforming my creativity and knowledge into a websites has been my passion. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.
                        </li>
                    
                    </ul>
                   <div className='max-w-[400px]  hidden lg:flex lg:p-8 '>
                   
                   <Image src='/assets/sqit.svg' alt='' width={50} height={50} className='w-full' />
                   </div>
                   
               </div>
               
           </section>
        <section className='flex flex-col gap-8'>
                <Headline title='skills'  className='h-[4px] rounded-3xl bg-[#C778DD] max-w-[511px] w-full border-0'/>
               
                    <div className='grid grid-cols-2 lg:flex lg:flex-row justify-between gap-4'>
                    <SkillCard/>
                    
                    
                </div>
                
            </section>
       
    </div>


    </>

  )
}

export default About