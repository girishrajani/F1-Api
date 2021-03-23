const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const app = express();

const port = 8080;
require('./app/routes')(app,{});


app.set('view engine','ejs')

app.get('/', function(req, res) {
    res.render("index");
});



app.listen(port,() => {
    console.log('Server Listening to: Port'+port)
})
