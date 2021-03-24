module.exports = function(app,db) {
    app.get('/LOL',(req,res) => {
        res.send('Lol')
    })
    app.post('/year',(req,res) => {
        console.log(req.body)
        res.send('Test')
    })
    app.post('/drivers-championship', (req,res) => {
        data = { Year: req.body.year, Driver: req.body.driver, Team: req.body.team};
        db.collection('drivers-championship').insert(data,(err,results) => {
            if (err) return console.log(err);
            res.send(result.ops[0]);
        })
    })
    app.post('/team-championship', (req,res) => {
        data = { Year: req.body.year, Team: req.body.team};
        db.collection('team-championship').insert(data,(err,results) => {
            if (err) return console.log(err);
            res.send(result.ops[0]);
        })
    })
}