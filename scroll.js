document.addEventListener("DOMContentLoaded", function () {
  console.log("Scroll script active");

  const navbar = document.getElementById("navbar");
  console.log("Navbar found:", navbar);

  if (!navbar) return;

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
});

// this code represents the behaviour of header