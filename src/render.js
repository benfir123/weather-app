import { getWeatherFromLocation, selectedCityWeatherData } from "./weather";

const searchInput = document.getElementById("weather-search");
const searchButton = document.getElementById("search-button");
const toggleSwitch = document.getElementById("toggle");

const render = () => {
  const temp = document.getElementById("temp");
  temp.textContent = Math.round(selectedCityWeatherData.main.feels_like) + "°";

  const icon = document.querySelector("img");
  icon.src = `http://openweathermap.org/img/wn/${selectedCityWeatherData.weather[0].icon}@2x.png`;

  const cityName = document.querySelector(".city-name");
  cityName.textContent = selectedCityWeatherData.name;

  const title = document.querySelector(".title");
  title.textContent = selectedCityWeatherData.weather[0].main;

  const description = document.querySelector(".description");
  description.textContent = selectedCityWeatherData.weather[0].description;
};

const convertTemp = (currentTemp) => {
  if (toggleSwitch.checked) {
    temp.textContent = Math.round(currentTemp * 1.8 + 32) + "°";
  } else {
    temp.textContent = Math.round((currentTemp - 32) * 0.5556) + "°";
  }
};

searchButton.addEventListener("click", () => {
  if (!searchInput.value) {
    alert("Please enter a city name.");
    return;
  }
  getWeatherFromLocation(searchInput.value);
});

toggleSwitch.addEventListener("change", () =>
  convertTemp(parseInt(temp.textContent.slice(0, -1)))
);

export default render;
