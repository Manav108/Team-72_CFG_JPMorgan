const express = require('express');
const Event = require('../model/Events');
const Volunteer = require('../model/Volunteer');
const router = express.Router();

router.post('/data', async (req, res) => {
  try {
    const events = await Event.find();

    if (!events) {
      return res.status(404).json({ error: 'Events not found' });
    }

    const username = req.body;
    console.log(username)

    const user = await Volunteer.findOne({ username :username.username});

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const registeredEvents = user.pastEvents; 

    const unregisteredEvents = events.filter(event => !registeredEvents.includes(event.id));

    const eventData = unregisteredEvents.map(event => {
        return {
          Name: event.name,
          Img: event.img,
          Description: event.description,
        };
      });

    res.json({ eventData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
