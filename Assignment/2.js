const technicalData = [
    {
        category: "Frontend Development",
        skills: ["HTML5 & CSS3", "Modern JavaScript (ES6+)", "React.js Framework"]
    },
    {
        category: "Backend Systems",
        skills: ["Node.js Runtime", "RESTful API Design", "PostgreSQL Databases"]
    },
    {
        category: "DevOps & Tools",
        skills: ["Git Version Control", "Docker Containers", "AWS Cloud Services"]
    }
];

const container = document.getElementById('skillsContainer');

// Create the parent Ordered List
const ol = document.createElement('ol');
ol.className = "main-categories";

technicalData.forEach(item => {
    // Create Category (LI for OL)
    const categoryLi = document.createElement('li');
    categoryLi.textContent = item.category;

    // Create Skills List (Nested UL)
    const skillsUl = document.createElement('ul');
    skillsUl.className = "skill-items";

    item.skills.forEach(skill => {
        const skillLi = document.createElement('li');
        skillLi.textContent = skill;
        skillsUl.appendChild(skillLi);
    });

    // Nest the UL inside the Category LI
    categoryLi.appendChild(skillsUl);
    ol.appendChild(categoryLi);
});

container.appendChild(ol);
