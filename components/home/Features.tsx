import { Typography, Box, Grid } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const Features = () => {
  return (
    <Box sx={{ p: 4, backgroundColor: '#f4f4f9' }}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={3}>
          <Box textAlign="center">
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Resume Analytics
            </Typography>
            <Image src="/images/resume.jpg" width={200} height={130} alt="Resume Analytics" />
            <Typography variant="body2" sx={{ mt: 1 }}>
              Analyze resumes with precision using AI-powered tools to find the best candidates.
            </Typography>
          </Box>
        </Grid>
        
        <Grid item xs={12} sm={6} md={3}>
          <Box textAlign="center">
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Intuitive Dashboards
            </Typography>
            <Image src="/images/dashboard.jpg" width={200} height={130} alt="Intuitive Dashboards" />
            <Typography variant="body2" sx={{ mt: 1 }}>
              Access easy-to-use dashboards that provide insights and streamline your workflow.
            </Typography>
          </Box>
        </Grid>
        
        <Grid item xs={12} sm={6} md={3}>
          <Box textAlign="center">
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Mail Automation
            </Typography>
            <Image src="/svg/HR_AI.svg" width={200} height={130} alt="Mail Automation" />
            <Typography variant="body2" sx={{ mt: 1 }}>
              Automate your email communications with NLP-driven mail automation tools.
            </Typography>
          </Box>
        </Grid>
        
        <Grid item xs={12} sm={6} md={3}>
          <Box textAlign="center">
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              HR Planning and Management
            </Typography>
            <Image src="/svg/HRM_Planning.svg" width={200} height={130} alt="HR Planning and Management" />
            <Typography variant="body2" sx={{ mt: 1 }}>
              Efficiently manage HR tasks and plan staffing with our comprehensive HR tools.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Features;
