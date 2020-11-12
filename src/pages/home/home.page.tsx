import * as React from "react";

import { Container } from "./home.styles";
import { ForecastData } from "../../types/forecast-data.types";

import CurrentDayForecast from "../../components/current-day-forecast/current-day-forecast.component";
import NextDaysForecast from "../../components/next-days-forecast/next-days-forecast.component";

interface HomePageProps {
	forecastData: ForecastData | null;
}

const HomePage: React.FunctionComponent<HomePageProps> = ({ forecastData }) => {
	return (
		<Container>
			<CurrentDayForecast forecastData={forecastData} />
			<NextDaysForecast forecastData={forecastData} />
		</Container>
	);
};

export default HomePage;
