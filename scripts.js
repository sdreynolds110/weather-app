var button = document.querySelector(".submit")
var inputValue = document.querySelector(".inputValue")
var name = document.querySelector(".name");
var desc = document.querySelector(".desc");
var temp = document.querySelector(".temp");

button.addEventListener("click", function(){
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+inputValue.value+"&appid=c0364544656115d0bb71b2442947f757")
    .then(response => response.json())
    .then(data => console.log(data))

})


