import React, { useState } from "react";
import { DonerEvents } from "../components/DonerEvents";
import { DonarEvent2 } from "../components/DonarEvent2";
import { Link } from "react-router-dom";
import Event from "../components/Event";
import "./Menu.css";
import Layout from "../components/Layout/Layout";

function Menu() {
  const [description, setDescription] = useState("");

  const redirectToPage = (index) => {
    const urls = [
      "https://kalaghodaassociation.com/",
      "https://en.wikipedia.org/wiki/Marathon",
      "https://indiaartfair.in/",
      "https://haryanatourism.gov.in/Events/surajkund-international-crafts-mela-faridabad",
    ];
    window.location.href = urls[index];
  };

  const redirectTo = (index) => {
    const urls = [
      "https://www.themuse.com/advice/team-building-activities-games-for-work-office",
      "https://www.topendsports.com/events/sport-events.htm",
      "https://thegeep.org/youth-innovation-challenge",
      "https://smartgaon.org/event/become-volunteer/",
    ];
    window.location.href = urls[index];
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Here you can make an API call to your backend server to store the description in the database
    // Replace the example URL with your actual API endpoint
    fetch("https://api.example.com/descriptions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ description }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Description stored in the database:", data);
        // Reset the description input
        setDescription("");
      })
      .catch((error) => {
        console.error("Error storing the description:", error);
      });
  };

  return (
    <Layout>
      <div className="menu">
        <h1 className="menuTitle">Donate Us</h1>
        
        <div className="menuList">
          {DonerEvents.map((menuItem, key) => {
            return (
              <div key={key} onClick={() => redirectToPage(key)}>
                <Event image={menuItem.image} name={menuItem.name} />
              </div>
            );
          })}
        </div>
        <div className="buttonContainer">
          <button className="circleButton" onClick={redirectToPage}>
            DONATE HERE
          </button>
        </div>
<br></br><br></br><br></br><br></br>
        <div className="menu">
          
          <div className="menuList">
            {DonarEvent2.map((menuItem, key) => {
              return (
                <div key={key} onClick={() => redirectTo(key)}>
                  <Event image={menuItem.image} name={menuItem.name} />
                </div>
              );
            })}
          </div>
        </div>

        <div className="descriptionBox">
        <center><h2 className="leaveFeedback">Leave your Feedback</h2></center>
          <form onSubmit={handleSubmit}>
            <textarea
              value={description}
              onChange={handleDescriptionChange}
              placeholder="Enter your suggetions..."
              className="descriptionInput"
            />
            <br></br><br></br>
            <center><button type="submit" className="submitButton">
              Submit
            </button></center>
            <br></br><br></br>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default Menu;
