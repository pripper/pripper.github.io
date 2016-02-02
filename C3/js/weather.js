if("geolocation" in navigator){
	navigator.geolocation.getCurrentPosition(function(position) {
		
	});
} else {

	
}
	
$.get("http://ipinfo.io", function (response) {
    var city = response.city;
    loadweather(city);
}, "jsonp");
	

function loadweather(c) {
	$.simpleWeather ({
		location: c,
		woeid: "",
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