document.getElementById
("back").addEventListener("click",()=>{
    window.location.href="choice.html";
})


document.addEventListener('DOMContentLoaded', function () {
    const selectedFieldElement = document.getElementById('selected-field-career');
    const careersListContainer = document.getElementById('careers-list');
    const selectedField = localStorage.getItem('selectedField');

    if (selectedField) {
        selectedFieldElement.textContent = selectedField;

        const careersData = {
            "Accounting & Finance": [
                "Accountant",
                "Financial Analyst",
                "Auditor",
                "Investment Banker"
            ],
            "Business & Management": [
                "Business Analyst",
                "Marketing Manager",
                "Human Resources Manager",
                "Operations Manager"
            ],
            "Law": [
                "Lawyer",
                "Judge",
                "Legal Advisor",
                "Solicitor"
            ],
            "Engineering & Technology (PCM)": [
                "Software Engineer",
                "Mechanical Engineer",
                "Electrical Engineer",
                "Civil Engineer"
            ],
            "Medical & Allied Health Sciences (PCB)": [
                "Doctor",
                "Dentist",
                "Nurse",
                "Pharmacist"
            ],
        };

        if (careersData[selectedField]) {
            const careers = careersData[selectedField];
            const ul = document.createElement('ul');
            careers.forEach(career => {
                const li = document.createElement('li');
                li.textContent = career;
                ul.appendChild(li);
            });
            careersListContainer.appendChild(ul);
        } else {
            careersListContainer.textContent = `No specific careers found for ${selectedField}.`;
        }

    } else {
        careersListContainer.textContent = 'No field selected. Please go back and select a field.';
    }
});