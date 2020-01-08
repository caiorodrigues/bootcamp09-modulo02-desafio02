import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
// import UserController from './app/controllers/UserController';
import StudentController from './app/controllers/StudentController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/students', StudentController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

export default routes;
