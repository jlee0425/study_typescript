import { User } from './models/User';
import { UserBox } from './views/UserBox';
import { UserForm } from './views/UserForm';

const user = User.buildUser({ name: 'Runa', age: 27 });
const root = document.getElementById('root');
if (root) {
	const userBox = new UserBox(root, user);
	console.log(userBox);
	userBox.render();
} else {
	throw new Error('root element not found.');
}
