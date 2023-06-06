import { DatabaseConfiguration } from "./database/db";
import config from "./config/config";
import { ExpressServer } from "./app";
import {
  NodeEnvException,
  BlankJwtSecretException,
  PortException,
  BlankDbUriException,
} from "./exceptions/";

class ExecuteServer {
  db = new DatabaseConfiguration(config.db_uri);
  expServer = new ExpressServer(config.port);
  constructor() {
    this.validateBeforeExecute();
    this.execute();
  }

  public validateBeforeExecute() {
    if (config.NODE_ENV !== "development") {
      throw new NodeEnvException(
        `You can't server because you are in ${config.NODE_ENV} mode! please switch to 'development' mode if you want to change something`
      );
    }
    if (!config.port) {
      throw new PortException(
        `Please define your port before launching the app! ${config.port}`
      );
    }
    if (!config.JWT_SECRET) {
      throw new BlankJwtSecretException(
        `Jwt secret code can't be empty please define it before launch the app!`
      );
    }

    if (!config.db_uri) {
      throw new BlankDbUriException(
        `Db uri can't be blank or undefined. Please add your db uri before launching the app!`
      );
    }
  }

  public execute() {
    this.db;
    this.expServer;
  }
}

const server = new ExecuteServer();
server;
