import React, { useState } from "react";
import { Form, Button, Columns, Container } from 'react-bulma-components';
import axios from "axios";

export default function Search({ updateWeather, setFutureData }) {
  const { Input, Field, Control, Label } = Form;
  const [coords, setCoords] = useState('')
  const [city, setCity] = useState("");
  const [isValid, setIsValid]= useState(false)

  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bafdfac4d6d7b1fc3d3952df39f393b7&units=metric`;

  function handleSubmit(e) {
    e.preventDefault();
    if (city.length <= 2) {
      setIsValid(false)
    } else {
      setIsValid(true)
      axios.get(apiURL).then(getWeatherData).catch(setIsValid(false));
    }
  }

  function handleChange(e) {
    setCity(e.target.value);
  }

  function get5DayForecast (coords) {
    console.log(coords)
    let futureForecastURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lon}&exclude=alert,minutely,current,hourly&appid=bafdfac4d6d7b1fc3d3952df39f393b7&units=imperial`
    axios.get(futureForecastURL).then(getFutureData)
  }

  function getFutureData(futureForecast) {
    let days = futureForecast.data.daily;
    days.splice(5)
    setFutureData(days)
  }


  function getWeatherData(data) {
    console.log(data.data.coord)
    let cityData = {
      name: city,
      temp: Math.round(data.data.main.temp),
      desc: data.data.weather[0].description,
      humidity: Math.round(data.data.main.humidity),
      wind: data.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${data.data.weather[0].icon}@2x.png`
    };
    get5DayForecast(data.data.coord);
    updateWeather(cityData);
  }

  return (
    <Container className="Search">
      <form onSubmit={handleSubmit}>
        <Field kind="group" align="center">
          <Input
            type="search"
            onChange={handleChange}
            placeholder="enter a city..."
          />
          <Control>
            <Button color="link" colorVariant="light">Search</Button>
          </Control>
        </Field>
      </form>
    </Container>
  );
}
