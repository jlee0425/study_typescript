import { User } from '../models/User';

export class UserForm {
	constructor(public parent: Element, public model: User) {
		this.bindModel();
	}

	bindModel(): void {
		this.model.on('change', () => {
			this.render();
		});
	}
	eventsMap(): { [key: string]: () => void } {
		return {
			'click:.set-age': this.onSetAgeClick,
			'click:.set-name': this.onSetNameClick,
		};
	}

	onSetAgeClick = (): void => {
		this.model.setRandomAge();
	};

	onSetNameClick = (): void => {
		const input = this.parent.querySelector('input');
		if (input) {
			const name = input.value;
			this.model.setName(name);
		}
	};

	template(): string {
		return `
      <div>
        <h1>User Form</h1>
        <div>User Name: ${this.model.get('name')}</div>
        <div>User Age: ${this.model.get('age')}</div>
        <hr />
        <input />
        <button class="set-name">Change Name</button>
        <button class="set-age">Set Random Age</button>
      </div>
    `;
	}

	bindEvents(fragment: DocumentFragment): void {
		const eventsMap = this.eventsMap();
		Object.keys(eventsMap).forEach((key: string) => {
			const [eventName, selector] = key.split(':');
			fragment.querySelectorAll(selector).forEach((el) => {
				el.addEventListener(eventName, eventsMap[key]);
			});
		});
	}

	render(): void {
		this.parent.innerHTML = '';
		const el = document.createElement('template');
		el.innerHTML = this.template();
		this.bindEvents(el.content);
		this.parent.appendChild(el.content);
	}
}