import { DatabaseConfiguration } from "./database/db";
import config from "./config/config";
import { ExpressServer } from "./app";
import { validateMainBeforeExecute } from "./utils/validate.main";

class Server {
  constructor() {
    try {
      const db = new DatabaseConfiguration(config.db_uri);
      const expServer = new ExpressServer(config.port);
      validateMainBeforeExecute();

      db.connect();
      expServer.start();
    } catch (error) {
      throw new Error(`An error occurred while starting the server: ${error}`);
    }
  }
}

const server = new Server();
