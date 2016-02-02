if("geolocation" in navigator){
	navigator.geolocation.getCurrentPosition(function(position) {
		loadWeather(position.coords.latitude + ',' + position.coords.longitude); 
	});
} else {
	loadWeather("Stockholm", "");
	
	
}
	
$(document).ready(function() {
	setInterval(getWeather, 10000);
	
});

function loadweather(location, woeid) {
	$.simpleWeather ({
		location: location,
		woeid: woeid,
		unit: 'c',
		succes: function(weather) {
			city = weather.city;
			temp = weather.temp+'&deg';
			wcode = '<img class="weathericon" src="images/weathericons/' + weather.code + '.svg">' ;
			wind = '<p>' + weather.wind.speed + '</p><p>' + weather.units.speed + '</p>';
			humadity = weather.humadity + ' %';
			
$(".location").text(city);
$(".temperature").html(temp);
$(".climate_bg").html(wcode);
$(".windspeed").html(wind);
$(".humadity").text(humadity);
		},
		error: function(error) {
			$(".error").html('<p>' + error + '</p>');
		}
	});
			
	
}