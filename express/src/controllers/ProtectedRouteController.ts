import { Request, Response, NextFunction } from 'express';
import { controller, get, use } from './decorators';

const requireAuth = (req: Request, res: Response, next: NextFunction): void => {
	if (req.session?.loggedIn) {
		next();
		return;
	}

	res.status(403);
	res.send('Not Permitted');
};

@controller('/auth')
export class ProtectedRouteController {
	@get('/protected')
	@use(requireAuth)
	getProtectedRoute(req: Request, res: Response) {
		res.send('Welcome to protected route.');
	}
}
