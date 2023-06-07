import { logger } from "../core/logger";
import { BaseException } from "./base.exception";

export class UserNotFoundException extends BaseException {
  constructor(message: string) {
    super(message);
    logger.error(message);
  }
}
export class InvalidPasswordException extends BaseException {
  constructor(message: string) {
    super(message);
    logger.error(message);
  }
}

export class LoginException extends BaseException {
  constructor(message: string) {
    super(message);
    logger.error(message);
  }
}
