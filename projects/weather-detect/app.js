// SELECT ELEMENT
const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value");
const descElement = document.querySelector(".temperature-description");
const locElement = document.querySelector(".weather-location");
const notificationElement = document.querySelector(".notification");

//App data
const weather = {};
weather.temperature = {
  unit: "celcius",
};

const KELVIN = 273;
const key = "82005d27a116c2880c8f0fcb866998a0";

if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(setPosition, showError);
} else {
  notificationElement.style.display = "block";
  notificationElement.innerHTML = "<p>Browser does not support geolocation</p>";
}

function setPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;

  getWeather(latitude, longitude);
}

function showError(error) {
  notificationElement.style.display = "block";
  notificationElement.innerHTML = "<p>" + error.message + "</p>";
  notificationElement.classList.add(
    "font-light",
    "text-[16px]",
    "mb-4",
    "text-red-500",
    "text-center"
  );
}

function getWeather(latitude, longitude) {
  let api =
    "https://api.openweathermap.org/data/2.5/weather?lat=" +
    latitude +
    "&lon=" +
    longitude +
    "&appid=" +
    key;
  // console.log(latitude);
  // console.log(longitude);
  console.log(api);

  fetch(api)
    .then(function (response) {
      let data = response.json();
      console.log(data);
      return data;
    })
    .then(function (data) {
      weather.temperature.value = Math.round(data.main.temp - KELVIN);
      weather.description = data.weather[0].description;
      weather.iconId = data.weather[0].icon;
      weather.country = data.sys.country;
    })
    .then(function () {
      displayWeather();
    });
}

function displayWeather() {
  iconElement.innerHTML =
    '<img src="assets/images/' + weather.iconId + '.png"/>';
  tempElement.innerHTML = weather.temperature.value + "&#176;<span>C</span>";
  descElement.innerHTML = weather.description;
  if (weather.country === "ID") {
    weather.country = "Indonesia";
  }
  if (weather.city == undefined) {
    weather.city = "Surabaya";
  }
  locElement.innerHTML = weather.city + ", " + weather.country;
}

function celciusToFarenheit(temperature) {
  console.log((temperature * 9) / 5 + 32);
  return (temperature * 9) / 5 + 32;
}

tempElement.addEventListener("click", function () {
  if (weather.temperature.value === undefined) {
    return;
  }
  if (weather.temperature.unit === "celcius") {
    let farenheit = celciusToFarenheit(weather.temperature.value);
    console.log(farenheit);
    farenheit = Math.round(farenheit);
    tempElement.innerHTML = farenheit + "&#176;<span>F</span>";
    weather.temperature.unit = "farenheit";
  } else {
    tempElement.innerHTML = weather.temperature.value + "&#176;<span>C</span>";
    weather.temperature.unit = "celcius";
  }
});
