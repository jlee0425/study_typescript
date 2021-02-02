const apples: number = 5;
const speed: string = 'fast';
const hasName: boolean = true;
const nothingMuch: null = null;
const nothing: undefined = undefined;

// built-in objects
const now: Date = new Date();

// array
const colors: string[] = ['red', 'green', 'blue'];
const numbers: number[] = [1, 2, 3];
const bools: boolean[] = [true, true, false];

// Classes
class Car {}

let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
	x: 10,
	y: 20,
};

// Function
const logNumber: (i: number) => void = (j) => {
	console.log(j);
};

/**
 * When to use annotations
 * 1) Function that returns the 'any' type
 * 2) When we declare a variable on one line and initialize it later
 * 3) When we want a variable to have a type that can't be inferred
 */

// 1
const json = '{"x: 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// 2
const words = ['red', 'green', 'blue'];
let foundWord: boolean; // 2
words.map((word) => {
	if (word === 'green') foundWord = true;
});

// 3
const nums = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

nums.map((n) => {
	if (n > 0) {
		numberAboveZero = n;
	}
});
