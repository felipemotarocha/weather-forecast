export type ConditionText =
	| "Sunny"
	| "Clear"
	| "Partly cloudy"
	| "Cloudy"
	| "Overcast"
	| "Mist"
	| "Patchy rain possible"
	| "Patchy snow possible"
	| "Patchy sleet possible"
	| "Patchy freezing drizzle possible"
	| "Thundery outbreaks possible"
	| "Blowing snow"
	| "Blizzard"
	| "Fog"
	| "Freezing fog"
	| "Patchy light drizzle"
	| "Light drizzle"
	| "Freezing drizzle"
	| "Heavy freezing drizzle"
	| "Patchy light rain"
	| "Light rain"
	| "Moderate rain at times"
	| "Moderate rain"
	| "Heavy rain at times"
	| "Heavy rain"
	| "Light freezing rain"
	| "Moderate or heavy freezing rain"
	| "Light sleet"
	| "Moderate or heavy sleet"
	| "Patchy light snow"
	| "Light snow"
	| "Patchy moderate snow"
	| "Moderate snow"
	| "Patchy heavy snow"
	| "Heavy snow"
	| "Ice pellets"
	| "Light rain shower"
	| "Moderate or heavy rain shower"
	| "Torrential rain shower"
	| "Light sleet showers"
	| "Moderate or heavy sleet showers"
	| "Light snow showers"
	| "Moderate or heavy snow showers"
	| "Light showers of ice pellets"
	| "Moderate or heavy showers of ice pellets"
	| "Patchy light rain with thunder"
	| "Moderate or heavy rain with thunder"
	| "Patchy light snow with thunder"
	| "Moderate or heavy snow with thunder";

export type Location = {
	country: string;
	localtime: string;
	name: string;
	region: string;
};

export type CurrentDay = {
	temp_c: number;
	is_day: number;
	humidity: number;
	wind_kph: number;
	condition: {
		text: ConditionText;
		icon: string;
	};
	maxtemp_c: number;
	mintemp_c: number;
	daily_chance_of_rain: string;
};

export type NextSevenDays = {
	date: string;
	avgtemp_c: number;
	maxtemp_c: number;
	mintemp_c: number;
	condition: {
		text: ConditionText;
		icon: string;
	};
	daily_chance_of_rain: string;
}[];

export type ForecastData = {
	location: Location;
	currentDay: CurrentDay;
	nextTwoDays: NextSevenDays;
};
