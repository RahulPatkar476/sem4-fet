const form = document.getElementById('feedbackForm');

form.addEventListener('submit', (event) => {
    // 1. Stop the page from refreshing
    event.preventDefault();

    // 2. Get the values
    const name = document.getElementById('userName').value.trim();
    const rating = document.getElementById('userRating').value;
    const comments = document.getElementById('comments').value.trim();

    // Reset error messages
    document.querySelectorAll('.error-msg').forEach(el => el.textContent = "");

    let hasErrors = false;

    // Check 1: Mandatory Fields
    if (!name || !rating || !comments) {
        alert("Please fill in all mandatory parts!");
        hasErrors = true;
    }

    // Check 2: No numbers in Name (RegEx check)
    // /\d/ matches any digit 0-9
    if (/\d/.test(name)) {
        document.getElementById('nameError').textContent = "Name cannot contain numbers.";
        hasErrors = true;
    }

    // Check 3: Rating Range
    if (rating < 1 || rating > 10) {
        document.getElementById('ratingError').textContent = "Rating must be between 1 and 10.";
        hasErrors = true;
    }

    // 3. Final Result
    if (!hasErrors) {
        alert("Success! Thank you for your feedback.");
        form.reset(); // Clear the form
    }
});
