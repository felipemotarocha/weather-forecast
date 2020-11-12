import * as React from 'react';

import { Container } from './next-days-forecast.styles';
import { ForecastData } from '../../types/forecast-data.types';

export interface NextDaysForecastProps {
	forecastData: ForecastData | null;
}

const NextDaysForecast: React.FunctionComponent<NextDaysForecastProps> = ({
	forecastData,
}) => {
	return (
		<Container>
			<h1>next days forecast</h1>
		</Container>
	);
};

export default NextDaysForecast;
