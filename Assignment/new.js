let villages = ["Green Village", "River Town"];
updateDropdowns();

function addVillage() {
  let nameInput = document.getElementById("newVillageName");
  
  if (nameInput.value.trim() !== "") {
    villages.push(nameInput.value); 
    nameInput.value = "";           
    updateDropdowns();               
  }
}

function updateDropdowns() {
  let sourceDropdown = document.getElementById("sourceDropdown");
  let destinationDropdown = document.getElementById("destinationDropdown");
  
  sourceDropdown.innerHTML = '<option value="">Select Village...</option>';
  destinationDropdown.innerHTML = '<option value="">Select Village...</option>';
  
  villages.forEach(function(village) {
    sourceDropdown.innerHTML += `<option value="${village}">${village}</option>`;
    destinationDropdown.innerHTML += `<option value="${village}">${village}</option>`;
  });
}

function updatePrice() {
  let liters = document.getElementById("litersInput").value;
  let cost = liters * 2; 
  document.getElementById("totalCost").innerText = cost;
}

function submitTransfer() {
  let sourceVillage = document.getElementById("sourceDropdown").value;
  let destinationVillage = document.getElementById("destinationDropdown").value;
  let liters = document.getElementById("litersInput").value;
  let msg = document.getElementById("statusMessage");

  if (!sourceVillage || !destinationVillage || liters <= 0) {
    msg.style.color = "red";
    msg.innerText = "Please select both villages and enter valid liters.";
    return;
  }

  if (sourceVillage === destinationVillage) {
    msg.style.color = "red";
    msg.innerText = "Source and destination village cannot be the same.";
    return;
  }

  msg.style.color = "green";
  msg.innerText = `Dispatched ${liters}L from ${sourceVillage} to ${destinationVillage}.`;
}
