
const API_KEY = "90218b868cf21c70642c9fbfd6a61f41";


function onGeoOk(position){
    const lat =position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weatherContainer = document.querySelector("#weather span:first-child");
        const cityContainer = document.querySelector("#weather span:last-child");
        cityContainer.innerText = data.name;
        weatherContainer.innerText = data.weather[0].main;
    });
}

function onGeoError(){
    alert ("Can't find you. No wearther for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);

