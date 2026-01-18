// ============================================
// SPA Navigation System
// ============================================

function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.page-section').forEach(section => {
        section.classList.remove('active');
    });
    // Show selected section
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.add('active');
    }
}

function setupBackButton(targetSection) {
    const backContainer = document.getElementById('back-button-container');
    backContainer.innerHTML = '';
    
    if (targetSection) {
        const backButton = document.createElement('button');
        backButton.className = 'nav-button';
        backButton.id = 'back';
        backButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" width="24" height="24" fill="none"
                stroke="white" stroke-width="80" stroke-linecap="round" stroke-linejoin="round" class="myarrow">
                <path d="M640 192L256 512l384 320" />
            </svg>
        `;
        backButton.addEventListener('click', () => {
            showSection(targetSection);
        });
        backContainer.appendChild(backButton);
    }
}

// Navigation links
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('nav-home').addEventListener('click', (e) => {
        e.preventDefault();
        showSection('home');
        setupBackButton(null);
    });
    
    document.getElementById('nav-about').addEventListener('click', (e) => {
        e.preventDefault();
        showSection('about');
        setupBackButton(null);
    });
});

// ============================================
// Dark Mode Functionality
// ============================================

let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('theme-switch');

const enableDarkmode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
};

const disableDarkmode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null);
};

if (darkmode === "active") enableDarkmode();

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode');
    darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});

// ============================================
// Scroll Behavior
// ============================================

const navbar = document.getElementById("navbar");

if (navbar) {
    let prevScrollPos = window.pageYOffset;

    window.addEventListener("scroll", function () {
        let currentScrollPos = window.pageYOffset;

        if (prevScrollPos > currentScrollPos) {
            navbar.style.top = "0";
        } else {
            navbar.style.top = "-150px";
        }

        prevScrollPos = currentScrollPos;
    });
}

// ============================================
// Home Page - Stream Selection
// ============================================

document.getElementById("com")?.addEventListener("click", () => {
    localStorage.setItem("selectedStream", "Commerce");
    showSection('fields');
    setupBackButton('home');
    loadFields();
  });

document.getElementById("arts")?.addEventListener("click", () => {
    localStorage.setItem("selectedStream", "Arts");
    showSection('fields');
    setupBackButton('home');
    loadFields();
  });

document.getElementById("sci")?.addEventListener("click", () => {
    localStorage.setItem("selectedStream", "Science");
    showSection('fields');
    setupBackButton('home');
    loadFields();
  });

document.getElementById("dip")?.addEventListener("click", () => {
    localStorage.setItem("selectedStream", "Diploma");
    showSection('fields');
    setupBackButton('home');
    loadFields();
});

// ============================================
// Fields Page
// ============================================

const fieldsData = {
    Commerce: [
        { title: "Accounting & Finance", image: "assets/commerce/acc&finance.webp", id: "af" },
        { title: "Business & Management", image: "assets/commerce/business.png", id: "bm" },
        { title: "Banking & Insurance", image: "assets/banking.jpg", id: "bi" },
        { title: "Law", image: "assets/law1.jpg", id: "law" },
        { title: "Economics & Statistics", image: "assets/economic.jpg", id: "es" },
        { title: "Information Technology & Digital Media", image: "assets/media.jpg", id: "itdm" },
        { title: "Media & Communication", image: "assets/communication.jpg", id: "mc" },
        { title: "Hotel, Travel & Hospitality Management", image: "assets/hotel.jpg", id: "hthm" },
        { title: " Creative Fields", image: "assets/creative.jpg", id: "cf" },
        { title: " Education & Teaching", image: "assets/education.jpg", id: "et" }
    ],
    Science: [
        { title: "Engineering & Technology (PCM)", image: "assets/e_tpcm.jpg" },
        { title: "Medical & Allied Health Sciences (PCB)", image: "assets/mahs.jpg" },
        { title: "IT & Computer Science", image: "assets/itcs.jpg" },
        { title: "Architecture & Design (PCM required)", image: "assets/ad.jpg" },
        { title: "Aviation", image: "assets/aviation.jpg" },
        { title: "Psychology, Social Science & Liberal Arts", image: "assets/psy.jpg" },
        { title: "Law", image: "assets/law.jpg" },
        { title: "Business & Management", image: "assets/business.jpg" },
        { title: "Defense & Civil Services", image: "assets/defence.jpg" },
        { title: "Emerging Tech & Modern Fields", image: "assets/tech.jpg" }
    ],
    Arts: [
        { title: "Humanities & Social Sciences", image: "assets/humanities.jpg" },
        { title: "Languages & Literature", image: "assets/languages.jpg" },
        { title: "Fine Arts & Performing Arts", image: "assets/fapa.jpg" },
        { title: "Communication & Media", image: "assets/mass.jpg" },
        { title: "Education", image: "assets/education.jpg" },
        { title: "Law and Legal Studies", image: "assets/law.jpg" }
    ],
    Diploma: [
        { title: "Mechanical", image: "assets/mechanical.png" },
        { title: "Electrical", image: "assets/Electrical.jpg" },
        { title: "Civil", image: "assets/Civil.jpg" }
    ]
};

function loadFields() {
    const streamNameElement = document.getElementById('stream-name');
    const fieldsContainer = document.getElementById('fields-container');
    const selectedStream = localStorage.getItem('selectedStream');

    if (!streamNameElement || !fieldsContainer) return;

    streamNameElement.textContent = selectedStream || '';
    fieldsContainer.innerHTML = '';

    if (fieldsData[selectedStream]) {
        fieldsData[selectedStream].forEach(field => {
            const fieldElement = document.createElement('div');
            fieldElement.classList.add('field');

            fieldElement.innerHTML = `
                <article class="">
                    <div class="cover-image">
                        <a title="" id="${field.id || ''}">
                            <img data-perfmatters-preload class="img-size" src="${field.image}" alt="${field.title}">
                        </a>
                        <div class="entry-category">
                            <a href="" class="gridlove-cat gridlove-cat-3"></a>
                            <a href="" class="gridlove-cat gridlove-cat-2"></a>
                        </div>
                    </div>
                    <div class="box-inner-p">
                        <div class="">
                            <p class="">
                                <a id="field-link-${field.id || ''}">${field.title}</a>
                            </p>
                        </div>
                    </div>
                </article>
            `;

            fieldElement.addEventListener('click', function () {
                localStorage.setItem('selectedField', field.title);
                showSection('choice');
                setupBackButton('fields');
                loadChoice();
            });

            fieldsContainer.appendChild(fieldElement);
        });
    } else {
        fieldsContainer.textContent = 'No fields found for this stream.';
    }
}

// ============================================
// Choice Page
// ============================================

function loadChoice() {
    const fieldNameElement = document.getElementById('field');
    const choiceContainer = document.getElementById('choice-content');
    const selectedField = localStorage.getItem('selectedField');

    if (!fieldNameElement || !choiceContainer) return;

    if (selectedField) {
        fieldNameElement.textContent = selectedField;
        choiceContainer.innerHTML = '';

        const exploreCourseButton = document.createElement('button');
        exploreCourseButton.classList.add('stream-button');
        exploreCourseButton.textContent = 'Explore Course';
        exploreCourseButton.addEventListener('click', function () {
            localStorage.setItem('selectedChoice', 'Course');
            showSection('courses');
            setupBackButton('choice');
            loadCourses();
        });

        const exploreCareerButton = document.createElement('button');
        exploreCareerButton.classList.add('stream-button');
        exploreCareerButton.textContent = 'Explore Career';
        exploreCareerButton.addEventListener('click', function () {
            localStorage.setItem('selectedChoice', 'Career');
            showSection('careers');
            setupBackButton('choice');
            loadCareers();
        });

        choiceContainer.appendChild(exploreCourseButton);
        choiceContainer.appendChild(exploreCareerButton);
    } else {
        fieldNameElement.textContent = 'No field selected.';
    }
}

// ============================================
// Courses Page
// ============================================

const coursesData = {
    "Accounting & Finance": [
        { title: "B.Com in Accounting and Finance", Info: "B.Com in Accounting and Finance is a 3-year undergraduate course that focuses on financial accounting, taxation, auditing, and corporate finance. It prepares students for careers in finance, banking, and accounting, and is a foundation for professional courses like CA and CFA." },
        { title: "MBA in Finance", Info: "MBA in Finance is a 2-year postgraduate program that focuses on financial management, investment analysis, and corporate finance. It prepares students for leadership roles in banking, investment, and financial services." },
        { title: "Certified Public Accountant (CPA)", Info: "Chartered Financial Analyst (CFA) is a globally recognized certification in investment and financial analysis. It covers portfolio management, equity research, ethics, and economics, preparing professionals for careers in investment banking, asset management, and finance." },
        { title: "Chartered Financial Analyst (CFA)", Info: "Certified Public Accountant (CPA) is a globally recognized professional certification in accounting. It focuses on auditing, taxation, financial reporting, and regulatory frameworks, preparing individuals for advanced roles in accounting and finance." },
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

function loadCourses() {
    const selectedFieldElement = document.getElementById('selected-field-course');
    const coursesListContainer = document.getElementById('courses-list');
    const selectedField = localStorage.getItem('selectedField');

    if (!selectedFieldElement || !coursesListContainer) return;

    if (selectedField) {
        selectedFieldElement.textContent = selectedField;
        coursesListContainer.innerHTML = '';

        if (coursesData[selectedField]) {
            coursesData[selectedField].forEach(course => {
                const courseElement = document.createElement('div');
                courseElement.classList.add('course-list');

                courseElement.innerHTML = `
                    <article class="course-grid">
                        <div class="course-title">
                            <p class="course-name">${course.title}</p>
                        </div>
                        <div class="box-inner-p">
                            <div class="">
                                <p class="">${course.Info}</p>
                            </div>
                        </div>
                        <div class="box-inner-p">
                            <button class="bottom-button explore-button">Explore college</button>
                        </div>
                    </article>
                `;

                const clickedButton = courseElement.querySelector('.explore-button');
                clickedButton.addEventListener('click', () => {
                    localStorage.setItem('selectedcourse', course.title);
                    showSection('colleges');
                    setupBackButton('courses');
                    loadColleges();
                });

                coursesListContainer.appendChild(courseElement);
            });
        }
    } else {
        coursesListContainer.textContent = 'No field selected. Please go back and select a field.';
    }
}

// ============================================
// Careers Page
// ============================================

const careersData = {
    "Accounting & Finance": [
        { title: "Accountant" },
        { title: "Financial Analyst" },
        { title: "Auditor" },
        { title: "Investment Banker" }
    ],
    "Business & Management": [
        { title: "Business Analyst" },
        { title: "Marketing Manager" },
        { title: "Human Resources Manager" },
        { title: "Operations Manager" }
    ],
    "Law": [
        { title: "Lawyer" },
        { title: "Judge" },
        { title: "Legal Advisor" },
        { title: "Solicitor" }
    ],
    "Engineering & Technology (PCM)": [
        { title: "Software Engineer" },
        { title: "Mechanical Engineer" },
        { title: "Electrical Engineer" },
        { title: "Civil Engineer" }
    ],
    "Medical & Allied Health Sciences (PCB)": [
        { title: "Doctor" },
        { title: "Dentist" },
        { title: "Nurse" },
        { title: "Pharmacist" }
    ],
};

function loadCareers() {
    const selectedFieldElement = document.getElementById('selected-field-career');
    const careersListContainer = document.getElementById('careers-list');
    const selectedField = localStorage.getItem('selectedField');

    if (!selectedFieldElement || !careersListContainer) return;

    if (selectedField) {
        selectedFieldElement.textContent = selectedField;
        careersListContainer.innerHTML = '';

        if (careersData[selectedField]) {
            careersData[selectedField].forEach(career => {
                const careerElement = document.createElement('div');
                careerElement.classList.add('field');

                careerElement.innerHTML = `
                    <article class="">
                        <div class="course-title">
                            <p class="course-name">${career.title}</p>
                        </div>
                    </article>
                `;

                careersListContainer.appendChild(careerElement);
            });
        }
    } else {
        careersListContainer.textContent = 'No field selected. Please go back and select a field.';
    }
}

// ============================================
// Colleges Page
// ============================================

const collegesData = {
    "iima": { name: "Indian Institute of Management Ahmedabad (IIMA)", address: "Vastrapur, Ahmedabad, Gujarat 380015", email: "", num: "+91-79-71524600 / +91-79-71524100", link: "https://www.iima.ac.in/", image: "" },
    "nirma": { name: "Nirma University", address: "Gandhinagar Hwy, Chharodi, Ahmedabad, Gujarat 382481", email: "", num: "+91-79-71652000", link: "https://nirmauni.ac.in/", image: "" },
    "gujuni": { name: "Gujarat University", address: "Navrangpura, Ahmedabad, Gujarat 380009", email: "registrar@gujaratuniversity.ac.in", num: "079-26301341,26300342-43,26300126", link: "https://gujaratuniversity.ac.in", image: "assets/gu.jpg" },
    "gls": { name: " GLS University", address: "GLS Campus, Opp. Law Garden, Ellisbridge, Ahmedabad, Gujarat 380006 ", email: "", num: "+91-79-61911000", link: "https://www.glsuniversity.ac.in/", image: "assets/gls.jpg" },
    "ljuni": { name: "LJ University", image: "", address: "Sarkhej - Gandhinagar Hwy, Makarba, Ahmedabad, Gujarat 380051     ", email: "", num: "+91-7574808181 / +91-7574809191", link: "https://www.ljuniversity.in/", image: "assets/lj.jpg" },
    "sou": { name: " Silver Oak University", image: "", address: "Near Gota Flyover, S.G. Highway, Ahmedabad, Gujarat 382481  ", email: "", num: "+91-79-26767581 / +91-79-26767582   ", link: " https://silveroakuni.ac.in/", image: "assets/sou.jpg" },
    "hl": { name: "H.L. College of Commerce ", image: "", address: " Navrangpura, Ahmedabad, Gujarat 380009", email: "", num: "+91-79-26767601 / +91-79-26767602 ", link: "http://www.hlcollege.ac.in/", image: "assets/hl.jpg" },
    "amduni": { name: "Ahmedabad University", image: "", address: " Navrangpura, Ahmedabad, Gujarat 380009  ", email: "", num: "+91-9099974545 / +91-9099975555", link: "https://ahduni.edu.in/", image: "assets/au.jpg" },
    "jg": { name: " J.G. College of Commerce ", image: "", address: " Drive-In Rd, Opposite Karnavati Club, Ahmedabad, Gujarat 380054", email: "", num: "+91-79-26302470 / +91-79-26302740  ", link: " http://www.jacollege.ac.in/", image: "assets/jg.jpg" },
    "spipa": { name: "Sardar Patel Institute of Public Administration (SPIPA) ", image: "", address: " Opp. Old High Court, Sarkhej - Gandhinagar Hwy, Thaltej, Ahmedabad, Gujarat 380054   ", email: "", num: "", link: " https://spipa.gujarat.gov.in", image: "assets/spipa.jpg" },
    "ga&cc": { name: "Government Arts & Commerce College, Ahmedabad ", image: "", address: "Ambawadi, Ahmedabad, Gujarat 380015", email: "", num: "+91-79-26751079", link: " https://gacambawadi.org/", image: "assets/kk.jpg" },
    "vasp": { name: "Vivekanand Arts, Sardar Patel Commerce & Science College ", image: "", address: " Memnagar, Ahmedabad, Gujarat 380052", email: "", num: "+91-79-27430143 / +91-79-27491808", link: " https://vpascs.org/", image: "assets/vivekanand.jpg" },
    "indusuni": { name: " Indus University", image: "", address: "Rancharda, Via Thol, Ahmedabad, Gujarat 382115", email: "", num: "+91-7600032518 / +91-7600032521", link: "https://www.indusuni.ac.in/   " },
    "ahduni": { name: " Amrut Mody School of Management, Ahmedabad University ", image: "", address: "Ahmedabad University, Navrangpura, Ahmedabad, Gujarat 380009  ", email: "", num: " +91-79-61911000", link: " https://am.ahduni.edu.in/" },
    "bks": { name: "B.K. School of Business Management, Gujarat University", image: "", address: "Gujarat University Campus, Navrangpura, Ahmedabad, Gujarat 380009   ", email: "", num: "+91-79-26302705 / +91-79-26303874", link: "https://www.bkschool.org/ " },
    "ljims": { name: " L.J. Institute of Management Studies (LJIMS) ", image: "", address: "Sarkhej - Gandhinagar Highway, Makarba, Ahmedabad, Gujarat 380051 ", email: "", num: "+91-9099974545 / +91-9099975555 ", link: "https://www.ljinstitutes.org/ " },
    "anc": { name: "Anand Niketan College of Science, Arts & Commerce ", image: "", address: "Opp. Science City, Sola Science City Road, Ahmedabad, Gujarat 380060   ", email: "", num: "+91-9099956509 / +91-9099956510 ", link: " https://www.anandniketancollege.ac.in/ " },
    "sjp": { name: "Shri Jairambhai Patel College of Business Administration & Computer Applications ", image: "", address: "Near Railway Crossing, Ambawadi - Juhapura Road, Ahmedabad, Gujarat 380051", email: "", num: "+91-79-26607700 / +91-26607800", link: "https://www.jpcbca.ac.in/     " },
};

const coursesToColleges = {
    "MBA (Master of Business Administration)": ["iima", "nirma", "gujuni", "gls", "amduni", "ljuni", "indusuni", "sou", "ahduni", "baou", "bks", "ljims", "anc"],
    "MBA in Finance": ["iima", "nirma", "gujuni", "gls", "amduni", "ljuni", "indusuni", "sou", "ahduni", "baou", "bks", "ljims", "anc"],
    "B.Com in Accounting and Finance": ["gujuni", "gls", "amduni", "ljuni", "sou", "hl", "jg", "spipa", "ga&cc", "vasp", "slcoc", "mdc", "rjt", "baou"],
    "BBA (Bachelor of Business Administration)": ["gujuni", "gls", "amduni", "ljuni", "indusuni", "sou", "ahduni", "sjp", "rjt"],
};

function loadColleges() {
    const selectedCourseElement = document.getElementById('selected-course');
    const collegesListContainer = document.getElementById('colleges-list');
    const selectedCourse = localStorage.getItem('selectedcourse');

    if (!selectedCourseElement || !collegesListContainer) return;

    if (selectedCourse) {
        selectedCourseElement.textContent = selectedCourse;
        collegesListContainer.innerHTML = '';

        if (coursesToColleges[selectedCourse]) {
            coursesToColleges[selectedCourse].forEach(collegeId => {
                const college = collegesData[collegeId];
                if (college) {
                    const collegeElement = document.createElement('div');
                    collegeElement.classList.add('collegelist');

                    collegeElement.innerHTML = `
                        <article class="">
                            <div class="cover-image">
                                <a title="" id="">
                                    <img data-perfmatters-preload class="img-size" src="${college.image}" alt="${college.name}">
                                </a>
                            </div>
                            <div class="box-inner-p">
                                <div class="">
                                    <p class="">
                                        <b>${college.name}</b>
                                        <ul>
                                            <li>${college.address}</li>
                                            ${college.email ? `<li><a href="mailto:${college.email}">${college.email}</a></li>` : ''}
                                            ${college.num ? `<li>${college.num}</li>` : ''}
                                            ${college.link ? `<li><a href="${college.link}" target="_blank">${college.link}</a></li>` : ''}
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </article>
                    `;

                    collegesListContainer.appendChild(collegeElement);
                }
            });
        }
    } else {
        collegesListContainer.textContent = 'No course selected. Please go back and select a course.';
    }
}