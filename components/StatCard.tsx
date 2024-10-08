import clsx from 'clsx'
import React from 'react'

interface StatCardProps {
    type: 'appointment' | 'pending' | 'cancelled',
    count: number,
    icon: string,
    label: string,
}

const StatCard = ({type, icon, label, count = 0}: StatCardProps) => {
  return (
    <div className={clsx('stat-card', {
        'bg-appointments' : type === 'appointments',
        'bg-pending' : type === 'pending',
        'bg-cancelled' : type === 'cancelled'
    })}>
      StatCard
    </div>
  )
}

export default StatCard
