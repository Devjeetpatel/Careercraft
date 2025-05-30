
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
            { title: "Accounting & Finance", image: "assets/acc&finance.webp", id: "af" },
            { title: "Business & Management", image: "assets/business.png", id: "bm" },
            { title: "Banking & Insurance", image: "assets/business.png", id: "bi" },
            { title: "Law", image: "assets/business.png", id: "law" },
            { title: "Economics & Statistics", image: "assets/business.png", id: "es" },
            { title: "Information Technology & Digital Media", image: "assets/business.png", id: "itdm" },
            { title: "Media & Communication", image: "assets/business.png", id: "mc" },
            { title: "Hotel, Travel & Hospitality Management", image: "assets/business.png", id: "hthm" },
            { title: " Creative Fields", image: "assets/business.png", id: "cf" },
            { title: " Education & Teaching", image: "assets/business.png", id: "et" }
        ],
        Science: [
            { title: "Engineering & Technology (PCM)", image: "assets/engineering.webp" },
            { title: "Medical & Allied Health Sciences (PCB)", image: "assets/medical.webp" },
            { title: "IT & Computer Science", image: "assets/it.webp" },
            { title: "Architecture & Design (PCM required)", image: "assets/it.webp" },
            { title: "Aviation", image: "assets/it.webp" },
            { title: "Psychology, Social Science & Liberal Arts", image: "assets/it.webp" },
            { title: "Law", image: "assets/it.webp" },
            { title: "Business & Management", image: "assets/it.webp" },
            { title: "Defense & Civil Services", image: "assets/it.webp" },
            { title: "Emerging Tech & Modern Fields", image: "assets/it.webp" }
            // { title: "", image: "assets/it.webp" }
            // { title: "", image: "assets/it.webp" }
            // { title: "", image: "assets/it.webp" }
        ],
        Arts: [
            { title: "Humanities & Social Sciences", image: "assets/it.webp" },
            { title: "Languages & Literature", image: "assets/it.webp" },
            { title: "Fine Arts & Performing Arts", image: "assets/it.webp" },
            { title: "Communication & Media", image: "assets/it.webp" },
            { title: "Education", image: "assets/it.webp" },
            { title: "Law and Legal Studies", image: "assets/it.webp" }
            // { title: "", image: "assets/it.webp" }
            // { title: "", image: "assets/it.webp" }


        ],
        Diploma: [
            { title: "Mechanical", image: "assets/mechanical.webp" },
            { title: "Electrical", image: "assets/electrical.webp" },
            { title: "Civil", image: "assets/civil.webp" }
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