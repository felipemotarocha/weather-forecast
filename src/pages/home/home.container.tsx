import * as React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

import { Current, Location } from '../../types/forecast-data.types';

import HomePage from './home.page';

export interface HomeContainerProps {}

const HomeContainer: React.FunctionComponent<HomeContainerProps> = () => {
	const [location, setLocation] = useState<Location | null>(null);
	const [current, setCurrent] = useState<Current | null>(null);

	useEffect(() => {
		const fetchForecastData = async () => {
			const {
				data: {
					location: { country, localtime, name, region },
					current: {
						condition: { text },
						temp_c,
						wind_mph,
						humidity,
					},
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

			const current: Current = {
				condition: text,
				temp_c,
				wind_mph,
				humidity,
			};

			setLocation(location);
			setCurrent(current);
		};

		fetchForecastData();
	}, []);

	return <HomePage location={location} current={current} />;
};

export default HomeContainer;
