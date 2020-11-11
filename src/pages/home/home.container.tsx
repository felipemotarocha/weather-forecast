import * as React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

import { Location } from '../../types/forecast-data.types';

import HomePage from './home.page';

export interface HomeContainerProps {}

const HomeContainer: React.FunctionComponent<HomeContainerProps> = () => {
	const [location, setLocation] = useState<Location | null>(null);

	useEffect(() => {
		const fetchForecastData = async () => {
			const {
				data: {
					location: { country, localtime, name, region },
				},
			} = await axios.get(
				`https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=São Paulo&days=7`
			);

			const location: Location = {
				country,
				localtime,
				name,
				region,
			};
			setLocation(location);
		};

		fetchForecastData();
	}, []);

	return <HomePage location={location} />;
};

export default HomeContainer;
