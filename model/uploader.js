const mongoose = require('mongoose');
const { Schema } = mongoose;

const uploaderSchema = new Schema({
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
    }
});

const uploader = mongoose.Model('Uploader', uploaderSchema);

module.exports = uploader