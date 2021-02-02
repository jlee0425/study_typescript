import { User, UserProps } from './models/User';

const user = new User({ id: 1, name: 'Runa' });
user.on('change', () => {
	console.log('User info changed.');
});

user.set({ age: 28 });
user.set({ name: 'Fujita Runa' });
