import { AppRouter } from './../AppRouter';
import { Router } from 'express';

const logoutRouter = AppRouter.getInstance();

logoutRouter.get('/logout', (req, res) => {
	req.session = undefined;
	res.redirect('/');
});

export { logoutRouter };
