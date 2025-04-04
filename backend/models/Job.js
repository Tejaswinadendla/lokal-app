const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    id: String,
    title: String,
    location: String,
    salary: String,
    phone: String,
    description: String
});

module.exports = mongoose.model('Job', JobSchema);
