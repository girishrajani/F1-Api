const { json } = require('body-parser');
const express =  require('express');

const router = express.Router();
const Drivers = require('../models/drivers')

router.get('/', async (req,res) => {
    // res.send('Drivers Champhionship')
    try{
        const DriverData = await Drivers.find();
        res.json(DriverData);
    }catch(e){
        res.json({message: e});
    }
})

router.get('/:year', async (req,res) => {
    // res.send('Drivers Champhionship')
    try{
        const DriverData = await Drivers.collection.findOne({'year': req.params.year});
        res.json(DriverData);
    }catch(e){
        res.json({message: '404'});
    }
})

router.post('/', async (req,res) => {
    const DriverData = new Drivers({
        year: req.body.year,
        driverName: req.body.driverName,
        teamName: req.body.teamName
    });
    try{
        const savedData = await DriverData.save();
        console.log(savedData)
        res.json(savedData);
    }catch(e){
        res,json({message:e});
    }
    
});
module.exports = router;