import { protectedRoute } from './protectedRoute';
import { logoutRouter } from './logoutRoute';
import { Router } from 'express';
import { loginRouter } from './loginRoute';
import { rootRouter } from './rootRoute';

export const router = Router();

router.use(loginRouter);
router.use(logoutRouter);
router.use(protectedRoute);
router.use(rootRouter);
