import { Model } from './../models/Model';

export abstract class View<T extends Model<K>, K> {
	regions: { [key: string]: Element } = {};

	constructor(public parent: Element, public model: T) {
		this.bindModel();
	}

	abstract template(): string;

	eventMap(): { [key: string]: () => void } {
		return {};
	}
	regionMap(): { [key: string]: string } {
		return {};
	}

	bindModel(): void {
		this.model.on('change', () => {
			this.render();
		});
	}

	bindEvents(fragment: DocumentFragment): void {
		const eventsMap = this.eventMap();
		Object.keys(eventsMap).forEach((key: string) => {
			const [eventName, selector] = key.split(':');
			fragment.querySelectorAll(selector).forEach((el) => {
				el.addEventListener(eventName, eventsMap[key]);
			});
		});
	}

	mapRegions(fragement: DocumentFragment): void {
		const regionMap = this.regionMap();
		Object.keys(regionMap).forEach((region: string) => {
			const selector = regionMap[region];
			const el = fragement.querySelector(selector);

			if (el) {
				this.regions[region] = el;
			}
		});
	}

	onRender(): void {}

	render(): void {
		this.parent.innerHTML = '';

		const el = document.createElement('template');
		el.innerHTML = this.template();

		this.bindEvents(el.content);
		this.mapRegions(el.content);

		this.onRender();
		this.parent.appendChild(el.content);
	}
}
