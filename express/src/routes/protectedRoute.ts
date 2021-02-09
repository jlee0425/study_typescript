import { AppRouter } from './../AppRouter';
import { NextFunction, Request, Response, Router } from 'express';

const requireAuth = (req: Request, res: Response, next: NextFunction): void => {
	if (req.session?.loggedIn) {
		next();
		return;
	}

	res.status(403);
	res.send('Not Permitted');
};

const protectedRoute = AppRouter.getInstance();

protectedRoute.get('/protected', requireAuth, (req: Request, res: Response) => {
	res.send('Welcome to protected route.');
});

export { protectedRoute };
