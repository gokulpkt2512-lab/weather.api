function SearchBar({ city, setCity, searchWeather, loading }) {

  return (
    <div className="search-box">

      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            searchWeather(city);
          }
        }}
      />

      <button
        onClick={() => searchWeather(city)}
        disabled={loading}
      >
        {loading ? "Searching..." : "Search"}
      </button>

    </div>
  );
}

export default SearchBar;