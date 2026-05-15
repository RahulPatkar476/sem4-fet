function processForm(event) {
    event.preventDefault();

    const domainRadio = document.querySelector('input[name="domain"]:checked');
    const checkedBoxes = document.querySelectorAll('input[name="modules"]:checked');
    
    const domainOutput = document.getElementById("out-domain");
    const modulesOutput = document.getElementById("out-modules");
    const summaryBox = document.getElementById("summary-box");

    modulesOutput.innerHTML = "";

    domainOutput.textContent = domainRadio.value;

    if (checkedBoxes.length === 0) {
        const li = document.createElement("li");
        li.textContent = "No modules selected";
        li.style.color = "#f87171";
        modulesOutput.appendChild(li);
    } else {
        for (let i = 0; i < checkedBoxes.length; i++) {
            const li = document.createElement("li");
            li.textContent = checkedBoxes[i].value;
            modulesOutput.appendChild(li);
        }
    }

    summaryBox.classList.remove("hidden");
}
