const themeToggleBtn = document.querySelector('header button');
const themeIcon = themeToggleBtn.querySelector('img');
const logo = document.getElementById('logo');

const moonIconPath = './assets/images/lua-crescente.png';
const sunIconPath = './assets/images/sol.png';
const darkLogoPath = './assets/images/logoclara.png';
const lightLogoPath = './assets/images/logoescura.png';



function enableDarkMode() {
  document.documentElement.setAttribute('data-theme', 'dark');
  themeIcon.src = moonIconPath;
  logo.src = darkLogoPath;
}

function enableLightMode() {
  document.documentElement.setAttribute('data-theme', 'light');
  themeIcon.src = sunIconPath;
  logo.src = lightLogoPath;
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  if (currentTheme === 'light') {
    enableDarkMode();
  } else {
    enableLightMode();
  }
}

themeToggleBtn.addEventListener('click', toggleTheme);

enableDarkMode();

