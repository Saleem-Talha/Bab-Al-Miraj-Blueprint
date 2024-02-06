const mongoose = require('mongoose');

const cashReceivingSchema = new mongoose.Schema({
    receivingId: {
        type: String,
        required: true,
        unique: true
    },
    date: {
        type: Date,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    paidToEmployee: {
        type: String,
        required: true
    },
    
    balanceAfterPayment: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('CashReceiving', cashReceivingSchema);
