const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const profileRoutes = require('./routes/profile');
const expenseRoutes = require('./routes/expense');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://localhost:27017/finances');


// Use routes
app.use('/api/profile', profileRoutes);
app.use('/api/expenses', expenseRoutes);

app.listen(3002, () => {
    console.log('Server running on http://localhost:3002');
});
const { PythonShell } = require('python-shell');

app.post('/predictRisk', (req, res) => {
    const { primaryIncome, expenses } = req.body;

    PythonShell.run('ml_model/predict.py', {
        args: [primaryIncome, expenses.housing, expenses.utilities]
    }, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ riskLevel: result[0] });
    });
});
app.get('/api/expenses/insights/:userId', async (req, res) => {
    const userId = req.params.userId;
    
    // Placeholder response for testing
    const insightsData = {
        riskLevel: 0,  // 0 = low risk, 1 = high risk - replace with ML model output
        expenses: {
            housing: 1200,
            utilities: 300,
            groceries: 450
        },
        additionalInfo: {
            savingsRate: 20,      // Example calculation
            spendingPercentage: 50 // Example calculation
        }
    };

    res.json(insightsData);
});
