import React from "react";
import "./Weather.css";

export default function Weather({ cityData }) {
  return (
    <div className="Weather">
      <h2>{cityData.name}</h2>
      <ul>
        <li>
          <img src={cityData.icon} alt={cityData.desc} />
        </li>
        <li>Temperature: {cityData.temp}°C</li>
        <li>Description: {cityData.desc}</li>
        <li>Humidity: {cityData.humidity}%</li>
        <li>Wind: {cityData.wind} km/h</li>
      </ul>
    </div>
  );
}
