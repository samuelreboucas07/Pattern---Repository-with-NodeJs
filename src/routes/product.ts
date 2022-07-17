import { Router } from 'express';
import productControllers from '../controllers/product';

const routes = Router();

routes.post('/create', productControllers.create);
routes.put('/update/:id', productControllers.update);
routes.delete('/delete/:id', productControllers.remove);

export default routes;