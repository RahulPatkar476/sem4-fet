technicalData.forEach(item => {
    const categoryLi = document.createElement('li');
    categoryLi.textContent = item.category;

    const skillsUl = document.createElement('ul');
    skillsUl.className = "skill-items";

    item.skills.forEach(skill => {
        const skillLi = document.createElement('li');
        skillLi.className = "skill-row"; 
        
        const textSpan = document.createElement('span');
        textSpan.textContent = skill;
        
        const btn = document.createElement('button');
        btn.textContent = "×";
        btn.className = "delete-btn";
        btn.onclick = () => skillLi.remove(); 
        skillLi.appendChild(textSpan);
        skillLi.appendChild(btn);
        skillsUl.appendChild(skillLi);
    });

    categoryLi.appendChild(skillsUl);
    ol.appendChild(categoryLi);
});

container.appendChild(ol);
