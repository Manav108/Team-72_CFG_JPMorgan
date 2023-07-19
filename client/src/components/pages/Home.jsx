import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'
import Layout from "../Layout/Layout";
import { Link } from 'react-router-dom'
import "../styles/HomeStyles.css";
import EventCard from '../../eventcard';


const Home = () => {
 
    const [events, setEvents] = useState([]);
      
      useEffect(() => {
          const fetchData = async () => {
              try {
                  const response = await axios.get(`http://localhost:8000/api/events/data`);
                  console.log(response.data);
                  setEvents(response.data);
              } catch (error) {
                  console.log(error);
              }
          };
  
          fetchData();
  },[]);
  return (
    <Layout>
        <div className='home' >
          <div className='headerContainer' color='white'>
            <h1>BHUMI</h1>
            <p>NON PROFIT ORG</p>
            <Link to="/volunteer">
            <button color='yellow'>
              WANT TO VOLUNTEER?
            </button>
            </Link>
            <br></br>
            <Link to="/donor">
            <button color='yellow'>
              WANT TO DONATE?
            </button>
            </Link>
          </div>
        </div>
        <>
       
  
    <div className="App">
      <h1>My Events</h1>
      <div className="event-container">
        {events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
    </div>

        </>
    </Layout>);
};

export default Home