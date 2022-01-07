import React from 'react';
import './Banner.css';
import Box from '@mui/material/Box';
import banner from '../../../Images/banner.jpg'
import { Typography } from '@mui/material';

const styleBanner = {
    width: '100%',
    backgroundImage:`url(${banner})`,
    backgroundSize:'100%',
    backgroundRepeat:'no-repeat'
  };
const Banner = () => {
    return (
        <Box sx={styleBanner} className="container">
            <Typography sx={{color:'orange',paddingTop:3,paddingLeft:3}} variant="h3" gutterBottom component="div">
            Quality Care
             </Typography>
            <Typography sx={{color:'lime',paddingLeft:3}} variant="h3" gutterBottom component="div">
            for Lifelong Learners
             </Typography>
            <Typography sx={{color:'honeydew',paddingLeft:3}} variant="h6" gutterBottom component="div">
            Serving Children From 6 Weeks to 12 Years
             </Typography>
        </Box>
    );
};

export default Banner;