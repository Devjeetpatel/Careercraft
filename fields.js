document.addEventListener("DOMContentLoaded", function () {
    const stream = localStorage.getItem("selectedStream");
    console.log("Selected stream:", stream);

    const streamNameEl = document.getElementById("stream-name");
    if (!streamNameEl) {
        console.error("Element #stream-name not found");
        return;
    }

    streamNameEl.textContent = stream;

    const fieldsData = {
        Commerce: [
            { title: "Accounting & Finance", image: "assets/acc&finance.webp" },
            { title: "Business & Management", image: "assets/business.png" },
            { title: "Banking & Insurance", image: "assets/business.png" },
            { title: "Law", image: "assets/business.png" },
            { title: "Economics & Statistics", image: "assets/business.png" },
            { title: "Information Technology & Digital Media", image: "assets/business.png" },
            { title: "Media & Communication", image: "assets/business.png" },
            { title: "Hotel, Travel & Hospitality Management", image: "assets/business.png" },
            { title: " Creative Fields", image: "assets/business.png" },
            { title: " Education & Teaching", image: "assets/business.png" }
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
            { title: "Psychology", image: "assets/psychology.webp" },
            { title: "Sociology", image: "assets/sociology.webp" },
            { title: "Literature", image: "assets/literature.webp" }
        ],
        Diploma: [
            { title: "Mechanical", image: "assets/mechanical.webp" },
            { title: "Electrical", image: "assets/electrical.webp" },
            { title: "Civil", image: "assets/civil.webp" }
        ]
    };

    const container = document.getElementById("fields-container");
    if (!container) {
        console.error("Element #fields-container not found");
        return;
    }

    const fields = fieldsData[stream] || [];
    fields.forEach((field) => {
        const div = document.createElement("div");
        div.className = "field";
        div.innerHTML = `
      <article class="">
                    <div class="cover-image">
                        <a href="choice.html" title="" id="${field.title}">
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
                                <a href="choice.html" id="${field.title}">${field.title}</a>
                            </p>
                        </div>
                    </div>
                </article>
    `;
        container.appendChild(div);
    });
});
