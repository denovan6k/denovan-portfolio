'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
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
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
      className='flex justify-between items-center px-4 py-2 p md:p-8'
    >
     
     <Link href='/' className='flex items-center gap-2'>
     <motion.div
       whileHover={{ rotate: 360, scale: 1.1 }}
       transition={{ duration: 0.5 }}
     >
       <Image src='/assets/logo.svg' width={30} height={30} alt='' />
     </motion.div>
     <motion.p 
       className="text-white font-bold lg:text-2xl"
       whileHover={{ 
         scale: 1.05,
         color: '#C778DD',
         textShadow: '0 0 8px rgba(199, 120, 221, 0.5)'
       }}
       transition={{ duration: 0.2 }}
     >
       Denovan
     </motion.p>
     </Link>

     <SheetDemo />
     <ul className='hidden gap-4 md:flex'>
        <motion.li 
          whileHover={{ y: -3, scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
           <Link href='/'>
           <p className={`${getButtonClass('/')} hover:text-white transition-colors duration-200`}> 
             <motion.span 
               className='text-[#C778DD]'
               animate={{ opacity: [1, 0.5, 1] }}
               transition={{ duration: 2, repeat: Infinity }}
             > # </motion.span> home
           </p>
           </Link>
        </motion.li>
        <motion.li 
          whileHover={{ y: -3, scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
           <Link href='/work'>
           <p className={`${getButtonClass('/work')} hover:text-white transition-colors duration-200`}> 
             <motion.span 
               className='text-[#C778DD]'
               animate={{ opacity: [1, 0.5, 1] }}
               transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
             > # </motion.span> works
           </p>
           </Link>
        </motion.li>
        <motion.li 
          whileHover={{ y: -3, scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
           <Link href='/about'>
           <p className={`${getButtonClass('/about')} hover:text-white transition-colors duration-200`}> 
             <motion.span 
               className='text-[#C778DD]'
               animate={{ opacity: [1, 0.5, 1] }}
               transition={{ duration: 2, repeat: Infinity, delay: 1 }}
             > # </motion.span> about-me 
           </p>
           </Link>
        </motion.li>
        <motion.li 
          whileHover={{ y: -3, scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
           <Link href='/contact'>
           <p className={`${getButtonClass('/contact')} hover:text-white transition-colors duration-200`}> 
             <motion.span 
               className='text-[#C778DD]'
               animate={{ opacity: [1, 0.5, 1] }}
               transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
             > # </motion.span> contact 
           </p>
           </Link>
        </motion.li>
     </ul>
    </motion.header>
    </>
  )
}

export default Header