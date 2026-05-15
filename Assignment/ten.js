const dropdown = document.getElementById("dropdown");
const listbox = document.getElementById("listbox");
const resDrop = document.getElementById("res-drop");
const resList = document.getElementById("res-list");

dropdown.onchange = function(event) {
    resDrop.textContent = event.target.value;
};

listbox.addEventListener("change", function() {
    resList.innerHTML = "";
    
    for (let i = 0; i < listbox.options.length; i++) {
        if (listbox.options[i].selected) {
            const li = document.createElement("li");
            li.textContent = listbox.options[i].value;
            resList.appendChild(li);
        }
    }
});
