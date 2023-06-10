import { Request, Response } from "express";
import LoginService from "./login.service";
import { HttpStatusCode } from "../../utils/status_codes/api.response";
import { Container, Inject } from "../../core/decorators/dependency.injection";

const container = new Container();
container.register("LoginService", new LoginService());
const loginService = container.resolve<LoginService>("LoginService");

@Inject()
export class LoginController {
  constructor() {
    this.login;
  }
  public login() {
    return async (req: Request, res: Response) => {
      try {
        const { email, password } = req.body;

        const currentUser = await loginService.loginUser(email, password);

        return res.status(HttpStatusCode.ACCEPTED).json({
          status: "Success",
          userInfo: currentUser,
        });
      } catch (error: any) {
        throw new Error(error.message);
      }
    };
  }
}
