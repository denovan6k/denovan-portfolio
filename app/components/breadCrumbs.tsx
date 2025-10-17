import React from 'react'

type Props = {
  path: string
  description?: string
  eyebrow?: string
}

const BreadCrumbs = ({ path, description, eyebrow }: Props) => {
  return (
    <div className='w-full'>
      <div className='flex flex-col gap-4 rounded-[28px] border border-[#2C2F36] bg-[#181A23] p-6 shadow-[8px_8px_0px_0px_rgba(199,120,221,0.18)]'>
        {eyebrow ? (
          <span className='font-mono text-xs uppercase tracking-[0.35em] text-[#C778DD]'>{eyebrow}</span>
        ) : null}
        <div className='flex flex-wrap items-center gap-3 text-white'>
          <span className='text-2xl text-[#C778DD] md:text-3xl'>./</span>
          <h1 className='text-2xl font-semibold md:text-3xl'>{path}</h1>
        </div>
        {description ? <p className='max-w-[640px] text-sm leading-relaxed text-[#C7CCD9] md:text-base'>{description}</p> : null}
      </div>
    </div>
  )
}

export default BreadCrumbs