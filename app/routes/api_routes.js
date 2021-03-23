module.exports = function(app,db) {
    app.get('/LOL',(req,res) => {
        res.send('Lol')
    })
}