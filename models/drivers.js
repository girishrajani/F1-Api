const mongoose = require('mongoose');

const DriversChampionship = mongoose.Schema({
    year: {
        type: String,
        required: true
    },
    driverName: {
        type: String,
        required: true
    },
    teamName: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Drivers-Championship', DriversChampionship)