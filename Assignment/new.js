let villages = ["Green Village", "River Town"];
updateDropdown();

function addVillage() {
  let nameInput = document.getElementById("newVillageName");
  
  if (nameInput.value.trim() !== "") {
    villages.push(nameInput.value); 
    nameInput.value = "";           
    updateDropdown();               
  }
}

function updateDropdown() {
  let dropdown = document.getElementById("sourceDropdown");
  dropdown.innerHTML = '<option value="">Select Village...</option>';
  
  villages.forEach(function(village) {
    dropdown.innerHTML += `<option value="${village}">${village}</option>`;
  });
}

function updatePrice() {
  let liters = document.getElementById("litersInput").value;
  let cost = liters * 2; 
  document.getElementById("totalCost").innerText = cost;
}

function submitTransfer() {
  let selectedVillage = document.getElementById("sourceDropdown").value;
  let liters = document.getElementById("litersInput").value;
  let msg = document.getElementById("statusMessage");

  if (!selectedVillage || liters <= 0) {
    msg.style.color = "red";
    msg.innerText = "Please select a village and enter valid liters.";
    return;
  }

  msg.style.color = "green";
  msg.innerText = `Success! Dispatched ${liters}L from ${selectedVillage}.`;
}
