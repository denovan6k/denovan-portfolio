import React from 'react'
import { Button } from '@/components/ui/button'
const AboutText = () => {
  return (
    <>
    <ul className='flex flex-col gap-8 text-[#ABB2BF] max-w-[600px]'>
        <li>
        Hello, i’m Ogundu Okechukwu with alias as Denovan!
        </li>
        <li>
        I’m a self-taught front-end developer based in Abuja, Nigeria. I  Develop responsive websites and transform them into modern user-friendly web experiences.
        </li>
        <li>
        Transforming my creativity and knowledge into a websites has been my passion. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.
        </li>
        {/* <li> 
            <Button variant='outline' size='lg' className='border-[#C778DD] px-[16px] py-[8px] rounded-none bg-[#282C33] text-white'>
            Read More
            </Button>
        </li> */}
    </ul>
    
    </>
  )
}

export default AboutText