import { NextFunction, RequestHandler, Request, Response } from 'express';
import { MetadataKeys } from './MetadataKeys';
import { Methods } from './Methods';
import { AppRouter } from '../../AppRouter';
import 'reflect-metadata';

function bodyValidators(keys: string): RequestHandler {
	return (req: Request, res: Response, next: NextFunction) => {
		if (!req.body) {
			res.status(422).send('Invalid Request');
			return;
		}

		for (let key of keys) {
			if (!req.body[key]) {
				res.status(422).send(`Missing Property ${key}`);
				return;
			}
		}

		next();
	};
}

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
				Reflect.getMetadata(MetadataKeys.Middleware, target.prototype, key) ||
				[];

			const requiredBodyProps =
				Reflect.getMetadata(MetadataKeys.Validator, target.prototype, key) ||
				[];

			const validator = bodyValidators(requiredBodyProps);

			if (path) {
				router[method](
					`${routePrefix}${path}`,
					...middlewares,
					validator,
					routeHandler,
				);
			}
		}
	};
}
