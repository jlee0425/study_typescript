import { User } from './models/User';

const user = new User({ id: 1 });

user.events.on('change', () => {
	console.log('change ');
});

user.events.trigger('change');

class Person {
	constructor(public firstName: string, public lastName: string) {}

	get fullName(): string {
		return `${this.firstName} ${this.lastName}`;
	}
}

const person = new Person('fn', 'ln');
console.log(person.fullName);
