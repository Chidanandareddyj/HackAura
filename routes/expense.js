const express = require('express');
const Expense = require('../models/Expense');
const router = express.Router();

router.post('/', async (req, res) => {
    const expense = new Expense(req.body);
    try {
        await expense.save();
        res.status(201).json(expense);
    } catch (error) {
        res.status(500).json({ error });
    }
});

router.get('/insights/:userId', async (req, res) => {
    // Fetch expenses, calculate insights, and return to client
    // Placeholder logic for insights
    res.json({ message: "Insights calculation here" });
});

module.exports = router;
