export class Attributes<T> {
	constructor(private props: T) {}

	get<K extends keyof T>(key: K): T[K] {
		return this.props[key];
	}

	set(update: T): void {
		Object.assign(this.props, update);
	}
}

// const attrs = new Attributes<UserProps>({ id: 5, name: 'asdf', age: 20 });
// const name = attrs.get('name'); // string
// const age = attrs.get('age'); // number
// const id = attrs.get('id'); // number

/**
 * In JS(TS), object keys are strings.
 *
 * when `get` returns string | number(possible types of values of UserProps),
 *
 * option 1: type assertion
 * not desirable as it is easy to miss asserting the type everytime.
 *
 * option 2: type-guard
 * not desirable for the same reason as option 1.
 *
 * option 3: inheritance
 * best option
 */
