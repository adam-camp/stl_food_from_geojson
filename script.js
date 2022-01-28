var map = L.map('mapid').setView([38.6,-90.2],11);

//load tile layer
L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
}).addTo(map);

// load GeoJSON from an external file
$.getJSON("https://raw.githubusercontent.com/adam-camp/stl_food_from_geojson/main/places.geojson",function(data){
var restIcon = L.icon({
      iconUrl: 'https://www.clipartmax.com/png/middle/27-277542_image-cartoon-pictures-of-restaurants.png',
      iconSize: [45,35]
    });  
L.geoJson(data,{
      pointToLayer: function(feature,latlng){
        var marker = L.marker(latlng,{icon: restIcon});
        marker.bindPopup(feature.properties.Restaurants + '<br/>' +'<br/>' + feature.properties.Address + '<br/>' + feature.properties.City);
        return marker;  
}
}).addTo(map);
});
