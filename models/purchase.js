const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
    purchaseId: {
        type: String,
        required: true,
        unique: true
    },
    companyName: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    unitPrice: {
        type: Number,
        required: true
    },
    totalAmount: {
        type: Number,
        required: true
    },
    vat: {
        type: Number,
        required: true
    },
    totalWithVat: {
        type: Number,
        required: true
    },
    projectName: {
        type: String,
        required: true
    },
    employeeName: {
        type: String,
        required: true
    },
    fuelExpense: {
        amount: {
            type: Number,
            required: true
        },
        vat: {
            type: Number,
            required: true
        }
    }
});

module.exports = mongoose.model('Purchase', purchaseSchema);
