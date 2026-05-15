function startAuth() {
    const SECRET_PIN = "1234";
    let inputPin = "";
    let attempts = 0;
    const maxAttempts = 3;

    let messageElement = document.getElementById("access-message");
    do {
        inputPin = prompt("Enter the 4-digit Secret PIN:");
        if (inputPin === null) {
            messageElement.innerHTML = "⚠ Authentication Cancelled.";
            messageElement.className = "denied";
            return;
        }

        attempts++;

        if (inputPin === SECRET_PIN) {
            messageElement.innerHTML = "ACCESS GRANTED. Welcome back!";
            messageElement.className = "success";
            return;
        }

        alert(
            "Incorrect PIN!\nRemaining Attempts: " + 
            (maxAttempts - attempts)
        );

    } while (attempts < maxAttempts);

    messageElement.innerHTML = "SYSTEM IS LOCKED. Too many failed attempts.";
    messageElement.className = "denied";
}
