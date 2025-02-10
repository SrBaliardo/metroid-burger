import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import authMiddleware from './app/middlewares/auth';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import ProductsController from './app/controllers/ProductController';
import CategoryController from './app/controllers/CategoryController';
import OrderController from './app/controllers/OrderController';
import CreatePaymentIntentController from './app/controllers/stripe/CreatePaymentIntentController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', upload.single('file'), UserController.store);
routes.get('/users', UserController.index);
routes.get('/users/:userId', UserController.show);
routes.put('/users/:id', upload.single('file'), UserController.update);
routes.delete('/users/:id', UserController.delete);

routes.post('/session', SessionController.store);
routes.post('/create-payment-intent', CreatePaymentIntentController.store);

routes.use(authMiddleware);
routes.post('/products', upload.single('file'), ProductsController.store);
routes.get('/products', ProductsController.index);
routes.put('/products/:id', upload.single('file'), ProductsController.update);

routes.post('/categories', upload.single('file'), CategoryController.store);
routes.get('/categories', CategoryController.index);
routes.put('/categories/:id', upload.single('file'), CategoryController.update);

routes.post('/orders', OrderController.store);
routes.get('/orders', OrderController.index);
routes.put('/orders/:id', OrderController.update);

export default routes;
