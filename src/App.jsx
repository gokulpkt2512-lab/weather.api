import Weather from "./components/Weather";
import { WeatherProvider } from "./context/WeatherContext";
import "./App.css";

function App() {

  return (
    <WeatherProvider>
      <div className="app">
        <Weather />
      </div>
    </WeatherProvider>
  );
}

export default App;