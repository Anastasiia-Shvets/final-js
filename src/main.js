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

// Отримати поточний стан перемикача darck mode з локального сховища (наприклад, localStorage)
const isDarckModeEnabled = localStorage.getItem('darckModeEnabled') === 'true';

// Функція, яка встановлює темну або світлу тему
function toggleDarckMode() {
  const body = document.body;
  if (isDarckModeEnabled) {
    body.classList.remove('darck-mode');
    localStorage.setItem('darckModeEnabled', 'false');
  } else {
    body.classList.add('darck-mode');
    localStorage.setItem('darckModeEnabled', 'true');
  }
}

// При кліку на перемикач теми викликається функція toggleDarckMode
document.getElementById('darckModeSwitch').addEventListener('click', toggleDarckMode);




// const theme = document.getElementById('icon-logotip');
// const logo = document.getElementById('icon-dark-logo');

// theme.addEventListener('change', () => {
//     if (theme.checked) {
//         logo.src = '../img/noptimizesprite.svg#icon-dark-logo';
//     } else {
//         logo.src = './img/noptimizesprite.svg#icon-logotip';
//     }
// });



/*-----------dark for HOME  SHOPPING LIST----------------


document.addEventListener('DOMContentLoaded', function () {
    const currentLocation = window.location.href;
    const navLinks = document.querySelectorAll('.header-nav a'); navLinks.forEach(link => {
        if (link.href === currentLocation) {
            link.classList.add('active');
        } link.addEventListener('click', function (event) {
            navLinks.forEach(link => { link.classList.remove('active'); });
            this.classList.add('active');
        });
    });
});

shopinglistrender.js
document.addEventListener('DOMContentLoaded', function () {
    const currentPath = window.location.pathname;
    const shopLink = document.querySelector('.header-nav-shop');
    if (currentPath.includes('shopinglist.html')) {
        shopLink.classList.add('active');
    }
}); 


/*-----------------------------------------------------------------


/*-------------------------SWITCH SHOP-------------------------

// function toggleBackdropBurgerTheme() {
//     const backdropBurger = document.querySelector('.backdrop-burger');
//     if (themeCheckbox.checked) {
//         backdropBurger.classList.add('dark-theme');
//     } else {
//         backdropBurger.classList.remove('dark-theme');
//     }
// }

// themeCheckbox.addEventListener('change', function () {
//     onAddThemeLocalStorage();
//     toggleBackdropBurgerTheme();
// });

// document.addEventListener('DOMContentLoaded', function () {
//     const selectedTheme = localStorage.getItem('theme');
//     if (selectedTheme === 'dark') {
//         themeCheckbox.checked = true;
//         document.body.classList.add('dark-theme');
//         toggleBackdropBurgerTheme();
//     }
// });

--------------------------------------------------------
const switchBox = document.querySelector('#switch-theme');
function onAddThemeSopList() {
    if (switchBox.checked) {
        localStorage.setItem('them', 'dark');
        document.body.classList.add('dark-theme');
    } else {
        localStorage.removeItem('theme');
        document.body.classList.remove('dark-theme');
    }
}
------------------------------------------------
function toggleBackdropBurgerTheme() {
    const backdropBurger = document.querySelector('.backdrop-burger');
    if (themeCheckbox.checked) {
        backdropBurger.classList.add('dark-theme');
    } else {
        backdropBurger.classList.remove('dark-theme');
    }
}

themeCheckbox.addEventListener('change', function () {
    onAddThemeLocalStorage();
    toggleBackdropBurgerTheme();
});

document.addEventListener('DOMContentLoaded', function () {
    const selectedTheme = localStorage.getItem('theme');
    if (selectedTheme === 'dark') {
        themeCheckbox.checked = true;
        document.body.classList.add('dark-theme');
        toggleBackdropBurgerTheme();
    }
});

------------------


const currentPageUrl = window.location.href;

if (currentPageUrl.indexOf("index.html") !== -1 || currentPageUrl.endsWith("/")) {
    document.querySelector(".header-nav-home").classList.add("active");
}

const currentPageUrl2 = window.location.href;

if (currentPageUrl2.indexOf("shopinglist.html") !== -1 || currentPageUrl2.endsWith("/")) {
    document.querySelector(".burger-shop-list").classList.add("active");
}