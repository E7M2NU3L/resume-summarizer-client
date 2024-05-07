import { Button } from '@/components/ui/button';
import store from '@/config/page/store'
import { Home } from '@mui/icons-material';
import { Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react'
import { useSnapshot } from 'valtio'

const isAdmin = ({children} : {children: React.ReactNode}) => {

    // getting the valtio store
    const snap = useSnapshot(store);

  return (
    <>  
      {(snap.isAdmin === true) ? (
        <React.Fragment>
          {children}
        </React.Fragment>
      ) : (
        <React.Fragment>
          <main className='flex min-h-[90vh] bg-fg-2 dark:bg-admin-2 text-admin-1 dark:text-fg-2 w-full justify-center items-center'>
            <section className='max-w-[40vh] sm:max-w-[60vh] border border-admin-1 rounded-lg'>
              <Typography variant='h5' component="div" sx={{
                fontFamily: "Oswald, sans-serif"
              }}>
                This is an Admin Only Page, You are not Allowed to Enter, Go back
              </Typography>

              <Button className='mt-[1.4rem] bg-gradient-to-tr from-admin-2 via-admin-3 to-admin-4 hover:bg-gradient-to-br hover:from-admin-1 hover:via-admin-4 hover:to-admin-2 hover:translate-x-2 hover:scale-105 transition-all duration-200 ease-in-out'>
                <Link href="/" className='flex items-center justify-around w-full'>
                  <Home />
                  Back To Home
                </Link>
              </Button>
            </section>
          </main>
        </React.Fragment>
      )}
    </>
  )
}

export default isAdmin