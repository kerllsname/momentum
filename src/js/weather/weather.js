export default function initializeWeather() {
  const city = document.querySelector('.city');

  isStorageEmpty();

  city.value = localStorage.getItem('city');

  city.addEventListener('change', saveCity);

  getWeather(city);
}

function saveCity(city) {
  localStorage.setItem('city', this.value);
  getWeather(city);
}

async function getWeather(city) {
  const weatherIcon = document.querySelector('.weather-icon');
  const temperature = document.querySelector('.temperature');
  const wind = document.querySelector('.wind');
  const humidity = document.querySelector('.humidity');
  const weatherDescription = document.querySelector('.weather-description');
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${localStorage.getItem('city')}&lang=eng&appid=4efc6c2f8d4ec74c19057c84e58bd688&units=metric`;

  for (let name of weatherIcon.classList) {
    if(name !== 'weather-icon') {
      if(name !== 'owf') weatherIcon.classList.remove(`${name}`);
    }
  }

  const res = await fetch(url);
  const data = await res.json();
  city.value = `${data.name}`
  if (typeof data.weather == 'undefined') { 
    temperature.textContent = `?`;
    weatherDescription.textContent = `Descr: ?`;
    wind.textContent = `Wind speed: ?`
    humidity.textContent = `Humidity: ?`
  } else {
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${parseInt(data.main.temp)}°C`;
    weatherDescription.textContent = `Descr: ${data.weather[0].description}`;
    wind.textContent = `Wind speed: ${parseInt(data.wind.speed)} m/s`
    humidity.textContent = `Humidity: ${data.main.humidity}%`
  }
}

function isStorageEmpty() {
  if (!localStorage.getItem('city')) localStorage.setItem('city', 'Minsk');
}
