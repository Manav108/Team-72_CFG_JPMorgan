import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Statistics from "./components/pages/Statistics";
import Volunteer from '../src/components/Volunteer_home';
import VolunteerLogin from "../src/components/login";
import VolunteerSignUp from "../src/components/signup";
import VolunteerEvents from "../src/components/volEvents";
import Donor from '../src/components/Doner'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/volunteer/login" element={<VolunteerLogin />} />
          <Route path="/volunteer/signup" element={<VolunteerSignUp />} />
          <Route path="/volunteer/events" element={<VolunteerEvents />} />
          <Route path="/donor" element={<Donor />} />


        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
