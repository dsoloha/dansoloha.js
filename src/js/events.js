// EVENT LISTENERS

$(window).resize(() => {
	if ($(window).width() < 750) {
		$('.project-item-thumbnail').addClass('clearfix');
	} else {
		$('.project-item-thumbnail').removeClass('clearfix');
	}
});

$(cookiePopupHide).on('click', () => {
	cookiePopup.hide();
	sessionStorage.setItem('cookies-okay', true);
});
$(cookiePopupWhatIs).on('hover', $('#cookie-popup--what-is').show());
