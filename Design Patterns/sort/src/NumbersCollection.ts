import { BetterSorter, Sortable } from './Sorter';

export class NumbersCollection extends BetterSorter {
	constructor(public data: number[]) {
		super();
	}

	get length(): number {
		// getter doesn't require a method call.
		return this.data.length;
	}

	notInOrder(left: number, right: number): boolean {
		return this.data[left] > this.data[right];
	}

	swap(left: number, right: number): void {
		[this.data[left], this.data[right]] = [this.data[right], this.data[left]];
	}
}
