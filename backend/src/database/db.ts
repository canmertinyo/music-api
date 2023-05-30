import mongoose from 'mongoose';
import { options } from './dbOptions';
import { logger } from '../utils/logger';

export class DatabaseConfiguration {
  constructor(private readonly dbUri: string, public mongooseOptions?: object) {
    this.mongooseOptions = options;
    this.databaseConnection();
  }
  public async databaseConnection() {
    return mongoose
      .connect(this.dbUri, this.mongooseOptions)
      .then(() => {
        console.log('Successfully connected!');
        logger.log('info', 'Succesfully connected to the database');
      })
      .catch((e: any) => {
        console.log('Something went wrong', e);
        logger.error('error', e.message);
      });
  }
}
