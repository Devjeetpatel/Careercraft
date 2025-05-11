document.addEventListener('DOMContentLoaded', function () {
    const selectedFieldElement = document.getElementById('selected-field-course');
    const coursesListContainer = document.getElementById('courses-list');
    const selectedField = localStorage.getItem('selectedField');

    if (selectedField) {
        selectedFieldElement.textContent = selectedField;

        const coursesData = {
            "Accounting & Finance": [
                "B.Com in Accounting and Finance",
                "MBA in Finance",
                "Certified Public Accountant (CPA)",
                "Chartered Financial Analyst (CFA)"
            ],
            "Business & Management": [
                "BBA (Bachelor of Business Administration)",
                "MBA (Master of Business Administration)",
                "Bachelor of Management Studies (BMS)",
                "PGDM (Post Graduate Diploma in Management)"
            ],
            "Law": [
                "BA LLB (Bachelor of Arts and Bachelor of Laws)",
                "BSc LLB (Bachelor of Science and Bachelor of Laws)",
                "LLB (Bachelor of Laws)"
            ],
            "Engineering & Technology (PCM)": [
                "Bachelor of Technology (B.Tech) in various specializations",
                "Bachelor of Engineering (B.E.) in various specializations",
                "Diploma in Engineering"
            ],
            "Medical & Allied Health Sciences (PCB)": [
                "MBBS (Bachelor of Medicine and Bachelor of Surgery)",
                "BDS (Bachelor of Dental Surgery)",
                "BSc Nursing",
                "B.Pharmacy"
            ],
        };

        if (coursesData[selectedField]) {
            const courses = coursesData[selectedField];
            const ul = document.createElement('ul');
            courses.forEach(course => {
                const li = document.createElement('li');
                li.textContent = course;
                ul.appendChild(li);
            });
            coursesListContainer.appendChild(ul);
        } else {
            coursesListContainer.textContent = `No specific courses found for ${selectedField}.`;
        }

    } else {
        coursesListContainer.textContent = 'No field selected. Please go back and select a field.';
    }
});