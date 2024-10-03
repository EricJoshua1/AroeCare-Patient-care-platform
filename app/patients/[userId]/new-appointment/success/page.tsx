import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const success = () => {
  return (
    <div className='flex h-screen max-h-screen px-[5%]'>
      <div className='success-img'>
        <Link href='/'>
        <Image 
          src='/assets/icons/aroe-care-logo.svg'
          height={1000}
          width={1000}
          alt='logo'
          className='h-1- w-fit'
        />
        </Link>

      
      </div>
    </div>
  )
}

export default success
