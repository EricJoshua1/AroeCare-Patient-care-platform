import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'

interface StatCardProps {
    type: 'appointments' | 'pending' | 'cancelled',
    counts: number,
    icon: string,
    label: string,
}

const StatCard = ({type, icon, label, counts = 0}: StatCardProps) => {
  return (
    <div className={clsx('stat-card', {
        'bg-appointments' : type === 'appointments',
        'bg-pending' : type === 'pending',
        'bg-cancelled' : type === 'cancelled'
    })}>
     <div>
        <Image 
          src={icon}
          alt='label'
          height={32}
          width={32}
          className='size-8 w-fit'
        />
        <h2 className='text-32-bold text-white'>{counts} </h2>
     </div>

     <p className='text-14-regular'>{label}</p>
    </div>
  )
}

export default StatCard
