import render from "./render.js";

let selectedCityWeatherData;

const getWeatherFromLocation = async (location) => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=1148c1cce4eb4124e7142dadbf7589d7&units=metric`
    );
    if (!response.ok) {
      if (response.status === 404) {
        alert("Please enter a correct city name.");
      } else {
        console.log(response.statusText);
      }
      return;
    }
    const weatherData = await response.json();
    const data = (({ main: { feels_like }, weather, name }) => ({
      main: { feels_like },
      weather,
      name,
    }))(weatherData);
    selectedCityWeatherData = data;
    render();
  } catch (err) {
    console.log(err);
  }
};

export { selectedCityWeatherData, getWeatherFromLocation };
