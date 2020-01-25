const mongoose = require('mongoose')

const RefusedBribeSchema = new mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    city: {
        type: String,
        required: [true, 'Please enter your city'],
    },
    state :{
        type: String,
        required: [true, 'Please enter your city'],
    },
    reason: {
        type: String
    },
    service: {
        type: String
    },
    datetime: {
        type: Date
    },
    govtId: {
        type: Number
    }
});

const RefusedBribe = mongoose.model('RefusedBribe', RefusedBribeSchema)

module.exports = RefusedBribe

