import { Router } from 'express';
import spartanControllers from '../controllers/spartan';

const routes = Router();

routes.post('/create', spartanControllers.create);

export default routes;