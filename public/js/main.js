new WOW().init();

var el = document.querySelector('#map');
var test;
$.getJSON('assets/world.json', function(data){
	test = data;
}).done(function(){
		var map = new Smallworld(el, {
			geojson: test,
			center: [40, 10],
			waterColor: '#ffffff',
			landColor: '#dedede',
			marker: [37.757719928168605, -122.43760000000003],
			markerSize: 6,
			markerColor: '#3399ff'
		});
	}
);
$(window).load(function() {
	$('.news-header').addClass('active');
});
