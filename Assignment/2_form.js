const form = document.getElementById('techForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // 1. Basic Fields
    const name = document.getElementById('userName').value.trim();
    const role = document.getElementById('userRole').value;

    // 2. Loop through Radio Buttons (to find the selected one)
    let selectedExp = "";
    const radios = document.getElementsByName('exp');
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            selectedExp = radios[i].value;
            break;
        }
    }

    // 3. Loop through Checkboxes (to get a list of all selected)
    let selectedSkills = [];
    const checkboxes = document.getElementsByName('skill');
    checkboxes.forEach((box) => {
        if (box.checked) {
            selectedSkills.push(box.value);
        }
    });

    // --- VALIDATION ---
    let errors = [];

    if (!name || /\d/.test(name)) errors.push("Valid Name is required (no numbers).");
    if (!role) errors.push("Please select a Role.");
    if (!selectedExp) errors.push("Please choose an Experience level.");
    if (selectedSkills.length === 0) errors.push("Choose at least one language.");

    // If there are errors, alert the first one and stop
    if (errors.length > 0) {
        alert("Errors found:\n" + errors.join("\n"));
    } else {
        console.log("Collected Data:", { name, role, selectedExp, selectedSkills });
        alert("Survey Submitted Successfully!");
    }
});
