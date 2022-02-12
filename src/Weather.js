import React from "react";
import { Columns, Content, Heading, Section, Container } from 'react-bulma-components';
import "./Weather.css";

export default function Weather({ cityData }) {
  return (
    <Content className="WeatherData">
      <Heading>{cityData.name}</Heading>
      <Heading subtitle>
        {cityData.temp}°C
      </Heading>
      <Columns>
      <Columns.Column>
        <Columns.Column>
        <figure>
          <img src={cityData.icon} alt={`an icon depicting the weather as: ${cityData.desc}`} />
          <figcaption>
            {cityData.desc}
          </figcaption>
        </figure>
        </Columns.Column>
      </Columns.Column>
      <Columns.Column>
      <ul>
        <li>Humidity: {cityData.humidity}%</li>
        <li>Wind: {cityData.wind} km/h</li>
      </ul>
      </Columns.Column>
      </Columns>
    </Content>
  );
}
