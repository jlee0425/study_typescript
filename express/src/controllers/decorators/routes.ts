import { MetadataKeys } from './MetadataKeys';
import 'reflect-metadata';
import { Methods } from './Methods';

function routeBinder(method: string) {
	return (path: string) => {
		return (target: any, key: string, desc: PropertyDescriptor) => {
			Reflect.defineMetadata(MetadataKeys.Path, path, target, key);
			Reflect.defineMetadata(MetadataKeys.Method, method, target, key);
		};
	};
}

export const get = routeBinder(Methods.Get);
export const put = routeBinder(Methods.Put);
export const post = routeBinder(Methods.Post);
export const del = routeBinder(Methods.Del);
export const patch = routeBinder(Methods.Patch);
