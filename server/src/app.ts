import express, { Application } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import { logger } from './core/logger';
import { expressRouter } from './routes/index';
import { generateJwtSecret } from './utils/jwt.secret.generator';

export class ExpressServer {
  public app: Application;
  public path = '/api/v1/';

  constructor(private readonly port: number) {
    this.app = express();
    this.createServer();
    this.routePaths();
    // this.sideFunctions()
  }

  private createServer(): void {
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

  private routePaths(): void {
    this.app.use(this.path, expressRouter);
  }

  //HOW TO USE :
  //If you intend to use this function, please call it inside the constructor.
  private sideFunctions() {
    generateJwtSecret(256); //This function automatically generates a JWT encrypted code for enhanced security.
  }

  public start() {
    this.app.listen(this.port, async () => {
      console.log(`Server is started on port ${this.port}`);
      logger.log('info', 'LOG: Server is started');
    });
  }
}
