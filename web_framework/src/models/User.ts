import { AxiosResponse } from 'axios';
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

	// passthrough without accessor
	// NOT IDEAL
	// on(eventName: string, callback: Callback): void {
	// 	this.events.on(eventName, callback);
	// }

	// correct passthrough ->
	// getter does not call the function just pass the reference to the correct function.
	get on() {
		return this.events.on;
	}

	get trigger() {
		return this.events.trigger;
	}

	get get() {
		return this.attributes.get;
	}

	set(update: UserProps): void {
		this.attributes.set(update);
		this.events.trigger('change');
	}

	fetch(): void {
		const id = this.attributes.get('id');
		if (typeof id !== 'number') throw new Error('Cannot fetch without an ID');

		this.sync
			.fetch(id)
			.then((response: AxiosResponse): void => {
				this.set(response.data);
			})
			.catch(() => {
				this.trigger('error');
			});
	}

	save(): void {
		this.sync
			.save(this.attributes.getAll())
			.then((response: AxiosResponse): void => {
				this.events.trigger('save');
			})
			.catch(() => {
				this.trigger('error');
			});
	}
}
