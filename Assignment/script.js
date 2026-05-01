let roles = [
  "Aspiring Full Stack Developer",
  "Frontend Developer",
  "JavaScript Enthusiast", // Fixed: replaced colon with quote
  "Future Software Engineer"
];

let index = 0;

function changeRole() {
  const roleElement = document.getElementById("role");
  const currentRole = roleElement.textContent; // Fixed spelling: currentRole
  
  // Fixed: prompt (not promt)
  let newRole = prompt("What is your new professional role?", currentRole);
  
  if (newRole && newRole.trim() !== "") {
    roleElement.textContent = newRole.trim();
    alert("Role updated successfully to: " + newRole);
  } else {
    alert("No changes made.");
  }
}

const searchInput = document.getElementById('project-search');
const cards = document.querySelectorAll('.card');

searchInput.addEventListener('keyup', function(event) {
  // Fixed spelling: searchTerm
  const searchTerm = event.target.value.toLowerCase();
  
  cards.forEach(card => {
    const projectTitle = card.querySelector('h3').textContent.toLowerCase();
    
    if (projectTitle.includes(searchTerm)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
