const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

const app = express();
const port = 3000;


app.use(bodyParser.json());
app.set('view engine','ejs')

// Importing Routes
const driversRoute = require('./routes/driver-championship')
app.use('/drivers-championships',driversRoute);

const teamsRoute = require('./routes/team-championship')
app.use('/team-championships',teamsRoute);

app.get('/', function(req, res) {
    res.render("index");
});

mongoose.connect(
    process.env.DB_CONNECTION,
    { useUnifiedTopology: true ,   useNewUrlParser: true },
    () =>{
        console.log('DB CONNECTED')
        app.listen(port,() => {
            console.log('Server Listening to: Port'+port)
        });
})