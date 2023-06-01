import { DatabaseConfiguration } from './database/db';
import config from './config/config';
import { ExpressServer } from './app';

class ExecuteServer {
  db = new DatabaseConfiguration(config.db_uri);
  expServer = new ExpressServer(config.port, []);
  constructor() {
    this.execute();
  }

  public execute() {
    this.db;
    this.expServer;
  }
}

const server = new ExecuteServer();
server;
