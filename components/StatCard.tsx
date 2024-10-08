import React from 'react'

interface StatCardProps {
    type: 'appointment' | 'pending' | 'cancelled',
    count: number,
    icon: string,
    label: string,
}

const StatCard = ({type, icon, label, count = 0}: StatCardProps) => {
  return (
    <div>
      StatCard
    </div>
  )
}

export default StatCard
