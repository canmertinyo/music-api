import { IUser } from "../../utils/interface";

declare global {
  namespace Express {
    export interface Request {
      user: IUser;
    }
  }
}
