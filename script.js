document.getElementById
("arts").addEventListener("click",()=>{
    window.location.href="arts.html";
})

document.getElementById
("com").addEventListener("click",()=>{
    window.location.href="fields.html";
})

document.getElementById
("sci").addEventListener("click",()=>{
    window.location.href="arts.html";
})

document.getElementById
("dip").addEventListener("click",()=>{
    window.location.href="dip.html";
})

// let prevScrollPos = window.pageYOffset;

// window.addEventListener('scroll', function () {
//   let currentScrollPos = window.pageYOffset;
//   const navbar = document.getElementById("navbar");

//   if (prevScrollPos > currentScrollPos) {
//     // Scrolling up
//     navbar.style.top = "0";
//   } else {
//     // Scrolling down
//     navbar.style.top = "-150px"; // Hide
//   }

//   prevScrollPos = currentScrollPos;
// });


// document.addEventListener("DOMContentLoaded", function () {
//   let prevScrollPos = window.pageYOffset;

//   window.addEventListener('scroll', function () {
//     let currentScrollPos = window.pageYOffset;
//     const navbar = document.getElementById("navbar");

//     if (prevScrollPos > currentScrollPos) {
//       navbar.style.top = "0";
//     } else {
//       navbar.style.top = "-150px";
//     }

//     prevScrollPos = currentScrollPos;
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   console.log("Scroll script active");

//   const navbar = document.getElementById("navbar");
//   console.log("Navbar found:", navbar);

//   if (!navbar) return;

//   let prevScrollPos = window.pageYOffset;

//   window.addEventListener("scroll", function () {
//     let currentScrollPos = window.pageYOffset;

//     if (prevScrollPos > currentScrollPos) {
//       navbar.style.top = "0";
//     } else {
//       navbar.style.top = "-150px";
//     }

//     prevScrollPos = currentScrollPos;
//   });
// });
