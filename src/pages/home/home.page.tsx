import React from 'react';

import { Container } from './home.styles';
import { Current, Location } from '../../types/forecast-data.types';

import CurrentDayForecast from '../../components/current-day-forecast/current-day-forecast.component';

interface HomePageProps {
	location: Location | null;
	current: Current | null;
}

const HomePage: React.FunctionComponent<HomePageProps> = () => {
	return (
		<Container>
			<CurrentDayForecast />
		</Container>
	);
};

export default HomePage;
