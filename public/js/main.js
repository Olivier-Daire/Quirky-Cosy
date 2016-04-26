$(window).on("scroll", function () {
	$('.navbar').toggleClass('tiny', $(document).scrollTop() > 0);
});

$('header .btn-link').on('click', function(event) {
	event.preventDefault();
	$('.circle-overlay').addClass('active');
	$(this).fadeOut();
	$('.circle-overlay .btn-link').fadeIn();
	$('.circle-overlay input').focus();
	var isFirefox = typeof InstallTrigger !== 'undefined';
	if (isFirefox) {
		document.getElementById('circleRevealAnimationOpen').beginElement();
	}
});

$('.circle-overlay .btn-link').on('click', function(event) {
	event.preventDefault();
	$('.circle-overlay').removeClass('active');
	$(this).fadeOut();

	var isFirefox = typeof InstallTrigger !== 'undefined';
	if (isFirefox) {
		document.getElementById('circleRevealAnimationClose').beginElement();
	}
	$('header .btn-link').fadeIn();
});

$('.list-theme label').on('click', function(e){
	var type = $(this).text().toLowerCase();
	$('.' + type).toggle();
});

// Bad fix because IE is not capable of handling clip path property
if (detectIE() != false) {
	$('.circle-overlay').css('display', 'none');
	$('header .btn-link').css('display', 'none');
}

/**
 * detect IE
 * returns version of IE or false, if browser is not Internet Explorer
 */
function detectIE() {
	var ua = window.navigator.userAgent;

	var msie = ua.indexOf('MSIE ');
	if (msie > 0) {
		// IE 10 or older => return version number
		return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
	}

	var trident = ua.indexOf('Trident/');
	if (trident > 0) {
		// IE 11 => return version number
		var rv = ua.indexOf('rv:');
		return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
	}

	var edge = ua.indexOf('Edge/');
	if (edge > 0) {
		// Edge (IE 12+) => return version number
		return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
	}

	// other browser
	return false;
}
