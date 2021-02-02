import { BetterSorter, Sortable } from './Sorter';

class Node {
	next: Node | null = null;
	constructor(public val: number) {}
}
export class LinkedList extends BetterSorter {
	head: Node | null = null;

	get length(): number {
		if (!this.head) return 0;
		let length = 1;
		let curr = this.head;
		while (curr.next) {
			length++;
			curr = curr.next;
		}
		return length;
	}

	add(val: number): void {
		const node = new Node(val);
		if (!this.head) {
			this.head = node;
			return;
		}
		let curr = this.head;
		while (curr.next != null) {
			curr = curr.next;
		}
		curr.next = node;
		return;
	}

	at(index: number): Node {
		if (!this.head) throw new Error('Index out of bounds');

		let curr = 0;
		let curNode: Node | null = this.head;
		while (curNode) {
			if (curr === index) {
				return curNode;
			}
			curr++;
			curNode = curNode.next;
		}

		throw new Error('Index out of bounds');
	}

	notInOrder(left: number, right: number): boolean {
		if (!this.head) throw new Error('List is empty');
		return this.at(left).val > this.at(right).val;
	}

	swap(left: number, right: number): void {
		let temp = this.at(left).val;
		this.at(left).val = this.at(right).val;
		this.at(right).val = temp;
	}

	print(): void {
		let curNode = this.head;
		while (curNode) {
			console.log(curNode.val);
			curNode = curNode.next;
		}
	}
}
