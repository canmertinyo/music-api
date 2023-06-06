export class BaseException extends Error {
  constructor(public message: string) {
    super(message);
  }
}
