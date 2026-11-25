function Forecast({ forecast }) {

  // Group forecast data by date
  const groupedData = {};

  forecast.list.forEach((item) => {

    const date = item.dt_txt.split(" ")[0];

    if (!groupedData[date]) {
      groupedData[date] = [];
    }

    groupedData[date].push(item);

  });

  // Select the forecast closest to 12 PM for each day
  const dailyForecast = Object.values(groupedData)
    .map((items) => {

      return items.reduce((closest, current) => {

        const closestHour = Math.abs(
          new Date(closest.dt * 1000).getHours() - 12
        );

        const currentHour = Math.abs(
          new Date(current.dt * 1000).getHours() - 12
        );

        return currentHour < closestHour ? current : closest;

      });

    })
    .slice(0, 5);

  return (
    <div className="forecast-section">

      <h2>5 Days Forecast</h2>

      <div className="forecast-grid">

        {dailyForecast.map((day) => (

          <div className="forecast-card" key={day.dt}>

            <h3>
              {new Date(day.dt * 1000).toLocaleDateString(
                "en-IN",
                { weekday: "short", day: "numeric", month: "short" }
              )}
            </h3>

            <img
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
              alt={day.weather[0].description}
            />

            <h2>{Math.round(day.main.temp)}°C</h2>

            <p>{day.weather[0].description}</p>

            <small>Humidity: {day.main.humidity}%</small>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Forecast;