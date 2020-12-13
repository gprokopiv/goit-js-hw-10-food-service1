const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
  
let currentTheme = localStorage.getItem('currentTheme');

if(!currentTheme) {
  currentTheme= Theme.LIGHT;
}
  
const switchToggleEl = document.querySelector('.theme-switch__toggle');
switchToggleEl.addEventListener('change', changeTheme)
  
  function changeTheme(e){
      e.preventDefault();

      if(currentTheme == Theme.DARK) {
        currentTheme = Theme.LIGHT;
      } else {
        currentTheme = Theme.DARK;
      }

      localStorage.setItem('currentTheme', currentTheme);

      // change body class
      console.log(currentTheme);
  }