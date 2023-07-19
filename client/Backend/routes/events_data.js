const express = require('express');
const Events = require('../model/Events');
const router = express.Router();

router.get('/data', async (req, res) => {

    try {
      const allEvents = await Events.find();
  
      if (!allEvents) {
        return res.status(404).json({ error: 'Events not found' });
      }
  
      const eventData = allEvents.map(event => {
        return {
          Name: event.name,
          Img: event.img,
          Description: event.description,
          Comments:event.comments
        };
      });
      
      console.log(eventData)
      res.json(eventData);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  });


module.exports = router;

