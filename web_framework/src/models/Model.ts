import { AxiosPromise, AxiosResponse } from 'axios';

interface ModelAttributes<T> {
	get<K extends keyof T>(key: K): T[K];
	getAll(): T;
	set(value: T): void;
}

interface Sync<T> {
	fetch(id: number): AxiosPromise;
	save(update: T): AxiosPromise;
}

interface Events {
	on(eventName: string, callback: () => void): void;
	trigger(eventName: string): void;
}

interface HasID {
	id?: number;
}

export class Model<T extends HasID> {
	constructor(
		private attributes: ModelAttributes<T>,
		private events: Events,
		private sync: Sync<T>,
	) {}

	on = this.events.on;
	trigger = this.events.trigger;
	get = this.attributes.get;
	getAll = this.attributes.getAll;

	set(update: T): void {
		this.attributes.set(update);
		this.events.trigger('change');
	}

	fetch(): void {
		const id = this.attributes.get('id');
		if (typeof id !== 'number') throw new Error('Cannot fetch without an ID');

		this.sync
			.fetch(id)
			.then((response: AxiosResponse): void => {
				this.set(response.data);
			})
			.catch(() => {
				this.trigger('error');
			});
	}

	save(): void {
		this.sync
			.save(this.attributes.getAll())
			.then((response: AxiosResponse): void => {
				this.events.trigger('save');
			})
			.catch(() => {
				this.trigger('error');
			});
	}
}
