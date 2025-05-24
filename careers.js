// back button funtion
document.getElementById
("back").addEventListener("click",()=>{
    window.location.href="choice.html";
})

// calls stored field and suggest careers
document.addEventListener('DOMContentLoaded', function () {
    const selectedFieldElement = document.getElementById('selected-field-career');
    const careersListContainer = document.getElementById('careers-list');
    const selectedField = localStorage.getItem('selectedField');

    if (selectedField) {
        selectedFieldElement.textContent = selectedField;

// data to display accordingly
        const careersData = {
            "Accounting & Finance": [
                { title: "Accountant"},
                { title: "Financial Analyst"},
                { title: "Auditor"},
                { title: "Investment Banker"}
            ],
            "Business & Management": [
                { title: "Business Analyst"},
                { title: "Marketing Manager"},
                { title: "Human Resources Manager"},
                { title: "Operations Manager"}
            ],
            "Law": [
                { title: "Lawyer"},
                { title: "Judge"},
                { title: "Legal Advisor"},
                { title: "Solicitor"}
            ],
            "Engineering & Technology (PCM)": [
                { title: "Software Engineer"},
                { title: "Mechanical Engineer"},
                { title: "Electrical Engineer"},
                { title: "Civil Engineer"}
            ],
            "Medical & Allied Health Sciences (PCB)": [
                { title: "Doctor"},
                { title: "Dentist"},
                { title: "Nurse"},
                { title: "Pharmacist"}
            ],
        };

    //   data display function
        if (careersData[selectedField]) {
            careersData[selectedField].forEach(field => {
                const careers = document.createElement('div');
                careers.classList.add('field');

                careers.innerHTML = `
                <article class="">
                    <div class="course-title">
                            <p class="course-name" >${field.title}</p>
                    </div>
                </article>
                `;
                careersListContainer.appendChild(careers);

            });
        };

    } else {
        careersListContainer.textContent = 'No field selected. Please go back and select a field.';
    }
});