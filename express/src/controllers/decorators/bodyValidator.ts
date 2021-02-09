import { MetadataKeys } from './MetadataKeys';
import 'reflect-metadata';

export function bodyValidator(...keys: string[]) {
	return (target: any, key: string, desc: PropertyDescriptor) => {
		Reflect.defineMetadata(MetadataKeys.Validator, keys, target, key);
	};
}
