'use client';
import Aos from 'aos'
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Headline from '../../components/headline'

import Image from 'next/image'
import AboutText from '../../components/text/aboutText'
const About = () => {
    useEffect(() => {
        Aos.init({
          duration: 1000,
        });
      }, []);
  return (
    <>
            <section className='flex flex-col gap-8 ' data-aos="fade-up">
                <Headline title='about'  className='h-[4px] rounded-3xl bg-[#C778DD]  hidden md:flex max-w-[511px] w-full border-0'/>
                <div className='flex flex-col lg:flex-row justify-between items-center gap-4 relative z-10'>

                    <AboutText/>
                    <div className='max-w-[400px] '>
                    
                    <Image src='/assets/sqit.svg' alt='' width={50} height={50} className='w-full' />
                    </div>
                    
                </div>
                
            </section>
    </>
  )
}

export default About

