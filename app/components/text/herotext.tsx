import React from 'react'
import Link from 'next/link';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
const words = `  He crafts responsive websites where technologies meet creativity`;
const HeroText = () => {
  return (
    <>
    <div>
        <ul className='flex flex-col gap-4 md:gap-8  lg:gap-10 max-w-[530px] text-wrap'>
            <li className='lg:text-3xl text-xl text-white '>
            Denovan is a <span className='text-[#C778DD]'> Front-end Engineer </span>
            </li>
            <li className='text-sm text-[#ABB2BF]'>
            <TextGenerateEffect duration={2} filter={false} words={words} className='text-[#ABB2BF] font-normal ' />
            </li>
            <li>
              <Link href='/contact'> 
            <HoverBorderGradient  containerClassName="rounded-none border-[#C778DD]"
        as="button" className='px-[16px] py-[8px] rounded-none bg-[#282C33] text-[#ABB2BF] hover:text-white'>
            Contact me!!
            </HoverBorderGradient>
            </Link>
            </li>
        </ul>
    </div>
    
    </>
  )
}

export default HeroText