import { Request, Response, Router } from 'express';

interface RequestWithBody extends Request {
	body: { [key: string]: string | undefined };
}

const loginRouter = Router();

loginRouter.get('/login', (req: Request, res: Response) => {
	res.send(`
		<form method='post'>
			<div>
				<label>Email</label>
				<input name="email" />
			</div>
			<div>
				<label>Password</label>
				<input name="password" type="password" />
			</div>
			<button>Submit</button>
		</form>
	`);
});

loginRouter.post('/login', (req: RequestWithBody, res: Response) => {
	const { email, password } = req.body;

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

export { loginRouter };

/**
 * Metadata
 *
 * Proposed feature to be added to JS(TS)
 * Snippets of info that can be tied to a method, property, or class definition
 * Can be used to super custom stuff
 * TS will (optionally) provide type information as metadata
 * Read and write using the `reflect-metadata` package
 */
