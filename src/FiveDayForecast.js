import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import DailyForecast from './DailyForecast'
import { Box } from 'react-bulma-components';

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