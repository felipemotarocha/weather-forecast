import * as React from "react";

import { Container } from "./next-days-forecast.styles";
import { ForecastData } from "../../types/forecast-data.types";
import DayForecastItem from "../day-forecast-item/day-forecast-item.component";

export interface NextDaysForecastProps {
	forecastData: ForecastData | null;
}

const NextDaysForecast: React.FunctionComponent<NextDaysForecastProps> = ({
	forecastData,
}) => {
	const { nextTwoDays } = forecastData!;
	return (
		<Container>
			{nextTwoDays.map((day) => (
				<DayForecastItem day={day} />
			))}
		</Container>
	);
};

export default NextDaysForecast;
