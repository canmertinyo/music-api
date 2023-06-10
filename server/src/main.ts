import { DatabaseConfiguration } from "./database/db";
import config from "./config/config";
import { ExpressServer } from "./app";
import { validateMainBeforeExecute } from "./utils/validate.main";

class Server {
  private readonly db = new DatabaseConfiguration(config.db_uri);
  private readonly expServer = new ExpressServer(config.port);

  public execute() {
    try {
      validateMainBeforeExecute();
      this.db.connect();
      this.expServer.start();
    } catch (error) {
      throw new Error(`An error occurred while starting the server ${error}`);
    }
  }
}

const server = new Server();
server.execute();
