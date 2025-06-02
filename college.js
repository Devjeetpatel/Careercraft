document.getElementById
    ("back").addEventListener("click", () => {
        window.location.href = "courses.html";
    })


document.addEventListener('DOMContentLoaded', function () {
    const selectedcourseElement = document.getElementById('selected-course');
    const collegesListContainer = document.getElementById('colleges-list');
    const selected_course = localStorage.getItem('selectedcourse');

    if (selected_course) {
        selectedcourseElement.textContent = selected_course;

        // course data to display

        //Master list of colleges
        const collegesData = {
            "iima": { name: "Indian Institute of Management Ahmedabad (IIMA)", address: "Vastrapur, Ahmedabad, Gujarat 380015", email: "", num: "+91-79-71524600 / +91-79-71524100", link: "https://www.iima.ac.in/", image: "" },
            "nirma": { name: "Nirma University", address: "Gandhinagar Hwy, Chharodi, Ahmedabad, Gujarat 382481", email: "", num: "+91-79-71652000", link: "https://nirmauni.ac.in/", image: "" },
            "gujuni": { name: "Gujarat University", address: "Navrangpura, Ahmedabad, Gujarat 380009", email: "registrar@gujaratuniversity.ac.in", num: "079-26301341,26300342-43,26300126", link: "https://gujaratuniversity.ac.in", image: "assets/gu.jpg" },
            "gls": { name: " GLS University", address: "GLS Campus, Opp. Law Garden, Ellisbridge, Ahmedabad, Gujarat 380006 ", email: "", num: "+91-79-61911000", link: "https://www.glsuniversity.ac.in/", image: "assets/gls.jpg" },
            "ljuni": { name: "LJ University", image: "", address: "Sarkhej - Gandhinagar Hwy, Makarba, Ahmedabad, Gujarat 380051     ", email: "", num: "+91-7574808181 / +91-7574809191", link: "https://www.ljuniversity.in/", image:"assets/lj.jpg" },
            "sou": { name: " Silver Oak University", image: "", address: "Near Gota Flyover, S.G. Highway, Ahmedabad, Gujarat 382481  ", email: "", num: "+91-79-26767581 / +91-79-26767582   ", link: " https://silveroakuni.ac.in/", image:"assets/sou.jpg" },
            "hl": { name: "H.L. College of Commerce ", image: "", address: " Navrangpura, Ahmedabad, Gujarat 380009", email: "", num: "+91-79-26767601 / +91-79-26767602 ", link: "http://www.hlcollege.ac.in/", image:"assets/hl.jpg" },
            "amduni": { name: "Ahmedabad University", image: "", address: " Navrangpura, Ahmedabad, Gujarat 380009  ", email: "", num: "+91-9099974545 / +91-9099975555", link: "https://ahduni.edu.in/", image:"assets/au.jpg" },
            "jg": { name: " J.G. College of Commerce ", image: "", address: " Drive-In Rd, Opposite Karnavati Club, Ahmedabad, Gujarat 380054", email: "", num: "+91-79-26302470 / +91-79-26302740  ", link: " http://www.jacollege.ac.in/", image:"jg.jpg" },
            "spipa": { name: "Sardar Patel Institute of Public Administration (SPIPA) ", image: "", address: " Opp. Old High Court, Sarkhej - Gandhinagar Hwy, Thaltej, Ahmedabad, Gujarat 380054   ", email: "", num: "", link: " https://spipa.gujarat.gov.in", image:"spipa.jpg" },
            "ga&cc": { name: "Government Arts & Commerce College, Ahmedabad ", image: "", address: "Ambawadi, Ahmedabad, Gujarat 380015", email: "", num: "+91-79-26751079", link: " https://gacambawadi.org/", image:"kk.jpg" },
            "vasp": { name: "Vivekanand Arts, Sardar Patel Commerce & Science College ", image: "", address: " Memnagar, Ahmedabad, Gujarat 380052", email: "", num: "+91-79-27430143 / +91-79-27491808", link: " https://vpascs.org/",image:"vivekanand.jpg" },
            "indusuni": { name: " Indus University", image: "", address: "Rancharda, Via Thol, Ahmedabad, Gujarat 382115", email: "", num: "+91-7600032518 / +91-7600032521", link: "https://www.indusuni.ac.in/   " },
            "ahduni": { name: " Amrut Mody School of Management, Ahmedabad University ", image: "", address: "Ahmedabad University, Navrangpura, Ahmedabad, Gujarat 380009  ", email: "", num: " +91-79-61911000", link: " https://am.ahduni.edu.in/" },
            "bks": { name: "B.K. School of Business Management, Gujarat University", image: "", address: "Gujarat University Campus, Navrangpura, Ahmedabad, Gujarat 380009   ", email: "", num: "+91-79-26302705 / +91-79-26303874", link: "https://www.bkschool.org/ " },
            "ljims": { name: " L.J. Institute of Management Studies (LJIMS) ", image: "", address: "Sarkhej - Gandhinagar Highway, Makarba, Ahmedabad, Gujarat 380051 ", email: "", num: "+91-9099974545 / +91-9099975555 ", link: "https://www.ljinstitutes.org/ " },
            "anc":{ name: "Anand Niketan College of Science, Arts & Commerce ", image: "", address: "Opp. Science City, Sola Science City Road, Ahmedabad, Gujarat 380060   ", email: "", num: "+91-9099956509 / +91-9099956510 ", link: " https://www.anandniketancollege.ac.in/ " },
            "sjp":{ name: "Shri Jairambhai Patel College of Business Administration & Computer Applications ", image: "", address: "Near Railway Crossing, Ambawadi - Juhapura Road, Ahmedabad, Gujarat 380051", email: "", num: "+91-79-26607700 / +91-26607800", link: "https://www.jpcbca.ac.in/     " },
        };

        //Map of courses to college IDs
        const coursesData = {
            "MBA (Master of Business Administration)": ["iima", "nirma", "gujuni","gls", "amduni", "ljuni", "indusuni", "sou", "ahduni", "baou", "bks","ljims","anc"],
            "MBA in Finance": ["iima", "nirma", "gujuni", "gls", "amduni", "ljuni", "indusuni", "sou", "ahduni", "baou", "bks","ljims","anc"],
            "B.Com in Accounting and Finance": ["gujuni", "gls", "amduni", "ljuni", "sou", "hl", "jg", "spipa", "ga&cc", "vasp", "slcoc", "mdc", "rjt", "baou"],
            "BBA (Bachelor of Business Administration)":["gujuni","gls","amduni","ljuni","indusuni","sou","ahduni","sjp","rjt",],
        };

        // const collegesData = {
        //     "B.Com in Accounting and Finance": [
        //         { name: "Gujarat university", image: "", address: "Navrangpura, Ahmedabad, Gujarat 380009", email: "registrar@gujaratuniversity.ac.in", num: " 079-26301341,26300342-43,26300126", link: "https://gujaratuniversity.ac.in" },
        //         { name: " GLS University", image: "", address: "GLS Campus, Opp. Law Garden, Ellisbridge, Ahmedabad, Gujarat 380006 ", email: "", num: "+91-79-61911000", link: "https://www.glsuniversity.ac.in/" },
        //         { name: "Ahmedabad University", image: "", address: " Navrangpura, Ahmedabad, Gujarat 380009  ", email: "", num: "+91-9099974545 / +91-9099975555", link: "https://ahduni.edu.in/" },
        //     { name: "LJ University", image: "", address: "Sarkhej - Gandhinagar Hwy, Makarba, Ahmedabad, Gujarat 380051     ", email: "", num: "+91-7574808181 / +91-7574809191", link: "https://www.ljuniversity.in/   " },
        //     { name: " Silver Oak University", image: "", address: "Near Gota Flyover, S.G. Highway, Ahmedabad, Gujarat 382481  ", email: "", num: "+91-79-26767581 / +91-79-26767582   ", link: " https://silveroakuni.ac.in/     " },
        //     { name: "H.L. College of Commerce ", image: "", address: " Navrangpura, Ahmedabad, Gujarat 380009", email: "", num: "+91-79-26767601 / +91-79-26767602 ", link: "http://www.hlcollege.ac.in/ " },
        //     { name: " J.G. College of Commerce ", image: "", address: " Drive-In Rd, Opposite Karnavati Club, Ahmedabad, Gujarat 380054", email: "", num: "+91-79-26302470 / +91-79-26302740  ", link: " http://www.jacollege.ac.in/     " },
        //     { name: "Sardar Patel Institute of Public Administration (SPIPA) ", image: "", address: " Opp. Old High Court, Sarkhej - Gandhinagar Hwy, Thaltej, Ahmedabad, Gujarat 380054   ", email: "", num: "", link: " https://spipa.gujarat.gov.in" },
        //     { name: "Government Arts & Commerce College, Ahmedabad ", image: "", address: "Ambawadi, Ahmedabad, Gujarat 380015", email: "", num: "+91-79-26751079", link: " https://gacambawadi.org/" },
        //     { name: "Vivekanand Arts, Sardar Patel Commerce & Science College ", image: "", address: " Memnagar, Ahmedabad, Gujarat 380052", email: "", num: "+91-79-27430143 / +91-79-27491808", link: " https://vpascs.org/" },
        //     { name: "Som-Lalit College of Commerce ", image: "", address: " St. Xavier's Corner, University Rd, Navrangpura, Ahmedabad, Gujarat 380009 ", email: "", num: " 079 2630 3301 ", link: "https://www.somlalitcollege.org" },
        //     { name: "Maharshi Dayanand College of Arts, Science & Commerce ", image: "", address: "Near Sardar Patel Stadium, Navrangpura, Ahmedabad, Gujarat 380014 ", email: "", num: " +91-79-27540374", link: " https://www.mdcollegeahd.ac.in/   " },
        //     { name: "R.J. Tibrewal Commerce College ", image: "", address: " Ambawadi, Ahmedabad, Gujarat 380015   ", email: "", num: " 91-79-26754982 ", link: "https://rjcollege.ac.in/ " },
        //     { name: " Dr. Babasaheb Ambedkar Open University (BAOU) ", image: "", address: "Sarkhej - Gandhinagar Highway, Chharodi, Ahmedabad, Gujarat 382481", email: "", num: " +91-79-23268600 / +91-79-23268611", link: " https://baou.edu.in/ " }
        // ],

        //     "MBA in Finance": [
        //         { name: "Indian Institute of Management Ahmedabad (IIMA) ", image: "", address: "Vastrapur, Ahmedabad, Gujarat 380015 ", email: "", num: " +91-79-71524600 / +91-79-71524100", link: " https://www.iima.ac.in/" },
        //         { name: " Nirma University ", image: "", address: "Gandhinagar Hwy, Chharodi, Ahmedabad, Gujarat 382481  ", email: "", num: " +91-79-71652000 ", link: "https://nirmauni.ac.in/     " },
        //         { name: "Gujarat University", image: "", address: "Navrangpura, Ahmedabad, Gujarat 380009 ", email: "", num: " +91-79-26301301 / +91-79-26300342 +91-79-26400051 / +91-79-26400052 ", link: "https://gujaratuniversity.ac.in/     " },
        //         { name: " GLS University", image: "", address: "GLS Campus, Opp. Law Garden, Ellisbridge, Ahmedabad, Gujarat 380006 ", email: "", num: "+91-79-61911000", link: "https://www.glsuniversity.ac.in/" },
        //         { name: "Ahmedabad University", image: "", address: " Navrangpura, Ahmedabad, Gujarat 380009  ", email: "", num: "+91-9099974545 / +91-9099975555", link: "https://ahduni.edu.in/" },
        //         { name: "LJ University", image: "", address: "Sarkhej - Gandhinagar Hwy, Makarba, Ahmedabad, Gujarat 380051     ", email: "", num: "+91-7574808181 / +91-7574809191", link: "https://www.ljuniversity.in/   " },
        //         { name: " Indus University", image: "", address: "Rancharda, Via Thol, Ahmedabad, Gujarat 382115", email: "", num: "+91-7600032518 / +91-7600032521", link: "https://www.indusuni.ac.in/   " },
        //         { name: " Silver Oak University", image: "", address: "Near Gota Flyover, S.G. Highway, Ahmedabad, Gujarat 382481  ", email: "", num: "+91-79-26767581 / +91-79-26767582   ", link: " https://silveroakuni.ac.in/     " },
        //         { name: " Amrut Mody School of Management, Ahmedabad University ", image: "", address: "Ahmedabad University, Navrangpura, Ahmedabad, Gujarat 380009  ", email: "", num: " +91-79-61911000", link: " https://am.ahduni.edu.in/" },
        //         { name: "Dr. Babasaheb Ambedkar Open University (BAOU) ", image: "", address: "Sarkhej - Gandhinagar Highway, Chharodi, Ahmedabad, Gujarat 382481", email: "", num: "+91-79-23268600 / +91-79-23268611 ", link: " https://baou.edu.in/ " },
        //         { name: "B.K. School of Business Management, Gujarat University", image: "", address: "Gujarat University Campus, Navrangpura, Ahmedabad, Gujarat 380009   ", email: "", num: "+91-79-26302705 / +91-79-26303874", link: "https://www.bkschool.org/ " },
        //         { name: " L.J. Institute of Management Studies (LJIMS) ", image: "", address: "Sarkhej - Gandhinagar Highway, Makarba, Ahmedabad, Gujarat 380051 ", email: "", num: "+91-9099974545 / +91-9099975555 ", link: "https://www.ljinstitutes.org/ " },
        //         { name: "Anand Niketan College of Science, Arts & Commerce ", image: "", address: "Opp. Science City, Sola Science City Road, Ahmedabad, Gujarat 380060   ", email: "", num: "+91-9099956509 / +91-9099956510 ", link: " https://www.anandniketancollege.ac.in/ " },
        //     ],

        //     "Certified Public Accountant (CPA)": [

        //     ],

        //     "Chartered Financial Analyst (CFA)": [

        //     ],

        //     "BBA (Bachelor of Business Administration)": [
        //         { name: "Gujarat University", image: "", address: "Navrangpura, Ahmedabad, Gujarat 380009 ", email: "", num: " +91-79-26301301 / +91-79-26300342 +91-79-26400051 / +91-79-26400052 ", link: "https://gujaratuniversity.ac.in/" },
        //         { name: " GLS University", image: "", address: "GLS Campus, Opp. Law Garden, Ellisbridge, Ahmedabad, Gujarat 380006 ", email: "", num: "+91-79-61911000", link: "https://www.glsuniversity.ac.in/" },
        //         { name: "Ahmedabad University", image: "", address: " Navrangpura, Ahmedabad, Gujarat 380009  ", email: "", num: "+91-9099974545 / +91-9099975555", link: "https://ahduni.edu.in/" },
        //         { name: "LJ University", image: "", address: "Sarkhej - Gandhinagar Hwy, Makarba, Ahmedabad, Gujarat 380051     ", email: "", num: "+91-7574808181 / +91-7574809191", link: "https://www.ljuniversity.in/   " },
        //         { name: " Indus University", image: "", address: "Rancharda, Via Thol, Ahmedabad, Gujarat 382115", email: "", num: "+91-7600032518 / +91-7600032521", link: "https://www.indusuni.ac.in/   " },
        //         { name: " Silver Oak University", image: "", address: "Near Gota Flyover, S.G. Highway, Ahmedabad, Gujarat 382481  ", email: "", num: "+91-79-26767581 / +91-79-26767582   ", link: " https://silveroakuni.ac.in/     " },
        //         { name: " Amrut Mody School of Management, Ahmedabad University ", image: "", address: "Ahmedabad University, Navrangpura, Ahmedabad, Gujarat 380009  ", email: "", num: " +91-79-61911000", link: " https://am.ahduni.edu.in/" },
        //         { name: "Shri Jairambhai Patel College of Business Administration & Computer Applications ", image: "", address: "Near Railway Crossing, Ambawadi - Juhapura Road, Ahmedabad, Gujarat 380051", email: "", num: "+91-79-26607700 / +91-26607800", link: "https://www.jpcbca.ac.in/     " },
        //         { name: "R.J. Tibrewal Commerce College ", image: "", address: " Ambawadi, Ahmedabad, Gujarat 380015   ", email: "", num: " 91-79-26754982 ", link: "https://rjcollege.ac.in/ " },
        //         { name: " L.J. College of Commerce ", image: "", address: "Sarkhej - Gandhinagar Highway, Makarba, Ahmedabad, Gujarat 380051", email: "", num: " +91-9099974545 / +91-9099975555 ", link: " https://www.ljinstitutes.org " },
        //         // { name: "", image: "", address: "", email: "", num: "", link: "" },
        //         // { name: "", image: "", address: "", email: "", num: "", link: "" },

        //     ],
        //     "MBA (Master of Business Administration)": [
        //         { name: "Indian Institute of Management Ahmedabad (IIMA) ", image: "", address: "Vastrapur, Ahmedabad, Gujarat 380015 ", email: "", num: " +91-79-71524600 / +91-79-71524100", link: " https://www.iima.ac.in/" },
        //         { name: " Nirma University ", image: "", address: "Gandhinagar Hwy, Chharodi, Ahmedabad, Gujarat 382481  ", email: "", num: " +91-79-71652000 ", link: "https://nirmauni.ac.in/     " },
        //         { name: "Gujarat University", image: "", address: "Navrangpura, Ahmedabad, Gujarat 380009 ", email: "", num: " +91-79-26301301 / +91-79-26300342 +91-79-26400051 / +91-79-26400052 ", link: "https://gujaratuniversity.ac.in/     " },
        //         { name: " GLS University", image: "", address: "GLS Campus, Opp. Law Garden, Ellisbridge, Ahmedabad, Gujarat 380006 ", email: "", num: "+91-79-61911000", link: "https://www.glsuniversity.ac.in/" },
        //         { name: "Ahmedabad University", image: "", address: " Navrangpura, Ahmedabad, Gujarat 380009  ", email: "", num: "+91-9099974545 / +91-9099975555", link: "https://ahduni.edu.in/" },
        //         { name: "LJ University", image: "", address: "Sarkhej - Gandhinagar Hwy, Makarba, Ahmedabad, Gujarat 380051     ", email: "", num: "+91-7574808181 / +91-7574809191", link: "https://www.ljuniversity.in/   " },
        //         { name: " Indus University", image: "", address: "Rancharda, Via Thol, Ahmedabad, Gujarat 382115", email: "", num: "+91-7600032518 / +91-7600032521", link: "https://www.indusuni.ac.in/   " },
        //         { name: " Silver Oak University", image: "", address: "Near Gota Flyover, S.G. Highway, Ahmedabad, Gujarat 382481  ", email: "", num: "+91-79-26767581 / +91-79-26767582   ", link: " https://silveroakuni.ac.in/     " },
        //         { name: " Amrut Mody School of Management, Ahmedabad University ", image: "", address: "Ahmedabad University, Navrangpura, Ahmedabad, Gujarat 380009  ", email: "", num: " +91-79-61911000", link: " https://am.ahduni.edu.in/" },
        //         { name: "Dr. Babasaheb Ambedkar Open University (BAOU) ", image: "", address: "Sarkhej - Gandhinagar Highway, Chharodi, Ahmedabad, Gujarat 382481", email: "", num: "+91-79-23268600 / +91-79-23268611 ", link: " https://baou.edu.in/ " },
        //         { name: "B.K. School of Business Management, Gujarat University", image: "", address: "Gujarat University Campus, Navrangpura, Ahmedabad, Gujarat 380009   ", email: "", num: "+91-79-26302705 / +91-79-26303874", link: "https://www.bkschool.org/ " },
        //         { name: " L.J. Institute of Management Studies (LJIMS) ", image: "", address: "Sarkhej - Gandhinagar Highway, Makarba, Ahmedabad, Gujarat 380051 ", email: "", num: "+91-9099974545 / +91-9099975555 ", link: "https://www.ljinstitutes.org/ " },
        //         { name: "Anand Niketan College of Science, Arts & Commerce ", image: "", address: "Opp. Science City, Sola Science City Road, Ahmedabad, Gujarat 380060   ", email: "", num: "+91-9099956509 / +91-9099956510 ", link: " https://www.anandniketancollege.ac.in/ " },
        //         // { name: "", image: "", address: "", email: "", num: "", link: "" },
        //         // { name: "", image: "", address: "", email: "", num: "", link: "" },

        //     ]
        // };
        // display function
        // if (coursesData[selected_course]) {
        //     coursesData[selected_course].forEach(colleges => {
        //         const college = document.createElement('div');
        //         college.classList.add('collegelist');

        //         college.innerHTML = `
        //        <article class="">
        //             <div class="cover-image">
        //                 <a title="" id="">
        //                     <img data-perfmatters-preload class="img-size" src="${colleges.image}" class="" alt="${colleges.name}" >
        //                 </a>
        //             </div>
        //             <div class="box-inner-p">
        //                 <div class="">
        //                     <p class="">
        //                     <b>${colleges.name}</b>
        //                     <ul>
        //                     <li>${colleges.address}</li>
        //                     <li><a href="mailto:${colleges.email}">${colleges.email}</a></li>
        //                     <li>${colleges.num}</li>
        //                     <li><a href="${colleges.link}">${colleges.link}</a></li>
        //                     </ul>
        //                     </p>
        //                 </div>
        //             </div>
        //         </article>
        //         `;

        //         collegesListContainer.appendChild(college);

        //     });
        // };
        // const selected_course = localStorage.getItem('selectedcourse');

        if (selected_course && coursesData[selected_course]) {
            coursesData[selected_course].forEach(collegeId => {
                const colleges = collegesData[collegeId];
                if (colleges) {
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
                    collegesListContainer.appendChild(college);
                }
            });
        }

    }

    else {
        coursesListContainer.textContent = 'No field selected. Please go back and select a field.';
    }
});
