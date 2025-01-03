'use client'

import Headline from '../../components/headline'
import Card from '../../components/card'

import { useEffect } from 'react';
const Project = () => {

  return (
    <>
            <section className='flex flex-col gap-8'>
                <Headline title='projects' subTitle='View all ~~>' className='h-[4px] rounded-3xl bg-[#C778DD]  hidden md:flex max-w-[511px] w-full border-0'/>
                <div className='flex flex-col lg:grid lg:grid-cols-3  justify-between gap-4 items-center lg:items-start'>
                    <Card/>

                </div>
            </section>
    </>
  )
}

export default Project