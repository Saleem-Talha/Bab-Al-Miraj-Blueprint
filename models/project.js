const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    projectId: {
        type: String,
        required: true,
        unique: true
    },
    projectName: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    jobOrderNumber: {
        type: Number,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Project', projectSchema);
