'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import SheetDemo from './sheet'
import Image from 'next/image'
const Header = () => {
   const pathname = usePathname()
   const getButtonClass = (path: string) => {
      return pathname === path
        ? 'text-white' // Active button styles
        : ' text-[#ABB2BF]' // Inactive button styles
    }

  return (
    <>
    <header className='flex justify-between items-center px-4 py-2 p md:p-8'>
     
     <Link href='/' className='flex items-center gap-2'>
     <Image src='/assets/logo.svg' width={30} height={30} alt='' />
     <p className="text-white font-bold  lg:text-2xl">Denovan</p>
   
     </Link>

     <SheetDemo />
     <ul className='hidden gap-4 md:flex'>
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
           <p className={`${getButtonClass('/contact')} hover:text-white `}> <span className='text-[#C778DD]'> # </span> contact </p>
           </Link>
        </li>
     </ul>
    </header>
    </>
  )
}

export default Header