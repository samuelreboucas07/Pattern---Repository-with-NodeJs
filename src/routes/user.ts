import { Router } from 'express';
import userControllers from '../controllers/users';

const routes = Router();

routes.get('/getAll', userControllers.getAll);
routes.get('/getById/:id', userControllers.getById);
routes.post('/create', userControllers.create);

export default routes;