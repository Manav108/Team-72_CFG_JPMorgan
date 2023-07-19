import React from "react";
import Layout from "../Layout/Layout";
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { Call, Mail, SupportAgent } from "@mui/icons-material";

const Contact = () => {
  return (
    <Layout>
      <Box sx={{my:5, ml:10, "& h4":{fontWeight:"bold",mb:2}}}>
        <Typography variant="h4">Contact us for any queries</Typography>
        <p>
          We value your feedback and are always eager to hear from our esteemed
          guests. Whether you have a question, suggestion, or simply want to
          share your dining experience with us, we would love to hear from you.
          Please fill out the form below with your name, email address, and
          message, and we will get back to you as soon as possible. Your
          satisfaction is our top priority, and we strive to provide exceptional
          service and unforgettable dining moments. Thank you for choosing
          Nirmalya, and we look forward to serving you again soon.
        </p>
      </Box>
      <Box sx={{m:3, width:'600px',ml:10, "@media (max-width:600px)":{
          width:"300px"
      }}}>
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell sx={{bgcolor:'black',color:'white',}} align="center">Contact Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgent sx={{color:"red", pt:1}} /> 180000000 (toll-free)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Mail sx={{color:"skyblue", pt:1}} /> Nirmalya@gmail.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Call sx={{color:"green", pt:1}} /> 123456789
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;
