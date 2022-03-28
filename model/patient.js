const mongoose = require('mongoose');
const { Schema } = mongoose;

const patientSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    age: Number,
    gender: String
});

const patient = mongoose.Model('Patient', patientSchema);

module.exports = patient