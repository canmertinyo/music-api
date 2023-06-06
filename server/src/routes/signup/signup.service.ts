import { UserModel } from "../../model/user.model";
import { ModifiedUser } from "../../utils/interface/modified.user.type";
import { createToken } from "../../core/jwt/token";

// const signupController = new SignupController();

export const signUser = async function (user: ModifiedUser) {
  try {
    const createdUser = {
      ...user,
      token: createToken(user),
    };
    return await UserModel.create(createdUser);
  } catch (error: any) {
    throw new Error(error.message);
  }
};
