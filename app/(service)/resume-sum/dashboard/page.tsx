import Link from 'next/link'
import React from 'react'

const Dashboard = () => {
  return (
    <div className='bg-purple-400 min-h-[90vh] w-1/2'>
        <p>
        Dashboard
        </p>
        <Link href="/resume-sum/browse-resume">
        Browse
        </Link>
    </div>
  )
}

export default Dashboard