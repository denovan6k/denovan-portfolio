'use client'
import React from 'react'
import { skillData } from '../data/skilldata'
import Aos from 'aos'
import "aos/dist/aos.css";
import { useEffect } from 'react';
const SkillCard = () => {
        useEffect(() => {
           Aos.init({
             duration: 1000,
           });
         }, []);
  return (
    <>
    {skillData.map((item,index)=> (
         <ul key={index} className='flex flex-col    border border-[#ABB2BF]' data-aos="fade-up">
            <li className='p-2 text-white border border-[#ABB2BF] ' >
                 {item.title}
            </li>
            <li className='p-2 text-[#ABB2BF] text-wrap   '>
                 {item.description}
            </li>


         </ul>
    ))}
   
        
        </>
  )
}

export default SkillCard