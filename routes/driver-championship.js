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

router.post('/', async (req,res) => {
    const DriverData = new Drivers({
        year: req.body.year,
        driverName: req.body.driverName,
        teamName: req.body.teamName
    });
    // try{
    //     const savedData = await DriverData.save();
    //     console.log(savedData)
    //     res.json(savedData);
    // }catch(e){
    //     res,json({message:e});
    // }
    DriverData.save()
        .then(data => {
            console.log(data)
            res.json(data);
        })
        .catch(err => {
            console.log(err)
            res.json({message:err})
        })
    
});
// router.post('/', (req,res) => {
//     console.log(req.body.driverName)
//     res.send(req.body)
// })
module.exports = router;