import mongoose from "mongoose";
import { logger } from "../core/logger";

export class DatabaseConfiguration {
  constructor(private readonly dbUri: string) {}

  private async databaseConnection() {
    try {
      const connection = await mongoose.connect(this.dbUri);
      logger.log("info", "Successfully connected to the database", {
        hostName: connection.connections[0].host,
        database_port: connection.connections[0].port,
        name: connection.connections[0].name,
        keepAlive: connection.connections[0].pass,
      });
    } catch (error) {
      logger.error("error", error);
      throw new Error("Failed to connect to the database");
    }
  }

  public connect() {
    this.databaseConnection();
  }
}
