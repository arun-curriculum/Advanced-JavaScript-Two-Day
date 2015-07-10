//Initialize map

function initializeMap(lat, lng, where) {
	var myLatlng = new google.maps.LatLng(lat, lng);
	
	var mapOptions = {
		zoom: 15,
		center: myLatlng
	}

	var map = new google.maps.Map(document.getElementById(where), mapOptions);

	var marker = new google.maps.Marker({
		position: myLatlng,
		map: map
	});
}