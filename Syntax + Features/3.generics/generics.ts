class ArrayOfNumbers {
	constructor(public collection: number[]) {}

	get(index: number): number {
		return this.collection[index];
	}
}

class ArrayOfStrings {
	constructor(public collection: string[]) {}

	get(index: number): string {
		return this.collection[index];
	}
}

class ArrayOfThings<T> {
	constructor(public collection: T[]) {}

	get(index: number): T {
		return this.collection[index];
	}
}

// Example of generics with functions

function printStrings(arr: string[]): void {
	arr.map((str) => console.log(str));
}

function printNumbers(arr: number[]): void {
	arr.map((num) => console.log(num));
}

function printThings<T>(arr: T[]): void {
	arr.map((val) => console.log(val));
}

const printAnything = <T>(arr: T[]): void => {
	arr.map((val) => console.log(val));
};

class Car {
	print() {
		console.log('I am a car');
	}
}

class House {
	print() {
		console.log('I am a house');
	}
}

interface Printable {
	print(): void;
}

const printHouseOrCar = <T extends Printable>(arr: T[]): void => {
	arr.map((val) => val.print());
};

printHouseOrCar([new Car(), new House(), new House(), new Car()]);
printHouseOrCar<House>([new House(), new House()]);
printHouseOrCar<Car>([new Car(), new Car()]);
