// FUNCTIONS

// toggle between hiding and showing the dropdown content
function toggleNav() {
	navDropdown.classList.toggle('show');
}

function toggleModal() {
	contactModal.classList.toggle('show');
}

function switchTheme() {
	if (themeToggleNav.checked || themeToggleDropdown.checked) {
		darkMode = true;
		icon.src = '../img/logo_white.png';

		switchColorsDark();
		switchBackgroundsLight();

		localStorage.setItem('dansoloha-theme', 'dark');
	} else {
		darkMode = false;
		icon.src = '../img/logo_black.png';

		switchColorsLight();
		switchBackgroundsDark();

		localStorage.setItem('dansoloha-theme', 'light');
	}
}

function switchColorsLight() {
	$('a, h1, h2, h3, h4, p, button, i, li, input[type=submit], label, time, .title').css('color', fontColorLight);
	$('.body').css('background-color', `rgba(255, 255, 255, ${highlightOpacity})`);
	$('input, textarea, .blog-post, .glass, .dropbtn, .dropdown--content, .project-item, .footer, #top-nav, #hiring-points li').css('background-color', glassLight);
	$('hr').css('background-color', fontColorLight);
	$('html').css('background-color', primaryColorLight);
}

function switchColorsDark() {
	$('a, h1, h2, h3, h4, p, button, i, li, input[type=submit], label, time, .title').css('color', fontColorDark);
	$('.body').css('background-color', `rgba(0, 0, 0, ${highlightOpacity})`);
	$('input, textarea, .blog-post, .glass, .dropbtn, .dropdown--content, .project-item, .footer, #top-nav, #hiring-points li').css('background-color', glassDark);
	$('hr').css('background-color', fontColorDark);
	$('html').css('background-color', primaryColorDark);
}

function switchBackgroundsLight() {
	if ($('html').attr('id') == 'home') {
		$('#home').css('background-image', 'linear-gradient(to right, #080a19 0%, #234267 50%, #154b6a 75%, #072837 100%);');
		$('#home').css('background-image', 'url("../img/background/lights01.jpg")');
	}
	if ($('html').attr('id') == 'resume') {
		$('#resume').css('background-image', 'linear-gradient(to right, #0e272f 0%, #164251 50%, #11404f 75%, #082a34 100%);');
		$('#resume').css('background-image', 'url("../img/background/lights02.jpg")');
	}
	if ($('html').attr('id') == 'projects') {
		$('.projects').css('background-image', 'linear-gradient(to right, #202f50 0%, #1d4566 50%, #0a5368 75%, #034354 100%);');
		$('#projects').css('background-image', 'url("../img/background/lights03.jpg")');
	}
	if ($('html').attr('id') == 'blog') {
		$('#blog').css('background-image', 'linear-gradient(to right, #1b1c42 0%, #23234b 50%, #2d2951 75%, #312e3b 100%);');
		$('#blog').css('background-image', 'url("../img/background/lights04.jpg")');
	}
	if ($('html').attr('id') == 'about') {
		$('#about').css('background-image', 'linear-gradient(to right, #226478 0%, #24677f 50%, #236680 75%, #264e9d 100%);');
		$('#about').css('background-image', 'url("../img/background/lights05.jpg")');
	}
	if ($('html').attr('id') == 'contact') {
		$('#contact').css('background-image', 'linear-gradient(to right, #132b47 0%, #1e4a64 50%, #0c3c41 75%, #0a262e 100%)');
		$('#contact').css('background-image', 'url("../img/background/lights06.jpg")');
	}
}

function switchBackgroundsDark() {
	if ($('html').attr('id') == 'home') {
		$('#home').css('background-image', 'url("../img/background/mountain01.jpg")');
	}
	if ($('html').attr('id') == 'resume') {
		$('#resume').css('background-image', 'url("../img/background/mountain02.jpg")');
	}
	if ($('html').attr('id') == 'projects') {
		$('#projects').css('background-image', 'url("../img/background/mountain03.jpg")');
	}
	if ($('html').attr('id') == 'blog') {
		$('#blog').css('background-image', 'url("../img/background/mountain04.jpg")');
	}
	if ($('html').attr('id') == 'about') {
		$('#about').css('background-image', 'url("../img/background/mountain05.jpg")');
	}
	if ($('html').attr('id') == 'contact') {
		$('#contact').css('background-image', 'url("../img/background/mountain06.jpg")');
	}
}

const exists = element => typeof element !== 'undefined' && $(element).length;
