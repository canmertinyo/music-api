import { IUser } from "./user.interface";

export type ModifiedUser = Pick<
  IUser,
  "username" | "password" | "email" | "_id"
>;
