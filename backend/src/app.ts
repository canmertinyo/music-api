import express, { Express, Application } from 'express';
import { Controller } from './utils/interface/Controller';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import config from './config/config';
import { logger } from './utils/logger';

export class ExpressServer {
  app: Application;
  constructor(private readonly port: number, controller?: Controller[]) {
    this.app = express();
    this.listen();
  }

  public createServer(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(helmet());
    this.app.use(cors());
    this.app.use(compression());
  }

  public controllers(controllers: Controller[]) {
    controllers.forEach((controller: Controller) => {
      return this.app.use('/api', controller.router);
    });
  }

  public listen() {
    return this.app.listen(config.port, () => {
      console.log(`Server is started on port ${this.port}`);
      logger.log('log', `LOG : Server is started`);
    });
  }
}
