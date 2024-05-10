import React from 'react'
import Sidebar from '@/components/Resume/Sidebar'

const Pages = ({children} :  {children : React.ReactNode}) => {
  return (
    
    <main className='flex w-full h-full'>
        <Sidebar />
        {children}
    </main>

  )
}

export default Pages