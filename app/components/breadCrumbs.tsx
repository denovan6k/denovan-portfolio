import React from 'react'
type Props = {
    path: string
    description?: string
}
const BreadCrumbs = ({path,description}: Props) => {
  return (
    <>
    <ul className='flex flex-col gap-4'>
        <li className='flex gap-2 items-center'> <p className=' text-3xl text-[#C778DD]'>./</p>
        <h1 className='text-3xl text-white'>{path}</h1></li>
        <li className='text-[#ABB2BF]'>{description}</li>
        
    </ul>
    </>
    
  )
}

export default BreadCrumbs