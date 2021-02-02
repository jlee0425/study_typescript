import { ApiSync } from './ApiSync';
import { Events } from './Events';
import { Attributes } from './Attributes';
import { Model } from './Model';

export interface UserProps {
	id?: number;
	name?: string;
	age?: number;
}

const rootUrl = 'http://localhost:3000/users';

export class User extends Model<UserProps> {
	static buildUser(attrs: UserProps): User {
		return new User(
			new Attributes<UserProps>(attrs),
			new Events(),
			new ApiSync<UserProps>(rootUrl),
		);
	}
}
// passthrough without accessor
// NOT IDEAL
// on(eventName: string, callback: Callback): void {
// 	this.events.on(eventName, callback);
// }

// correct passthrough ->
// getter does not call the function just pass the reference to the correct function.
