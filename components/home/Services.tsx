"use client"

import { Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const Services = () => {

  // Web Development Card
  const webDevelopment = {
    title: "Web Development",
    subtitle: "Custom Websites and Applications",
    description: "Crafting tailored web solutions to enhance your digital presence and business growth.",
    ctaButton: "Contact For Projects"
  };

  // AI-Based Solutions Card
  const aiSolutions = {
    title: "AI-Based Solutions",
    subtitle: "Innovative Tech Integration",
    description: "Leverage the power of AI for advanced analytics, automation, and smart decision-making.",
    ctaButton: "Explore AI Solutions"
  };

  // Course Platform Card
  const coursePlatform = {
    title: "Course Platform",
    subtitle: "NEET Exam Preparation",
    description: "Prepare for NEET exams with our interactive, comprehensive course platform designed for student success.",
    ctaButton: "Visit Page"
  };


  return (
    <div>
      <section className='w-full h-full justify-center text-center flex items-center flex-col pt-[3rem]'>

        <h1 className='text-md font-light text-admin-5' style={{
          fontFamily: "Lato, sans-serif",
          fontWeight: 300
        }}>
          From jehr-services
        </h1>

        <Image src="/svg/service.svg" alt='products' width={25} height={25} className='pt-[5px]' />
        <Typography className='text-4xl text-admin-1 font-bold pt-[1rem] pb-[3rem]' style={{
          fontFamily: "Oswald, sans-serif",
          fontWeight: 800
        }}>
          Services that We Provide
        </Typography>
      </section>(
    <Box sx={{ width: '100%', padding: '2rem' }}>
      <Grid container spacing={2} sx={{ background: '#F4F5F7' }}>
        {/* Web Development Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Item className='h-full w-full px-4 py-6 bg-admin-1 text-fg-2'>
            <Typography variant="h4" className='text-fg-2 font-bold pb-2' sx={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}>
              {webDevelopment.title}
            </Typography>
            <Typography variant="h6" className='text-fg-2 font-semibold pb-3' sx={{ fontFamily: "Oswald, sans-serif", fontWeight: 600 }}>
              {webDevelopment.subtitle}
            </Typography>
            <Typography variant="body1" className='text-fg-2 font-light pb-3' sx={{ fontFamily: "Lato, sans-serif", fontWeight: 600 }}>
              {webDevelopment.description}
            </Typography>
            <button className='text-fg-2 px-4 py-2 rounded-md bg-gradient-to-tr from-admin-2 to-admin-4' style={{ fontFamily: "Lato, sans-serif", fontWeight: 600 }}>
              {webDevelopment.ctaButton}
            </button>
          </Item>
        </Grid>

        {/* AI Solutions Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Item>
            <Image
              src="/images/Ai_Solutions.jpg"
              alt="AI Solutions"
              objectFit="cover"
              width={600}
              height={400}
              layout="responsive" // Set layout to responsive
            />
          </Item>
        </Grid>

        {/* Course Platform Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Item className='h-full w-full px-4 py-6 bg-admin-1 text-fg-2'>
            <Typography variant="h4" className='text-fg-2 font-bold pb-2' sx={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}>
              {coursePlatform.title}
            </Typography>
            <Typography variant="h6" className='text-fg-2 font-semibold pb-3' sx={{ fontFamily: "Oswald, sans-serif", fontWeight: 600 }}>
              {coursePlatform.subtitle}
            </Typography>
            <Typography variant="body1" className='text-fg-2 font-light pb-3' sx={{ fontFamily: "Lato, sans-serif", fontWeight: 600 }}>
              {coursePlatform.description}
            </Typography>
            <button className='text-fg-2 px-4 py-2 rounded-md bg-gradient-to-tr from-admin-2 to-admin-4' style={{ fontFamily: "Lato, sans-serif", fontWeight: 600 }}>
              {coursePlatform.ctaButton}
            </button>
          </Item>
        </Grid>

        {/* Add similar grid items for other cards here with the appropriate properties */}

        {/* AI Solutions Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Item>
            <Image
              src="/images/WebDev.jpg"
              alt="AI Solutions"
              objectFit="cover"
              width={600}
              height={400}
              layout="responsive" // Set layout to responsive
            />
          </Item>
        </Grid>

        {/* Course Platform Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Item className='h-full w-full px-4 py-6 bg-admin-1 text-fg-2'>
            <Typography variant="h4" className='text-fg-2 font-bold pb-2' sx={{ fontFamily: "Oswald, sans-serif", fontWeight: 700 }}>
              {aiSolutions.title}
            </Typography>
            <Typography variant="h6" className='text-fg-2 font-semibold pb-3' sx={{ fontFamily: "Oswald, sans-serif", fontWeight: 600 }}>
              {aiSolutions.subtitle}
            </Typography>
            <Typography variant="body1" className='text-fg-2 font-light pb-3' sx={{ fontFamily: "Lato, sans-serif", fontWeight: 600 }}>
              {aiSolutions.description}
            </Typography>
            <button className='text-fg-2 px-4 py-2 rounded-md bg-gradient-to-tr from-admin-2 to-admin-4' style={{ fontFamily: "Lato, sans-serif", fontWeight: 600 }}>
              {aiSolutions.ctaButton}
            </button>
          </Item>
        </Grid>




        {/* AI Solutions Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Item>
            <Image
              src="/images/Online.jpg"
              alt="AI Solutions"
              objectFit="cover"
              width={600}
              height={400}
              layout="responsive" // Set layout to responsive
            />
          </Item>
        </Grid>
      </Grid>
    </Box>
    </div>
  )
}

export default Services