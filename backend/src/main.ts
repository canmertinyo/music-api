import { DatabaseConfiguration } from './database/db';
import { config } from './config/config';

class ExecuteServer {
  db = new DatabaseConfiguration(config.dbUri);
  constructor() {
    this.execute();
  }

  public execute() {
    this.db;
  }
}

const server = new ExecuteServer();
server;
