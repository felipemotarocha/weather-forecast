import * as React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

import {
	CurrentDay,
	ForecastData,
	Location,
} from '../../types/forecast-data.types';

import HomePage from './home.page';

const HomeContainer: React.FunctionComponent = () => {
	const [forecastData, setForecast] = useState<ForecastData | null>(null);

	useEffect(() => {
		const fetchForecastData = async () => {
			const {
				data: {
					location: { country, localtime, name, region },
					current: {
						temp_c,
						is_day,
						wind_kph,
						humidity,
						condition: { text, icon },
					},
					forecast: { forecastday },
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

			const {
				day: { maxtemp_c, mintemp_c, daily_chance_of_rain },
			} = forecastday[0];
			const currentDay: CurrentDay = {
				temp_c,
				is_day,
				humidity,
				wind_kph,
				condition: {
					text,
					icon,
				},
				maxtemp_c,
				mintemp_c,
				daily_chance_of_rain,
			};

			setForecast({ location, currentDay });
		};

		fetchForecastData();
	}, []);

	return forecastData ? <HomePage forecastData={forecastData} /> : null;
};

export default HomeContainer;
