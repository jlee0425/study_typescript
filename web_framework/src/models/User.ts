import { Attributes } from './Attributes';
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
	attributes: Attributes<UserProps>;

	constructor(attrs: UserProps) {
		this.attributes = new Attributes<UserProps>(attrs);
	}
}
