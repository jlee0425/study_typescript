// type inference
const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];
const carsByMake = [['f150'], ['corolla'], ['camaro']];

// type annotation
const strOrNum: (string | number)[] = [];
const strStr: string[][] = [];

// Help with inference when extracting values
const car2 = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100);

// Help with array functions such as 'map', 'forEach', 'reduce'...
carMakers.map((car: string): string => {
	return car.toLowerCase();
});

// Flexible types
const importantDates: (string | Date)[] = [new Date()];
importantDates.push('2030-10-20');
importantDates.push(new Date());
importantDates.push(20);
