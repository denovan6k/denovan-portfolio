import React from 'react'


import Image from 'next/image'
import HeroText from '../../components/text/herotext'
const Hero = () => {
  return (
    <>
            <section className='flex flex-col motion-preset-slide-up lg:gap-6 '>
               
                <div className='flex flex-col md:flex-row justify-between gap-4 items-center'>
                    <HeroText/>
                    <div className='max-w-[400px] '>
                    
                    <Image src='/assets/laptop.svg' alt='' width={50} height={50} className='w-full' />
                    </div>
                    
                </div>
                
            </section>
    </>
  )
}

export default Hero