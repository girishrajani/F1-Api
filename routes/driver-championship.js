const express =  require('express');

const router = express.Router();

router.get('/', (req,res) => {
    res.send('Drivers Champhionship')
})


module.exports = router;