let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

const enableDarkmode = () => {
  document.body.classList.add('darkmode')
  localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
  document.body.classList.remove('darkmode')
  localStorage.setItem('darkmode', null)
}

// const applySystemTheme = () => {
//   if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
//     enableDarkmode();
//   } else {
//     disableDarkmode();
//   }
// };

// applySystemTheme();

// window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applySystemTheme);

if(darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem('darkmode')
  darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})