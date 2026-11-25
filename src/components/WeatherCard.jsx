function WeatherDetails({ weather }) {

  return (
    <div className="weather-info">

      <div>
        <h3>{weather.main.humidity}%</h3>
        <p>Humidity</p>
      </div>

      <div>
        <h3>{weather.wind.speed} m/s</h3>
        <p>Wind Speed</p>
      </div>

      <div>
        <h3>{Math.round(weather.main.feels_like)}°C</h3>
        <p>Feels Like</p>
      </div>

    </div>
  );
}

function WeatherCard({ weather }) {

  return (
    <div className="weather-card">

      <h2>{weather.name}, {weather.sys.country}</h2>

      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="Weather icon"
      />

      <h1>{Math.round(weather.main.temp)}°C</h1>

      <p className="condition">
        {weather.weather[0].description}
      </p>

      <WeatherDetails weather={weather} />

    </div>
  );
}

export default WeatherCard;