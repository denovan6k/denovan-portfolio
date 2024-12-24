import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <>
    <section className='flex flex-col p-4 md:p-8 lg:p-12 gap-8'>
    <ul className='flex justify-between items-center py-8'>
      <li className='flex flex-col gap-4'>
        <h1 className='text-white text-xl'>Denovan </h1>
        <p className='text-[#ABB2BF] text-sm'> Denovan.vercel </p>
      </li>
      <li className='flex flex-col '>
        <div className='flex flex-col items-center gap-4'>
      <h1 className='text-white text-xl'>Media </h1>
      <ul className='flex gap-2'>
       <li>
        <Link href='https://github.com/denovan6k'>
        <Image src={'/assets/Github.svg'} alt='' width={32} height={32} /> 
        </Link>
        </li>
       <li>
        <Link href='https://www.behance.net/denovanrex'>
       <Image src={'/assets/Figma.svg'} alt='' width={32} height={32} />
       </Link>
       </li>
       <li>
        <Link href='https://discord.com/users/denovan6k'>
       <Image src={'/assets/Discord.svg'} alt='' width={32} height={32} />
       </Link>
       </li>
      </ul>
      </div>
      </li>
    </ul>
    <div className='flex items-center justify-center py-8'>
        <p className='text-[#ABB2BF]'> © Copyright 2024. Made by Denovan </p>
    </div>
    </section>
    </>
  )
}

export default Footer