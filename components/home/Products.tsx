import { Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { Avatar } from '../ui/avatar';

const Products = () => {
  // HR and Office Management Cards Content
  const hrOfficeManagement = [
    {
      title: "Dashboard Analytics",
      subtitle: "Smart Hiring Solutions",
      description: "Automate resume analysis with a dashboard to identify the best candidates based on skills and requirements.",
      ctaButton: "Explore Dashboard"
    },
    {
      title: "Resume Builder",
      subtitle: "Effortless Resume Creation",
      description: "Create professional resumes effortlessly with our app that scrapes user details and formats resumes.",
      ctaButton: "Build My Resume"
    },
    {
      title: "Voice-to-Notes",
      subtitle: "Seamless Voice Transcription",
      description: "Convert spoken words into text with precision for easy note-taking and meeting documentation.",
      ctaButton: "Transcribe Now"
    },
    {
      title: "Content Planning",
      subtitle: "Strategic Content Management",
      description: "Plan, organize, and manage your content efficiently with our intuitive planning application.",
      ctaButton: "Plan Your Content"
    },
    {
      title: "Tech Skill Analysis",
      subtitle: "Talent Skill Insights",
      description: "Analyze tech skills for employees and candidates to match them with appropriate roles.",
      ctaButton: "Assess Skills"
    },
    {
      title: "Workplace Productivity",
      subtitle: "Optimize Your Workflow",
      description: "Streamline tasks and improve team productivity with tools for effective workplace management.",
      ctaButton: "Boost Productivity"
    }
  ];

  // Real Estate Management Cards Content
  const realEstateManagement = [
    {
      title: "Property Management",
      subtitle: "Efficient Property Oversight",
      description: "Manage real estate properties with ease, including tasks, scheduling, and tenant interactions.",
      ctaButton: "Manage Properties"
    }
  ];

  // Healthcare Field Cards Content
  const healthcareField = [
    {
      title: "Suicide Control",
      subtitle: "Preventive Mental Health Tools",
      description: "Use advanced analytics to identify and help individuals at risk for suicide.",
      ctaButton: "Learn More"
    },
    {
      title: "Medical Image Analysis",
      subtitle: "Advanced Image Segmentation",
      description: "Segment and classify medical images for a precise pathological view and diagnosis.",
      ctaButton: "Analyze Images"
    },
    {
      title: "Records Management",
      subtitle: "Streamlined Patient Records",
      description: "Efficiently manage patient records and documentation with a secure system.",
      ctaButton: "Organize Records"
    },
    {
      title: "Telehealth Application",
      subtitle: "Remote Healthcare Solutions",
      description: "Provide healthcare services remotely with secure, user-friendly applications.",
      ctaButton: "Start Telehealth"
    }
  ];

  return (
    <div>

      <section className='w-full h-full justify-center text-center flex items-center flex-col'>

        <h1 className='text-md font-light text-admin-5' style={{
          fontFamily: "Lato, sans-serif",
          fontWeight: 300
        }}>
          jehr-solutions
        </h1>

        <Image src="/svg/products.svg" alt='products' width={25} height={25} className='pt-[5px]' />
        <Typography className='text-4xl text-admin-1 font-bold pt-[1rem] pb-[3rem]' style={{
          fontFamily: "Oswald, sans-serif",
          fontWeight: 800
        }}>
          Our Products
        </Typography>
      </section>

      <section className='w-full h-full justify-center text-center flex items-center flex-col'>
        <Typography className='text-admin-1 text-2xl font-semibold' style={{
          fontWeight: 800,
          fontFamily: "Lato, sans-serif"
        }}>
        HR and Office Management
        </Typography>

        <section className='mt-[2rem] flex flex-wrap justify-center items-center gap-x-[1rem] gap-y-[2.5rem]'>
          <React.Fragment>
            {hrOfficeManagement.map((content, index) => (
              <main className='w-[300px] sm:w-[400px] min-h-[20vh] gap-y-[2rem] relative hover:translate-x-2 hover:scale-105 shadow-md hover:shadow-admin-1 transition-all duration-300 ease-in-out' key={index}>
              <div className='h-[10vh] bg-admin-2 relative'>
  
              </div>
              <Image src="" alt='card-image' className='absolute top-[18%] left-[50%] right-[50%] rounded-full shadow-md hover:translate-x-1 hover:scale-110 hover:shadow-admin-1 transition-all duration-300 ease-in-out' width={20} height={20} />
  
              <div className='h-full w-full bg-gray-300 justify-center items-center flex flex-col px-[3rem] py-[2rem]'>
                <Typography className='text-2xl font-bold ' sx={{
                  fontFamily: "Oswald, sans-serif"
                }}>
                  {content.title}
                </Typography>
                
                <Typography className='text-xl font-semibold pb-[1.2rem] pt-[0.6rem]' sx={{
                  fontFamily: "Oswald, sans-serif"
                }}>
                  {content.subtitle}
                </Typography>

                <Typography className='text-md font-light pb-[1.2rem]' sx={{
                  fontFamily: "lato, sans-serif"
                }}>
                  {content.description}
                </Typography>

                <button className='text-fg-2 px-5 py-2 rounded-md hover:shadow-md hover:shadow-admin-1 bg-gradient-to-tr from-admin-2 to-admin-4 hover:bg-gradient-to-br hover:from-admin-4 hover:to-admin-2 hover:translate-x-2 hover:scale-110 transition-all duration-300 ease-in-out' style={{
                  fontFamily: "Lato, sans-serif",
                  fontWeight: 600
                }}>
                  {content.ctaButton}
                </button>
              </div>
            </main>
            ))}
          </React.Fragment>
        </section>

      </section>

      <section className='w-full h-full justify-center text-center flex items-center flex-col pt-[3rem]'>
        <Typography className='text-admin-1 text-2xl font-semibold' style={{
          fontWeight: 800,
          fontFamily: "Lato, sans-serif"
        }}>
        Real Estate Management
        </Typography>
      <section className='mt-[2rem] flex flex-wrap justify-center items-center gap-x-[1rem] gap-y-[2.5rem]'>
          <React.Fragment>
            {realEstateManagement.map((content, index) => (
              <main className='w-[300px] sm:w-[400px] min-h-[20vh] gap-y-[2rem] relative hover:translate-x-2 hover:scale-105 shadow-md hover:shadow-admin-1 transition-all duration-300 ease-in-out' key={index}>
              <div className='h-[10vh] bg-admin-1 relative'>
  
              </div>
              <Image src="" alt='card-image' className='absolute top-[18%] left-[50%] right-[50%] rounded-full shadow-md hover:translate-x-1 hover:scale-110 hover:shadow-admin-1 transition-all duration-300 ease-in-out' width={20} height={20} />
  
              <div className='h-full w-full bg-gray-300 justify-center items-center flex flex-col px-[3rem] py-[2rem]'>
                <Typography className='text-2xl font-bold ' sx={{
                  fontFamily: "Oswald, sans-serif"
                }}>
                  {content.title}
                </Typography>
                
                <Typography className='text-xl font-semibold pb-[1.2rem] pt-[0.6rem]' sx={{
                  fontFamily: "Oswald, sans-serif"
                }}>
                  {content.subtitle}
                </Typography>

                <Typography className='text-md font-light pb-[1.2rem]' sx={{
                  fontFamily: "lato, sans-serif"
                }}>
                  {content.description}
                </Typography>

                <button className='text-fg-2 px-5 py-2 rounded-md hover:shadow-md hover:shadow-admin-1 bg-gradient-to-tr from-admin-1 to-admin-4 hover:bg-gradient-to-br hover:from-admin-4 hover:to-admin-1 hover:translate-x-2 hover:scale-110 transition-all duration-300 ease-in-out' style={{
                  fontFamily: "Lato, sans-serif",
                  fontWeight: 600
                }}>
                  {content.ctaButton}
                </button>
              </div>
            </main>
            ))}
          </React.Fragment>
        </section>
        </section>

        <section className='w-full h-full justify-center text-center flex items-center flex-col pt-[3rem]'>
        <Typography className='text-admin-5 text-2xl font-semibold' style={{
          fontWeight: 800,
          fontFamily: "Lato, sans-serif"
        }}>
        Healthcare Field
        </Typography>
        <section className='mt-[2rem] flex flex-wrap justify-center items-center gap-x-[1rem] gap-y-[2.5rem]'>
          <React.Fragment>
            {healthcareField.map((content, index) => (
              <main className='w-[300px] sm:w-[400px] min-h-[20vh] gap-y-[2rem] relative hover:translate-x-2 hover:scale-105 shadow-md hover:shadow-admin-5 transition-all duration-300 ease-in-out' key={index}>
              <div className='h-[10vh] bg-admin-5 relative'>
  
              </div>
              <Image src="" alt='card-image' className='absolute top-[18%] left-[50%] right-[50%] rounded-full shadow-md hover:translate-x-1 hover:scale-110 hover:shadow-admin-1 transition-all duration-300 ease-in-out' width={20} height={20} />
  
              <div className='h-full w-full bg-gray-300 justify-center items-center flex flex-col px-[3rem] py-[2rem]'>
                <Typography className='text-2xl font-bold ' sx={{
                  fontFamily: "Oswald, sans-serif"
                }}>
                  {content.title}
                </Typography>
                
                <Typography className='text-xl font-semibold pb-[1.2rem] pt-[0.6rem]' sx={{
                  fontFamily: "Oswald, sans-serif"
                }}>
                  {content.subtitle}
                </Typography>

                <Typography className='text-md font-light pb-[1.2rem]' sx={{
                  fontFamily: "lato, sans-serif"
                }}>
                  {content.description}
                </Typography>

                <button className='text-fg-2 px-5 py-2 rounded-md hover:shadow-md hover:shadow-admin-5 bg-gradient-to-tr from-admin-5 via-red-400 to-orange-600 hover:bg-gradient-to-br hover:from-orange-600 hover:via-red-400 hover:to-admin-5 hover:translate-x-2 hover:scale-110 transition-all duration-300 ease-in-out' style={{
                  fontFamily: "Lato, sans-serif",
                  fontWeight: 600
                }}>
                  {content.ctaButton}
                </button>
              </div>
            </main>
            ))}
          </React.Fragment>
        </section>
        </section>

    </div>
  )
}

export default Products