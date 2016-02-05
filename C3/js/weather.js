
  getLocation();
  function getLocation() {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
      } else {
          pos = 'Stockholm';
      }
  }
  function showPosition(position) {
      var lat = position.coords.latitude;
      var lng = position.coords.longitude;
      var pos = '' + lat + ',' + lng + '';
      weather(pos);
  }


	
  function weather(pos){
  $.simpleWeather({
    location: pos,
    woeid: '',
    unit: 'c',
    success: function(weather) {
    	city = weather.city;
			temp = weather.temp+'&deg';
			wcode = '<img class="weathericon" src="images/weathericons/' + weather.code + '.svg">' ;
			wind = '<p>' + weather.wind.speed + '</p><p>' + weather.units.speed + '</p>';
			//humadity = weather.humadity + ' %';
			
$(".location").text(city);
$(".temperature").html(temp);
$(".climate_bg").html(wcode);
$(".windspeed").html(wind);
//$(".humadity").text(humadity);
    },
    error: function(error) {
      $(".weather").html('<p>'+error+'</p>');
    }
  });
}
