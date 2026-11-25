const API_URL = "https://api.openweathermap.org/data/2.5";

const API_KEY = import.meta.env.VITE_WEATHER_APIKEY;


// Today's weather
export async function getWeather(city) {

  const response = await fetch(
    `${API_URL}/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Weather not found");
  }

  return data;
}


// 5 days forecast
export async function getForecast(city) {

  const response = await fetch(
    `${API_URL}/forecast?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Forecast not found");
  }

  return data;
}


// Air quality
export async function getAirQuality(lat, lon) {

  const response = await fetch(
    `${API_URL}/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Air quality unavailable");
  }

  return data;
}