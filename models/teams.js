const mangoose = require('mongoose');

const TeamChampionship = mangoose.Schema({
    year : {
        type: String,
        required: true,
        unique : true
    },
    teamName: {
        type: String,
        required: true,
    },
    driver1Name: {
        type: String,
        required: true,
    },
    driver2Name: {
        type: String,
        required: true,
    }
});

module.exports = mangoose.model('Team-Championship', TeamChampionship);