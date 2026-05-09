function addCategory() {
    const name = prompt("Enter Category:");

    if (!name) return;

    const ol = document.querySelector("ol");

    const li = document.createElement("li");
    li.innerHTML = "<strong>" + name + "</strong>";

    const ul = document.createElement("ul");

    li.appendChild(ul);
    ol.appendChild(li);
}

function addSkill() {
    const num = prompt("Enter Category Number (1, 2, ...)");
    const skill = prompt("Enter Skill:");

    if (!num || !skill) return;

    const categories = document.querySelectorAll("ol > li");

    if (categories[num - 1]) {
        const ul = categories[num - 1].querySelector("ul");

        const li = document.createElement("li");
        li.textContent = skill;

        ul.appendChild(li);
    } else {
        alert("Invalid Category Number");
    }
}
