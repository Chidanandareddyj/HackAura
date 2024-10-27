const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Profile' },
    primaryIncome: Number,
    additionalIncome: Number,
    expenses: {
        housing: Number,
        utilities: Number,
        insurance: Number,
        loans: Number,
        phoneInternet: Number,
        subscriptions: Number,
        groceries: Number
    },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Expense', expenseSchema);
