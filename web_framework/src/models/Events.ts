type Callback = () => void;

export class Events {
	events: { [key: string]: Callback[] } = {};

	on(eventName: string, fn: Callback): void {
		const handlers = this.events[eventName] || [];
		handlers.push(fn);
		this.events[eventName] = handlers;
	}

	trigger(eventName: string): void {
		const handlers = this.events[eventName];

		if (!handlers || handlers.length === 0) return;
		handlers.forEach((cb) => cb());
	}
}
