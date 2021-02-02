import { Events } from './Events';
import { Sync } from './Sync';

export interface UserProps {
	id?: number;
	name?: string;
	age?: number;
}

const rootUrl = 'http://localhost:3000/users';

export class User {
	events: Events = new Events();
	sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
	constructor(private props: UserProps) {}

	get(propName: string): string | number {
		return this.props[propName];
	}

	set(update: UserProps): void {
		Object.assign(this.props, update);
	}
}
