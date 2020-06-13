// JQUERY

// set theme to selected theme
$(document).ready(() => {
	'use strict';

	// set current theme
	if (currentTheme) {
		if (currentTheme === 'dark') {
			themeToggleNav.checked = true;
			switchTheme();
		}
	}

	// toggle modal, if applicable
	if (exists(modal)) {
		contactModal.style.display = 'block';
	}

	// show cookie popup if not yet accepted
	if (!cookiesAccepted) {
		$(cookiePopup).show();
	}

	// show nav on scroll up
	// 	let
	// 		currentPos,
	// 		currentScrollTop = 0;

	// 	$(window).scroll(() => {
	// 		let scrollTop = $(window).scrollTop(),
	// 			topnavHeight = topNav.height();

	// 		currentScrollTop = scrollTop;

// 		if (currentPos < currentScrollTop && scrollTop > topnavHeight + topnavHeight) {
// 			topNav.addClass('scroll-up');
// 			topNav.hide();
// 		} else if (currentPos > currentScrollTop && (scrollTop > topnavHeight)) {
// 			topNav.removeClass('scroll-up');
// 			topNav.show();
// 		}
// 		currentPos = currentScrollTop;
// 	});
});

// close the dropdown if the user presses outside of it
// TODO: allow user to toggle themes without closing dropdown
$(window).on('click', event => {
	let target = $(event.target);
	if (!target.is(dropBtn) && !target.is(dropdownContent)) {
		$(dropdownContent).removeClass('show');
	}

	if (target.is('.modal')) {
		$(contactModal).hide();
	}
});

$(themeToggleNav).on('change', switchTheme);
$(themeToggleDropdown).on('change', switchTheme);
$(closeModal).on('click', () => {
	$(contactModal).hide();
});
