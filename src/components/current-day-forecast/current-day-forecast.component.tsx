import * as React from 'react';
import { WiCloud, WiRain, WiStrongWind } from 'react-icons/wi';

import {
	Container,
	Content,
	Header,
	HeaderItem,
} from './current-day-forecast.styles';
import { ForecastData } from '../../types/forecast-data.types';

export interface CurrentDayForecastProps {
	forecastData: ForecastData | null;
}

const CurrentDayForecast: React.FunctionComponent<CurrentDayForecastProps> = ({
	forecastData,
}) => {
	const {
		currentDay: {
			humidity,
			wind_kph,
			daily_chance_of_rain,
			condition: { text, icon },
			temp_c,
		},
		location: { name, region },
	} = forecastData!;
	return (
		<Container>
			<Header>
				<HeaderItem>
					<WiCloud />
					<p>{humidity}%</p>
				</HeaderItem>
				<HeaderItem>
					<WiStrongWind />
					<p>{wind_kph}km/h</p>
				</HeaderItem>
				<HeaderItem>
					<WiRain />
					<p>{daily_chance_of_rain}%</p>
				</HeaderItem>
			</Header>

			<Content>
				<p>{temp_c}°C</p>
				<p>
					{name}, {region}
				</p>
				<p>{text}</p>
				<img src={icon} alt="" />
			</Content>
		</Container>
	);
};

export default CurrentDayForecast;
