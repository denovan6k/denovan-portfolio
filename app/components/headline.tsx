import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

type HeadlineProps = {
  title?: string
  subTitle?: string
  icon?: string
  className?: string
}

const Headline = ({ title, subTitle, className }: HeadlineProps) => {
  return (
    <div className='flex w-full flex-wrap items-center gap-4 text-white'>
      <div className='flex items-center gap-3 font-mono uppercase tracking-[0.24em]'>
        <span className='text-2xl text-[#C778DD] md:text-3xl'>#</span>
        <h2 className='text-lg font-semibold md:text-2xl lg:text-3xl'>{title}</h2>
      </div>
      <span
        className={cn(
          'flex-1 min-w-[140px] h-[2px] rounded-full bg-gradient-to-r from-[#C778DD]/70 via-transparent to-transparent',
          className
        )}
      />
      {subTitle ? (
        <Link
          href='/work'
          className='flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-[#ABB2BF] transition-colors duration-200 hover:text-white'
        >
          <span>{subTitle}</span>
          <span className='text-base'>↗</span>
        </Link>
      ) : null}
    </div>
  )
}

export default Headline