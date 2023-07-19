import React from 'react'
import './Volunteer_home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'
function Home() {
    return (
        <div>
            <div className='volhome bg-opacity-25'>
                <div className='den '>
                    <div>
                        <button className='btn text-white bg-dark bg-opacity-75 me-3 abc'><Link className="nav-link" to="/volunteer/signup">SignUp</Link></button>
                    </div>
                    <div>
                        <button className='btn text-white bg-dark bg-opacity-75 ms-3 abc'><Link className="nav-link" to="/volunteer/login">LogIn</Link></button>
                    </div>

                </div>
                <div>
            </div>
        </div>
      <div className="container ">
        <div className="row mt-3">
          <div className="col pt-2 ps-0">
            <div className="card border-white rounded-0">
              <div className="card-body">
                <img src="https://images.pexels.com/photos/185933/pexels-photo-185933.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" height="400px" width="400px" />
              </div>
            </div>
          </div>
          <div className="col pt-2 ps-0">
            <div className="card border-white rounded-0">
              <div className="card-body mt-5 pt-5">
                <h1>Become a volunteer</h1>
                <p>Instructors from around the world teach <br />
                  millions of students  on Udemy. We provide the <br /> tools and skills to teach what you love.</p>   
                <button className="btn btn-dark text-white rounded-0">Start Volunterring Today</button> 
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container ">
        <div className="row mt-3">
          <div className="col pt-2 ps-0">
            <div className="card border-white rounded-0">
              <div className="card-body">
                <img src="https://media.istockphoto.com/id/668214842/photo/voluteer-group-of-people-for-charity-donation-in-the-park.jpg?b=1&s=612x612&w=0&k=20&c=E7AwwoxyGoyN_ik7y6MTAlj-q9kg9ntKWwkFcx9f09g=" alt="" height="400px" width="400px" />
              </div>
            </div>
          </div>
          <div className="col pt-2 ps-0">
            <div className="card border-white rounded-0">
              <div className="card-body mt-5 pt-5">
                <h1>Become a volunteer</h1>
                <p>Instructors from around the world teach <br />
                  millions of students  on Udemy. We provide the <br /> tools and skills to teach what you love.</p>   
                {/* <button className="btn btn-dark text-white rounded-0">Start Teaching Today</button>  */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5 pt-5">
        <div className="row mt-3">
          <div className="col pt-2 ps-0">
            <div className="card border-white rounded-0">
              <div className="card-body">
                <img src="https://s.udemycdn.com/home/non-student-cta/instructor-1x-v3.jpg" alt="" height="400px" width="400px" />
              </div>
            </div>
          </div>
          <div className="col pt-2 ps-0">
            <div className="card border-white rounded-0">
              <div className="card-body mt-5 pt-5">
                <h1>Become a volunteer</h1>
                <p>Instructors from around the world teach <br />
                  millions of students  on Udemy. We provide the <br /> tools and skills to teach what you love.</p>   
                {/* <button className="btn btn-dark text-white rounded-0">Start Teaching Today</button>  */}
              </div>
            </div>
          </div>
        </div>
      </div>
    
        </div>
    )
}



export default Home