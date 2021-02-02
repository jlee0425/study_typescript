import { Sortable, BetterSorter } from './Sorter';

export class CharactersCollection extends BetterSorter {
	constructor(public data: string) {
		super();
	}
	get length(): number {
		return this.data.length;
	}
	notInOrder(left: number, right: number): boolean {
		return this.data[left].toLowerCase() > this.data[right].toLowerCase();
	}
	swap(left: number, right: number): void {
		const chars = this.data.split('');
		[chars[left], chars[right]] = [chars[right], chars[left]];
		this.data = chars.join('');
	}
}
