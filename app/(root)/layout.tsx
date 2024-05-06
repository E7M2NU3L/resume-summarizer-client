import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import React from 'react'

const layout = ( {children} : {children: React.ReactNode}) => {
  return (
    <div className='bg-fg-2 dark:bg-admin-1'>
        <Navbar />
        {children}
        <Footer />
    </div>
  )
}

export default layout