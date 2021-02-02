import { User } from './models/User';

const user = new User({ id: 1, name: 'Runa' });
user.on('change', () => {
	console.log('User info changed.');
	console.log(user.attributes.getAll());
});
user.on('save', () => {
	console.log('User info saved.');
	console.log(user.attributes.getAll());
});

user.set({ age: 28 });
user.set({ name: 'Fujita Runa' });
user.set({ age: 27 });
user.save();
