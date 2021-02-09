import { MetadataKeys } from './MetadataKeys';
import { RequestHandler } from 'express';
import 'reflect-metadata';

export function use(middleware: RequestHandler) {
	return (target: any, key: string, desc: PropertyDescriptor) => {
		const middlewares =
			Reflect.getMetadata(MetadataKeys.Middleware, target, key) || [];
		Reflect.defineMetadata(
			MetadataKeys.Middleware,
			[...middlewares, middleware],
			target,
			key,
		);
	};
}
