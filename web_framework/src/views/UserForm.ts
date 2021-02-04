import { User } from '../models/User';

export class UserForm {
	constructor(public parent: Element, public model: User) {}

	eventsMap(): { [key: string]: () => void } {
		return {
			'click:#setAge': this.onSetAgeClick,
		};
	}

	onSetAgeClick = (): void => {
		this.model.setRandomAge();
	};

	template(): string {
		return `
      <div>
        <h1>User Form</h1>
        <div>User Name: ${this.model.get('name')}</div>
        <div>User Age: ${this.model.get('age')}</div>
        <hr />
        <input />
        <button id="setAge">Set Random Age</button>
      </div>
    `;
	}

	bindEvents(fragment: DocumentFragment): void {
		const eventsMap = this.eventsMap();
		Object.keys(eventsMap).forEach((key: string) => {
			const [eventName, selector] = key.split(':');
			fragment.querySelectorAll(selector).forEach((el) => {
				addEventListener(eventName, eventsMap[key]);
			});
		});
	}

	render(): void {
		const el = document.createElement('template');
		el.innerHTML = this.template();
		this.bindEvents(el.content);
		this.parent.appendChild(el.content);
	}
}
