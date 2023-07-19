const express = require('express');
const Event = require('../model/Events');
const router = express.Router();

router.post('/data', async (req, res) => {
  try {
    const data = req.body;
    if (!data) {
      return res.status(400).json({ error: "Data cannot be added" });
    }

    const event = new Event(data);

    const savedEvent = await event.save();

    console.log(savedEvent);
    res.send("Data added successfully");

  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
