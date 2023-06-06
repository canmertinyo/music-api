import { DatabaseConfiguration } from "./database/db";
import config from "./config/config";
import { ExpressServer } from "./app";
import {
  NodeEnvException,
  BlankJwtSecretException,
  PortException,
  BlankDbUriException,
} from "./exceptions/";

class Server {
  private readonly db = new DatabaseConfiguration(config.db_uri);
  private readonly expServer = new ExpressServer(config.port);
  constructor() {}

  private validateBeforeExecute() {
    // console.log(config.JWT_PRIVATE_KEY);
    let errors = [];
    if (config.NODE_ENV !== "development") {
      errors.push(
        new NodeEnvException(
          `You can't server because you are in ${config.NODE_ENV} mode! please switch to 'development' mode if you want to change something`
        )
      );
    }
    if (!config.port) {
      errors.push(
        new PortException(
          `Please define your port before launching the app! ${config.port}`
        )
      );
    }
    if (!config.JWT_SECRET) {
      errors.push(
        new BlankJwtSecretException(
          `Jwt secret code can't be empty please define it before launch the app!`
        )
      );
    }

    if (!config.db_uri) {
      errors.push(
        new BlankDbUriException(
          `Db uri can't be blank or undefined. Please add your db uri before launching the app!`
        )
      );
    }

    if (errors.length > 0) {
      throw errors;
    }
  }

  public execute() {
    try {
      this.validateBeforeExecute();
      this.db.connect();
      this.expServer.start();
    } catch (error) {
      throw new Error(`An error occurred while starting the server ${error}`);
    }
  }
}

const server = new Server();
server.execute();
