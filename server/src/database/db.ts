import mongoose from "mongoose";
import { logger } from "../core/logger";

export class DatabaseConfiguration {
  constructor(private readonly dbUri: string) {}
  public async databaseConnection() {
    return mongoose
      .connect(this.dbUri)
      .then((e) => {
        console.log("Connected to database!");
        logger.log("info", "Succesfully connected to the database", {
          hostName: e.connections[0].host,
          database_port: e.connections[0].port,
          name: e.connections[0].name,
          keepAlive: e.connections[0].pass,
        });
      })
      .catch((e: any) => {
        console.log("Failed to connect database!");
        logger.error("error", e);
      });
  }

  public connect() {
    try {
      this.databaseConnection();
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
