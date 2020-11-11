import React from 'react'
import CurrentDayForecast from '../../components/current-day-forecast/current-day-forecast.component';

import { Container } from './home.styles';
 
const HomePage: React.FunctionComponent = () => {
    return (
        <Container>
            <CurrentDayForecast />
        </Container>
    );
}
 
export default HomePage;