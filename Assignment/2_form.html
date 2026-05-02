const form = document.getElementById('feedbackForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // 1. Grab elements
    const nameInput = document.getElementById('userName');
    const mailInput = document.getElementById('userMail');
    const detailsInput = document.getElementById('details');
    const resultsBox = document.getElementById('resultsContainer');
    const displayArea = document.getElementById('displayArea');

    // 2. Get values
    const nameVal = nameInput.value.trim();
    const mailVal = mailInput.value.trim();
    const detailsVal = detailsInput.value.trim();

    // 3. Clear old errors
    document.querySelectorAll('.error-msg').forEach(el => el.textContent = "");

    let hasErrors = false;

    // 4. Validation
    if (!nameVal || !mailVal || !detailsVal) {
        alert("Fill in all parts!");
        hasErrors = true;
    }

    if (/\d/.test(nameVal)) {
        document.getElementById('nameError').textContent = "No numbers allowed in name.";
        hasErrors = true;
    }

    // 5. THE DISPLAY PART
    if (!hasErrors) {
        console.log("Success! Data caught:", { nameVal, mailVal, detailsVal });
        
        // Make the hidden box visible
        resultsBox.style.display = "block";

        // Inject the text
        displayArea.innerHTML = `
            <div class="result-item"><strong>User:</strong> ${nameVal}</div>
            <div class="result-item"><strong>Mail/ID:</strong> ${mailVal}</div>
            <div class="result-item"><strong>Message:</strong> ${detailsVal}</div>
        `;

        // Clear form for next entry
        form.reset();
    }
});
