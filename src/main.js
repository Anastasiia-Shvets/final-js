const themeSwitch = document.getElementById('theme-switch');
themeSwitch.addEventListener('change', function () {
  if (this.checked) {
    document.body.classList.add('dark-theme');
    // localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.remove('dark-theme');
    // localStorage.setItem('theme', 'light');
  }
});

// const savedTheme = localStorage.getItem('theme');
// if (savedTheme === 'dark') {
//   themeSwitch.checked = true;
//   document.body.classList.add('dark-theme');
// }
