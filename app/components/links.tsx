'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Linx = () => {
   const pathname = usePathname()
   const getButtonClass = (path: string) => {
      return pathname === path
        ? 'text-white' // Active button styles
        : ' text-[#ABB2BF]' // Inactive button styles
    }

  return (
    <>
    
     <ul className='flex flex-col gap-4 '>
        <li className=''>
           <Link href='/'>
           <p className={`${getButtonClass('/')} hover:text-white `}> <span className='text-[#C778DD]' > # </span> home</p>
           </Link>
        </li>
        <li className=''>
           <Link href='/work'>
           <p className={`${getButtonClass('/work')} hover:text-white `}> <span className='text-[#C778DD]'> # </span> works</p>
           </Link>
        </li>
        <li className=''>
           <Link href='/about'>
           <p className={`${getButtonClass('/about')} hover:text-white `}> <span className='text-[#C778DD]'> # </span> about-me </p>
           </Link>
        </li>
        <li className=''>
           <Link href='/contact'>
           <p className={`${getButtonClass('/contact')} hover:text-white `}> <span className='text-[#C778DD]'> # </span> contacts </p>
           </Link>
        </li>
     </ul>
   
    </>
  )
}

export default Linx