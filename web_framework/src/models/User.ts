import { Events } from './Events';

export interface UserProps {
	id?: number;
	name?: string;
	age?: number;
}

export class User {
	events: Events = new Events();
	constructor(private props: UserProps) {}

	get(propName: string): string | number {
		return this.props[propName];
	}

	set(update: UserProps): void {
		Object.assign(this.props, update);
	}
}
