const themeSwitch = document.getElementById('theme-switch');
themeSwitch.addEventListener('change', function () {
  if (this.checked) {
    document.body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');
  }
});

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  themeSwitch.checked = true;
  document.body.classList.add('dark-theme');
}



// const theme = document.getElementById('icon-logotip');
// const logo = document.getElementById('icon-dark-logo');

// theme.addEventListener('change', () => {
//     if (theme.checked) {
//         logo.src = '../img/noptimizesprite.svg#icon-dark-logo';
//     } else {
//         logo.src = './img/noptimizesprite.svg#icon-logotip';
//     }
// });