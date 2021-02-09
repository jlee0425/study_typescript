import { AppRouter } from './../AppRouter';
import { Router, Request, Response } from 'express';

const rootRouter = AppRouter.getInstance();

rootRouter.get('/', (req: Request, res: Response) => {
	if (req.session?.loggedIn) {
		res.send(`
      <div>
        <div> You are logged in</div>
        <a href="/logout">Log out</a>
      </div>
    `);
	} else {
		res.send(`
    <div>
    <div> You are not logged in</div>
    <a href="/login">Log In</a>
    </div>
    `);
	}
});

export { rootRouter };
