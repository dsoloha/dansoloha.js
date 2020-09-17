// VARIABLES

// general
const
	cookiesAccepted = sessionStorage.getItem('cookies-okay') ? sessionStorage.getItem('cookies-okay') : null,
	currentTheme = localStorage.getItem('dansoloha-theme') ? localStorage.getItem('dansoloha-theme') : null;

let
	darkMode = false;

// elements by type
const
	html = document.getElementsByName('html');

// elements by id
const
	activeBtn = document.getElementById('active-btn'),
	contactModal = document.getElementById('contact-modal'),
	icon = document.getElementById('icon'),
	navDropdown = document.getElementById('nav-dropdown'),
	themeToggleDropdown = document.getElementById('theme-checkbox-dropdown'),
	themeToggleNav = document.getElementById('theme-checkbox-nav'),
	topNav = document.getElementById('top-nav');

// elements by class
const
	closeModal = document.getElementsByClassName('modal--close'),
	dropBtn = document.getElementsByClassName('dropbtn'),
	dropdownContent = document.getElementsByClassName('dropdown--content'),
	glass = document.getElementsByClassName('glass'),
	modal = document.getElementsByClassName('modal');

// page ids
const
	home = document.getElementById('home'),
	resume = document.getElementById('resume'),
	projects = document.getElementById('projects'),
	blog = document.getElementById('blog'),
	about = document.getElementById('about'),
	contact = document.getElementById('contact'),

	pageIDs = [home, resume, projects, blog, about, contact];

// themes
const
	primaryColorLight = '#ffffff',
	secondaryColorLight = '#1a1a1a',
	fontColorLight = '#000000',
	backgroundColorLight = '#ffffff',
	glassLight = 'rgba(255, 255, 255, 0.25)';

const
	primaryColorDark = '#000000',
	secondaryColorDark = '#e6e6e6',
	fontColorDark = '#ffffff',
	backgroundColorDark = '#000000',
	glassDark = 'rgba(0, 0, 0, 0.25)';

const
	blurStrength = '8px',
	font = '"Lato", sans-serif',
	fontAlt = '"Raleway", sans-serif',
	glassOpacity = '0.25',
	highlightOpacity = '0.35',
	breakSmall = '450px',
	breakMedium = '660px';
