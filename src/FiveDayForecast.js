import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import DailyForecast from './DailyForecast'
import { Columns, Content, Heading, Section, Container, Box } from 'react-bulma-components';
import axios from "axios";

export default function FiveDayForecast ({fiveDayData}) {

  return (
    fiveDayData ?
    <Box>
      <DailyForecast fiveDayData={fiveDayData}/>
    </Box>
    :
    <ClipLoader color="grey" loading={true} size={150} />
  )
};