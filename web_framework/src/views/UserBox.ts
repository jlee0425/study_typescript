import { UserShow } from './UserShow';
import { User, UserProps } from '../models/User';
import { View } from './View';
import { UserForm } from './UserForm';

export class UserBox extends View<User, UserProps> {
	regionMap(): { [key: string]: string } {
		return {
			userShow: '.user-show',
			userForm: '.user-form',
		};
	}
	onRender(): void {
		new UserShow(this.regions.userShow, this.model).render();
		new UserForm(this.regions.userForm, this.model).render();
	}

	template(): string {
		return `
      <div>
        <div class="user-show">
        </div>
        <hr />
        <div class="user-form">
        </div>
      </div>
    `;
	}
}
