document.getElementById
    ("back").addEventListener("click", () => {
        window.location.href = "courses.html";
    })


document.addEventListener('DOMContentLoaded', function () {
    const selectedcourseElement = document.getElementById('selected-course');
    const coursesListContainer = document.getElementById('colleges-list');
    const selected_course = localStorage.getItem('selectedcourse');

    if (selected_course) {
        selectedcourseElement.textContent = selected_course;

        // course data to display
        const collegesData = {
            "B.Com in Accounting and Finance": [
                { name: "Gujarat university", image: "", address: "Navrangpura, Ahmedabad, Gujarat 380009", email: "registrar@gujaratuniversity.ac.in", num: " 079-26301341,26300342-43,26300126", link: "https://gujaratuniversity.ac.in" },
                { name: " GLS University", image: "", address: "GLS Campus, Opp. Law Garden, Ellisbridge, Ahmedabad, Gujarat 380006 ", email: "", num: "+91-79-61911000", link: "https://www.glsuniversity.ac.in/" },
                { name: "Ahmedabad University", image: "", address: " Navrangpura, Ahmedabad, Gujarat 380009  ", email: "", num: "+91-9099974545 / +91-9099975555", link: "https://ahduni.edu.in/" },
                { name: "LJ University", image: "", address: "Sarkhej - Gandhinagar Hwy, Makarba, Ahmedabad, Gujarat 380051     ", email: "", num: "+91-7574808181 / +91-7574809191", link: "https://www.ljuniversity.in/   " },
                { name: " Silver Oak University", image: "", address: "Near Gota Flyover, S.G. Highway, Ahmedabad, Gujarat 382481  ", email: "", num: "+91-79-26767581 / +91-79-26767582   ", link: " https://silveroakuni.ac.in/     " },
                { name: "H.L. College of Commerce ", image: "", address: " Navrangpura, Ahmedabad, Gujarat 380009", email: "", num: "+91-79-26767601 / +91-79-26767602 ", link: "http://www.hlcollege.ac.in/ " },
                { name: " J.G. College of Commerce ", image: "", address: " Drive-In Rd, Opposite Karnavati Club, Ahmedabad, Gujarat 380054", email: "", num: "+91-79-26302470 / +91-79-26302740  ", link: " http://www.jacollege.ac.in/     " },
                { name: "Sardar Patel Institute of Public Administration (SPIPA) ", image: "", address: " Opp. Old High Court, Sarkhej - Gandhinagar Hwy, Thaltej, Ahmedabad, Gujarat 380054   ", email: "", num: "", link: " https://spipa.gujarat.gov.in" },
                { name: "Government Arts & Commerce College, Ahmedabad ", image: "", address: "Ambawadi, Ahmedabad, Gujarat 380015", email: "", num: "+91-79-26751079", link: " https://gacambawadi.org/" },
                { name: "Vivekanand Arts, Sardar Patel Commerce & Science College ", image: "", address: " Memnagar, Ahmedabad, Gujarat 380052", email: "", num: "+91-79-27430143 / +91-79-27491808", link: " https://vpascs.org/" },
                { name: "Som-Lalit College of Commerce ", image: "", address: " St. Xavier's Corner, University Rd, Navrangpura, Ahmedabad, Gujarat 380009 ", email: "", num: " 079 2630 3301 ", link: "https://www.somlalitcollege.org" },
                { name: "Maharshi Dayanand College of Arts, Science & Commerce ", image: "", address: "Near Sardar Patel Stadium, Navrangpura, Ahmedabad, Gujarat 380014 ", email: "", num: " +91-79-27540374", link: " https://www.mdcollegeahd.ac.in/   " },
                { name: "R.J. Tibrewal Commerce College ", image: "", address: " Ambawadi, Ahmedabad, Gujarat 380015   ", email: "", num: " 91-79-26754982 ", link: "https://rjcollege.ac.in/ " },
                { name: " Dr. Babasaheb Ambedkar Open University (BAOU) ", image: "", address: "Sarkhej - Gandhinagar Highway, Chharodi, Ahmedabad, Gujarat 382481", email: "", num: " +91-79-23268600 / +91-79-23268611", link: " https://baou.edu.in/ " }
            ],

            "MBA in Finance":[
                { name: "Indian Institute of Management Ahmedabad (IIMA) ", image: "", address: "Vastrapur, Ahmedabad, Gujarat 380015 ", email: "", num: "", link: " https://www.iima.ac.in/" },
                { name: "", image: "", address: "", email: "", num: "", link: "" },
                { name: "", image: "", address: "", email: "", num: "", link: "" },
                { name: "", image: "", address: "", email: "", num: "", link: "" },
                { name: "", image: "", address: "", email: "", num: "", link: "" },
                { name: "", image: "", address: "", email: "", num: "", link: "" },
                { name: "", image: "", address: "", email: "", num: "", link: "" },
                { name: "", image: "", address: "", email: "", num: "", link: "" },
            ]
        };
        // display function
        if (collegesData[selected_course]) {
            collegesData[selected_course].forEach(colleges => {
                const college = document.createElement('div');
                college.classList.add('collegelist');

                college.innerHTML = `
               <article class="">
                    <div class="cover-image">
                        <a title="" id="">
                            <img data-perfmatters-preload class="img-size" src="${colleges.image}" class="" alt="${colleges.name}" >
                        </a>
                    </div>
                    <div class="box-inner-p">
                        <div class="">
                            <p class="">
                            <b>${colleges.name}</b>
                            <ul>
                            <li>${colleges.address}</li>
                            <li><a href="mailto:${colleges.email}">${colleges.email}</a></li>
                            <li>${colleges.num}</li>
                            <li><a href="${colleges.link}">${colleges.link}</a></li>
                            </ul>
                            </p>
                        </div>
                    </div>
                </article>
                `;

                coursesListContainer.appendChild(college);

            });
        };

    }

    else {
        coursesListContainer.textContent = 'No field selected. Please go back and select a field.';
    }
});