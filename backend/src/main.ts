import { DatabaseConfiguration } from './database/db';
import config from './config/config';
import { ExpressServer } from './app';

class ExecuteServer {
  db = new DatabaseConfiguration(config.db_uri);
  constructor() {
    this.execute();
  }

  public execute() {
    this.db;
  }
}

const server = new ExecuteServer();
const expressServer = new ExpressServer(config.port);
server;
expressServer;
