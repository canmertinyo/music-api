//Daha sonra düzelticem

// import { Response } from 'express';
// import {
//   BadRequestResponse,
//   FailureMessageResponse,
//   InternalErrorResponse,
//   NotFoundResponse,
//   SuccessMessageResponse,
// } from './api.response';

// export enum ErrorType {
//   BAD_TOKEN = 'BadTokenError',
//   TOKEN_EXPIRED = 'TokenExpiredError',
//   UNAUTHORIZED = 'AuthFailureError',
//   ACCESS_TOKEN = 'AccessTokenError',
//   INTERNAL = 'InternalError',
//   NOT_FOUND = 'NotFoundError',
//   NO_ENTRY = 'NoEntryError',
//   NO_DATA = 'NoDataError',
//   BAD_REQUEST = 'BadRequestError',
//   FORBIDDEN = 'Forbiddenn Error',
// }

// export abstract class ApiError extends Error {
//   constructor(public type: ErrorType, public message: string = 'error') {
//     super(type);
//   }

//   public static handle(err: ApiError, res: Response): Response {
//     switch (err.type) {
//       case ErrorType.BAD_TOKEN:
//       case ErrorType.TOKEN_EXPIRED:
//       case ErrorType.UNAUTHORIZED:
//         return new AuthFailureError(err.message).send(res);
//     }
//   }
// }

// export class AuthFailureError extends ApiError {
//   constructor(message = 'Invalid Credentials') {
//     super(ErrorType.UNAUTHORIZED, message);
//   }
// }
