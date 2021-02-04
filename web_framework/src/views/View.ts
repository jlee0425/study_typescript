import { User } from '../models/User';

export abstract class View<T> {
	constructor(public parent: Element, public model: T) {
		this.bindModel();
	}

	abstract eventsMap(): { [key: string]: () => void };
	abstract template(): string;

	bindModel(): void {
		this.model.on('change', () => {
			this.render();
		});
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
