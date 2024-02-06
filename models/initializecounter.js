const mongoose = require('mongoose');
const Counter = require('./counter');

const initializeCounter = async () => {
    try {
        const existingCounter = await Counter.findOne({ _id: 'employeeId' });

        if (!existingCounter) {
            await Counter.create({ _id: 'employeeId', seq: 1000 });
            console.log('Counter initialized successfully.');
        } else {
            console.log('Counter already exists. Skipping initialization.');
        }
    } catch (err) {
        console.error('Error initializing counter:', err);
    }
};

module.exports = initializeCounter;