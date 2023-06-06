import { logger } from "../core/logger";
import { BaseException } from "./base.exception";

export class PortException extends BaseException {
  constructor(message: string) {
    super(message);
    logger.error(message);
  }
}
