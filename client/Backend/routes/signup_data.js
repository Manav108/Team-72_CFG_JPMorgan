const express = require('express');
const Volunteer = require('../model/Volunteer');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const bcrypt = require('bcrypt')

router.post('/data', async (req, res) => {

  

  try {
    const data = req.body;

    
    // let PhoneNo = await Volunteer.findOne({phonenum : data.userobj.phonenum});
    // if (PhoneNo)
    // {
    //   return res.status(400).json({error: "Phone Number is already register"})
    // }
    // console.log(data);
    
   const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(data.userobj.password, salt)
    data.userobj.password=hashedPassword
  
    console.log(data);
    const Volunteerdata = new Volunteer(data.userobj);
    
    Volunteerdata.save().then(() => {
      console.log("Savedddd")
      // console.log(Volunteerdata)
    })
    .catch(err => {
        res.status(400).send("Unable to save to database");
      });

    res.send("Data Sendedddd!!");
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = router;
