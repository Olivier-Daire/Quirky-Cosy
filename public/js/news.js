new WOW().init();

var el = document.querySelector('#map');
var mapData;
$.getJSON('assets/world.json', function(data){
	mapData = data;
}).done(function(){
		var map = new Smallworld(el, {
			geojson: mapData,
			center: [40, 10],
			waterColor: '#ffffff',
			landColor: '#dedede',
			marker: [37.757719928168605, -122.43760000000003],
			markerSize: 6,
			markerColor: '#ec2635'
		});
	}
);
$(window).load(function() {
	$('.news-header').addClass('active');
});
