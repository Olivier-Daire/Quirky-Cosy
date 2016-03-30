$(window).on("scroll", function () {
	$('.navbar').toggleClass('tiny', $(document).scrollTop() > 0);
});

$('header .btn-link').on('click', function(event) {
	event.preventDefault();
	$('header form').fadeToggle();
});
