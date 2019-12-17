var button = document.querySelector(".submit")
var inputValue = document.querySelector(".inputValue")
var name = document.querySelector(".name");
var desc = document.querySelector(".desc");
var temp = document.querySelector(".temp");
var humid = document.querySelector(".humidity");
var windSpeed = document.querySelector(".windSpeed");

var date = new Date();
document.getElementById("date").innerHTML = date.toDateString();

button.addEventListener("click", function(){
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+inputValue.value+"&appid=c0364544656115d0bb71b2442947f757")
    .then(response => response.json())
    .then(data => {
        var nameValue = data["name"];
        var tempValue = data["main"]["temp"];
        var descValue = data["weather"][0]["description"];
        var humidValue = data["main"]["humidity"];
        var windValue = data["wind"]["speed"];

        name.innerHTML = nameValue;
        temp.innterHTML = tempValue;
        desc.innerHTML = descValue;
        humid.innerHTML = humidValue;
        windSpeed.innerHTML = windValue;

    })  
})


