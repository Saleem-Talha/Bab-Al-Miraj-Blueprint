const mongoose = require('mongoose');

const userDataSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    jobStatus: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    currentSalary: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("UserData", userDataSchema);
