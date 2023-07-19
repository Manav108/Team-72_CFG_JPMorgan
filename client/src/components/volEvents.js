import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function volEvents() {
  return (
    <div>
        <Countries/>
    </div>
  )
}

const eventse = [
    {
      "Name": "Career Guidance Workshop",
      "Img": "https://mindskillz.in/wp-content/uploads/career-counselling-500x500-1.jpg",
      "Description": "These career awareness workshops will help students to identify the career goals, set the education milestones and derive the clear pathways to achieve it. "
    },
    {
      "Name": "Green Drive",
      "Img": "https://media.licdn.com/dms/image/C4E0BAQG1-gVPS7oCNw/company-logo_200_200/0/1614326846256?e=2147483647&v=beta&t=8XCFPU1VaXqMSWD9aM7YQMEuJth4hJrHUB4FW12XCcw",
      "Description": "More concretely, the objective of Green Drive is to offer you a complete catalog of accessories Tesla that can be customized as you wish: spoiler, covering"
    }]

const Countries = () => {
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
      
        <div className='container mt-5'>
          <h1>Past Events</h1>
            <div className='row row-cols-1 row-cols-sm-3 row-cols-md-4 '>
                {
                    eventse.map((obj) => 
                    <div className='col'>
                        <div className='card set1' style={{border:"1px solid black",height:"300px"}}>
                            <img src={obj.Img} className='mx-auto p-3 displayimg' alt="" style={{width:"100px",height:"150px"}}/>
                            <div className='card-body'>
                                <h4 className=' title'>{obj.Name}</h4>
                                

                                <button className='btn btn-dark'>Register</button>
                            </div>
                        </div>
                    </div>
                    )
                }
            </div>
            <h1>Future Events</h1>
            <div className='row row-cols-1 row-cols-sm-3 row-cols-md-4 '>
                {
                    events.map((obj) => 
                    <div className='col'>
                        <div className='card set1' style={{border:"1px solid black",height:"300px"}}>
                            <img src={obj.Img} className='mx-auto p-3 displayimg' alt="" style={{width:"100px",height:"150px"}}/>
                            <div className='card-body'>
                                <h4 className=' title'>{obj.Name}</h4>
                                

                                <button className='btn btn-dark'>Register</button>
                            </div>
                        </div>
                    </div>
                    )
                }
            </div>

        </div>
      
    )
  }
export default volEvents