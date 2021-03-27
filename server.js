const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
const app = express();

const port = 3000;

mangoose.connect(
    process.env.DB_CONNECTION,
    { useUnifiedTopology: true },
    () =>{
        console.log('DB CONNECTED')
        app.listen(port,() => {
            console.log('Server Listening to: Port'+port)
        });
})