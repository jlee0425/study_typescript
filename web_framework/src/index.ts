import { User } from './models/User';

const user = new User({ id: 1, name: 'Runa' });

user.on('change', () => {
	console.log('change ');
});

user.trigger('change');
console.log(user.get('name'));
