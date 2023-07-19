const express = require('express');
const Volunteer = require('../model/Volunteer');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const bcrypt = require('bcrypt');

router.post(
  '/data', async (req, res) => {
    
    try {
      const data = req.body;
      console.log('Data:');
      console.log(data);

      const existingData = await Volunteer.find({ username: data.userobj.username });

      // if (existingData.length === 0) {
      //   return res.status(400).json({ msg: 'Cannot find User, Create Account if not created' });
      // }

      console.log(existingData[0].password);
      // const loginpassword = await bcrypt.compare(data.userobj.password, existingData[0].password);

      // if (loginpassword) {
      //   return res.json({
      //     msg: 'User exists',
      //     data: existingData[0],
      //   });
      // } else {
      //   return res.status(400).json({ msg: 'Password is incorrect' });
      // }
    } catch (error) {
      console.error(error.message);
      return res.status(500).json({ msg: 'Internal Error' });
    }
  }
);

module.exports = router;
