import React from 'react'
import { WhatsApp, LinkedIn, Facebook, Instagram, Twitter} from "@mui/icons-material";
import { Typography } from '@mui/material';
import Link from 'next/link';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"


const Footer = () => {

  const fetchDateInfo = () => {  
    const date = new Date();
    const CurrentYear = date.getFullYear();
    return CurrentYear;
  }

  const linkArray = [{
    id: 1,
    link: '/planning',
    text: 'Planning',
    desc: 'for human resource planning and staffing tools'
  },{
    id: 2,
    link: '/resume-sum',
    text: 'Resume Summarize',
    desc: 'summarize resume and visualize results to select the right persons'
  },{
    id: 3,
    link: '/cv-sum',
    text: 'Cv Summarize',
    desc: 'summarize Cv to Choose the right Professional'
  }]

  const ProdServs = [
    {
      id:4,
      text: 'Resume Builder',
      link: '/resume-builder-app',
      desc: 'interview and job seekers'
    },
    {
      id: 5,
      text: 'roamap Publishing App',
      link: '/roadmap-publisher',
      desc: 'presentations'
    },
    {
      id: 6,
      text: 'work-pro',
      link: '/workplace-productivity',
      desc: 'collaborated workplace'
    },
    {
      id: 7,
      text: 'See-more',
      link: '/jehr-solutions',
      desc: 'Visit Website'
    }
  ]

  return (
    <div className='min-h-[40vh] flex flex-col justify-center items-center sm:flex-col bg-admin-4 text-fg-1'>
      
      <section className='flex flex-col sm:flex-row gap-y-[1rem] px-[2rem] py-[1rem] items-start justify-between w-full'>
        <header>
          <Typography variant='h5' component='div' className='text-fg-1' sx={{
            fontFamily: "Oswald, sans-serif",
            fontWeight: 700
          }}>
            Jehr-autoHR
          </Typography>

          <Typography variant='h6' component="div" className='text-fg-1' sx={{
            fontFamily: "Oswald, sans-serif",
            fontWeight: 700,
            fontSize: 12
          }}>
            Developed by <span className='text-fg-2'>JEHR-SOLUTIONS</span>
          </Typography>
        </header>

        <section className='flex justify-center items-center flex-col'>

          <Typography component="div" variant='h6' sx={{
            fontFamily: "Anton, sans-serif",
            fontWeight: 700,
            fontSize: 18
          }}>
            Quick Links
          </Typography>

          <ul className='pt-[1.3rem]'>
            {linkArray.map((context) => (
              <React.Fragment>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger key={context.id} className='flex flex-col justify-center items-center pb-[0.8rem]'>
                      <Link href={context.link} className='text-sm font-normal hover:text-[#fefedf] translate-x-2 hover:scale-105 transition-all duration-300 ease-in-out'>
                        {context.text}
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent key={context.id} className='bg-admin-4'>
                      <Typography component="div" variant='h5' sx={{
                        fontFamily: "Oswald, sans-serif",
                        fontWeight: 700,
                        fontSize: 12
                      }}
                      className='text-fg-1'
                      >
                        Tip:
                      </Typography>

                      <Typography className='text-sm font-light text-fg-1 pt-[13px]'>
                        {context.desc}
                      </Typography>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </React.Fragment>
            ))}
          </ul>

        </section>

        <section>
          <Typography variant='h6' component="div"
          className='text-fg-2'
          sx={{
            fontFamily: "Anton, sans-serif",
            fontSize: 16,
            fontWeight: 700
          }}
          >
            Products and Services
          </Typography>

          <ul className='pt-[1.3rem]'>
            {ProdServs.map((context) => (
              <React.Fragment>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger key={context.id} className='flex flex-col justify-center items-center pb-[0.8rem]'>
                      <Link href={context.link} className='text-sm font-normal hover:text-[#fefedf] translate-x-2 hover:scale-105 transition-all duration-300 ease-in-out'>
                        {context.text}
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent key={context.id} className='bg-admin-4'>
                      <Typography component="div" variant='h5' sx={{
                        fontFamily: "Oswald, sans-serif",
                        fontWeight: 700,
                        fontSize: 12
                      }}
                      className='text-fg-1'
                      >
                        Made For:
                      </Typography>

                      <Typography className='text-sm font-light text-fg-1 pt-[13px]'>
                        {context.desc}
                      </Typography>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </React.Fragment>
            ))}
          </ul>
        </section>
      </section>

      <section className='w-full min-h-[10vh] flex-col justify-center align-center'>
        <main className='w-full flex justify-center items-center gap-x-[2rem]'>
          <Instagram className='hover:shadow-md hover:shadow-admin-4 hover:translate-x-2 hover:scale-110 transition-all duration-300 ease-in-out text-pink-300' />
          <Facebook className='hover:shadow-md hover:shadow-admin-4 hover:translate-x-2 hover:scale-110 transition-all duration-300 ease-in-out text-blue-900' />
          <WhatsApp className='hover:shadow-md hover:shadow-admin-4 hover:translate-x-2 hover:scale-110 transition-all duration-300 ease-in-out text-green-300' />
          <LinkedIn className='hover:shadow-md hover:shadow-admin-4 hover:translate-x-2 hover:scale-110 transition-all duration-300 ease-in-out text-blue-900' />
          <Twitter className='hover:shadow-md hover:shadow-admin-4 hover:translate-x-2 hover:scale-110 transition-all duration-300 ease-in-out text-slate-900' />
        </main>
        <main className='justify-center w-full fkex text-center py-[1rem]'>
          <Typography variant='h6' component="div">
            All Rights Reserved. &copy; {fetchDateInfo()}
          </Typography>
        </main>
      </section>
    </div>
  )
}

export default Footer