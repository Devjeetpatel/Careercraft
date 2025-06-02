// back button function
document.getElementById
    ("back").addEventListener("click", () => {
        window.location.href = "choice.html";
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
                { title: "B.Com in Accounting and Finance", Info: "B.Com in Accounting and Finance is a 3-year undergraduate course that focuses on financial accounting, taxation, auditing, and corporate finance. It prepares students for careers in finance, banking, and accounting, and is a foundation for professional courses like CA and CFA." },
                { title: "MBA in Finance", Info: "MBA in Finance is a 2-year postgraduate program that focuses on financial management, investment analysis, and corporate finance. It prepares students for leadership roles in banking, investment, and financial services." },
                { title: "Certified Public Accountant (CPA)", Info: "" },
                { title: "Chartered Financial Analyst (CFA)", Info: "" },
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
            coursesData[selectedField].forEach(courses => {
                const course = document.createElement('div');
                course.classList.add('field');

                course.innerHTML = `
                <article class="course-grid">
                    <div class="course-title">
                            <p class="course-name" >${courses.title}</p>
                    </div>
                    <div class="box-inner-p">
                        <div class="">
                            <p class="">${courses.Info}</p>
                        </div>
                    </div>
                    <div class="box-inner-p">
                        <button class="bottom-button explore-button" id="cou">Explore college</button>
                    </div>
                </article>
                `;

                // stores selected cousre for further use
                const clickedbutton = course.querySelector('.explore-button');
                clickedbutton.addEventListener('click',()=> {
                    localStorage.setItem('selectedcourse', courses.title);
                    window.location.href = 'college.html';
                    console.log("title setted")
                });

                coursesListContainer.appendChild(course);

            });
        };

    } else {
        coursesListContainer.textContent = 'No field selected. Please go back and select a field.';
    }
});