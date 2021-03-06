const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');
const sideDrawer = document.getElementById('mobile-nav');
const menuToggle = document.getElementById('menu-toggle');

// Dark or Light Images
function imageMode(color) {
	image1.src = `img/undraw_proud_coder_${color}.svg`;
	image2.src = `img/undraw_feeling_proud_${color}.svg`;
	image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

function toggleDarkLightMode(mode) {
	const isLight = mode === 'light';

	nav.style.backgroundColor = isLight
		? 'rgb(255 255 255 / 50%)'
		: 'rgb(0 0 0 / 50%)';
	textBox.style.backgroundColor = isLight
		? 'rgb(0 0 0 / 50%)'
		: 'rgb(255 255 255 / 50%)';
	toggleIcon.children[0].textContent = isLight ? 'Light Mode' : 'Dark Mode';
	sideDrawer.style.backgroundColor = isLight
		? 'rgb(255 255 255)'
		: 'rgb(0 0 0)';
	menuToggle.style.backgroundColor = isLight
		? 'rgb(255 255 255 / 50%)'
		: 'rgb(0 0 0 / 50%)';

	const toReplace = isLight ? 'fa-moon' : 'fa-sun';
	const replaceBy = isLight ? 'fa-sun' : 'fa-moon';
	toggleIcon.children[1].classList.replace(toReplace, replaceBy);

	imageMode(mode);
}

// Switch Theme Dynamically
function switchTheme(event) {
	if (event.target.checked) {
		document.documentElement.setAttribute('data-theme', 'dark');
		localStorage.setItem('theme', 'dark');
		toggleDarkLightMode('dark');
	} else {
		document.documentElement.setAttribute('data-theme', 'light');
		localStorage.setItem('theme', 'light');
		toggleDarkLightMode('light');
	}
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage For Theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
	document.documentElement.setAttribute('data-theme', currentTheme);

	if (currentTheme === 'dark') {
		toggleSwitch.checked = true;
		toggleDarkLightMode('dark');
	}
}

const backdrop = document.getElementById('backdrop');

function backdropClickHandler() {
	backdrop.style.display = 'none';
	sideDrawer.classList.remove('open');
}

function menuToggleClickHandler() {
	backdrop.style.display = 'block';
	sideDrawer.classList.add('open');
}

function sideDrawerClickHandler(e) {
	if (e.target.tagName === 'A') {
		backdropClickHandler();
	}
}

backdrop.addEventListener('click', backdropClickHandler);
menuToggle.addEventListener('click', menuToggleClickHandler);
sideDrawer.addEventListener('click', sideDrawerClickHandler);
