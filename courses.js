// back button function
document.getElementById
("back").addEventListener("click",()=>{
    window.location.href="choice.html";
})

// calls selectedField data and suggest course accordingly
document.addEventListener('DOMContentLoaded', function () {
    const selectedFieldElement = document.getElementById('selected-field-course');
    const coursesListContainer = document.getElementById('courses-list');
    const selectedField = localStorage.getItem('selectedField');

    if (selectedField) {
        selectedFieldElement.textContent = selectedField;

        // course data to display
        const coursesData = {
            "Accounting & Finance": [
                { title: "B.Com in Accounting and Finance", Info: "vhbhkrbhbshkbvhkdfb hkv hfe vh" },
                { title: "MBA in Finance", Info: "vhbhkrbhbshkbvhkdfb hkv hfe vh" },
                { title: "Certified Public Accountant (CPA)", Info: "vhbhkrbhbshkbvhkdfb hkv hfe vh" },
                { title: "Chartered Financial Analyst (CFA)", Info: "vhbhkrbhbshkbvhkdfb hkv hfe vh" },
            ],
            "Business & Management": [
                { title: "BBA (Bachelor of Business Administration)", Info: "vhbhkrbhbshkbvhkdfb hkv hfe vh" },
                { title: "MBA (Master of Business Administration)", Info: "vhbhkrbhbshkbvhkdfb hkv hfe vh" },
                { title: "Bachelor of Management Studies (BMS)", Info: "vhbhkrbhbshkbvhkdfb hkv hfe vh" },
                { title: "PGDM (Post Graduate Diploma in Management)", Info: "vhbhkrbhbshkbvhkdfb hkv hfe vh" },
            ],
            "Law": [
                { title: "BA LLB (Bachelor of Arts and Bachelor of Laws)", Info: "vhbhkrbhbshkbvhkdfb hkv hfe vh" },
                { title: "BSc LLB (Bachelor of Science and Bachelor of Laws)", Info: "vhbhkrbhbshkbvhkdfb hkv hfe vh" },
                { title: "LLB (Bachelor of Laws)", Info: "vhbhkrbhbshkbvhkdfb hkv hfe vh" },
            ],
            "Engineering & Technology (PCM)": [
                { title: "Bachelor of Technology (B.Tech) in various specializations", Info: "vhbhkrbhbshkbvhkdfb hkv hfe vh" },
                { title: "Bachelor of Engineering (B.E.) in various specializations", Info: "vhbhkrbhbshkbvhkdfb hkv hfe vh" },
                { title: "Diploma in Engineering", Info: "vhbhkrbhbshkbvhkdfb hkv hfe vh" },
            ],
            "Medical & Allied Health Sciences (PCB)": [
                { title: "MBBS (Bachelor of Medicine and Bachelor of Surgery)", Info: "vhbhkrbhbshkbvhkdfb hkv hfe vh" },
                { title: "BDS (Bachelor of Dental Surgery)", Info: "vhbhkrbhbshkbvhkdfb hkv hfe vh" },
                { title: "BSc Nursing", Info: "vhbhkrbhbshkbvhkdfb hkv hfe vh" },
                { title: "B.Pharmacy", Info: "vhbhkrbhbshkbvhkdfb hkv hfe vh" },
            ],
        };
        // display function
        if (coursesData[selectedField]) {
            coursesData[selectedField].forEach(field => {
                const course = document.createElement('div');
                course.classList.add('field');

                course.innerHTML = `
                <article class="">
                    <div class="course-title">
                            <p class="course-name" >${field.title}</p>
                    </div>
                    <div class="box-inner-p">
                        <div class="">
                            <p class="">${field.Info}</p>
                        </div>
                    </div>
                </article>
                `;
                coursesListContainer.appendChild(course);

            });
        };

    } else {
        coursesListContainer.textContent = 'No field selected. Please go back and select a field.';
    }
});