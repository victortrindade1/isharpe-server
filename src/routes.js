import { Router } from 'express';

// import UserController from './app/controllers/UserController';

const routes = new Router();

routes.get('/', (req, res) => res.json({ message: 'hello world!' }));

export default routes;
