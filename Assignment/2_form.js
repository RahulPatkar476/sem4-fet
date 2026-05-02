const form = document.getElementById('feedbackForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('userName').value.trim();
    const rating = document.getElementById('userMail').value.trim();
    const comments = document.getElementById('details').value.trim();
    const resultsContainer = document.getElementById('resultsContainer');
    const displayArea = document.getElementById('displayArea');

    document.querySelectorAll('.error-msg').forEach(el => el.textContent = "");

    let hasErrors = false;

    if (!name || !mail || !details) {
        alert("Please fill in all mandatory parts!");
        hasErrors = true;
    }

    if (/\d/.test(name)) {
        document.getElementById('nameError').textContent = "Name cannot contain numbers.";
        hasErrors = true;
    }

    if (!hasErrors) {
        resultsContainer.style.display = "block";
        displayArea.innerHTML = `
            <div class="result-item"><strong>Name:</strong> ${name}</div>
            <div class="result-item"><strong>Rating:</strong> ${mail}/10</div>
            <div class="result-item"><strong>Comments:</strong> ${details}</div>
        `;
        form.reset();
    }
});
