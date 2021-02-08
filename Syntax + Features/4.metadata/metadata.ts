import 'reflect-metadata';

const plane = {
	color: 'red',
};

Reflect.defineMetadata('note', 'regular note', plane);
Reflect.defineMetadata('note', 'This is a subnote', plane, 'subnote');
Reflect.defineMetadata('height', 10, plane);
console.log(plane);

const note = Reflect.getMetadata('note', plane);
const height = Reflect.getMetadata('height', plane);
const subnote = Reflect.getMetadata('note', plane, 'subnote');
console.log(note, height);
console.log(subnote);

@printMetadata
class Plane {
	color: string = 'red';

	@markFunction('secret information')
	fly(): void {
		console.log('vrrrrr');
	}
}

function markFunction(secretInfo: string) {
	return (target: Plane, key: string): void => {
		Reflect.defineMetadata('secret', secretInfo, target, key);
	};
}

function printMetadata(target: typeof Plane) {
	for(let key in target.prototype) {
		const secret = Reflect.getMetadata('secret', target.prototype, key);
		console.log(secret);
	});
}
