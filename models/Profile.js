const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    name: String,
    age: Number,
    employmentStatus: String,
    location: String
});

module.exports = mongoose.model('Profile', profileSchema);
