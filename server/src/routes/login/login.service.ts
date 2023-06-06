import { create } from "domain";
import { createToken, verifyToken } from "../../core/jwt/token";
import { UserModel } from "../../model/user.model";
import { LoginUser } from "../../utils/interface/modified.user.type";
import { IUser } from "../../utils/interface/user.interface";

// const loginController = new LoginController();

export const loginUser = async function (email: string, password: string) {
  try {
    const login = await UserModel.findOne({ email });

    if (!login) {
      //add exception
      throw new Error("No user found with email");
    }

    if (await login.validatePassword(password)) {
      return createToken(login);
    } else {
      //add exception
      throw new Error("Mismaatch!");
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};
