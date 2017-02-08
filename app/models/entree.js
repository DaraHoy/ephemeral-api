// Module Dependencies =========================================================
var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// Entree Schema ===============================================================
var EntreeSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    img_url: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
});

// Expose Model ================================================================
module.exports = mongoose.model('Entree', EntreeSchema);
