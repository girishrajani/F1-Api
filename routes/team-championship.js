const { json } = require('body-parser');
const express =  require('express');

const router = express.Router();
const Teams = require('../models/teams')

router.get('/', async (req,res) => {
    // res.send('Drivers Champhionship')
    try{
        const TeamData = await Teams.find();
        res.json(TeamData);
    }catch(e){
        res.json({message: e});
    }
})

router.get('/:year', async (req,res) => {
    // res.send('Drivers Champhionship')
    try{
        const TeamData = await Teams.collection.findOne({'year': req.params.year});
        res.json(TeamData);
    }catch(e){
        res.json({message: '404'});
    }
})

router.post('/', async (req,res) => {
    const TeamData = new Teams({
        year: req.body.year,
        teamName: req.body.teamName,
        driver1Name: req.body.driver1Name,
        driver2Name: req.body.driver2Name
    });
    try{
        const savedData = await TeamData.save();
        console.log(savedData)
        res.json(savedData);
    }catch(e){
        res,json({message:e});
    }
    
});
module.exports = router;