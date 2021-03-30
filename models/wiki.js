const mongoose = require('mongoose');

const WikiSeasons = mongoose.Schema({
    year: {
        type: String,
        required: true,
        unique : true
    },
    wikiLink: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('WikiSeasons', WikiSeasons);