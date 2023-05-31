const input = document.querySelector("input");
const button = document.querySelector("button");
const cityName = document.querySelector(".city-name");
const warning = document.querySelector(".warning");
const photo = document.querySelector(".photo");
const weather = document.querySelector(".weather");
const temperature = document.querySelector(".temperature");
const humidity = document.querySelector(".humidity");

const LINK_API = "https://api.openweathermap.org/data/2.5/weather?q=";
const KEY_API = "&appid=3b9ac8731082e2cb1562b3fd36f39d70";
const METRIC_API = "&units=metric";

const getWeather = () => {
  const city = input.value;
  const URL = LINK_API + city + KEY_API + METRIC_API;

  axios.get(URL).then((res) => {
    console.log(res.data);
    const temp = res.data.main.temp;
    const hum = res.data.main.humidity;
    const status = res.data.weather[0].main;
    const iconId = res.data.weather[0].id;
    temperature.textContent = Math.floor(temp) + "°C";
    cityName.textContent = res.data.name;
    humidity.textContent = hum + "%";
    weather.textContent = status;

    if (iconId >= 200 && iconId < 300) {
      photo.setAttribute("src", "./img/thunderstorm.png");
    } else if (iconId >= 300 && iconId < 400) {
      photo.setAttribute("src", "./img/drizzle.png");
    } else if (iconId >= 400 && iconId < 500) {
      photo.setAttribute("src", "./img/rain.png");
    } else if (iconId >= 500 && iconId < 600) {
      photo.setAttribute("src", "./img/ice.png");
    } else if (iconId >= 600 && iconId < 700) {
      photo.setAttribute("src", "./img/fog.png");
    } else if (iconId === 800) {
      photo.setAttribute("src", "./img/sun.png");
    } else if (iconId >= 800 && iconId < 900) {
      photo.setAttribute("src", "./img/cloud.png");
    } else {
      photo.setAttribute("src", "./img/unknown.png");
    }
  });
};

button.addEventListener("click", getWeather);
