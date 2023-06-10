import { IUser } from "./user.interface";

export type RegisterUser = Pick<
  IUser,
  "username" | "password" | "email" | "_id" | "status"
>;

export type LoginUser = Pick<
  IUser,
  "username" | "password" | "_id" | "status" | "email"
>;
