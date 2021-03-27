const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');
const app = express();

const port = 3000;

app.use(bodyParser.json());


mangoose.connect(
    process.env.DB_CONNECTION,
    { useUnifiedTopology: true },
    () =>{
        console.log('DB CONNECTED')
        app.listen(port,() => {
            console.log('Server Listening to: Port'+port)
        });
})