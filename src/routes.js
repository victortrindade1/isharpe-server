import { Router } from 'express';

import authMiddleware from './app/middlewares/auth';

// import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

// routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

// routes.put('/users', UserController.update);

routes.get('/', (req, res) => res.json({ message: 'hello world!' }));

export default routes;
