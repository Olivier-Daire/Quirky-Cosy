$(window).on("scroll", function () {
	$('.navbar').toggleClass('tiny', $(document).scrollTop() > 0);
});
