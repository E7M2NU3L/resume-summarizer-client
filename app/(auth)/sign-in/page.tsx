"use client";

import { Facebook, Google, LinkedIn } from '@mui/icons-material'
import { Divider, Typography } from '@mui/material'
import Link from 'next/link';
import React, { useState } from 'react'

const SignIn = () => {

  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (e : any) => setEmail(e.target.value);
  const handlePassword = (e : any) => setPassword(e.target.value);

  const handleSubmit = (e : any) => {
    e.preventDefault();
    try {
      // logic      
      if (Email === '' || password=== '') {
        console.log("The User Fields are Empty");
      }

      // submit the Data to the backend
    } catch (error) {
        if (error instanceof Error) {
          console.log("Error Occured: ", error.message);
        }
        else {
          console.log("Error of Unknown Origin");
        }
    }
  }

  return (
    <div className='flex justify-center items-center min-h-[90vh]'>
      <main className='shadow-lg shadow-gray-400 flex justify-center items-center'>
      <section className='min-h-[75vh] w-auto sm:w-[600px] bg-fg-2 flex flex-col justify-start items-center'>

      <section className='mt-[1.3rem]'>
        <Typography variant='h5' component="div" className='text-admin-2 font-semibold' sx={{
          fontFamily: "Oswald, sans-serif",
          fontWeight: 600
        }}>
          Connect with autoHR
        </Typography>
      </section>

      <section className='flex justify-center items-center space-x-8 mt-[1.8rem]'>
        
        <div className='rounded-full cursor-pointer bg-gray-300 h-[2.4rem] w-[2.4rem] hover:translate-x-1 hover:scale-110 hover:shadow-md hover:shadow-admin-2 transition-all duration-300 ease-in-out'>
          <Google className='flex justify-center items-center w-full h-full px-2 text-red-400' />
        </div>
        <div className='rounded-full cursor-pointer bg-gray-300 h-[2.4rem] w-[2.4rem] hover:translate-x-1 hover:scale-110 hover:shadow-md hover:shadow-admin-2 transition-all duration-300 ease-in-out'>
          <LinkedIn className='flex justify-center items-center w-full h-full px-2 text-blue-700'/>
        </div>
        <div className='rounded-full cursor-pointer bg-gray-300 h-[2.4rem] w-[2.4rem] hover:translate-x-1 hover:scale-110 hover:shadow-md hover:shadow-admin-2 transition-all duration-300 ease-in-out'>
          <Facebook className='flex justify-center items-center w-full h-full px-2 text-blue-500'/>
        </div>

      </section>

      <section className='mt-[1.8rem]'>
        <h4 className='text-admin-4 font-light text-sm' style={{
          fontFamily: "Lato, sans-serif"
        }}>
          or You may proceed with
        </h4>
      </section>

      <form onSubmit={handleSubmit} className='w-full flex flex-col justify-center items-center pt-[1.6rem]'>
        
      <div>
            <h1 className='text-sm font-semibold text-admin-4' style={{
              fontFamily: "Lato, sans-serif",
              fontWeight: 500
            }}>
              Email Address
            </h1>
            <input value={Email} placeholder='' name='Email' className='rounded-md outline-none shadow-md shadow-gray-300 bg-gray-300 w-[300px] px-[0.8rem] py-[8px] mt-[3px] mb-[9px] text-gray-800' onChange={handleEmail} />
          </div>

          <div>
            <h1 className='text-sm font-semibold text-admin-4' style={{
              fontFamily: "Lato, sans-serif",
              fontWeight: 500
            }}>
              Password
            </h1>
            <input value={password} placeholder='' name='password' className='rounded-md outline-none shadow-md shadow-gray-300 bg-gray-300 w-[300px] px-[0.8rem] py-[8px] mt-[3px] mb-[9px] text-gray-800' onChange={handlePassword} />
          </div>

          <button className='bg-gradient-to-tr from-admin-2 to-admin-4 text-fg-2 px-9 py-2 rounded-md hover:bg-gradient-to-br hover:from-admin-4 hover:to-admin-2 hover:translate-x-1 hover:shadow-md hover:shadow-admin-2  hover:scale-105 transition-all duration-300 ease-in-out mt-[12px]' >
            Sign in
          </button>

        <p className='text-red-500 text-sm font-light pt-[5px]' style={{
          fontSize: "12px",
          fontFamily: "Lato, sans-serif",
          fontWeight: 300
        }}>
          Forgot Password
        </p>

        <Link href="/sign-up" className='flex sm:hidden pt-[12px]'>
          <h5 className='text-gray-800 text-[12px] font-light'>
            Don't have an Account? <span className='hover:text-green-200 hover:translate-x-1 transition-all duration-300 ease-in-out'>Sign-up</span> 
          </h5>
        </Link>

      </form>
      </section>
      <section className='relative min-h-[75vh] w-[300px] sm:w-[400px] bg-admin-2 sm:flex hidden justify-center items-center flex-col px-[1rem] '>
        <main className='flex flex-col justify-center text-center'>
          <Typography variant='h5' component="div" className='text-fg-2 mb-[1rem]' sx={{
            fontFamily: "Oswald, sans-serif",
            fontWeight: 700,
          }}>
            Welcome <span className='text-purple-200'>Back</span>
          </Typography>

          <h6 className='text-md text-fg-2' style={{
            fontFamily: "Lato, sans-serif",
            fontWeight: 300,
          }}>
            <span className='ps-3'></span>to Delve into the features and automation of jehr-autoHR, Create your own account and get Connected.
          </h6>
        </main>
        
        <section className='mx-[2rem] flex justify-center items-center py-[0.8rem]'>
          <Divider className='bg-fg-2 px-[3.6rem]' />
          <Typography className='text-fg-2 px-[12px]' sx={{
            fontFamily: "Lato, sans-serif",
            fontWeight: 600
          }}>
            Or
          </Typography>
          <Divider className='bg-fg-2 px-[3.6rem]' />
        </section>
        <Link href="/sign-up" className='flex w-full px-[2rem] items-start'>
          <button className='w-full bg-transparent border border-1 border-fg-2 px-4 py-2 rounded-lg backdrop-blur-sm text-fg-2 text-md font-semibold hover:translate-x-1 hover:transalte-y-1 hover:font-bold hover:text-gray-300 hover:scale-105 transition-all duration-300 ease-in-out' style={{
            fontFamily: "Lato, sans-serif",
            fontWeight: 700,
          }}>
            Sign-up
          </button>
        </Link>
      </section>
      </main>
    </div>
  )
}

export default SignIn