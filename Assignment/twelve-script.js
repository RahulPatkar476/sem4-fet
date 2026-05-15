function startAuth() {
    const SECRET_PIN = "1234";
    let inputPin = "";
    let attempts = 0;
    const maxAttempts = 3;

    let messageElement = document.getElementById("access-message");

    // DO...WHILE LOOP
    do {
        inputPin = prompt("Enter the 4-digit Secret PIN:");

        // If Cancel button is pressed
        if (inputPin === null) {
            messageElement.innerHTML = "⚠ Authentication Cancelled.";
            messageElement.className = "denied";
            return;
        }

        attempts++;

        // Correct PIN check
        if (inputPin === SECRET_PIN) {
            messageElement.innerHTML = "✅ ACCESS GRANTED. Welcome back!";
            messageElement.className = "success";
            return;
        }

        // Wrong PIN behavior
        alert(
            "❌ Incorrect PIN!\nRemaining Attempts: " + 
            (maxAttempts - attempts)
        );

    } while (attempts < maxAttempts);

    // Failed after exhausting all attempts
    messageElement.innerHTML = "❌ SYSTEM LOCKED. Too many failed attempts.";
    messageElement.className = "denied";
}
