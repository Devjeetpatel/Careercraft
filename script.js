{

  document.getElementById("com").addEventListener("click", () => {
    localStorage.setItem("selectedStream", "Commerce");
    window.location.href = "fields.html";
  });

  document.getElementById("arts").addEventListener("click", () => {
    localStorage.setItem("selectedStream", "Arts");
    window.location.href = "fields.html";
  });

  document.getElementById("sci").addEventListener("click", () => {
    localStorage.setItem("selectedStream", "Science");
    window.location.href = "fields.html";
  });

  document.getElementById("dip").addEventListener("click", () => {
    localStorage.setItem("selectedStream", "Diploma");
    window.location.href = "fields.html";
  });

}


// this code stores selected stream to suggest fields accordingly

