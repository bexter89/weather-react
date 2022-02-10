import React, { useState } from "react";

import axios from "axios";

export default function Search({ updateCity }) {
  const [city, setCity] = useState("");
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bafdfac4d6d7b1fc3d3952df39f393b7&units=metric`;
  function handleSubmit(e) {
    e.preventDefault();
    axios.get(apiURL).then(getWeatherData);
  }

  function handleChange(e) {
    setCity(e.target.value);
  }

  function getWeatherData(data) {
    let cityData = {
      name: city,
      temp: Math.round(data.data.main.temp),
      desc: data.data.weather[0].description,
      humidity: Math.round(data.data.main.humidity),
      wind: data.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${data.data.weather[0].icon}@2x.png`
    };
    updateCity(cityData);
  }

  return (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          onChange={handleChange}
          placeholder="enter a city..."
        />
        <input type="submit" value="search" />
      </form>
    </div>
  );
}
