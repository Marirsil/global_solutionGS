const themeToggleBtn = document.querySelector('header button');
const themeIcon = themeToggleBtn.querySelector('img');

const moonIconPath = './assets/images/lua-crescente.png';
const sunIconPath = './assets/images/sol.png';

function enableDarkMode() {
  document.documentElement.setAttribute('data-theme', 'dark');
  themeIcon.src = moonIconPath;
}

function enableLightMode() {
  document.documentElement.setAttribute('data-theme', 'light');
  themeIcon.src = sunIconPath;
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