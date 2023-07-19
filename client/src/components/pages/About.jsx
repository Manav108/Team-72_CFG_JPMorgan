import React from "react";
import Layout from "../Layout/Layout";

import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{my:15,textAlign:'center',p:2,
        "& h4":{fontWeight:'bold', my:2,fontSize:'2rem'},
        "& p":{textAlign:'justify',},
        "@media (max-width:600px)":{
          mt:0,
          "& h4":{
            fontSize:"1.5rem,"
          }
        }}}
      >
        <Typography variant="h4">WELCOME TO BHUMI ORGANIZATION</Typography>
        <p>
          India's authentic restaurant scene is a vibrant tapestry of flavors
          and culinary traditions that reflect the country's rich cultural
          heritage. From bustling street food stalls to opulent fine dining
          establishments, India offers a remarkable range of culinary
          experiences. Each region showcases its unique culinary specialties,
          from the fiery curries of the North to the fragrant biryanis of the
          South. These authentic restaurants take diners on a sensory journey,
          tantalizing their taste buds with a symphony of spices, aromatic
          herbs, and carefully crafted recipes passed down through generations.
          With their warm hospitality, colorful ambiance, and delectable dishes,
          India's authentic restaurants invite visitors to immerse themselves in
          a culinary adventure that celebrates the diversity and depth of Indian
          cuisine.
        </p>
        <br />
        <p>
        India's authentic restaurant scene is a vibrant tapestry of flavors and culinary traditions that reflect the country's rich cultural heritage. From bustling street food stalls to opulent fine dining establishments, India offers a remarkable range of culinary experiences. Each region showcases its unique culinary specialties, from the fiery curries of the North to the fragrant biryanis of the South. These authentic restaurants take diners on a sensory journey, tantalizing their taste buds with a symphony of spices, aromatic herbs, and carefully crafted recipes passed down through generations. With their warm hospitality, colorful ambiance, and delectable dishes, India's authentic restaurants invite visitors to immerse themselves in a culinary adventure that celebrates the diversity and depth of Indian cuisine.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
