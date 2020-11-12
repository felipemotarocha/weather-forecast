import * as React from "react";
import { format, parse } from "date-fns";

import { ConditionText } from "../../types/forecast-data.types";
import { Container, Icon, Icons, Text } from "./day-forecast-item.styles";
import { WiRain, WiThermometer } from "react-icons/wi";

export interface DayForecastItemProps {
	day: {
		date: string;
		avgtemp_c: number;
		maxtemp_c: number;
		mintemp_c: number;
		condition: {
			text: ConditionText;
			icon: string;
		};
		daily_chance_of_rain: string;
	};
}

const DayForecastItem: React.FunctionComponent<DayForecastItemProps> = ({
	day,
}) => {
	const {
		date,
		condition: { text, icon },
		avgtemp_c,
		daily_chance_of_rain,
	} = day;

	const parsedDate = parse(date.replace(/-/g, "/"), "yyyy/MM/dd", new Date());
	const formattedDate = format(parsedDate, "EEEE");

	return (
		<Container>
			<img src={icon} alt="" />
			<Text>
				<p>{formattedDate}</p>
				<p>{text}</p>
				<Icons>
					<Icon>
						<WiThermometer />
						<p>{avgtemp_c}ºC</p>
					</Icon>
					<Icon>
						<WiRain />
						<p>{daily_chance_of_rain}%</p>
					</Icon>
				</Icons>
			</Text>
		</Container>
	);
};

export default DayForecastItem;
