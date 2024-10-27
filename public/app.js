// Redirects to personal.html on "Get Started" button click on index.html
document.getElementById('getStartedBtn')?.addEventListener('click', function() {
    window.location.href = 'personal.html';
});

document.getElementById('nextButton')?.addEventListener('click', async function() {
    const data = {
        name: document.getElementById('name').value,
        age: document.getElementById('age').value,
        employmentStatus: document.getElementById('employment').value,
        location: document.getElementById('location').value
    };

    const response = await fetch('/api/profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });

    if (response.ok) {
        // Redirect to the results page after successful submission
        window.location.href = 'results.html';
    } else {
        console.error("Failed to submit data");
    }
});




