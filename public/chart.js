async function loadChart(data) {
    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Housing', 'Utilities', 'Groceries'],
            datasets: [{
                label: 'Monthly Expenses',
                data: [data.housing, data.utilities, data.groceries],
                backgroundColor: ['rgba(75, 192, 192, 0.2)'],
                borderColor: ['rgba(75, 192, 192, 1)'],
                borderWidth: 1
            }]
        },
        options: { scales: { y: { beginAtZero: true } } }
    });
}

async function loadData() {
    try {
        const userId = "user_id_here"; // Replace with actual user ID
        const response = await fetch(`/api/expenses/insights/${userId}`);
        
        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`);
        }

        const data = await response.json();
        
        // Display the risk level
        const riskLevelElement = document.getElementById('risk-output');
        riskLevelElement.innerText = `Risk Level: ${data.riskLevel !== undefined ? (data.riskLevel === 0 ? "Low" : "High") : "N/A"}`;

        // Display additional insights
        document.getElementById('savings-rate').innerText = data.additionalInfo.savingsRate || "N/A";
        document.getElementById('spending-percentage').innerText = data.additionalInfo.spendingPercentage || "N/A";

        // Populate the Chart.js graph
        const ctx = document.getElementById('expenseChart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Housing', 'Utilities', 'Groceries'],
                datasets: [{
                    label: 'Monthly Expenses',
                    data: [
                        data.expenses?.housing || 0,
                        data.expenses?.utilities || 0,
                        data.expenses?.groceries || 0
                    ],
                    backgroundColor: ['rgba(75, 192, 192, 0.2)'],
                    borderColor: ['rgba(75, 192, 192, 1)'],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: { beginAtZero: true }
                }
            }
        });
    } catch (error) {
        console.error("Error loading data:", error);
        document.getElementById('risk-output').innerText = "Error loading data.";
    }
}

// Run loadData when results.html loads
window.onload = loadData;
