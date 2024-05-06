"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import DrawerComponent from '@/utils/navbar/drawerComponent'

const Navbar = () => {

    const [loggedin, setLogin] = useState(false);

    const FetchLoginStatus = () => {
        try {
            setLogin(true);
        } catch (error : unknown) {
            if (error instanceof Error) {
                console.log("Error Message: " + error.message);
            } else {
                console.log("An unknown error occurred");
            }
        }
    }

  return (
    <div className='flex justify-between px-[1rem] items-center min-h-[10vh]'>

        <section className='flex justify-center items-center space-x-4'>
            <Image
                src="/images/navLogo.jpg"
                alt='app-logo'
                width={12}
                height={12}
                className='w-12 h-12 rounded-full hover:shadow-sm hover:shadow-admin-1 hover:translate-x-2 hover:scale-110 transition-all duration-300 ease-in-out object-fit hover:contrast-125'
            />
            <h1 className='text-lg font-bold text-admin-1 hover:translate-x-2 hover:scale-110 opacity-100 hidden sm:block dark:text-admin-2 transition-all duration-300 ease-in-out' style={{
                fontFamily: "Oswald, sans-serif"
            }}>
                Jehr-autoHR
            </h1>
        </section>

        <ul className='w-1/2 justify-center space-x-6 items-center hidden sm:flex'>
            <li className='text-admin-1 dark:text-admin-2 hover:bg-gradient-to-tr hover:from-admin-2 via-admin-3 to-admin-4 px-3 py-1 rounded-full hover:translate-x-1 hover:scale-110 transition-all duration-300 ease-in-out'>
                <Link href="/jobs" style={{
                    fontFamily: "Oswald, sans-serif",
                    fontWeight: 400,
                    fontSize: "16px"
                }}>
                    Jobs
                </Link>
            </li>

            <li className='text-admin-1 dark:text-admin-2 hover:bg-gradient-to-tr hover:from-admin-2 via-admin-3 to-admin-4 px-3 py-1 rounded-full hover:translate-x-1 hover:scale-110 transition-all duration-300 ease-in-out'>
                <Link href="/jobs" style={{
                    fontFamily: "Oswald, sans-serif",
                    fontWeight: 400,
                    fontSize: "16px"
                }}>
                    Resume'
                </Link>
            </li>

            <li className='text-admin-1 dark:text-admin-2 hover:bg-gradient-to-tr hover:from-admin-2 via-admin-3 to-admin-4 px-3 py-1 rounded-full hover:translate-x-1 hover:scale-110 transition-all duration-300 ease-in-out'>
                <Link href="/jobs" style={{
                    fontFamily: "Oswald, sans-serif",
                    fontWeight: 400,
                    fontSize: "16px"
                }}>
                    CV
                </Link>
            </li>
        </ul>

        {(loggedin !== true) ? (
            <React.Fragment> 
                <section className='justify-center gap-[1rem] items-center hidden sm:flex'>
                    <h1 className='hover:-translate-x-1 hover:scale-105 transition-all duration-300 ease-in-out'>
                        <Link href="/auth/sign-in" className='border border-admin-1 text-admin-1 px-3 py-2 rounded-lg hover:bg-admin-1 hover:text-fg-1 transition-all duration-300 ease-in-out'
                        style={{
                            fontFamily: "Lato, sans-serif",
                            fontWeight: 700
                        }}>
                            Sign-in
                        </Link>
                    </h1>

                    <Button className='bg-admin-2 text-fg-1 px-4 py-0 hover:-translate-x-1 hover:scale-110 rounded-lg hover:bg-admin-1 transition-all duration-300 ease-in-out' style={{
                        fontFamily: "Lato, sans-serif",
                        fontWeight: 700
                    }}>
                        Login
                    </Button>
                </section>
            </React.Fragment>
        ) : (
            <React.Fragment>
                <section className='hidden sm:flex'>
                    <Button className='bg-admin-2 text-fg-1 px-4 py-0 hover:-translate-x-1 hover:scale-110 hover:shadow-md hover:shadow-admin-4 rounded-lg hover:bg-admin-1 transition-all duration-300 ease-in-out' style={{
                        fontFamily: "Lato, sans-serif",
                        fontWeight: 700
                    }}>
                        Go to Console
                    </Button>
                </section>
            </React.Fragment>
        )}

        <section className='block sm:hidden transition-all duration-200 ease-in-out'>
            <DrawerComponent />
        </section>
    </div>
  )
}

export default Navbar