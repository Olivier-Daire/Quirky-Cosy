new WOW().init();

var el = document.querySelector('#map');
var mapData;
var coord =  $('script[src="js/news.js"]').data('coord');
$.getJSON('assets/world.json', function(data){
	mapData = data;
}).done(function(){
		var map = new Smallworld(el, {
			geojson: mapData,
			center: [40, 10],
			waterColor: '#ffffff',
			landColor: '#dedede',
			marker: coord,
			markerSize: 6,
			markerColor: '#ec2635'
		});
	}
);
$(window).load(function() {
	$('.news-header').addClass('active');
});

$('.toggle').on('click', function(event) {
	event.preventDefault();
	$(this).next('div').slideToggle(function(){
		$(this).toggleClass('active');
	});
});
