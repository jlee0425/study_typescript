import { Request, Response } from 'express';
import { controller, get } from './decorators';

@controller('')
export class RootController {
	@get('/')
	getRoot(req: Request, res: Response): void {
		if (req.session?.loggedIn) {
			res.send(`
        <div>
          <div> You are logged in</div>
          <a href="/auth/logout">Log out</a>
        </div>
      `);
		} else {
			res.send(`
        <div>
        <div> You are not logged in</div>
        <a href="/auth/login">Log In</a>
        </div>
      `);
		}
	}
}
