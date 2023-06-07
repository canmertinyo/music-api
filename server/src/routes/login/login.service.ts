import { createToken } from "../../core/jwt/token";
import { UserModel } from "../../model/user.model";
import {
  InvalidPasswordException,
  UserNotFoundException,
  LoginException,
} from "../../exceptions";

// const loginController = new LoginController();
// di ile class yapısına geçilecek.
export const loginUser = async function (
  email: string,
  password: string
): Promise<string> {
  try {
    const login = await UserModel.findOne({ email });

    if (!login) throw new UserNotFoundException("No user found with email");

    if (!login.validatePassword(password))
      throw new InvalidPasswordException("Passwords is not matching!");

    return createToken(login);
  } catch (error: any) {
    throw new LoginException(error.message);
  }
};
