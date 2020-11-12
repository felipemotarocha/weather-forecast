import * as React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import {
	CurrentDay,
	ForecastData,
	Hour,
	Location,
	NextTwoDays,
} from "../../types/forecast-data.types";

import HomePage from "./home.page";

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

			let nextTwoDays: NextTwoDays = [];
			forecastday.forEach((element: any, index: number) => {
				if (index > 0) {
					const {
						date,
						day: {
							avgtemp_c,
							maxtemp_c,
							mintemp_c,
							daily_chance_of_rain,
							condition: { text: dayConditionText, icon: dayConditionIcon },
						},
						hour,
					} = element;

					let formattedHour: Hour = [];
					for (let element of hour) {
						const {
							time,
							temp_c,
							condition: { text, icon },
						} = element;
						formattedHour = [
							...formattedHour,
							{
								time,
								temp_c,
								condition: { text, icon },
							},
						];
					}

					nextTwoDays = [
						...nextTwoDays,
						{
							date,
							avgtemp_c,
							maxtemp_c,
							mintemp_c,
							daily_chance_of_rain,
							condition: { text: dayConditionText, icon: dayConditionIcon },
							hour: formattedHour,
						},
					];
				}
			});

			setForecast({ location, currentDay, nextTwoDays });
		};

		fetchForecastData();
	}, []);

	return forecastData ? <HomePage forecastData={forecastData} /> : null;
};

export default HomeContainer;
