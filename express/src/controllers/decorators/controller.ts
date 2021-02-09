import { MetadataKeys } from './MetadataKeys';
import { Methods } from './Methods';
import { AppRouter } from '../../AppRouter';
import 'reflect-metadata';

export function controller(routePrefix: string) {
	return (target: Function) => {
		const router = AppRouter.getInstance();
		for (let key in target.prototype) {
			const routeHandler = target.prototype[key];
			const path = Reflect.getMetadata(
				MetadataKeys.Path,
				target.prototype,
				key,
			);
			const method: Methods = Reflect.getMetadata(
				MetadataKeys.Method,
				target.prototype,
				key,
			);
			const middlewares =
				Reflect.getMetadata(MetadataKeys.Middleware, target, key) || [];

			if (path) {
				router[method](`${routePrefix}${path}`, ...middlewares, routeHandler);
			}
		}
	};
}
