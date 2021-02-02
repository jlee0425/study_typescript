const add = (a: number, b: number) => {
	return a + b;
};

const subtract = (a: number, b: number): number => {
	return a - b;
};

function divide(a: number, b: number) {
	return a / b;
}

const multiply = function (a: number, b: number): number {
	return a * b;
};

// can return 'undefined', 'null'
const logger = (message: string): void => {
	console.log(message);
};

// never returns anything, never reach the end of the block
const throwError = (message: string): never => {
	throw new Error(message);
};

const forecast = {
	date: new Date(),
	weather: 'sunny',
};

const logWeather = (forecast: { date: Date; weather: string }): void => {
	console.log(forecast.date);
	console.log(forecast.weather);
};

// ES2015
const logWeather2 = ({ date, weather }) => {
	console.log(date, weather);
};

// Obj destructuring

const logWeather3 = ({
	date,
	weather,
}: {
	date: Date;
	weather: string;
}): void => {
	console.log(date, weather);
};
