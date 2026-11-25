import { createContext, useContext, useState } from "react";

import {
  getWeather,
  getForecast,
  getAirQuality
} from "../services/Weather";

const WeatherContext = createContext();

export function WeatherProvider({ children }) {

  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [airQuality, setAirQuality] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function searchWeather(city) {

    if (!city.trim()) {
      setError("Please enter a city name");
      return;
    }

    setLoading(true);
    setError("");

    try {

      // Get current weather first
      const weatherData = await getWeather(city);

      setWeather(weatherData);

      // Get forecast and air quality together
      const [forecastData, airData] = await Promise.all([

        getForecast(city),

        getAirQuality(
          weatherData.coord.lat,
          weatherData.coord.lon
        )

      ]);

      setForecast(forecastData);
      setAirQuality(airData);

    } catch (err) {

      setError(err.message);

      setWeather(null);
      setForecast(null);
      setAirQuality(null);

    } finally {

      setLoading(false);

    }
  }

  return (
    <WeatherContext.Provider
      value={{
        weather,
        forecast,
        airQuality,
        loading,
        error,
        searchWeather
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

export function useWeather() {
  return useContext(WeatherContext);
}