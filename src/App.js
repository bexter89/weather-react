import React, { useState } from "react";
import "./App.css";
import Search from "./Search";
import Weather from "./Weather";

export default function App() {
  const [weatherData, setWeatherData] = useState(null);
  function updateWeather(data) {
    setWeatherData(data);
  }
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Search updateCity={updateWeather} />
      {weatherData && <Weather cityData={weatherData} />}
    </div>
  );
}
