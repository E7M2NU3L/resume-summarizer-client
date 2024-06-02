import { Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div
    className='w-full min-h-[100vh] bg-fg-2 flex flex-col my-[3rem]'
    >
      
      <main className='flex flex-col sm:flex-row justify-center gap-x-[2rem] px-[2rem] items-center pb-[4rem]'>
        <section className='min-w-[40vh] max-w-[50vh]'>
          <h1 className='text-md text-admin-5' style={{
            fontFamily: "Lato, sans-serif",
            fontWeight: 300
          }}>
            How it Started?
          </h1>

          <Typography component="div" variant='h4' className='text-admin-2' sx={{
            fontFamily: "Oswald, sans-serif",
            fontWeight: 600
          }}>
            JEHR-Solutions weaves tech wonders, streamlining realms of work and life. 
          </Typography>
        </section>
        
        <section className='min-w-[50vh]'>
          <Image src="/svg/about.svg" alt='about-us' width={500} height={600} />
        </section>
      </main>

      <main className='flex flex-col sm:flex-row justify-center gap-x-[6rem] px-[2rem] items-center pb-[4rem] gap-y-[2rem]'>
        <section className='min-w-[50vh] max-w-[65vh]'>
          <Typography className='text-sm font-light text-admin-1' style={{
            fontFamily: "Lato, sans-serif"
          }}>
            JEHR-Solutions, your trusted ally in tech-driven solutions, elevates HR, office management, real estate, and healthcare operations. Our innovative suite includes resume analytics, a resume builder, and recruitment automation. In healthcare, we provide tools for suicide prevention and medical image analysis. Our real estate application optimizes property management. At JEHR-Solutions, we harness technology to simplify challenges and propel your success.
          </Typography>
        </section>

        <section className='max-w-[50vh] flex w-full h-full flex-wrap justify-center items-center gap-x-[2rem] gap-y-[2rem]'>
          <div className='rounded-full w-[120px] h-[120px] bg-admin-3 flex justify-center text-center items-center shadow-md shadow-admin-2 hover:translate-x-2 hover:shadow-admin-1 hover:scale-110 transition-all duration-300 ease-in-out'>
             
            <h1 className='text-admin-1 font-semibold hover:font-bold' style={{
              fontFamily: "Oswald, sans-serif",
              fontWeight:800
            }}>
              Smart HR Automation
            </h1>
          </div>
          <div className='rounded-full w-[120px] h-[120px] bg-admin-3 flex justify-center text-center items-center shadow-md shadow-admin-2 hover:translate-x-2 hover:shadow-admin-1 hover:scale-110 transition-all duration-300 ease-in-out'>
          <h1 className='text-admin-1 font-semibold hover:font-bold' style={{
              fontFamily: "Oswald, sans-serif",
              fontWeight:800
            }}>
          Productivity Enhancers
          </h1>
          </div>
          <div className='rounded-full w-[120px] h-[120px] bg-admin-3 flex justify-center text-center items-center shadow-md shadow-admin-2 hover:translate-x-2 hover:shadow-admin-1 hover:scale-110 transition-all duration-300 ease-in-out'>
          <h1 className='text-admin-1 font-semibold hover:font-bold' style={{
              fontFamily: "Oswald, sans-serif",
              fontWeight:800
            }}>
              Real Estate Management
            </h1>
          </div>
          <div className='rounded-full w-[120px] h-[120px] bg-admin-3 flex justify-center text-center items-center shadow-md shadow-admin-2 hover:translate-x-2 hover:shadow-admin-1 hover:scale-110 transition-all duration-300 ease-in-out'>
          <h1 className='text-admin-1 font-semibold hover:font-bold' style={{
              fontFamily: "Oswald, sans-serif",
              fontWeight:800
            }}>
          Healthcare Innovations
          </h1>
          </div>
        </section>
      </main>

    </div>
  )
}

export default About