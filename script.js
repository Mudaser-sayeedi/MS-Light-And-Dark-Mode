const switchToDark = document.querySelector('input');
const nav = document.querySelector('#navbar');
const toggleIcon = document.querySelector('#toggle-icon');
const image1 = document.querySelector('#image1');
const image2 = document.querySelector('#image2');
const image3 = document.querySelector('#image3');
const textContainer = document.querySelector('#text-container');

const darkMode = () => {
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textContainer.style.backgroundColor = 'rgb( 255 255 255 / 50%)';
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    image1.src = 'img/undraw_control_panel_dark.svg';
    image2.src = 'img/undraw_designer_life_re_dark.svg';
    image3.src = 'img/undraw_working_late_dark.svg';
}

const lightMode = () => {
    nav.style.backgroundColor = 'rgb( 255 255 255 / 50%)';
    textContainer.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.replace('fa-moon','fa-sun');
    image1.src = 'img/undraw_control_panel_light.svg';
    image2.src = 'img/undraw_designer_life_light.svg';
    image3.src = 'img/undraw_working_late_light.svg';
}

const darkModeSwitch = (event) => {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        darkMode();
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme','light');
        lightMode();
    }
}

switchToDark.addEventListener('click', darkModeSwitch);

const currentTheme = localStorage.getItem('theme');

if (currentTheme && currentTheme === 'dark') {
    switchToDark.checked = true;
    document.documentElement.setAttribute('data-theme', 'dark');
    darkMode();
}