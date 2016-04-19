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

$('.list-btn .btn').on('click', function(e){
	$(this).toggleClass('active').blur();
	var type = $(this).text().toLowerCase();
	$('.' + type).toggle();
});
