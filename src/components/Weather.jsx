import { useState } from "react";

import { useWeather } from "../context/WeatherContext";

import SearchBar from "./SearchBar";
import WeatherCard from "./WeatherCard";
import Forecast from "./Forecast";
import AirQuality from "./AirQuality";
function Weather() {

  const [city, setCity] = useState("Chennai");

  const [activeTab, setActiveTab] = useState("dashboard");

  const {
    weather,
    forecast,
    airQuality,
    loading,
    error,
    searchWeather
  } = useWeather();

  return (
    <div className="weather-container">

      <h1>Weather App</h1>

      <p className="subtitle">
        Check the weather in your city
      </p>


      {/* Navigation Bar */}

      <nav className="weather-nav">

        <button
          className={activeTab === "dashboard" ? "active" : ""}
          onClick={() => setActiveTab("dashboard")}
        >
          Dashboard
        </button>

        <button
          className={activeTab === "today" ? "active" : ""}
          onClick={() => setActiveTab("today")}
        >
          Today's Weather
        </button>

        <button
          className={activeTab === "forecast" ? "active" : ""}
          onClick={() => setActiveTab("forecast")}
        >
          5 Days Forecast
        </button>

      </nav>


      {/* Search Bar */}

      <SearchBar
        city={city}
        setCity={setCity}
        searchWeather={searchWeather}
        loading={loading}
      />


      {/* Loading */}

      {loading && <p>Loading weather...</p>}


      {/* Error */}

      {error && <p className="error">{error}</p>}


      {/* Main Dashboard */}

      {!loading && !error && activeTab === "dashboard" && (

        <div className="dashboard-section">

          <h2>Today's Overview</h2>

         {weather && (
  <WeatherCard weather={weather} />
)}

{airQuality && (
  <AirQuality airQuality={airQuality} />
)}

{forecast && (
  <Forecast forecast={forecast} />
)}

        </div>

      )}


      {/* Today's Weather */}

      {!loading && !error && activeTab === "today" && (

        <div>

          {weather ? (
            <WeatherCard weather={weather} />
          ) : (
            <p>Search a city to see today's weather.</p>
          )}

        </div>

      )}


      {/* 5 Days Forecast */}

      {!loading && !error && activeTab === "forecast" && (

        <div>

          {forecast ? (
            <Forecast forecast={forecast} />
          ) : (
            <p>Search a city to see the five-day forecast.</p>
          )}

        </div>

      )}

    </div>
  );
}

export default Weather;