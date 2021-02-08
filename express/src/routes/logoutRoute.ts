import { Router } from 'express';

const logoutRouter = Router();

logoutRouter.get('/logout', (req, res) => {
	req.session = undefined;
	res.redirect('/');
});

export { logoutRouter };
