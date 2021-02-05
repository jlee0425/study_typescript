import { UserBox } from './views/UserBox';
import { User, UserProps } from './models/User';
import { Collection } from './models/Collection';
import { UserList } from './views/UserList';

const users = User.buildUserCollection();
users.on('change', () => {
	const root = document.getElementById('root');
	if (root) {
		new UserBox(root, User.buildUser({})).render();
		new UserList(root, users).render();
	}
});
users.on('save', () => {
	const root = document.getElementById('root');
	if (root) {
		new UserBox(root, User.buildUser({})).render();
		new UserList(root, users).render();
	}
});
users.fetch();
