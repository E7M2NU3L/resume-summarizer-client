import React from 'react';
import './main.css';
import { Typography } from '@mui/material';
import { Button } from '@/components/ui/button';

const Home = () => {
  return (
    <div className='relative text-admin-1 font-semibold'>
        
        <section className='relative w-full flex min-h-[90vh] justify-center items-center text-center' 
        style={{
          backgroundImage: "radial-gradient(100%, 100%, circle at 50% 50%, 80% #F4F5F7, 20% #988DFF)",
        }}        
        >
          <main className='max-w-[40vh] sm:max-w-[60vh]'>
            <Typography component="div" variant='h5' sx={{
              fontFamily: "Oswald, sans-serif",
              fontWeight: 700
            }}>
              JEHR-autoHR: <span className='text-admin-5'>
              Revolutionizing Resume and CV Analytics for HR Planning
              </span>
            </Typography>

            <Typography className='pb-[1rem] pt-[0.8rem]' sx={{
              fontFamily: "Lato, sans-serif",
              fontSize: 16
            }}>
            Simplify your hiring process with intelligent analytics and streamlined staff management tools.
            </Typography>
            
            <Typography style={{
              fontFamily: "Anton, sans-serif",
              fontSize: 12
            }}>
            JEHR-autoHR empowers you to make data-driven hiring decisions with powerful analytics and intuitive dashboards. Automate resume and CV analysis to find the perfect candidate for your team. Manage workplace and staff planning with ease, all from a single, user-friendly platform
            </Typography>
            
            <Button className='bg-gradient-to-tr from-admin-2 via-admin-3 to-admin-1 mt-[0.8rem] hover:bg-gradient-to-tr hover:from-admin-4 hover:via-admin-2 hover:to-admin-3 hover:scale-110 hover:translate-x-2 hover:translate-y-2 transition-all duration-200 ease-in-out'>
              Start your free trial
            </Button>
          </main>
        </section>

    </div>
  )
}

export default Home