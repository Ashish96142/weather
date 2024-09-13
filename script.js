  const inputBox = doument.querySelector('.input-box');
  const searchBtn = document.getElementById('searchBtn');
  const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('temperature');
const description = document.querySelector('description');
const humidity = document.querySelector('humidity');
const Wind_speed = document.getElementById('Wind-speed');


async function checkWeather(city){
    const api_key = "c3e927a8060fa3df1f269a93bf8aa011"
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

const weather_data = await fetch(`${url}`).then(response => response.json());

temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
description.innerHTML = `${weather_data.weather[0].description}`;
humidity.innerHTML= `${weather_data.main.humidity}%`;
Wind_speed.innerHTML =` ${weather_data.wind.speed}`;


switch(weather_data.weather[0].main){
    case 'Clouds':
        weather_img.src ="cloud.png"
        break;

        case 'Clear':
        weather_img.src ="clear.png"
        break;
        case 'mist':
        weather_img.src ="mist.png"
        break;
        case 'rain':
        weather_img.src ="rain.png"
        break;
        case 'snow':
        weather_img.src ="snow.png"
        break;
     
}
console.log(weather_data);
}



searchBtn.addEventListener('Click',()=>{
    checkWeather(inputBox.value);
});