import { UserModel } from "../../model/user.model";
import { RegisterUser } from "../../utils/interface/modified.user.type";
import { createToken } from "../../core/jwt/token";

// const signupController = new SignupController();

export const signUser = async function (user: RegisterUser) {
  try {
    const createdUser = {
      ...user,
      token: createToken(user),
    };
    await UserModel.create(createdUser);
    return createdUser;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
