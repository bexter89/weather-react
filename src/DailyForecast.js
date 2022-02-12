import React from 'react'
import { Columns, Content, Box } from 'react-bulma-components';

export default function DailyForecast ({fiveDayData}) {

  function formatDate(timestamp) {
    let week = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', "Sat"]
    let date = new Date(timestamp * 1000)
    let day = date.getDay();
    return week[day];
  }

  return (
    fiveDayData.map(day => {
      return (
      <Columns key={formatDate(day.dt)}>
        <h3>{formatDate(day.dt)}</h3>
        <img src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
          alt={day.weather[0].description}
          width="50"/>
        <span className="future-temp-desc">{day.weather[0].description}</span>
        <div className="future-temp">
          <span className="future-high">{Math.round(day.temp.max)}°</span>
          |
          <span className="future-low">{Math.round(day.temp.min)}°</span>
        </div>
      </Columns>
      )})
  )
}