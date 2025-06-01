
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
            { title: "Banking & Insurance", image: "assets/commerce/", id: "bi" },
            { title: "Law", image: "assets/commerce/", id: "law" },
            { title: "Economics & Statistics", image: "assets/commerce/", id: "es" },
            { title: "Information Technology & Digital Media", image: "assets/", id: "itdm" },
            { title: "Media & Communication", image: "assets/commerce/", id: "mc" },
            { title: "Hotel, Travel & Hospitality Management", image: "assets/commerce/", id: "hthm" },
            { title: " Creative Fields", image: "assets/commerce/", id: "cf" },
            { title: " Education & Teaching", image: "assets/commerce/", id: "et" }
        ],
        Science: [
            { title: "Engineering & Technology (PCM)", image: "assets/sci/engineering.webp" },
            { title: "Medical & Allied Health Sciences (PCB)", image: "assets/sci/medical.webp" },
            { title: "IT & Computer Science", image: "assets/sci/it.webp" },
            { title: "Architecture & Design (PCM required)", image: "assets/sci/" },
            { title: "Aviation", image: "assets/sci/" },
            { title: "Psychology, Social Science & Liberal Arts", image: "assets/sci/" },
            { title: "Law", image: "assets/sci/" },
            { title: "Business & Management", image: "assets/sci/" },
            { title: "Defense & Civil Services", image: "assets/sci/" },
            { title: "Emerging Tech & Modern Fields", image: "assets/sci/" }
            // { title: "", image: "assets/it.webp" }
            // { title: "", image: "assets/it.webp" }
            // { title: "", image: "assets/it.webp" }
        ],
        Arts: [
            { title: "Humanities & Social Sciences", image: "assets/arts/" },
            { title: "Languages & Literature", image: "assets/arts/" },
            { title: "Fine Arts & Performing Arts", image: "assets/arts/" },
            { title: "Communication & Media", image: "assets/arts/" },
            { title: "Education", image: "assets/arts/" },
            { title: "Law and Legal Studies", image: "assets/arts/" }
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
