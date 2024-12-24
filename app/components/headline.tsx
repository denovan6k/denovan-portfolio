import React from 'react'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link';
type HeadlineProps ={
    title?: string;
    subTitle?: string;
    icon?: string;
    className?: string;
}


const Headline = ({title, subTitle, icon, className}:HeadlineProps) => {
  return (
    <>
    <ul className='flex justify-between items-center'>

        <li className='flex gap-2 items-center'>
            <p className=' text-3xl text-[#C778DD]'>#</p>
            <h1 className='text-3xl text-white'>{title}</h1>
            <Separator className={className}/>
        </li>
        <li className='flex gap-2 items-center'>
          <Link  href={`/work`}>
           <span className='text-white' >{subTitle}</span>
           </Link>
        </li>
    </ul>
    </>
  )
}

export default Headline