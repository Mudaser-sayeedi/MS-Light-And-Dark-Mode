// at the first get the theme from loccal storage if the user switch before
const currentTheme = localStorage.getItem('theme');

// make query selector reusable
const selector = (element) => document.querySelector(element);

// make dom element into the one single object
const domElement = {
    switchToDark: selector('input'),
    nav : selector('#navbar'),
    toggleIcon : selector('#toggle-icon'),
    image1 : selector('#image1'),
    image2 : selector('#image2'),
    image3 : selector('#image3'),
    textContainer : selector('#text-container')
};

// make easer to switch the images to dark and light version by a variable function
const imageMode = (mode) => {
    domElement.image1.src = `img/undraw_control_panel_${mode}.svg`;
    domElement.image2.src = `img/undraw_designer_life_${mode}.svg`;
    domElement.image3.src = `img/undraw_working_late_${mode}.svg`;
}

// dark and light mode of elements switcher
const switchMode = () => {
    domElement.nav.style.backgroundColor = (domElement.switchToDark.checked) ? 'rgb(0 0 0 / 50%)' : 'rgb( 255 255 255 / 50%)';
    domElement.textContainer.style.backgroundColor = (domElement.switchToDark.checked) ? 'rgb( 255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    domElement.toggleIcon.children[0].textContent = (domElement.switchToDark.checked) ? 'Dark Mode' : 'Light Mode';
    domElement.toggleIcon.children[1].classList.replace((domElement.switchToDark.checked) ? 'fa-sun' : 'fa-moon', (domElement.switchToDark.checked) ? 'fa-moon': 'fa-sun');
    imageMode((domElement.switchToDark.checked) ? 'dark' : 'light');
};

// check if the user stored his/her theme in the browser local storage
if (currentTheme && currentTheme === 'dark') {
    domElement.switchToDark.checked = true;
    document.documentElement.setAttribute('data-theme', 'dark');
    switchMode();
}

// button switch dark and light toggle function
const darkModeSwitch = (event) => {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        switchMode();
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme','light');
        switchMode();
    }
}

// listnere for dark and light switch button
domElement.switchToDark.addEventListener('click', darkModeSwitch);



