'use client'
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { CardData } from '../data/cardData'
import Link from 'next/link'
import Aos from 'aos'
import "aos/dist/aos.css";
import { useEffect } from 'react';
const Card = () => {
    useEffect(() => {
      Aos.init({
        duration: 1000,
      });
    }, []);
  return (
   <>

   {CardData.map((item, index) =>
          (
        <ul className='flex flex-col border   bg-[#282C33]' key={index} data-aos="fade-up">
        <li>
          <Image src={item.image} alt='' width={100} height={100} className='w-full'/>
        </li>
        <li className='p-2 border '>
          <p className='text-[#ABB2BF] text-wrap'>  {item.language} </p>
        </li>
        <li className='p-4 flex flex-col gap-4'>
          <h1 className='text-2xl text-white'> {item.title} </h1>
          <p className='text-sm text-[#ABB2BF]'> {item.description} </p>
        </li>
        <li className='flex gap-4 p-4 mb-0'>
        <Button variant='outline' className='px-[16px] py-[8px] border-[#C778DD] text-[#ABB2BF] bg-[#282C33] rounded-none' asChild >
    <Link href={item.link} > Live &lt;~&gt;   </Link> 
    </Button>
   
    <Button variant='outline' className='px-[16px] py-[8px] border-[#C778DD]  text-[#ABB2BF] bg-[#282C33] rounded-none' asChild>
      
    <Link href={item.github} > Github &gt;=  </Link>  
    </Button>
        </li>
      </ul>
      ))}
 
 
    </>
  )
}

export default Card