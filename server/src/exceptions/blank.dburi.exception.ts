import { logger } from "../core/logger";
import { BaseException } from "./base.exception";

export class BlankDbUriException extends BaseException {
  constructor(message: string) {
    super(message);
    logger.error(message);
  }
}
