import { createToken } from "../../core/jwt/token";
import { UserModel } from "../../model/user.model";
import {
  InvalidPasswordException,
  UserNotFoundException,
  LoginException,
} from "../../exceptions";
import { Inject } from "../../core/decorators/dependency.injection";

@Inject()
export default class LoginService {
  public async loginUser(email: string, password: string): Promise<string> {
    try {
      const login = await UserModel.findOne({ email });

      if (!login) throw new UserNotFoundException("No user found with email");

      if ((await login.validatePassword(password)) !== true)
        throw new InvalidPasswordException("Passwords are not matching!");
      login.status = true;
      return createToken(login);
    } catch (error: any) {
      throw new LoginException(error.message);
    }
  }
}
