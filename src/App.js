import React, { useState } from "react";
import "./App.css";
import 'bulma/css/bulma.min.css';
import { Container, Box, Heading, Section } from 'react-bulma-components';
import Search from "./Search";
import Weather from "./Weather";
import FiveDayForecast from './FiveDayForecast'

export default function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [fiveDayData, setFiveDayData] = useState(null);

  function updateWeather(data) {
    setWeatherData(data);
  }

  function setFutureData(data) {
    setFiveDayData(data)
    console.log('5day: ', fiveDayData)
  }

  return (
    <Container>
    <Box className="App" style={{ width: 650, margin: 'auto' }}>
      <Heading>Weather App</Heading>
      <Search updateWeather={updateWeather} setFutureData={setFutureData}/>
      <Section className="Weather">
      {weatherData && <Weather cityData={weatherData} />}
      {fiveDayData && <FiveDayForecast fiveDayData={fiveDayData}/>}
      </Section>
    </Box>
    </Container>
  );
}
