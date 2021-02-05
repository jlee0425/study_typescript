import { User, UserProps } from '../models/User';
import { UserForm } from './UserForm';
import { View } from './View';

export class UserBox extends View<User, UserProps> {
	regionMap(): { [key: string]: string } {
		return {
			userShow: '.user-show',
			userForm: '.user-form',
		};
	}

	onRender(): void {
		new UserForm(this.regions.userForm, this.model).render();
	}

	template(): string {
		return `
      <div>
        <div class="user-form"></div>
        <hr />
        <h2>User Detail</h2>
        <div class="user-show"></div>
      </div>
    `;
	}
}
