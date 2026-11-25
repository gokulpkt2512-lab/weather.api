function AirQuality({ airQuality }) {

  if (!airQuality || !airQuality.list?.length) {
    return <p>Air quality information unavailable.</p>;
  }

  const airData = airQuality.list[0];

  const aqi = airData.main.aqi;

  const aqiDetails = {
    1: { label: "Good", color: "#16a34a" },
    2: { label: "Fair", color: "#65a30d" },
    3: { label: "Moderate", color: "#ca8a04" },
    4: { label: "Poor", color: "#ea580c" },
    5: { label: "Very Poor", color: "#dc2626" }
  };

  const quality = aqiDetails[aqi];

  const pollutants = [
    { name: "PM2.5", value: airData.components.pm2_5 },
    { name: "PM10", value: airData.components.pm10 },
    { name: "CO", value: airData.components.co },
    { name: "NO₂", value: airData.components.no2 },
    { name: "SO₂", value: airData.components.so2 },
    { name: "O₃", value: airData.components.o3 }
  ];

  return (

    <div className="air-quality-section">

      <h2>Air Quality</h2>

      <div className="air-quality-main">

        <div
          className="aqi-number"
          style={{ color: quality.color }}
        >
          {aqi}
        </div>

        <div>
          <h3>Air Quality Index</h3>

          <p style={{ color: quality.color }}>
            {quality.label}
          </p>

          <small>Scale: 1 - 5</small>
        </div>

      </div>


      <h3 className="pollutant-heading">
        Pollutant Levels
      </h3>

      <div className="pollutant-grid">

        {pollutants.map((item) => (

          <div className="pollutant-card" key={item.name}>

            <h4>{item.name}</h4>

            <p>{item.value.toFixed(2)}</p>

            <small>μg/m³</small>

          </div>

        ))}

      </div>

    </div>

  );
}

export default AirQuality;