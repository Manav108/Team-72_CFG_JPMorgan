import { GitHub, Instagram, Twitter, YouTube } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <>
        <Box sx={{textAlign:"center", bgcolor:"#1A1A19",color:"white",p:2}}>
        <Box sx={{my:3,"& svg":{fontSize:"60px",cursor:"pointer",mr:2,},
        "& svg:hover":{
            color:'goldenrod',
            transform:'translateX(5px)',
            transition:'all 400ms'
        }}}>
            <Instagram />
            <Twitter />
            <GitHub />
            <YouTube />
        </Box>
          <Typography variant="h5" sx={{"@media (max-width:600px)":{
            fontSize:"1rem",
          },}}>
            All rights reserved &copy; BHUMI ORG
          </Typography>
        </Box>
    </>
  )
}

export default Footer
