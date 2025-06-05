// ======================================
// CONFIGURAÇÃO INICIAL
// ======================================

// 1. Seleciona os elementos do DOM
const themeToggleBtn = document.querySelector('header button'); // Botão no header
const themeIcon = themeToggleBtn.querySelector('img'); // Ícone dentro do botão

// 2. Caminhos das imagens (substitua pelos seus caminhos reais)
const moonIconPath = './assets/images/lua-crescente.png';
const sunIconPath = './assets/images/sol.png'; // Você precisará criar/adicionar este arquivo

// 3. Chave para localStorage
const THEME_KEY = 'site-theme';

// ======================================
// FUNÇÕES PRINCIPAIS
// ======================================

// Ativa o tema dark
function enableDarkMode() {
  document.documentElement.setAttribute('data-theme', 'dark');
  themeIcon.src = moonIconPath;
  themeIcon.alt = 'Ícone de modo noturno';
  localStorage.setItem(THEME_KEY, 'dark');
}

// Ativa o tema light
function enableLightMode() {
  document.documentElement.setAttribute('data-theme', 'light');
  themeIcon.src = sunIconPath;
  themeIcon.alt = 'Ícone de modo claro';
  localStorage.setItem(THEME_KEY, 'light');
}

// Alterna entre temas
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  if (currentTheme === 'light') {
    enableDarkMode();
  } else {
    enableLightMode();
  }
}

// ======================================
// INICIALIZAÇÃO
// ======================================

// Verifica o tema salvo ou preferência do sistema
function initializeTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY);
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    enableDarkMode();
  } else {
    enableLightMode();
  }
}

// ======================================
// EVENT LISTENERS
// ======================================

// Inicializa o tema quando o DOM carregar
document.addEventListener('DOMContentLoaded', initializeTheme);

// Adiciona o evento de clique no botão
themeToggleBtn.addEventListener('click', toggleTheme);

// Observa mudanças na preferência do sistema
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
  if (!localStorage.getItem(THEME_KEY)) {
    e.matches ? enableDarkMode() : enableLightMode();
  }
});