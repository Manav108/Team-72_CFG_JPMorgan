const connectToMongo = require('./db');
const express = require('express')
const cors = require("cors");
const axios = require('axios');
const bodyParser = require("body-parser");

const app = express()
const port = 8000

//Available Routes

app.use(cors());
app.use(express.json());

app.use('/api/events', require('./routes/events_data'));
app.use('/api/added_events', require('./routes/added_events'));
app.use('/api/signup', require('./routes/signup_data'));
app.use('/api/login', require('./routes/login'));
app.use('/api/pastEvents', require('./routes/pastEvent'));
app.use('/api/futureEvents', require('./routes/futureEvents'));

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})

connectToMongo(); 