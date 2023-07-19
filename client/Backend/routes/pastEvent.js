const express = require('express');
const Volunteer = require('../model/Volunteer');
const router = express.Router();

router.post('/data/', async (req, res) => {
  try {
    const username = req.body;
    console.log(username)
    
    const volunteer = await Volunteer.findOne({ username :username.username});

    if (!volunteer) {
      return res.status(404).json({ error: 'Volunteer not found' });
    }

    const pastEvents = volunteer.pastEvents;

    res.json({ pastEvents });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
