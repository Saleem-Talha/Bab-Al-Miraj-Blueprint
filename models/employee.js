const mongoose = require('mongoose');
const Counter = require('./counter');
const employeeSchema = new mongoose.Schema({
    ename: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    dateOfJoining: {
        type: Date,
        required: true
    },
    dateOfTermination: {
        type: Date
    },
    designation: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true,
    },
    id:{
        type: Number,
        unique: true
    }
});

employeeSchema.pre('save', async function (next) {
    if (!this.isNew) {
        next();
        return;
    }

    try {
        // Increment the counter by 1 and retrieve the updated value
        const counter = await Counter.findOneAndUpdate(
            { _id: 'employeeId' },
            { $inc: { seq: 1 } },
            { new: true, upsert: true }
        );

        // Log the current counter value
        console.log('Current Counter Value:', counter.seq);

        // Assign the updated counter value to the employee ID
        this.id = counter.seq;

        next();
    } catch (err) {
        next(err);
    }
});

module.exports = mongoose.model("Employee", employeeSchema);