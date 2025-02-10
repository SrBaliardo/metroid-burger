import express from 'express';
import routes from './routes';
import './database';
import { resolve } from 'node:path';
import cors from 'cors';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(
      '/product-file',
      express.static(resolve(__dirname, '..', 'uploads')),
    );
    this.app.use(
      '/category-file',
      express.static(resolve(__dirname, '..', 'uploads')),
    );
    this.app.use(
      '/user-file',
      express.static(resolve(__dirname, '..', 'uploads')),
    );

    this.app.use(cors());
  }

  routes() {
    this.app.use(routes);
  }
}

export default new App().app;
