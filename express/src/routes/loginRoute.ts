import { Request, Response, Router } from 'express';
import { AppRouter } from '../AppRouter';

interface RequestWithBody extends Request {
	body: { [key: string]: string | undefined };
}

const router = AppRouter.getInstance();

router.post('/login', (req: RequestWithBody, res: Response) => {
	const { email, password } = req.body;
	console.log(email, password);
	if (
		email &&
		password &&
		email === 'email@mail.com' &&
		password === 'password'
	) {
		req.session = { loggedIn: true };
		res.redirect('/');
	} else {
		res.send('Invalid email or password');
	}
});

/**
 * Metadata
 *
 * Proposed feature to be added to JS(TS)
 * Snippets of info that can be tied to a method, property, or class definition
 * Can be used to super custom stuff
 * TS will (optionally) provide type information as metadata
 * Read and write using the `reflect-metadata` package
 */
