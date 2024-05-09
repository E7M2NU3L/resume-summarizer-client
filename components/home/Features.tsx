import { Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const Features = () => {
  return (
    <div>
      <section>
        <Typography>
          Resume Analytics
        </Typography>

        <Image src="/images/resume.jpg" width={200} height={130} alt='resume' />
        <Image src="/images/AI.jpg" width={200} height={130} alt='resume' />
      </section>

      <section>
        <Typography>
          Intuitive Dashbaords
        </Typography>
        <Image src="/images/dashboard.jpg" width={200} height={130} alt='resume' />
      </section>

      <section>
        <Typography>
          Mail Automation
        </Typography>
        <Image src="/svg/HR_AI.svg" width={200} height={130} alt='resume' />
        <Image src="/svg/NLP.svg" width={200} height={130} alt='resume' />
      </section>

      <section>
        <Typography>
          HR Planning and Management
        </Typography>
        <Image src="/svg/HRM_Planning.svg" width={200} height={130} alt='resume' />
        <Image src="/svg/HR.svg" width={200} height={130} alt='resume' />
      </section>
    </div>
  )
}

export default Features