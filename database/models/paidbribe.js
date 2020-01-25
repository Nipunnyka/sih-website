const mongoose = require('mongoose')

const PaidBribeSchema = new mongoose.Schema({
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

const PaidBribe = mongoose.model('PaidBribe',PaidBribeSchema)

module.exports = PaidBribe

