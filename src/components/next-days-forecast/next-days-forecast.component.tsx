import * as React from 'react';
import { Container } from './next-days-forecast.styles';

export interface NextDaysForecastProps {}

const NextDaysForecast: React.FunctionComponent<NextDaysForecastProps> = () => {
	return (
		<Container>
			<h1>next days forecast</h1>
		</Container>
	);
};

export default NextDaysForecast;
