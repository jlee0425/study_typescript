import { Router } from 'express';

export const logoutRouter = Router();

logoutRouter.get('/logout', (req, res) => {
	req.session = undefined;
	res.redirect('/');
});
