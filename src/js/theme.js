const themeToggle = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector("body");

themeToggle.addEventListener('change', changeTheme);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function changeTheme() {
  const theme = localStorage.getItem('theme') === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
  bodyRef.classList = theme;
  localStorage.setItem('theme', theme);
}

if (localStorage.getItem('theme')) {
  bodyRef.classList = localStorage.getItem('theme');
  themeToggle.checked = localStorage.getItem('theme') === Theme.LIGHT ? false : true;
} else {
  localStorage.setItem('theme', Theme.LIGHT);
}

