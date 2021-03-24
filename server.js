const jsonParser = require('body-parser');
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const db = require('./config/db');

const app = express();
const port = 8080;

app.use(jsonParser.urlencoded({extended: true}));

app.set('view engine','ejs')

app.get('/', function(req, res) {
    res.render("index");
});

MongoClient.connect(db.url, (err,database) => {
    if (err) return console.log(err);
    require('./app/routes')(app,{});
    app.listen(port,() => {
        console.log('Server Listening to: Port'+port)
    })
})
