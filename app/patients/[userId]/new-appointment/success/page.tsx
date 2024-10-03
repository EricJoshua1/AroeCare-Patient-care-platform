import { formatDateTime } from '@/app/lib/utils';
import { Doctors } from '@/constants';
import { getAppointment } from '@/lib/actions/appointment.actions';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



const success = async ({params: {userId}, searchParams}: SearchParamProps) => {
    const appointmentId = (searchParams?.appointmentId as string) || '';
    const appointment = await getAppointment(appointmentId);
    const doctor = Doctors.find((doc) => doc.name === appointment.primaryPhysician)


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

        <section className='request-details'>
            <p>Requested appointment details:</p>
            <div className='flex items-center gap-3'>
                <Image
                  src={doctor?.image!}
                  alt='doctor'
                  width={100}
                  height={100}
                  className='size-6'
                 />
                 <p className='whitespace-nowrap'>Dr. {doctor?.name}</p>
            </div>
            <div className='flex gap-2'>
                <Image 
                  src='/assets/icons/calendar.svg'
                  height={24}
                  width={24}
                  alt='calendar'
                />
                <p>{formatDateTime(appointment.schedule).dateTime}</p>
            </div>
        </section>
      </div>
    </div>
  )
}

export default success
