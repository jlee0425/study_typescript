/**
 * Interfaces
 *  - Sets up a contract between different classes
 *  - Use when we have very different objects that we want to work together
 *  - Promotes loose coupling
 *
 * Inheritance / Abstract Classes
 *  - Sets up a contract between different classes
 *  - Uses when we are trying to build up a definition of an object
 *  - strongly couples classes together
 */

export interface Sortable {
	length: number;
	notInOrder(left: number, right: number): boolean;
	swap(left: number, right: number): void;
}

export class BadSorter {
	constructor(public collection: number[]) {}

	badSort(): void {
		const { length } = this.collection;
		for (let i = 0; i < length; i++) {
			for (let j = 0; j < length - i - 1; j++) {
				// only for number[]
				if (this.collection[j] > this.collection[j + 1]) {
					[this.collection[j], this.collection[j + 1]] = [
						this.collection[j + 1],
						this.collection[j],
					];
				}

				// only for string
				// for linked list
				// ...
			}
			i;
		}
	}

	goodSort(): void {
		for (let i = 0; i < length; i++) {
			for (let j = 0; j < length - i - 1; j++) {
				// using type-guard
				if (this.collection instanceof Array) {
					if (this.collection[j] > this.collection[j + 1]) {
						[this.collection[j], this.collection[j + 1]] = [
							this.collection[j + 1],
							this.collection[j],
						];
					}
				}
				if (typeof this.collection === 'string') {
				}
			}
		}
	}
}

export class GoodSorter {
	constructor(public collection: Sortable) {}
	sort(): void {
		const length = this.collection.length;
		for (let i = 0; i < length; i++) {
			for (let j = 0; j < length - i - 1; j++) {
				if (this.collection.notInOrder(j, j + 1)) {
					this.collection.swap(j, j + 1);
				}
			}
		}
	}
}

export abstract class BetterSorter {
	abstract length: number;
	abstract notInOrder(left: number, right: number): boolean;
	abstract swap(left: number, right: number): void;

	sort(): void {
		const { length } = this;
		for (let i = 0; i < length; i++) {
			for (let j = 0; j < length - i - 1; j++) {
				if (this.notInOrder(j, j + 1)) {
					this.swap(j, j + 1);
				}
			}
		}
	}
}
