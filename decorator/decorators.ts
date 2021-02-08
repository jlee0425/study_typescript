/**
 * Property Descriptor for Methods
 *
 * writable
 * 	Whether or not this property can be changed
 * enumerable
 * 	Whether or not this property get looped over by a 'for ... in'
 * value
 * 	current value
 * configurable
 * 	Property definition can be changed and property can be deleted
 */

@classDecorator
class Boat {
	@testDecorator
	color: string = 'red';

	@testDecorator
	get formattedColor(): string {
		return `This boat is ${this.color}`;
	}

	@logError('pilot decorator')
	pilot(@parameterDecorator speed: string): void {
		if (speed === 'fast') {
			console.log('swish');
		} else {
			throw new Error();
		}
	}
}

// Decorator factory; returns a decorator with arguments
function logError(errMsg: string) {
	return (target: any, key: string, desc: PropertyDescriptor): void => {
		const method = desc.value;
		desc.value = function () {
			try {
				method();
			} catch (err) {
				console.log(errMsg);
			}
		};
	};
}

function parameterDecorator(target: any, key: string, index: number) {
	console.log(key, index);
}

function classDecorator(constructor: typeof Boat) {
	console.log(constructor);
}

function testDecorator(target: any, key: string) {
	console.log(key);
}

new Boat().pilot('fast');
