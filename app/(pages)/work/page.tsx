import BreadCrumbs from '@/app/components/breadCrumbs'

import Headline from '@/app/components/headline'
import MainCard from '@/app/components/mainCard'
import React from 'react'

const Work = () => {
  return (
    <>

    <div className='flex flex-col p-4 motion-preset-slide-up md:p-8  bg-[#282C33] gap-10 '>

        <BreadCrumbs path='project' description='List of my projects'/>

        <section className='flex flex-col gap-8'>
       
        <div className='flex gap-2 items-center'> <p className=' text-3xl text-[#C778DD]'>#</p>
        <h1 className='text-3xl text-white'>apps</h1></div>
       
 
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 items-center lg:items-start'>
                    <MainCard/>

                </div>
            </section>
    </div>


    </>

  )
}

export default Work