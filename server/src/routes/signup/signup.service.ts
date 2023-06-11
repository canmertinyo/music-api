import { UserModel } from "../../model/user.model";
import { RegisterUser } from "../../utils/interface";
import { createToken } from "../../core/jwt/token";

export const createUserAndToken = async function (user: RegisterUser) {
  try {
    const createdUser = { ...user, token: createToken(user) };
    await UserModel.create(createdUser);
    return createdUser;
  } catch (error: any) {
    throw error;
  }
};
