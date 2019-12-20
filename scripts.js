$(document).ready(function() {
    for (var i = 0; i < localStorage.length; i++) {
      var currentCity = localStorage.getItem(localStorage.key(i));
      $("#previousCity").append("<tr><td> " + currentCity + " </td></tr>");
    }
  
    $(".searchBtn").click(function() {
      var NowMoment = moment().format('L');
      var eDisplayMoment = document.getElementById("displayMoment");
      eDisplayMoment.innerHTML = NowMoment;
      var userCity = $("#City").val();
      localStorage.setItem(userCity, userCity);
      $("#previousCity" ).append("<tr><td> " + userCity + " </td></tr>");
      $("#currentCity" ).text(userCity);
      $.ajax({
        url:
          "http://api.openweathermap.org/data/2.5/weather?q=" + userCity + "&units=imperial&appid=c0364544656115d0bb71b2442947f757"
      }).done(function(html) {
        var currentWeather = html.weather[0].main 
        if (currentWeather === "Clouds") {
          $("#currentIcon").append("<i></i>").addClass('fas fa-cloud-sun');
        }
        else if (currentWeather === "Rain") {
          $("#currentIcon").append("<i></i>").addClass('fas fa-cloud-rain');
        }
        else if (currentWeather === "Snow") {
          $("#currentIcon").append("<i></i>").addClass('fas fa-snowflake');
        }
        else if (currentWeather === "Thunderstorm") {
          $("#currentIcon").append("<i></i>").addClass('fas fa-bolt');
        }
        else {
          $("#currentIcon").append("<i></i>").addClass('fas fa-sun');
        }
  
  
        $("#currentTemp").text(html.main.temp);
        $("#currentHumid").text(html.main.humidity);
        $("#currentWind").text(html.wind.speed);
        var lat = html.coord.lat;
        var lon = html.coord.lon;
        $.ajax({
          url:
            "http://api.openweathermap.org/data/2.5/uvi?&appid=c0364544656115d0bb71b2442947f757&lat=" + lat + "&lon=" + lon
        }).done(function(html) {
          $("#currentUV").text(html.value);
        });
      });
      $.ajax({
        url:
          "http://api.openweathermap.org/data/2.5/forecast?&appid=c0364544656115d0bb71b2442947f757&q=" + userCity + "&units=imperial&mode=JSON"
      }).done(function(html) {
        var currentDayOne = html.list[4].weather[0].main
        var currentDayTwo = html.list[12].weather[0].main
        var currentDayThree = html.list[20].weather[0].main
        var currentDayFour = html.list[28].weather[0].main
        var currentDayFive = html.list[36].weather[0].main
        console.log(html.list[36].weather[0].main)
        $("#dayOneDate").text(moment(html.list[4].dt_txt).format('L'));
        $("#dayOneTemp").text(html.list[4].main.temp);
        $("#dayOneHumid").text(html.list[4].main.humidity);
        $("#dayTwoDate").text(moment(html.list[12].dt_txt).format('L'));
        $("#dayTwoTemp").text(html.list[12].main.temp);
        $("#dayTwoHumid").text(html.list[12].main.humidity);
        $("#dayThreeDate").text(moment(html.list[20].dt_txt).format('L'));
        $("#dayThreeTemp").text(html.list[20].main.temp);
        $("#dayThreeHumid").text(html.list[20].main.humidity);
        $("#dayFourDate").text(moment(html.list[28].dt_txt).format('L'));
        $("#dayFourTemp").text(html.list[28].main.temp);
        $("#dayFourHumid").text(html.list[28].main.humidity);
        $("#dayFiveDate").text(moment(html.list[36].dt_txt).format('L'));
        $("#dayFiveTemp").text(html.list[36].main.temp);
        $("#dayFiveHumid").text(html.list[36].main.humidity);
  
        if (currentDayOne === "Clouds") {
          $("#dayOneIcon").append("<i></i>").addClass('fas fa-cloud-sun');
        }
        else if (currentDayOne === "Rain") {
          $("#dayOneIcon").append("<i></i>").addClass('fas fa-cloud-rain');
        }
        else if (currentDayOne === "Snow") {
          $("#dayOneIcon").append("<i></i>").addClass('fas fa-snowflake');
        }
        else if (currentDayOne === "Thunderstorm") {
          $("#dayOneIcon").append("<i></i>").addClass('fas fa-bolt');
        }
        else {
          $("#dayOneIcon").append("<i></i>").addClass('fas fa-sun');
        }
  
        if (currentDayTwo === "Clouds") {
          $("#dayTwoIcon").append("<i></i>").addClass('fas fa-cloud-sun');
        }
        else if (currentDayTwo === "Rain") {
          $("#dayTwoIcon").append("<i></i>").addClass('fas fa-cloud-rain');
        }
        else if (currentDayTwo === "Snow") {
          $("#dayTwoIcon").append("<i></i>").addClass('fas fa-snowflake');
        }
        else if (currentDayTwo === "Thunderstorm") {
          $("#dayTwoIcon").append("<i></i>").addClass('fas fa-bolt');
        }
        else {
          $("#dayTwoIcon").append("<i></i>").addClass('fas fa-sun');
        }
  
        if (currentDayThree === "Clouds") {
          $("#dayThreeIcon").append("<i></i>").addClass('fas fa-cloud-sun');
        }
        else if (currentDayThree === "Rain") {
          $("#dayThreeIcon").append("<i></i>").addClass('fas fa-cloud-rain');
        }
        else if (currentDayThree === "Snow") {
          $("#dayThreeIcon").append("<i></i>").addClass('fas fa-snowflake');
        }
        else if (currentDayThree === "Thunderstorm") {
          $("#dayThreeIcon").append("<i></i>").addClass('fas fa-bolt');
        }
        else {
          $("#dayThreeIcon").append("<i></i>").addClass('fas fa-sun');
        }
  
        if (currentDayFour === "Clouds") {
          $("#dayFourIcon").append("<i></i>").addClass('fas fa-cloud-sun');
        }
        else if (currentDayFour === "Rain") {
          $("#dayFourIcon").append("<i></i>").addClass('fas fa-cloud-rain');
        }
        else if (currentDayFour === "Snow") {
          $("#dayFourIcon").append("<i></i>").addClass('fas fa-snowflake');
        }
        else if (currentDayFour === "Thunderstorm") {
          $("#dayFourIcon").append("<i></i>").addClass('fas fa-bolt');
        }
        else {
          $("#dayFourIcon").append("<i></i>").addClass('fas fa-sun');
        }
  
        if (currentDayFive === "Clouds") {
          $("#dayFiveIcon").append("<i></i>").addClass('fas fa-cloud-sun');
        }
        else if (currentDayFive === "Rain") {
          $("#dayFiveIcon").append("<i></i>").addClass('fas fa-cloud-rain');
        }
        else if (currentDayFive === "Snow") {
          $("#dayFiveIcon").append("<i></i>").addClass('fas fa-snowflake');
        }
        else if (currentDayFive === "Thunderstorm") {
          $("#dayFiveIcon").append("<i></i>").addClass('fas fa-bolt');
        }
        else {
          $("#dayFiveIcon").append("<i></i>").addClass('fas fa-sun');
        }
      });
    });
  });
