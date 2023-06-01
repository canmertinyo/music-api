import express, { Express, Application, Router } from 'express';
import { Controller } from './utils/interface/Controller';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import config from './config/config';
import { logger } from './core/logger';
import routes from './routes/index';

export class ExpressServer {
  app: Application;
  constructor(private readonly port: number) {
    this.app = express();
    this.createServer();
    this.routePaths();
    this.listen();
  }

  public createServer(): void {
    this.app.use(express.json({ limit: '10mb' }));
    this.app.use(
      express.urlencoded({
        extended: true,
        limit: '10mb',
        parameterLimit: 50000,
      })
    );
    this.app.use(helmet());
    this.app.use(cors());
    this.app.use(compression());
  }

  public routePaths(): void {
    this.app.use('/api/v1', routes);
  }

  public listen() {
    return this.app.listen(config.port, () => {
      console.log(`Server is started on port ${this.port}`);
      logger.log('info', `LOG : Server is started`);
    });
  }
}
