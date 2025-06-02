
// back button code
document.getElementById
    ("back").addEventListener("click", () => {
        window.location.href = "index.html";
    })


// fetch stored data from Script.js and suggest fields according

document.addEventListener('DOMContentLoaded', function () {
    const streamNameElement = document.getElementById('stream-name');
    const fieldsContainer = document.getElementById('fields-container');

    const selectedStream = localStorage.getItem('selectedStream');

    streamNameElement.textContent = selectedStream;

    // data to display and its id to store it
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
            // { title: "", image: "assets/it.webp" }
            // { title: "", image: "assets/it.webp" }
            // { title: "", image: "assets/it.webp" }
        ],
        Arts: [
            { title: "Humanities & Social Sciences", image: "assets/humanities.jpg" },
            { title: "Languages & Literature", image: "assets/languages.jpg" },
            { title: "Fine Arts & Performing Arts", image: "assets/fapa.jpg" },
            { title: "Communication & Media", image: "assets/mass.jpg" },
            { title: "Education", image: "assets/education.jpg" },
            { title: "Law and Legal Studies", image: "assets/law.jpg" }
            // { title: "", image: "assets/it.webp" }
            // { title: "", image: "assets/it.webp" }


        ],
        Diploma: [
            { title: "Mechanical", image: "assets/mechanical.png" },
            { title: "Electrical", image: "assets/Electrical.jpg" },
            { title: "Civil", image: "assets/Civil.jpg" }
        ]
    };

    // used to create element and display it

    if (fieldsData[selectedStream]) {
        fieldsData[selectedStream].forEach(field => {
            const fieldElement = document.createElement('div');
            fieldElement.classList.add('field');

            fieldElement.innerHTML = `
                <article class="">
                    <div class="cover-image">
                        <a title="" id="${field.id}">
                            <img data-perfmatters-preload class="img-size" src="${field.image}" class="" alt="${field.title}" >
                        </a>
                        <div class="entry-category">
                            <a href="" class="gridlove-cat gridlove-cat-3"></a>
                            <a href="" class="gridlove-cat gridlove-cat-2"></a>
                        </div>
                    </div>
                    <div class="box-inner-p">
                        <div class="">
                            <p class="">
                                <a id="field-link-${field.id}">${field.title}</a>
                            </p>
                        </div>
                    </div>
                </article>
                `;

            // again stores selected field for further use
            fieldElement.addEventListener('click', function () {
                localStorage.setItem('selectedField', field.title);
                window.location.href = 'choice.html';
            });
            
            fieldsContainer.appendChild(fieldElement);
        });
    } else {
        fieldsContainer.textContent = 'No fields found for this stream.';
    }
}); 
