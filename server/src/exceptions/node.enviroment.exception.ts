import { logger } from "../core/logger";
import { BaseException } from "./base.exception";

export class NodeEnvException extends BaseException {
  constructor(message: string) {
    super(message);
    logger.error(message);
  }
}
