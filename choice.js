// document.addEventListener("DOMContentLoaded", function () {
//     const sfield= localStorage.getItem("selectedfield");
//     console.log("Selected field:", sfield);

//     const FieldNamel = document.getElementById("field-name");
//     if (!FieldNamel) {
//         console.error("Element #field-name not found");
//         return;
//     }

//     FieldNamel.textContent = sfield;

//     const fieldsData = {
//         Commerce: [
//             { title: "Accounting & Finance", image: "assets/acc&finance.webp" },
      
//         ],
//         Science: [
//             { title: "Engineering & Technology (PCM)", image: "assets/engineering.webp" },
       
//             // { title: "", image: "assets/it.webp" }
//             // { title: "", image: "assets/it.webp" }
//             // { title: "", image: "assets/it.webp" }
//         ],
//         Arts: [
//             { title: "Psychology", image: "assets/psychology.webp" },
          
//         ],
//         Diploma: [
//             { title: "Mechanical", image: "assets/mechanical.webp" },
   
//         ]
//     };

//     const container = document.getElementById("choice-container");
//     if (!container) {
//         console.error("Element #fields-container not found");
//         return;
//     }

//     const fields = fieldsData[sfield] || [];
//     fields.forEach((choice) => {
//         const div = document.createElement("div");
//         div.className = "choice";
//         div.innerHTML = `
//       <article class="">
//                     <div class="cover-image">
//                         <a href="choice.html" title="" id="choice">
//                             <img data-perfmatters-preload class="img-size" src="${field.image}" class="" alt="${field.title}" >
//                         </a>

//                         <div class="entry-category">
//                             <a href="" class="gridlove-cat gridlove-cat-3"></a>
//                             <a href="" class="gridlove-cat gridlove-cat-2"></a>
//                         </div>
//                     </div>

//                     <div class="box-inner-p">
//                         <div class="">
//                             <p class="">
//                                 <a href="choice.html" id="choice">${field.title}</a>
//                             </p>
//                         </div>
//                     </div>
//                 </article>
//     `;
//         container.appendChild(div);
//     });
// });
document.addEventListener("DOMContentLoaded", function () {
  const selectedField = localStorage.getItem("selectedField"); // or "selectedStream"
  const fieldNameEl = document.getElementById("field-name");
  const choiceContainer = document.getElementById("choice-container");

  if (fieldNameEl) {
    fieldNameEl.textContent = " " + selectedField;
  }

  if (choiceContainer) {
    const choices = [
      { label: "Explore Courses", action: () => alert("Redirect to Courses Page") },
      { label: "Explore Careers", action: () => alert("Redirect to Careers Page") }
    ];

    choices.forEach(choice => {
      const button = document.createElement("button");
      button.textContent = choice.label;
      button.className = "choice-button"; // Style in CSS
      button.addEventListener("click", choice.action);
      choiceContainer.appendChild(button);
    });
  }
});
