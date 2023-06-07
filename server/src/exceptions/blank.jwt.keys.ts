import { logger } from "../core/logger";
import { BaseException } from "./base.exception";

export class BlankJwtPrivateKeyException extends BaseException {
  constructor(message: string) {
    super(message);
    logger.error(message);
  }
}
export class BlankJwtPublicKeyException extends BaseException {
  constructor(message: string) {
    super(message);
    logger.error(message);
  }
}
