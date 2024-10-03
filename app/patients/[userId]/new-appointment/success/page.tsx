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

        <section className='flex flex-col items-center'>
            <Image
              src='/assets/gifs/success-n.gif'
              height={300}
              width={280}
              alt='success' 
              unoptimized
            />

            <h2 className='header mb-6 max-w-[600px] text-center'>
                Your <span className='text-yellow-600'>appointment request</span> has been successfully submitted !
            </h2>
            <p>We will be in touch shortly to confirm</p>
        </section>

        <section>
            <p>Requested appointment details:</p>
        </section>
      </div>
    </div>
  )
}

export default success
