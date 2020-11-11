import * as React from 'react';
import { Container } from './current-day-forecast.styles';

export interface CurrentDayForecastProps {
    
}
 
const CurrentDayForecast: React.FunctionComponent<CurrentDayForecastProps> = () => {
    return ( 
        <Container>
            <h1>current day forecast</h1>
        </Container>
     );
}
 
export default CurrentDayForecast;